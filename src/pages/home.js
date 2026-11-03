import { site, servizi, metodo, clienti } from '../config.js';
import { progetti } from '../progetti.js';
import { layout, ctaBlock } from '../layout.js';
import { workList, socialBlock } from '../components.js';
import { esc, arrow } from '../lib.js';

export default function home() {
  const manifesto =
    "Non sono un'agenzia. Sono una persona che ascolta, disegna, prova e riprova finché l'idea non arriva al punto. Un solo referente, dall'inizio alla fine.";
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
    <div class="hero-foot">
      <p class="hero-lead">Studio62 è lo studio creativo di ${esc(site.owner)}. Brand identity, grafica, siti web e social per attività che vogliono farsi notare.</p>
      <div class="hero-actions">
        <a class="btn" href="/lavori/">Guarda i lavori ${arrow}</a>
        <a class="link" href="/contatti/">Inizia un progetto</a>
      </div>
    </div>
    <p class="clients"><span class="label">Hanno lavorato con me</span> <span>${clienti.map(esc).join('<i aria-hidden="true">·</i>')}</span></p>
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
    <p class="label">Studio</p>
    <div>
      <p class="manifesto-text">${words}</p>
      <p class="more"><a class="link" href="/studio/">Chi c'è dietro Studio62 ${arrow}</a></p>
    </div>
  </div>
</section>

${socialBlock()}

<section class="section">
  <div class="wrap">
    <div class="sec-head">
      <p class="label">Servizi</p>
      <div><h2 class="h2">Cosa posso fare per te<span class="dot" aria-hidden="true"></span></h2></div>
    </div>
    <ul class="svc-list">
      ${servizi
        .map(
          (s) => `<li><a class="svc-row" href="/servizi/#${s.id}">
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
    title: 'Studio62 · Brand, web e social',
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
      knowsAbout: servizi.map((s) => s.nome),
    },
  });
}
