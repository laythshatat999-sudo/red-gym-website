import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';

// Source file names mapped to actual files in source-assets/videos/
const SOURCE_HERO = 'source-assets/videos/hero/hero-source-46s.mp4';
const SOURCE_STUDIO = 'source-assets/videos/studio-rental/red rent.mp4';

function ensureDir(dir) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

function run(cmd) {
  console.log(`  $ ${cmd.replace(/\s+/g, ' ').trim()}`);
  execSync(cmd, { stdio: 'pipe' });
}

console.log('🎬 Processing videos...\n');

ensureDir('public/videos/hero');
ensureDir('public/videos/sections');
ensureDir('public/videos/posters');

// === HERO VIDEO: 15s source, full duration used for loop ===
if (existsSync(SOURCE_HERO)) {
  console.log('📹 Hero loop (mobile, 15s, optimized)...');
  run(`ffmpeg -y -i "${SOURCE_HERO}" -vcodec libx264 -crf 30 -preset slow -vf "scale=540:960:flags=lanczos" -an -movflags +faststart -pix_fmt yuv420p "public/videos/hero/hero-loop-mobile.mp4"`);

  console.log('📹 Hero loop (WebM fallback)...');
  run(`ffmpeg -y -i "${SOURCE_HERO}" -c:v libvpx-vp9 -crf 35 -b:v 0 -vf "scale=540:960:flags=lanczos" -an -row-mt 1 "public/videos/hero/hero-loop-mobile.webm"`);

  console.log('🖼️  Hero poster image...');
  run(`ffmpeg -y -i "${SOURCE_HERO}" -ss 00:00:01 -vframes 1 -vf "scale=720:1280" -q:v 90 "public/videos/posters/hero-poster.webp"`);

  // Section clips — split the 15s source into three ~5s segments.
  // Filenames stay strength/combat/studio so image-map.ts continues to resolve.
  console.log('📹 Section: Strength Zone (0:00-0:05)...');
  run(`ffmpeg -y -i "${SOURCE_HERO}" -ss 00:00:00 -t 5 -vcodec libx264 -crf 32 -preset slow -vf "scale=720:1280:flags=lanczos" -an -movflags +faststart -pix_fmt yuv420p "public/videos/sections/inside-strength.mp4"`);

  console.log('📹 Section: Combat Zone (0:05-0:10)...');
  run(`ffmpeg -y -i "${SOURCE_HERO}" -ss 00:00:05 -t 5 -vcodec libx264 -crf 32 -preset slow -vf "scale=720:1280:flags=lanczos" -an -movflags +faststart -pix_fmt yuv420p "public/videos/sections/inside-combat.mp4"`);

  console.log('📹 Section: Studio Classes (0:10-0:15)...');
  run(`ffmpeg -y -i "${SOURCE_HERO}" -ss 00:00:10 -t 5 -vcodec libx264 -crf 32 -preset slow -vf "scale=720:1280:flags=lanczos" -an -movflags +faststart -pix_fmt yuv420p "public/videos/sections/inside-studio.mp4"`);
} else {
  console.warn('⚠️  Hero source video not found, skipping hero processing');
}

// === STUDIO RENTAL VIDEO ===
// Skip re-encode when both outputs already exist (cheap idempotence guard).
const studioOutputsExist =
  existsSync('public/videos/sections/studio-rental.mp4') &&
  existsSync('public/videos/posters/studio-rental-poster.webp');

if (!existsSync(SOURCE_STUDIO)) {
  console.warn('⚠️  Studio rental source video not found, skipping');
} else if (studioOutputsExist) {
  console.log('⏭️  Studio Rental outputs already exist — skipping re-encode.');
} else {
  console.log('📹 Studio Rental video...');
  run(`ffmpeg -y -i "${SOURCE_STUDIO}" -vcodec libx264 -crf 30 -preset slow -vf "scale=720:1280:flags=lanczos" -an -movflags +faststart -pix_fmt yuv420p "public/videos/sections/studio-rental.mp4"`);

  console.log('🖼️  Studio Rental poster...');
  run(`ffmpeg -y -i "${SOURCE_STUDIO}" -ss 00:00:01 -vframes 1 -vf "scale=720:1280" -q:v 90 "public/videos/posters/studio-rental-poster.webp"`);
}

console.log('\n✅ Video processing complete');
