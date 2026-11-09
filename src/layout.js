import { site, nav } from './config.js';
import { esc, markSvg, arrow } from './lib.js';

const year = new Date().getFullYear();

function header(path) {
  const links = nav
    .map((n) => {
      const current = path.startsWith(n.href) ? ' aria-current="page"' : '';
      return `<a href="${n.href}"${current}>${n.label}</a>`;
    })
    .join('');
  return `<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="/" aria-label="Studio62, torna alla home">
      <span class="brand-mark">${markSvg('brand-svg')}<span class="brand-fb" aria-hidden="true">F.B.</span></span>
      <span class="brand-word">Studio62</span>
    </a>
    <a class="ig-head" href="${site.instagram.url}" rel="noopener" target="_blank" aria-label="Studio62 su Instagram, @${site.instagram.handle}" data-cursor="Segui">
      <span class="ig-avatar">${markSvg('ig-mark')}</span>
      <span class="ig-head-id"><b>@${site.instagram.handle}</b><span>Instagram</span></span>
      <span class="ig-head-grid" aria-hidden="true"><img src="/img/progetti/falchi-cautano-maglia/01-640.jpg" alt=""><img src="/video/capo-tre-venti-reel.jpg" alt=""><img src="/img/progetti/tramontana-etichetta/01-640.jpg" alt=""></span>
      <span class="ig-head-btn">Segui</span>
    </a>
    <nav class="main-nav" aria-label="Principale">${links}</nav>
    <div class="header-end">
      ${site.available ? '<span class="avail"><i aria-hidden="true"></i>Disponibile per nuovi progetti</span>' : ''}
      <a class="btn btn-small" href="/contatti/">Inizia un progetto</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="menu">Menu</button>
    </div>
  </div>
</header>
<div class="menu" id="menu" hidden>
  <nav class="wrap menu-inner" aria-label="Menu">
    <a href="/">Home</a>${links}
    <div class="menu-foot">
      <span class="label">Scrivi a Studio62</span>
      <a class="menu-mail" href="mailto:${site.email}">${site.email}</a>
      <a href="${site.instagram.url}" rel="noopener" target="_blank">Instagram @${site.instagram.handle}</a>
    </div>
  </nav>
</div>`;
}

function footer() {
  return `<footer class="site-footer">
  <div class="wrap">
    <div class="footer-top">
      <div class="footer-lead">
        <p class="footer-claim">Creative Showcase. Siti, grafica e comunicazione per attività che vogliono farsi notare.</p>
        <a class="footer-mail" href="mailto:${site.email}">${site.email}</a>
      </div>
      <nav class="footer-col" aria-label="Pagine"><span class="label">Pagine</span>${nav.map((n) => `<a href="${n.href}">${n.label}</a>`).join('')}</nav>
      <div class="footer-col"><span class="label">Social</span><a href="${site.instagram.url}" rel="noopener" target="_blank">Instagram</a></div>
      <div class="footer-col"><span class="label">Studio62</span><span>${esc(site.owner)}</span><span>Da remoto, ovunque</span></div>
    </div>
    <div class="footer-legal"><span>© ${year} Studio62 · ${esc(site.owner)}</span><a href="/privacy/">Privacy</a></div>
  </div>
  <div class="footer-giant" aria-hidden="true">62<span class="dot"></span></div>
</footer>`;
}

export function layout({ path, title, description, body, jsonld = null, image = '/img/og.png', noindex = false, bodyClass = '' }) {
  const fullTitle = path === '/' ? title : `${title} · Studio62`;
  const canonical = site.url + path;
  return `<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
${noindex ? '<meta name="robots" content="noindex">' : ''}
<meta property="og:type" content="website">
<meta property="og:locale" content="it_IT">
<meta property="og:site_name" content="Studio62">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${site.url}${image}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#F4F3EF">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="preload" href="/fonts/inter-display-800.woff" as="font" type="font/woff" crossorigin>
<link rel="preload" href="/fonts/inter-400.woff" as="font" type="font/woff" crossorigin>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&display=swap">
<link rel="stylesheet" href="/css/style.css">
${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>` : ''}
<script>document.documentElement.classList.add('js')</script>
</head>
<body class="${bodyClass}">
<a class="skip" href="#contenuto">Vai al contenuto</a>
${header(path)}
<main id="contenuto">
${body}
</main>
${footer()}
<div class="cursor" aria-hidden="true"><span class="cursor-label"></span></div>
<div class="veil" aria-hidden="true"></div>
<script src="/js/main.js" defer></script>
</body>
</html>`;
}

// Blocco finale scuro che porta ai contatti, usato su più pagine
export function ctaBlock(title = 'Hai un progetto?', line = 'Arriviamo al punto') {
  return `<section class="cta">
  <div class="wrap cta-inner">
    <p class="label">Nuovo progetto</p>
    <h2 class="cta-title">${esc(title)}<br>${esc(line)}<span class="dot" aria-hidden="true"></span></h2>
    <div class="cta-actions">
      <a class="btn btn-light" href="/contatti/">Inizia un progetto ${arrow}</a>
      <button class="copy" type="button" data-copy="${site.email}"><span class="copy-text">${site.email}</span><span class="copy-hint" aria-live="polite">Copia</span></button>
    </div>
  </div>
</section>`;
}
