// Genera il sito statico in dist/, pronto da pubblicare (Netlify, Vercel o qualsiasi hosting).
// Avvio: npm run build
import { mkdir, rm, writeFile, cp } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { routes, notFound, sitemap, robots } from '../src/routes.js';

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, '..', 'dist');

await rm(out, { recursive: true, force: true });
await cp(join(here, '..', 'public'), out, { recursive: true });

let n = 0;
for (const [path, page] of Object.entries(routes())) {
  const dir = join(out, path);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'index.html'), page());
  n++;
}
await writeFile(join(out, '404.html'), notFound());
await writeFile(join(out, 'sitemap.xml'), sitemap());
await writeFile(join(out, 'robots.txt'), robots());
console.log(`Creato dist/ con ${n} pagine.`);
