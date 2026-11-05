import { site, collaborazioni, metodo } from '../config.js';
import { progetti } from '../progetti.js';
import { layout, ctaBlock } from '../layout.js';
import { workList, socialBlock, instagramBlock } from '../components.js';
import { esc, arrow } from '../lib.js';

// Immagini che scorrono nello smartphone accanto al titolo
const heroSlides = [
  { slug: 'falchi-cautano-maglia', file: '01-640.jpg', cliente: 'ASD Falchi Cautano', cosa: 'Maglia da gioco' },
  { slug: 'capo-tre-venti-sito', file: '04-640.jpg', cliente: 'Capo Tre Venti', cosa: 'Sito web' },
  { slug: 'tramontana-etichetta', file: '01-640.jpg', cliente: 'Capo Tre Venti', cosa: 'Etichetta Tramontana' },
  { slug: 'feltagrifer-sito', file: '04-640.jpg', cliente: 'Feltagrifer', cosa: 'Sito web' },
  { slug: 'falchi-cautano-maglia', file: '06-640.jpg', cliente: 'ASD Falchi Cautano', cosa: 'Dettaglio manica' },
  { slug: 'tramontana-etichetta', file: '02-640.jpg', cliente: 'Capo Tre Venti', cosa: 'Etichetta Tramontana' },
];

export default function home() {
  const manifesto =
    "Ogni progetto parte da un ascolto e arriva a una scelta. Si toglie il superfluo finché resta solo ciò che serve, e lo si porta fino in fondo: dal file per la stampa al sito online. Un solo referente, dall'inizio alla fine.";
  const words = manifesto
    .split(' ')
    .map((w) => `<span class="w">${esc(w)}</span>`)
    .join(' ');

  const body = `
<section class="hero">
  <div class="wrap">
    <h1 class="hero-title" aria-label="Idee che arrivano al punto.">
      <span class="line" aria-hidden="true"><span>Idee che</span></span>
      <span class="line" aria-hidden="true"><span>arrivano</span></span>
      <span class="line" aria-hidden="true"><span>al punto<span class="dot hero-dot"></span></span></span>
    </h1>
    <div class="hero-visual" aria-hidden="true">
      <div class="hero-phone frame-phone is-dark"><div class="fp-bezel"><div class="fp-screen"><div class="fp-status"><span>9:41</span><span class="fp-island"></span><span class="fp-icons"><i></i><i></i></span></div><div class="fp-view hs-wrap">${heroSlides.map((sl, i) => `<a class="hs${i === 0 ? ' on' : ''}" href="/lavori/${sl.slug}/" tabindex="-1"><img src="/img/progetti/${sl.slug}/${sl.file}" alt=""><span class="hs-cap"><b>${esc(sl.cliente)}</b>${esc(sl.cosa)}</span></a>`).join('')}<span class="hs-bars">${heroSlides.map((_, i) => `<i${i === 0 ? ' class="on"' : ''}></i>`).join('')}</span></div></div></div></div>
    </div>
    <div class="hero-foot">
      <p class="hero-lead">Studio62 è uno studio creativo. Siti web, grafica e progetti di comunicazione per attività che vogliono farsi notare.</p>
      <div class="hero-actions">
        <a class="btn" href="/lavori/">Guarda i lavori ${arrow}</a>
        <a class="link" href="/contatti/">Inizia un progetto</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="sec-head">
      <p class="label">Lavori selezionati</p>
      <div><h2 class="h2">Progetti veri, per attività vere<span class="dot" aria-hidden="true"></span></h2></div>
    </div>
    ${workList(progetti)}
    <p class="more"><a class="link" href="/lavori/">Tutti i lavori ${arrow}</a></p>
  </div>
</section>


<section class="section manifesto">
  <div class="wrap manifesto-inner">
    <p class="label">Approccio</p>
    <div>
      <p class="manifesto-text">${words}</p>
      <p class="more"><a class="link" href="/studio/">Chi c'è dietro Studio62 ${arrow}</a></p>
    </div>
  </div>
</section>

${socialBlock()}

${instagramBlock()}

<section class="section">
  <div class="wrap">
    <div class="sec-head">
      <p class="label">Collaborazioni</p>
      <div><h2 class="h2">Cosa posso fare per te<span class="dot" aria-hidden="true"></span></h2></div>
    </div>
    <ul class="svc-list">
      ${collaborazioni
        .map(
          (s) => `<li><a class="svc-row" href="/collaborazioni/#${s.id}">
        <span class="svc-name">${esc(s.nome)}</span>
        <span class="svc-line">${esc(s.frase)}</span>
        <span class="work-arrow">${arrow}</span>
      </a></li>`
        )
        .join('')}
    </ul>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="sec-head">
      <p class="label">Metodo</p>
      <div><h2 class="h2">Quattro passi, nessuna sorpresa<span class="dot" aria-hidden="true"></span></h2></div>
    </div>
    <ol class="steps">
      ${metodo.map((m, i) => `<li><span class="step-n">${String(i + 1).padStart(2, '0')}</span><h3>${esc(m.nome)}</h3><p>${esc(m.testo)}</p></li>`).join('')}
    </ol>
  </div>
</section>

${ctaBlock()}
`;

  return layout({
    path: '/',
    title: 'Studio62 · Studio creativo',
    description: site.description,
    body,
    bodyClass: 'is-home',
    jsonld: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Studio62',
      url: site.url,
      logo: site.url + '/img/logo/studio62-marchio-scuro.svg',
      description: site.description,
      founder: { '@type': 'Person', name: site.owner },
      email: site.email,
      sameAs: [site.instagram.url],
      areaServed: 'IT',
      knowsAbout: collaborazioni.map((s) => s.nome),
    },
  });
}
