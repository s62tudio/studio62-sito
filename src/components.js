import { tipi, social } from './config.js';
import { esc, picture, thumbUrl, arrow } from './lib.js';

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
        <h2 class="h2">Le pagine che curo<span class="dot" aria-hidden="true"></span></h2>
        <p class="lead">Ogni giorno, per attività diverse. Il modo migliore per vederle è aprirle.</p>
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
