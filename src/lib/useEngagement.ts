'use client';

import { useEffect, useState } from 'react';

// Two-layered autoplay strategy for iOS Safari:
//
// 1. PRIMARY (works for ~all desktop + iOS-with-engagement-budget):
//    400ms after hydration, the auto-engagement timer flips `engaged` to true,
//    components mount the <video autoPlay>, browser starts playback.
//    The hero poster Image stays on top until the video's `playing` event
//    fires — only then is the poster unmounted, giving a clean swap with no
//    visible "blocked autoplay" overlay.
//
// 2. FALLBACK (iOS-strict / cold engagement budget):
//    If iOS refuses the timer-triggered autoplay, the video sits silently
//    behind the poster. Persistent gesture listeners (touchstart, scroll,
//    pointerdown, mousedown, keydown) call video.play() from inside the
//    actual gesture handler — iOS allows this — and `playing` fires, poster
//    unmounts.
//
// Persisted via sessionStorage so subsequent navigations within the same tab
// render the video immediately on mount (skip the 400ms wait + retry logic).

const STORAGE_KEY = 'rg-engaged';
const AUTO_DELAY_MS = 400;

let engagedValue = false;
let initialized = false;
const engagementSubs = new Set<(v: boolean) => void>();
const gestureSubs = new Set<() => void>();

function notifyEngagement() {
  for (const fn of engagementSubs) fn(engagedValue);
}

function setEngagedValue(v: boolean) {
  if (engagedValue === v) return;
  engagedValue = v;
  if (v) {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // ignore — private mode etc.
    }
  }
  notifyEngagement();
}

function fireGesture() {
  // Fire every play-retry subscriber inside this synchronous handler so iOS
  // still considers the play() call user-gesture-bound.
  for (const fn of gestureSubs) fn();
  // Also unlock engagement so any component that hasn't mounted yet renders
  // its <video> directly on mount.
  setEngagedValue(true);
}

function initOnce() {
  if (initialized || typeof window === 'undefined') return;
  initialized = true;

  // Restore from same-tab session — if the user has interacted in this tab
  // before, we trust the origin and skip the timer-and-retry dance.
  try {
    if (window.sessionStorage.getItem(STORAGE_KEY) === '1') {
      engagedValue = true;
    }
  } catch {
    // ignore
  }

  // Persistent listeners (no once:true — we need every gesture to be able to
  // retry play() in case iOS rejected the previous attempt).
  const events = ['touchstart', 'scroll', 'pointerdown', 'mousedown', 'keydown'] as const;
  const opts: AddEventListenerOptions = { passive: true, capture: true };
  for (const e of events) {
    window.addEventListener(e, fireGesture, opts);
  }
}

/**
 * Returns whether videos should be rendered. Becomes true via either:
 *   (a) 400ms auto-engagement timer (most paths)
 *   (b) first user gesture (immediate)
 *   (c) sessionStorage flag from a previous interaction in this tab
 *
 * SSR-safe: always returns false on first render to match server output.
 */
export function useEngagement(): boolean {
  const [engaged, setEngaged] = useState<boolean>(false);

  useEffect(() => {
    initOnce();

    // If module-level value is already true (e.g. sessionStorage hit,
    // or a sibling component already auto-engaged this page render),
    // adopt it immediately.
    if (engagedValue) {
      setEngaged(true);
      return;
    }

    engagementSubs.add(setEngaged);

    // Primary trigger: auto-engagement timer.
    const timer = window.setTimeout(() => {
      setEngagedValue(true);
    }, AUTO_DELAY_MS);

    return () => {
      engagementSubs.delete(setEngaged);
      window.clearTimeout(timer);
    };
  }, []);

  return engaged;
}

/**
 * Subscribe a video ref to user-gesture playback retries.
 *
 * On every page gesture, this hook calls videoRef.current.play() from inside
 * the synchronous user-gesture handler. iOS Safari permits play() in that
 * context even when it had previously refused autoplay on the same element.
 * Once play() resolves successfully, the subscriber stops trying (cheap idle).
 *
 * Pair with onPlaying on the <video> to hide the poster overlay only after
 * actual playback starts.
 */
export function useGesturePlay(videoRef: React.RefObject<HTMLVideoElement | null>) {
  useEffect(() => {
    initOnce();
    let done = false;

    const callback = () => {
      if (done) return;
      const v = videoRef.current;
      if (!v) return;
      const p = v.play();
      if (p && typeof p.then === 'function') {
        p.then(
          () => {
            done = true;
          },
          () => {
            // play() rejected (probably not buffered yet or autoplay still
            // blocked). Keep listening — next gesture retries.
          }
        );
      }
    };

    gestureSubs.add(callback);
    return () => {
      gestureSubs.delete(callback);
    };
  }, [videoRef]);
}
