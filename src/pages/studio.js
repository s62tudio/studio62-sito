import { site, clienti } from '../config.js';
import { layout, ctaBlock } from '../layout.js';
import { esc, markSvg } from '../lib.js';

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
    <p class="lead studio-lead">Studio62 sono io, ${esc(site.owner)}. Il nome è un codice con le mie iniziali: F è la sesta lettera dell'alfabeto, B la seconda.</p>
  </div>
</section>

<section class="section section-tight">
  <div class="wrap studio-grid">
    <figure class="portrait">
      <div class="portrait-ph">${markSvg('portrait-mark')}<span class="label">Foto in arrivo</span></div>
    </figure>
    <div class="studio-text">
      <p class="big-p">Disegno identità, stampa, siti e social per attività che vogliono farsi notare: una cantina, un rivenditore di macchine agricole, una squadra di calcio, un barbiere, una palestra.</p>
      <p>Mi piacciono i progetti in cui ogni scelta ha un motivo. Prima di disegnare ascolto, poi propongo una direzione sola, ragionata, e la porto fino in fondo: dal file per la stampa al sito online.</p>
      <ul class="facts">
        <li><b>Da remoto, ovunque</b><span>Lavoro dal mio computer, ovunque mi trovi. Ci sentiamo quando serve, senza appuntamenti in agenzia.</span></li>
        <li><b>Un solo referente</b><span>Parli sempre con chi fa il lavoro. Niente passaggi di mano, niente messaggi che si perdono.</span></li>
        <li><b>Con altri professionisti, quando serve</b><span>Per la fotografia lavoro con Giovanni Glorioso, per l'illustrazione con @bat_artattack.</span></li>
      </ul>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="sec-head">
      <p class="label">Clienti</p>
      <div><p class="clients-big">${clienti.map(esc).join('<span class="dot" aria-hidden="true"></span> ')}<span class="dot" aria-hidden="true"></span></p></div>
    </div>
  </div>
</section>

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
      mainEntity: { '@type': 'Person', name: site.owner, worksFor: { '@type': 'Organization', name: 'Studio62' } },
    },
  });
}
