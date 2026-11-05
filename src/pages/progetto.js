import { site, tipi } from '../config.js';
import { progetti } from '../progetti.js';
import { layout } from '../layout.js';
import { esc, picture, titled, arrow } from '../lib.js';

const spanSizes = {
  full: '(min-width: 1240px) 1160px, 100vw',
  half: '(min-width: 900px) 50vw, 100vw',
  third: '(min-width: 900px) 33vw, 100vw',
};

function gallery(p, items) {
  if (!items.length) return '';
  return `<div class="gallery">${items
    .map(
      (img) =>
        `<figure class="g-item g-${img.span}${img.screen ? ' is-screen' : ''}${img.h > img.w * 1.6 ? ' is-phone' : ''}">${picture(p.slug, img, { sizes: spanSizes[img.span] })}</figure>`
    )
    .join('')}</div>`;
}

function chapter(label, text) {
  if (!text) return '';
  return `<div class="chapter"><h2 class="label">${label}</h2><p>${esc(text)}</p></div>`;
}

export default function progetto(slug) {
  const i = progetti.findIndex((p) => p.slug === slug);
  if (i < 0) return null;
  const p = progetti[i];
  const next = progetti[(i + 1) % progetti.length];
  const sibling = progetti.find((q) => q.cliente === p.cliente && q.slug !== p.slug);
  const half = Math.ceil(p.galleria.length / 2);
  const c0 = p.cover[0];
  const ogImg = `/img/progetti/${p.slug}/${c0.file}-${c0.sizes.filter((w) => w <= 1200).pop()}.jpg`;

  const meta = [
    ['Cliente', esc(p.cliente)],
    ['Anno', p.anno],
    ['Servizio', esc(p.servizio)],
    ...p.crediti.map((c) => [esc(c.ruolo), esc(c.nome)]),
  ];
  if (p.link) meta.push(['Online', `<a href="${p.link.url}" rel="noopener" target="_blank">${esc(p.link.label)} ↗</a>`]);

  const cover = p.cover.length > 1 ? 'cover cover-pair' : 'cover';

  const body = `
<article class="case">
  <header class="case-hero">
    <div class="wrap">
      <a class="back" href="/lavori/">← Lavori</a>
      <p class="label">${esc(p.cliente)} · ${p.tipo.map((t) => tipi[t]).join(' · ')}</p>
      <h1 class="case-title">${titled(p.titolo)}</h1>
      <dl class="case-meta">${meta.map(([k, v]) => `<div><dt class="label">${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
    </div>
  </header>
  <div class="wrap">
    <div class="${cover}">${p.cover
      .map((img, n) => `<figure class="g-item${img.screen ? ' is-screen' : ''}">${picture(p.slug, img, { eager: n === 0, sizes: p.cover.length > 1 ? '(min-width: 900px) 50vw, 100vw' : '100vw' })}</figure>`)
      .join('')}</div>
    <div class="chapters">${chapter('La richiesta', p.richiesta)}${chapter("L'idea", p.idea)}</div>
    ${gallery(p, p.galleria.slice(0, half))}
    <div class="chapters">${chapter('Il progetto', p.lavoro)}</div>
    ${gallery(p, p.galleria.slice(half))}
    <div class="chapters">${chapter('Il risultato', p.risultato)}</div>
    ${
      sibling
        ? `<p class="sibling"><span class="label">Per lo stesso cliente</span> <a class="link" href="/lavori/${sibling.slug}/">${esc(sibling.breve)}: ${esc(sibling.titolo)} ${arrow}</a></p>`
        : ''
    }
  </div>
</article>
<a class="next" href="/lavori/${next.slug}/" data-cursor="Apri">
  <span class="wrap next-inner">
    <span class="label">Prossimo progetto</span>
    <span class="next-client">${esc(next.cliente)}</span>
    <span class="next-title">${esc(next.titolo)} ${arrow}</span>
  </span>
</a>
`;

  return layout({
    path: `/lavori/${p.slug}/`,
    title: `${p.cliente} · ${p.breve}`,
    description: p.seo,
    body,
    image: ogImg,
    jsonld: {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: `${p.cliente} · ${p.breve}`,
      headline: p.titolo,
      description: p.seo,
      dateCreated: String(p.anno),
      creator: { '@type': 'Organization', name: 'Studio62', url: site.url },
      image: site.url + ogImg,
      url: `${site.url}/lavori/${p.slug}/`,
    },
  });
}
