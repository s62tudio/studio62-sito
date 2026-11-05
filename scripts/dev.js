// Server di sviluppo: genera le pagine a ogni richiesta.
// Avvio: npm run dev  (si riavvia da solo quando modifichi i file in src/)
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { routes, notFound, sitemap, robots } from '../src/routes.js';

const root = fileURLToPath(new URL('../public/', import.meta.url));
const PORT = Number(process.env.PORT) || 4321;

const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.woff': 'font/woff', '.mp4': 'video/mp4', '.woff2': 'font/woff2', '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml',
};

const server = http.createServer(async (req, res) => {
  try {
    let path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (path === '/sitemap.xml') return send(res, 200, types['.xml'], sitemap());
    if (path === '/robots.txt') return send(res, 200, types['.txt'], robots());

    // File statici (immagini, css, js, font)
    if (extname(path)) {
      const file = normalize(join(root, path));
      if (!file.startsWith(root)) return send(res, 403, types['.txt'], 'Vietato');
      try {
        const s = await stat(file);
        if (s.isFile()) {
          res.writeHead(200, { 'Content-Type': types[extname(file).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
          return res.end(await readFile(file));
        }
      } catch {}
      return send(res, 404, types['.txt'], 'Non trovato');
    }

    // Pagine
    if (!path.endsWith('/')) {
      res.writeHead(301, { Location: path + '/' });
      return res.end();
    }
    const page = routes()[path];
    if (page) return send(res, 200, types['.html'], page());
    return send(res, 404, types['.html'], notFound());
  } catch (err) {
    console.error(err);
    send(res, 500, types['.txt'], 'Errore: ' + err.message);
  }
});

function send(res, code, type, body) {
  res.writeHead(code, { 'Content-Type': type, 'Cache-Control': 'no-cache' });
  res.end(body);
}

server.listen(PORT, () => {
  console.log(`\n  Studio62 è in esecuzione su  http://localhost:${PORT}\n  (Ctrl + C per fermarlo)\n`);
});
