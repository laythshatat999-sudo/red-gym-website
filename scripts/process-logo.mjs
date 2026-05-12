import sharp from 'sharp';
import { existsSync } from 'fs';
import { mkdir } from 'fs/promises';

const SOURCE = 'public/images/og/logo-full.png';

if (!existsSync(SOURCE)) {
  console.error(`❌ Logo source not found at ${SOURCE}`);
  console.error(`   Layth must place the logo at public/images/og/logo-full.png first.`);
  process.exit(1);
}

await mkdir('public/images/og', { recursive: true });

const meta = await sharp(SOURCE).metadata();
console.log(`🎨 Source logo: ${meta.width}×${meta.height}`);

const aspect = meta.width / meta.height;
const isSquare = aspect > 0.9 && aspect < 1.1;
console.log(`   aspect ${aspect.toFixed(2)} → ${isSquare ? 'square (full image is the icon)' : 'horizontal (cropping left 42%)'}`);

// 1. Full logo — optimized PNG, multiple sizes
console.log('📦 Full logo variants...');
await sharp(SOURCE)
  .resize(1200, null, { withoutEnlargement: true })
  .png({ quality: 90, compressionLevel: 9 })
  .toFile('public/images/og/logo-full-1200.png');

await sharp(SOURCE)
  .resize(600, null, { withoutEnlargement: true })
  .png({ quality: 90, compressionLevel: 9 })
  .toFile('public/images/og/logo-full-600.png');

await sharp(SOURCE)
  .resize(300, null, { withoutEnlargement: true })
  .webp({ quality: 90 })
  .toFile('public/images/og/logo-full-300.webp');

// 2. Logo icon. For square logos, source is already the icon. For horizontal
// lockups, crop the left 42% which holds the R mark.
function iconPipeline() {
  if (isSquare) return sharp(SOURCE).trim();
  const w = Math.floor(meta.width * 0.42);
  return sharp(SOURCE).extract({ left: 0, top: 0, width: w, height: meta.height }).trim();
}

console.log('🎯 Icon variants...');
await iconPipeline()
  .resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ quality: 90, compressionLevel: 9 })
  .toFile('public/images/og/logo-icon-256.png');

await iconPipeline()
  .resize(96, 96, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ quality: 90, compressionLevel: 9 })
  .toFile('public/images/og/logo-icon-96.png');

await iconPipeline()
  .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ quality: 90, compressionLevel: 9 })
  .toFile('public/images/og/logo-icon-48.png');

// 3. Favicon (32×32) + Apple touch (180×180) on solid black so they pop in tabs
console.log('🔖 Favicons...');
await iconPipeline()
  .resize(32, 32, { fit: 'contain', background: { r: 10, g: 10, b: 10, alpha: 1 } })
  .png()
  .toFile('public/favicon-32.png');

await iconPipeline()
  .resize(180, 180, { fit: 'contain', background: { r: 10, g: 10, b: 10, alpha: 1 } })
  .png()
  .toFile('public/apple-touch-icon.png');

// 4. OG image — 1200×630 with logo centered on black
console.log('📱 OG image for social sharing...');
const ogBg = Buffer.from(
  `<svg width="1200" height="630"><rect width="100%" height="100%" fill="#0A0A0A"/></svg>`
);

const logoResized = await sharp(SOURCE)
  .resize(500, 500, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();

await sharp(ogBg)
  .composite([{ input: logoResized, gravity: 'center' }])
  .jpeg({ quality: 88 })
  .toFile('public/images/og/og-image.jpg');

console.log('\n✅ Logo processing complete');
