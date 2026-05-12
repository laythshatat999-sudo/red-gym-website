// Centralized image paths for components to import.

export const HERO_IMAGES = {
  desktop: '/images/hero/hero-strength-4k.webp',
  desktopMobile: '/images/hero/hero-strength-4k-mobile.webp',
} as const;

export const HERO_VIDEO = {
  mp4: '/videos/hero/hero-loop-mobile.mp4',
  webm: '/videos/hero/hero-loop-mobile.webm',
  poster: '/videos/posters/hero-poster.webp',
} as const;

export const FACILITY = {
  combatZone: {
    desktop: '/images/facility/combat-zone-heavy-bags.webp',
    mobile: '/images/facility/combat-zone-heavy-bags-mobile.webp',
  },
  strengthZone: {
    desktop: '/images/facility/strength-zone-hammer-machines.webp',
    mobile: '/images/facility/strength-zone-hammer-machines-mobile.webp',
  },
  studioPink: {
    desktop: '/images/facility/studio-pink-neon.webp',
    mobile: '/images/facility/studio-pink-neon-mobile.webp',
  },
} as const;

export const SECTION_VIDEOS = {
  strength: '/videos/sections/inside-strength.mp4',
  combat: '/videos/sections/inside-combat.mp4',
  studio: '/videos/sections/inside-studio.mp4',
  studioRental: '/videos/sections/studio-rental.mp4',
} as const;

export const VIDEO_POSTERS = {
  hero: '/videos/posters/hero-poster.webp',
  studioRental: '/videos/posters/studio-rental-poster.webp',
} as const;

export const CLASSES = {
  muayThai: '/images/classes/muay-thai-class-action.webp',
} as const;

// AI-generated discipline images (output to /images/disciplines/)
export const DISCIPLINES = {
  boxing: '/images/disciplines/boxing.webp',
  mma: '/images/disciplines/mma.webp',
  bjj: '/images/disciplines/bjj.webp',
  muayThai: '/images/classes/muay-thai-class-action.webp',
  kickboxing: '/images/disciplines/kickboxing.webp',
  crossfit: '/images/disciplines/crossfit.webp',
  yoga: '/images/disciplines/yoga.webp',
  zumba: '/images/disciplines/zumba.webp',
  spinning: '/images/disciplines/spinning.webp',
} as const;
