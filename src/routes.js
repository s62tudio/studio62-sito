// Mappa indirizzo -> pagina. Ogni progetto in progetti.js ha automaticamente la sua pagina.
import { site } from './config.js';
import { progetti } from './progetti.js';
import home from './pages/home.js';
import lavori from './pages/lavori.js';
import progetto from './pages/progetto.js';
import collaborazioni from './pages/collaborazioni.js';
import studio from './pages/studio.js';
import contatti from './pages/contatti.js';
import { privacy, notFound } from './pages/altre.js';

export function routes() {
  const r = {
    '/': home,
    '/lavori/': lavori,
    '/collaborazioni/': collaborazioni,
    '/studio/': studio,
    '/contatti/': contatti,
    '/privacy/': privacy,
  };
  for (const p of progetti) r[`/lavori/${p.slug}/`] = () => progetto(p.slug);
  return r;
}

export { notFound };

export function sitemap() {
  const urls = Object.keys(routes()).filter((u) => u !== '/privacy/');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${site.url}${u}</loc></url>`).join('\n')}
</urlset>
`;
}

export const robots = () => `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`;
