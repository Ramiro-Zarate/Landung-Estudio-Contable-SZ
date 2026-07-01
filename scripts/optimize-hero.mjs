import sharp from 'sharp';
import { readFile, stat } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = resolve(__dirname, '../src/assets/fondo.webp');
const dest = resolve(__dirname, '../src/assets/fondo_hero.webp');

const input = await readFile(src);
const meta = await sharp(input).metadata();
const srcStat = await stat(src);

console.log(`Original: ${meta.width}x${meta.height} ${meta.format} (${(srcStat.size / 1024).toFixed(1)} KB)`);

await sharp(input)
  .rotate()
  .resize({ width: 1920, withoutEnlargement: true })
  .webp({ quality: 72, effort: 6 })
  .toFile(dest);

const destStat = await stat(dest);
const destMeta = await sharp(dest).metadata();
console.log(`Optimized: ${destMeta.width}x${destMeta.height} webp (${(destStat.size / 1024).toFixed(1)} KB)`);
console.log(`Saved: ${(((srcStat.size - destStat.size) / srcStat.size) * 100).toFixed(1)}%`);
