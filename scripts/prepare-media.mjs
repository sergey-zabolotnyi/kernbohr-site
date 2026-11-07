// Optimiert Fotos/Videos aus ./originals und legt sie für die Website ab.
// Start: npm.cmd run media   (Windows)  |  npm run media
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { entries } from '../media.config.mjs';

const root = process.cwd();
const dirOriginals = path.join(root, 'originals');
const dirImages = path.join(root, 'public', 'images');
const dirVideos = path.join(root, 'public', 'videos');
const manifestFile = path.join(root, 'src', 'data', 'media-manifest.json');

await fs.mkdir(dirImages, { recursive: true });
await fs.mkdir(dirVideos, { recursive: true });

let files = [];
try {
  files = await fs.readdir(dirOriginals);
} catch {
  console.error('Ordner "originals" fehlt. Legen Sie ihn im Projektordner an und kopieren Sie Fotos/Videos hinein.');
  process.exit(1);
}
const byBase = new Map(files.map((f) => [path.parse(f).name.toLowerCase(), f]));

const manifest = { images: {}, videos: {} };
let ok = 0;
let missing = 0;

for (const e of entries) {
  const found = byBase.get(e.file.toLowerCase());
  if (!found) {
    console.log(`  fehlt   ${e.file}  (${e.id})`);
    missing++;
    continue;
  }
  const src = path.join(dirOriginals, found);

  if (e.type === 'image') {
    const max = e.maxWidth ?? 1600;
    const widths = [800, max].filter((w, i, a) => a.indexOf(w) === i).sort((a, b) => a - b);
    let outW = 0;
    let outH = 0;
    for (const w of widths) {
      const info = await sharp(src)
        .rotate()
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: e.quality ?? 78 })
        .toFile(path.join(dirImages, `${e.id}-${w}.webp`));
      outW = info.width;
      outH = info.height;
    }
    // Falls das Original kleiner als eine Zielbreite ist, sind Dateien doppelt: egal, nur etwas Platz.
    manifest.images[e.id] = { widths, w: outW, h: outH, alt: e.alt, caption: e.caption };
    console.log(`  ok      ${found} -> ${e.id}`);
  } else {
    const dest = path.join(dirVideos, `${e.id}.mp4`);
    await fs.copyFile(src, dest);
    const { size } = await fs.stat(dest);
    manifest.videos[e.id] = { alt: e.alt, caption: e.caption, size };
    const mb = (size / 1024 / 1024).toFixed(1);
    console.log(`  ok      ${found} -> ${e.id}.mp4 (${mb} MB)${size > 15 * 1024 * 1024 ? '  ACHTUNG: groß, bitte komprimieren' : ''}`);
  }
  ok++;
}

await fs.writeFile(manifestFile, JSON.stringify(manifest, null, 2) + '\n');
console.log(`\nFertig: ${ok} Dateien verarbeitet, ${missing} nicht gefunden.`);
