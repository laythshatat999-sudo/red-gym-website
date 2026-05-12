// Centralized image paths — every entry must resolve to a file that exists
// on disk under /public/images. If source-assets filenames change, update
// the matching string here.
//
// NOTE: Filenames preserve the actual on-disk casing/spacing (e.g. "red  ggffdd-Cover"
// has two spaces, "IMG_1384 copy" has a space before "copy"). Next.js Image and
// browser <img src> handle URL-encoding automatically, but if you ever construct
// these URLs manually pass them through encodeURI().
//
// ⚠️ LAYTH — VISUAL VERIFICATION NEEDED ⚠️
// The Gemini AI-generated → discipline mapping below is a best-guess based on
// alphabetical order of the hash filenames (the only deterministic ordering
// available). Open public/images/disciplines/*.webp in a file viewer and
// confirm each visual matches the discipline key. Swap filenames here if any
// mapping is wrong. Same applies to the FACILITY entries — IMG_2609/IMG_2613/
// DSC01382/2024-01-01 (1) all need a visual eyeball check.

export const HERO_IMAGES = {
  desktop: '/images/hero/red  ggffdd-Cover.webp',
  desktopMobile: '/images/hero/red  ggffdd-Cover-mobile.webp',
} as const;

export const HERO_VIDEO = {
  mp4: '/videos/hero/hero-loop-mobile.mp4',
  webm: '/videos/hero/hero-loop-mobile.webm',
  poster: '/videos/posters/hero-poster.webp',
} as const;

// ⚠️ Verify which IMG_/DSC_ photo is which facility zone.
// Current best-guesses are by file size (combat & strength tend to be photographed
// in wider angles → larger files; studio shots are typically more contained).
export const FACILITY = {
  combatZone: {
    desktop: '/images/facility/IMG_2613.webp',          // ⚠️ verify: heavy bags / combat area
    mobile: '/images/facility/IMG_2613-mobile.webp',
  },
  strengthZone: {
    desktop: '/images/facility/IMG_2609.webp',          // ⚠️ verify: hammer-strength machines
    mobile: '/images/facility/IMG_2609-mobile.webp',
  },
  studioPink: {
    desktop: '/images/facility/DSC01382.webp',          // ⚠️ verify: pink-neon studio
    mobile: '/images/facility/DSC01382-mobile.webp',
  },
  // 4th facility photo — `2024-01-01 (1).webp` — exists but isn't slotted yet.
  // Add an entry here if you want to surface it (e.g. cardio zone, lounge, etc.).
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
  muayThai: '/images/classes/IMG_1384 copy.webp',
} as const;

export const LOGO = {
  full: '/images/og/logo-full-1200.png',
  fullSmall: '/images/og/logo-full-600.png',
  icon: '/images/og/logo-icon-256.png',
  iconSmall: '/images/og/logo-icon-96.png',
  iconNav: '/images/og/logo-icon-48.png',
  ogImage: '/images/og/og-image.jpg',
} as const;

// ⚠️ Map by visual content. Best-guess assignment below is by alphabetical hash order.
// Each discipline needs one Gemini file; muayThai reuses the real CLASSES photo.
// To verify: open each file and confirm the visual matches the comment.
export const DISCIPLINES = {
  boxing:     '/images/disciplines/Gemini_Generated_Image_4akgga4akgga4akg.webp',  // ⚠️ expect: shirtless man on heavy bag
  mma:        '/images/disciplines/Gemini_Generated_Image_bfh8rkbfh8rkbfh8.webp',  // ⚠️ expect: ground grappling with Burj Khalifa
  bjj:        '/images/disciplines/Gemini_Generated_Image_cdvli1cdvli1cdvl.webp',  // ⚠️ expect: white gis BJJ training
  muayThai:   '/images/classes/IMG_1384 copy.webp',                                 // real Muay Thai photo (reused from CLASSES)
  kickboxing: '/images/disciplines/Gemini_Generated_Image_l639hjl639hjl639.webp',  // ⚠️ expect: woman with braids, high kick
  crossfit:   '/images/disciplines/Gemini_Generated_Image_nzyfjfnzyfjfnzyf.webp',  // ⚠️ expect: woman with kettlebell on red runway
  yoga:       '/images/disciplines/Gemini_Generated_Image_ridxmpridxmpridx.webp',  // ⚠️ expect: woman in purple yoga set
  zumba:      '/images/disciplines/Gemini_Generated_Image_sy6q1ysy6q1ysy6q.webp',  // ⚠️ expect: teal-outfit instructor leading class
  spinning:   '/images/disciplines/Gemini_Generated_Image_x5pr38x5pr38x5pr.webp',  // ⚠️ expect: dark red atmospheric spin class
  parking:    '/images/disciplines/parking.webp',                                   // premium parking garage with black Range Rover, red+white neon
  offers:     '/images/disciplines/offers.webp',                                    // warm reception desk scene, receptionist handing membership card
} as const;
