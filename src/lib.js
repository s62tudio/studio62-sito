// Piccoli aiuti condivisi dalle pagine.

export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Il punto blu che chiude i titoli
export const dot = '<span class="dot" aria-hidden="true"></span>';

// Un titolo che finisce con il punto: il testo resta leggibile, il punto è decorativo
export const titled = (text) => `${esc(text)}${dot}`;

// <picture> con WebP + JPG e tutte le larghezze disponibili
export function picture(slug, img, { sizes = '100vw', cls = '', eager = false } = {}) {
  const base = `/img/progetti/${slug}/${img.file}`;
  const set = (ext) => img.sizes.map((w) => `${base}-${w}.${ext} ${w}w`).join(', ');
  const fallback = `${base}-${img.sizes[Math.min(1, img.sizes.length - 1)]}.jpg`;
  return `<picture class="${cls}">
    <source type="image/webp" srcset="${set('webp')}" sizes="${sizes}">
    <img src="${fallback}" srcset="${set('jpg')}" sizes="${sizes}" width="${img.w}" height="${img.h}" alt="${esc(img.alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
  </picture>`;
}

export const thumbUrl = (slug, img) => `/img/progetti/${slug}/${img.file}-640.webp`;

// Il monogramma "62." come SVG, colori controllati dal CSS
export const markSvg = (cls = '') => `<svg class="${cls}" viewBox="0 0 512 512" aria-hidden="true" focusable="false"><rect width="512" height="512" rx="108.42" class="m-bg"/><path class="m-num" d="M153.76 352.13C194.14 352.13 222.64 326.13 222.64 288.13C222.64 252.25 196.39 225.88 160.39 225.88C141.14 225.88 125.26 233.5 116.01 247.75H115.76C115.76 213 128.26 189.63 154.89 189.63C171.26 189.63 181.89 198.88 184.64 213.5H220.64C217.26 182.75 192.39 159.88 155.26 159.88C106.39 159.88 80.39 199.38 80.39 260.75C80.39 318.63 107.39 352.13 153.76 352.13ZM153.51 321.88C135.26 321.88 121.14 307.25 121.14 288.25C121.14 269.38 135.39 254.75 153.89 254.75C172.26 254.75 186.14 269.13 186.14 288.13C186.14 307.25 172.01 321.88 153.51 321.88ZM239.23 349.13H372.73V318.25H291.23V318L330.73 283.63C356.73 261.38 371.86 244 371.86 217.88C371.86 182.63 344.36 159.88 306.11 159.88C264.73 159.88 238.48 186.38 238.48 226.88H273.86C273.86 204.25 286.11 190.63 306.11 190.63C324.36 190.63 336.11 202.13 336.11 219.88C336.11 237.38 323.98 248 307.48 262.5L239.23 320.88Z"/><circle cx="409.85" cy="330.37" r="21.76" class="m-dot"/></svg>`;

export const arrow = '<svg class="arr" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
