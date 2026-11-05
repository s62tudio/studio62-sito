import { site, tipi, social } from './config.js';
import { esc, picture, thumbUrl, arrow, markSvg } from './lib.js';

// Lista dei lavori: righe tipografiche, anteprima che segue il mouse su desktop
export function workList(items, { filterable = false } = {}) {
  const rows = items
    .map((p) => {
      const tags = p.tipo.map((t) => tipi[t]).join(' · ');
      return `<li class="work-item" data-tipo="${p.tipo.join(' ')}">
      <a class="work-row" href="/lavori/${p.slug}/" data-preview="${thumbUrl(p.slug, p.cover[0])}" data-cursor="Apri">
        ${picture(p.slug, p.cover[0], { cls: 'work-thumb', sizes: '(min-width: 900px) 1px, 100vw' })}
        <span class="work-client">${esc(p.cliente)}</span>
        <span class="work-title">${esc(p.titolo)}</span>
        <span class="work-meta"><span>${esc(tags)}</span><span>${p.anno}</span></span>
        <span class="work-arrow">${arrow}</span>
      </a>
    </li>`;
    })
    .join('');
  const filters = filterable
    ? `<div class="filters" role="group" aria-label="Filtra per tipo di lavoro">
        <button type="button" class="chip" data-filter="*" aria-pressed="true">Tutti</button>
        ${Object.entries(tipi)
          .map(([k, v]) => `<button type="button" class="chip" data-filter="${k}" aria-pressed="false">${v}</button>`)
          .join('')}
        <a class="chip" href="#social">Social</a>
      </div>`
    : '';
  return `${filters}<div class="work"><ol class="work-list">${rows}</ol><div class="work-preview" aria-hidden="true"><img alt=""></div></div>`;
}

export function socialBlock() {
  return `<section class="section social" id="social">
  <div class="wrap">
    <div class="sec-head">
      <p class="label">Social</p>
      <div>
        <h2 class="h2">Progetti di comunicazione<span class="dot" aria-hidden="true"></span></h2>
        <p class="lead">Grafiche e contenuti social per attività del territorio. Il modo migliore per vederli è aprire le pagine.</p>
      </div>
    </div>
    <ul class="social-grid">
      ${social
        .map(
          (s) => `<li><a class="social-card" href="https://www.instagram.com/${s.handle}/" rel="noopener" target="_blank" data-cursor="Apri">
        <span class="label">${esc(s.settore)} · ${esc(s.luogo)}</span>
        <span class="social-name">${esc(s.nome)}</span>
        <span class="social-handle">@${esc(s.handle)} ${arrow}</span>
      </a></li>`
        )
        .join('')}
    </ul>
  </div>
</section>`;
}

// Blocco Instagram: profilo di Studio62 con una griglia di lavori, tutto porta al profilo
const igTiles = [
  { src: '/img/progetti/falchi-cautano-maglia/01-640.jpg', alt: 'Maglia ASD Falchi Cautano' },
  { src: '/video/capo-tre-venti-reel.jpg', alt: 'Reel Capo Tre Venti', reel: true },
  { src: '/img/progetti/tramontana-etichetta/01-640.jpg', alt: 'Etichetta Tramontana' },
  { src: '/img/progetti/feltagrifer-sito/01-640.jpg', alt: 'Sito Feltagrifer' },
  { src: '/img/progetti/falchi-cautano-maglia/06-640.jpg', alt: 'Dettaglio della manica con il falco' },
  { src: '/img/progetti/tramontana-etichetta/02-640.jpg', alt: 'Bottiglia Tramontana' },
];

export function instagramBlock() {
  const ig = site.instagram;
  return `<section class="section ig" aria-labelledby="ig-title">
  <div class="wrap">
    <a class="ig-card" href="${ig.url}" rel="noopener" target="_blank" data-cursor="Segui">
      <div class="ig-side">
        <p class="label">Instagram</p>
        <div class="ig-profile">
          <span class="ig-avatar">${markSvg('ig-mark')}</span>
          <span class="ig-id"><b>@${esc(ig.handle)}</b><span>Studio62 · Brand · Web · Social</span></span>
        </div>
        <h2 class="ig-title" id="ig-title">Segui il lavoro<br>mentre prende forma<span class="dot" aria-hidden="true"></span></h2>
        <p class="ig-text">Progetti, anteprime e dietro le quinte, pubblicati lì per primi.</p>
        <span class="btn btn-light ig-btn">Segui su Instagram ${arrow}</span>
      </div>
      <ul class="ig-grid" aria-hidden="true">${igTiles
        .map((t) => `<li class="ig-tile${t.reel ? ' is-reel' : ''}"><img src="${t.src}" alt="" loading="lazy" decoding="async"></li>`)
        .join('')}</ul>
    </a>
  </div>
</section>`;
}
