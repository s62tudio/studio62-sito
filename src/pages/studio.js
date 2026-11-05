import { site, clienti, percorso } from '../config.js';
import { layout, ctaBlock } from '../layout.js';
import { esc, markSvg } from '../lib.js';

// Box finale con formazione, competenze, certificazioni ed esperienze (dati in config.js → percorso)
function backgroundBox() {
  const p = percorso;
  const esperienze = p.esperienze.filter((e) => !e.futuro && !e.link);
  return `<section class="section section-tight">
  <div class="wrap">
    <aside class="bg-box" aria-labelledby="bg-title">
      <div class="bg-head">
        <p class="label">Background</p>
        <h2 class="bg-title" id="bg-title">Formazione e competenze<span class="dot" aria-hidden="true"></span></h2>
      </div>
      <div class="bg-grid">
        <div class="bg-col">
          <h3 class="label">Formazione</h3>
          <ul class="bg-list">${p.formazione
            .map((f) => `<li><b>${esc(f.titolo)}</b><span>${esc(f.ente)} · ${esc(f.periodo)}</span></li>`)
            .join('')}</ul>
        </div>
        <div class="bg-col">
          <h3 class="label">Esperienze</h3>
          <ul class="bg-list">${esperienze
            .map((e) => `<li><b>${esc(e.titolo)}</b><span>${esc(e.ente)} · ${esc(e.periodo)}</span></li>`)
            .join('')}</ul>
        </div>
        <div class="bg-col">
          <h3 class="label">Certificazioni</h3>
          <ul class="bg-list">${p.certificazioni.map((c) => `<li><b>${esc(c.nome)}</b><span>${esc(c.ente)}</span></li>`).join('')}</ul>
        </div>
        <div class="bg-col">
          <h3 class="label">Competenze</h3>
          <div class="bg-skills">${p.competenze
            .map((c) => `<p><span>${esc(c.area)}</span> ${c.voci.map(esc).join(', ')}</p>`)
            .join('')}</div>
        </div>
      </div>
    </aside>
  </div>
</section>`;
}

export default function studio() {
  const body = `
<section class="page-hero studio-hero">
  <div class="wrap">
    <p class="label">Studio</p>
    <h1 class="sr-only">Studio62 è Francesco Battaglia</h1>
    <div class="code62" aria-hidden="true">
      <button type="button" class="glyph" data-to="F"><span class="g-front">6</span><span class="g-back">F</span><small>F · sesta lettera</small></button>
      <button type="button" class="glyph" data-to="B"><span class="g-front">2</span><span class="g-back">B</span><small>B · seconda lettera</small></button>
      <span class="code-dot dot"></span>
    </div>
    <p class="lead studio-lead">Studio62 sono io, ${esc(site.owner)}.<br>Il nome è un codice con le mie iniziali.</p>
  </div>
</section>

<section class="section section-tight">
  <div class="wrap studio-grid">
    <figure class="portrait">
      <div class="portrait-ph">${markSvg('portrait-mark')}<span class="label">Foto in arrivo</span></div>
    </figure>
    <div class="studio-text">
      <p class="big-p">Studio62 è nato quasi per caso, da un primo lavoro per un'attività vicino casa.</p>
      <p>Da lì il passaparola ha fatto il resto. Oggi lavoro con realtà molto diverse tra loro, ma con una cosa in comune: hanno una storia che merita di essere raccontata bene. Il mio compito è trovare il modo più chiaro per farlo, sulla carta e sullo schermo.</p>
      <ul class="facts">
        <li><b>Grafica e tecnica insieme</b><span>Un sito non è solo bello: va pubblicato, configurato e tenuto in ordine. Curo anche quella parte.</span></li>
        <li><b>Un solo referente</b><span>Parli sempre con chi fa il lavoro. Niente passaggi di mano, niente messaggi che si perdono.</span></li>
        <li><b>Da remoto, ovunque</b><span>Lavoro dal mio computer, ovunque mi trovi. Ci sentiamo quando serve.</span></li>
        <li><b>Con altri professionisti, quando serve</b><span>Per fotografia e illustrazione mi affianco a professionisti del settore.</span></li>
      </ul>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="sec-head">
      <p class="label">Clienti</p>
      <div><p class="clients-big">${clienti.map((c) => `<span class="nowrap">${esc(c)}<span class="dot" aria-hidden="true"></span></span>`).join(' ')}</p></div>
    </div>
  </div>
</section>

${backgroundBox()}

${ctaBlock('Lavoriamo insieme?', 'Partiamo da un messaggio')}
`;
  return layout({
    path: '/studio/',
    title: 'Studio',
    description: `Studio62 è ${site.owner}: 6 = F, 2 = B. Uno studio creativo indipendente che lavora da remoto, con un solo referente dall'inizio alla fine.`,
    body,
    jsonld: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'Studio',
      mainEntity: {
        '@type': 'Person',
        name: site.owner,
        worksFor: { '@type': 'Organization', name: 'Studio62' },
        hasCredential: percorso.certificazioni.map((c) => ({ '@type': 'EducationalOccupationalCredential', name: `${c.ente} ${c.nome}` })),
      },
    },
  });
}
