'use client';

import { useEffect, useState } from 'react';

// iOS Safari refuses to honor `autoplay` on first-paint videos for origins it
// hasn't seen the user interact with — even when muted + playsinline + correctly
// encoded. The fix used here: don't render a <video> element until the user has
// performed any real gesture (touch, scroll, pointer, keypress). iOS counts
// gesture-initiated <video> mounts as user-driven and lets autoplay proceed
// without showing the play-button overlay.
//
// Persisted via sessionStorage so subsequent page navigations within the same
// tab render videos immediately on mount (the user is already engaged).
//
// One module-scoped singleton so the listeners + state are shared across
// every component that consumes the hook on the same page render.

const STORAGE_KEY = 'rg-engaged';

let value = false;
let initialized = false;
const subscribers = new Set<(v: boolean) => void>();

function notify() {
  for (const fn of subscribers) fn(value);
}

function initOnce() {
  if (initialized || typeof window === 'undefined') return;
  initialized = true;

  // Restore engagement state from this browsing session.
  try {
    if (window.sessionStorage.getItem(STORAGE_KEY) === '1') {
      value = true;
      return;
    }
  } catch {
    // sessionStorage can throw in private mode on some browsers; ignore.
  }

  const events = ['touchstart', 'scroll', 'pointerdown', 'mousedown', 'keydown'] as const;
  const opts: AddEventListenerOptions = { once: true, passive: true, capture: true };

  const onEngage = () => {
    value = true;
    try {
      window.sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // ignore
    }
    notify();
    // Remove the others — `once: true` self-cleans the firing listener but
    // not the siblings on different event types.
    for (const e of events) {
      window.removeEventListener(e, onEngage, opts as EventListenerOptions);
    }
  };

  for (const e of events) {
    window.addEventListener(e, onEngage, opts);
  }
}

export function useEngagement(): boolean {
  // SSR safety: always start `false` on first render to match server output
  // (server has no `window`, so always false). useEffect upgrades us after
  // hydration if sessionStorage already records engagement.
  const [engaged, setEngaged] = useState<boolean>(false);

  useEffect(() => {
    initOnce();
    if (value) {
      setEngaged(true);
      return;
    }
    subscribers.add(setEngaged);
    return () => {
      subscribers.delete(setEngaged);
    };
  }, []);

  return engaged;
}
