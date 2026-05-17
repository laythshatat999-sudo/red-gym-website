import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';

// Source files
const SOURCE_HERO_NEW = 'source-assets/videos/hero/hero-source-46s.mp4';   // 15s, for hero loop + studio clip
const SOURCE_HERO_OLD = 'source-assets/videos/hero/hero-source-old.mp4';   // 46s, for strength + combat clips
const SOURCE_STUDIO = 'source-assets/videos/studio-rental/red rent.mp4';   // standalone, untouched

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

// === HERO LOOP (mobile + WebM fallback) — from NEW 15s video ===
if (existsSync(SOURCE_HERO_NEW)) {
  console.log('📹 Hero loop mp4 (mobile, full 15s, ~540×960)...');
  run(`ffmpeg -y -i "${SOURCE_HERO_NEW}" -vcodec libx264 -crf 30 -preset slow -vf "scale=540:960:flags=lanczos" -an -movflags +faststart -pix_fmt yuv420p "public/videos/hero/hero-loop-mobile.mp4"`);

  console.log('📹 Hero loop webm (VP9 fallback)...');
  run(`ffmpeg -y -i "${SOURCE_HERO_NEW}" -c:v libvpx-vp9 -crf 35 -b:v 0 -vf "scale=540:960:flags=lanczos" -an -row-mt 1 "public/videos/hero/hero-loop-mobile.webm"`);

  console.log('🖼️  Hero poster image (frame at 0:01)...');
  run(`ffmpeg -y -i "${SOURCE_HERO_NEW}" -ss 00:00:01 -vframes 1 -vf "scale=720:1280" -q:v 90 "public/videos/posters/hero-poster.webp"`);
} else {
  console.warn('⚠️  hero-source-46s.mp4 not found, skipping hero processing');
}

// === SECTION CLIPS (Strength + Combat) — from OLD 46s video ===
if (existsSync(SOURCE_HERO_OLD)) {
  console.log('📹 Section: Strength Zone (0:08-0:14, Hammer Strength wide shot, 6s)...');
  run(`ffmpeg -y -i "${SOURCE_HERO_OLD}" -ss 00:00:08 -t 6 -vcodec libx264 -crf 32 -preset slow -vf "scale=720:1280:flags=lanczos" -an -movflags +faststart -pix_fmt yuv420p "public/videos/sections/inside-strength.mp4"`);

  console.log('📹 Section: Combat Zone (0:36-0:42, heavy bags + red mat, 6s)...');
  run(`ffmpeg -y -i "${SOURCE_HERO_OLD}" -ss 00:00:36 -t 6 -vcodec libx264 -crf 32 -preset slow -vf "scale=720:1280:flags=lanczos" -an -movflags +faststart -pix_fmt yuv420p "public/videos/sections/inside-combat.mp4"`);
} else {
  console.warn('⚠️  hero-source-old.mp4 not found, skipping strength + combat sections');
}

// === STUDIO-RENTAL SOURCE — drives inside-studio.mp4 AND studio-rental.mp4 ===
if (!existsSync(SOURCE_STUDIO)) {
  console.warn('⚠️  Studio rental source video not found, skipping');
} else {
  // Always-run: short InsideRedGym studio-floor clip (cheap re-encode).
  console.log('📹 Section: Studio Floor (0:22-0:26, big R logo + heavy bags, 4s)...');
  run(`ffmpeg -y -i "${SOURCE_STUDIO}" -ss 00:00:22 -t 4 -vcodec libx264 -crf 32 -preset slow -vf "scale=720:1280:flags=lanczos" -an -movflags +faststart -pix_fmt yuv420p "public/videos/sections/inside-studio.mp4"`);

  // Skip guard for the large 30s Studio Rental page asset (expensive).
  const studioOutputsExist =
    existsSync('public/videos/sections/studio-rental.mp4') &&
    existsSync('public/videos/posters/studio-rental-poster.webp');
  if (studioOutputsExist) {
    console.log('⏭️  Studio Rental large outputs already exist — skipping re-encode.');
  } else {
    console.log('📹 Studio Rental video (full ~30s)...');
    run(`ffmpeg -y -i "${SOURCE_STUDIO}" -vcodec libx264 -crf 30 -preset slow -vf "scale=720:1280:flags=lanczos" -an -movflags +faststart -pix_fmt yuv420p "public/videos/sections/studio-rental.mp4"`);

    console.log('🖼️  Studio Rental poster...');
    run(`ffmpeg -y -i "${SOURCE_STUDIO}" -ss 00:00:01 -vframes 1 -vf "scale=720:1280" -q:v 90 "public/videos/posters/studio-rental-poster.webp"`);
  }
}

console.log('\n✅ Video processing complete');
