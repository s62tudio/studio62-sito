import { site, tipi } from '../config.js';
import { progetti } from '../progetti.js';
import { layout } from '../layout.js';
import { esc, picture, titled, arrow } from '../lib.js';

const spanSizes = {
  full: '(min-width: 1240px) 1160px, 100vw',
  half: '(min-width: 900px) 50vw, 100vw',
  third: '(min-width: 900px) 33vw, 100vw',
};

const isPhone = (img) => img.screen && img.h > img.w * 1.6;

// Screenshot desktop dentro un portatile, screenshot mobile dentro un telefono
function framed(p, img, opts) {
  const pic = picture(p.slug, img, opts);
  if (!img.screen) return pic;
  if (isPhone(img))
    return `<div class="frame-phone${img.dark ? ' is-dark' : ''}"><div class="fp-bezel"><div class="fp-screen"><div class="fp-status" aria-hidden="true"><span>9:41</span><span class="fp-island"></span><span class="fp-icons"><i></i><i></i></span></div><div class="fp-view">${pic}</div></div></div></div>`;
  return `<div class="frame-laptop"><div class="fl-lid"><div class="fl-screen">${pic}</div></div><div class="fl-base" aria-hidden="true"></div></div>`;
}

// Raggruppa gli screenshot mobile consecutivi in un'unica fila
function groups(items) {
  const out = [];
  for (const img of items) {
    const last = out[out.length - 1];
    if (isPhone(img) && last && last.phones) last.phones.push(img);
    else out.push(isPhone(img) ? { phones: [img] } : { img });
  }
  return out;
}

function renderGroup(p, g) {
  if (g.phones)
    return `<figure class="g-item g-full is-screen is-phones">${g.phones
      .map((img) => framed(p, img, { sizes: '(min-width: 900px) 300px, 45vw' }))
      .join('')}</figure>`;
  const img = g.img;
  return `<figure class="g-item g-${img.span}${img.screen ? ' is-screen' : ''}">${framed(p, img, { sizes: spanSizes[img.span] })}</figure>`;
}

function gallery(p, gs) {
  if (!gs.length) return '';
  return `<div class="gallery">${gs.map((g) => renderGroup(p, g)).join('')}</div>`;
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
  const gs = groups(p.galleria);
  const half = Math.ceil(gs.length / 2);
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
      .map((img, n) => `<figure class="g-item${img.screen ? ' is-screen' : ''}">${framed(p, img, { eager: n === 0, sizes: p.cover.length > 1 ? '(min-width: 900px) 50vw, 100vw' : '100vw' })}</figure>`)
      .join('')}</div>
    <div class="chapters">${chapter('La richiesta', p.richiesta)}${chapter("L'idea", p.idea)}</div>
    ${gallery(p, gs.slice(0, half))}
    <div class="chapters">${chapter('Il progetto', p.lavoro)}</div>
    ${gallery(p, gs.slice(half))}
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
