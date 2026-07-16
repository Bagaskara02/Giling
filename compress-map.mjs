import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath = path.join(__dirname, 'public', 'images', 'PETA ADMINISTRASI FIX.png');
const outputPath = path.join(__dirname, 'public', 'images', 'peta-administrasi.webp');

async function compress() {
  const meta = await sharp(inputPath).metadata();
  console.log(`Input: ${meta.width}x${meta.height}, ${meta.format}`);

  // Resize to max 2400px wide (plenty for detail) and convert to WebP
  await sharp(inputPath)
    .resize({ width: 2400, withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(outputPath);

  const outMeta = await sharp(outputPath).metadata();
  const fs = await import('fs');
  const stats = fs.statSync(outputPath);
  console.log(`Output: ${outMeta.width}x${outMeta.height}, ${outMeta.format}`);
  console.log(`Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
}

compress().catch(console.error);
