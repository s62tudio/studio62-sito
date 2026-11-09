import { site } from '../config.js';
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
    <p class="lead studio-lead">Studio62 sono io, ${esc(site.owner)}.<br>Il nome è un codice con le mie iniziali.</p>
  </div>
</section>

<section class="section section-tight">
  <div class="wrap studio-grid">
    <figure class="portrait">
      <picture>
        <source type="image/webp" srcset="/img/studio/scrivania-640.webp 640w, /img/studio/scrivania-1200.webp 1200w, /img/studio/scrivania-1800.webp 1800w" sizes="(max-width: 900px) 100vw, 40vw">
        <img class="portrait-img" src="/img/studio/scrivania-1200.jpg" srcset="/img/studio/scrivania-640.jpg 640w, /img/studio/scrivania-1200.jpg 1200w, /img/studio/scrivania-1800.jpg 1800w" sizes="(max-width: 900px) 100vw, 40vw" width="1200" height="1500" alt="La scrivania di Studio62: il portatile con il sito, la bozza del marchio 62., la bottiglia di Tramontana e la maglia dei Falchi" loading="lazy">
      </picture>
    </figure>
    <div class="studio-text">
      <p class="big-p">Studio62 è nato quasi per caso, da un primo progetto per un'attività vicino casa.</p>
      <p>Da lì il passaparola ha fatto il resto. Oggi collaboro con realtà molto diverse tra loro, ma con una cosa in comune: hanno una storia che merita di essere raccontata bene.<br>Il mio compito è trovare il modo più chiaro per farlo, sulla carta e sullo schermo.</p>
      <ul class="facts">
        <li><b>Grafica e informatica insieme</b><span>Un sito non è solo bello: va pubblicato, configurato e protetto. Grazie alle competenze in reti e sicurezza informatica, curo con la stessa attenzione anche la parte tecnica di ogni progetto.</span></li>
        <li><b>Un solo referente</b><span>Parli sempre con chi segue il progetto. Niente passaggi di mano, niente messaggi che si perdono.</span></li>
        <li><b>Da remoto, ovunque</b><span>Basta un computer, mi trovi ovunque. Ci sentiamo quando serve.</span></li>
        <li><b>Con altri professionisti, quando serve</b><span>Per fotografia e illustrazione mi affianco a professionisti del settore.</span></li>
      </ul>
    </div>
  </div>
</section>

${ctaBlock('Iniziamo un progetto?', 'Partiamo da un messaggio')}
`;
  return layout({
    path: '/studio/',
    title: 'Studio',
    description: `Studio62 è ${site.owner}: 6 = F, 2 = B. Il Creative Showcase di siti, grafica e comunicazione, seguiti da remoto con un solo referente dall'inizio alla fine.`,
    body,
    jsonld: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'Studio',
      mainEntity: {
        '@type': 'Person',
        name: site.owner,
        worksFor: { '@type': 'Organization', name: 'Studio62' },
      },
    },
  });
}
