// Erzeugt public/og-default.jpg (1200x630) für Link-Vorschauen. Start: node scripts/make-og.mjs
import sharp from 'sharp';
const w = 1200, h = 630;
const base = await sharp('public/images/werk-wand-gross-1600.webp').resize(w, h, { fit: 'cover', position: 'centre' }).toBuffer();
const svg = Buffer.from(`<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#14181c" stop-opacity=".95"/><stop offset=".65" stop-color="#14181c" stop-opacity=".75"/><stop offset="1" stop-color="#14181c" stop-opacity=".2"/></linearGradient></defs>
<rect width="${w}" height="${h}" fill="url(#g)"/>
<rect x="64" y="150" width="90" height="8" fill="#e8590c"/>
<text x="64" y="250" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="84" fill="#fff">Kernbohr-Expert</text>
<text x="64" y="330" font-family="Arial, Helvetica, sans-serif" font-size="44" fill="#fff">Kernbohrung &amp; Wanddurchbruch</text>
<text x="64" y="390" font-family="Arial, Helvetica, sans-serif" font-size="44" fill="#fff">Dresden und Sachsen</text>
<text x="64" y="500" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="40" fill="#e8590c">24/7 erreichbar · +49 177 190 90 49</text>
</svg>`);
await sharp(base).composite([{ input: svg }]).jpeg({ quality: 82 }).toFile('public/og-default.jpg');
console.log('og-default.jpg erstellt');
