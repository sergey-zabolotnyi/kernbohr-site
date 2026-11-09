import manifest from '../data/media-manifest.json';

export const image = (id) => (manifest.images[id] ? { id, ...manifest.images[id] } : null);
export const video = (id) => (manifest.videos[id] ? { id, ...manifest.videos[id] } : null);

// Gibt nur vorhandene Medien zurück, mit Typ-Angabe.
export function items(ids = []) {
  return ids
    .map((id) => {
      const i = image(id);
      if (i) return { type: 'image', ...i };
      const v = video(id);
      if (v) return { type: 'video', ...v };
      return null;
    })
    .filter(Boolean);
}

export const allIds = () => [...Object.keys(manifest.images), ...Object.keys(manifest.videos)];

// CSS-Variable für den Hero-Hintergrund (leer, falls kein Hintergrundbild vorhanden ist)
export const heroStyle = (id = 'werk-bohrstaender') => {
  const b = image(id) || image('werk-bohrstaender');
  return b ? `--hero-bg:url(/images/${b.id}-${b.widths[b.widths.length - 1]}.webp);--hero-bg-sm:url(/images/${b.id}-800.webp)` : '';
};
