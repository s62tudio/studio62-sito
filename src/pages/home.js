import { site, collaborazioni, metodo, clienti, percorso } from '../config.js';
import { progetti } from '../progetti.js';
import { layout } from '../layout.js';
import { workList, socialBlock } from '../components.js';
import { esc, arrow } from '../lib.js';

export default function home() {
  const manifesto =
    'Studio come si proteggono reti e sistemi. Nel frattempo progetto siti, etichette e comunicazione per attività vere. Due modi diversi di arrivare allo stesso punto: fare le cose bene, fino in fondo.';
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
      <p class="hero-lead">Sono ${esc(site.owner)}: studente ITS in Network &amp; Cybersecurity, con un diploma in grafica. Con Studio62 realizzo siti, grafica e comunicazione per attività del territorio.</p>
      <div class="hero-actions">
        <a class="btn" href="/lavori/">Guarda i lavori ${arrow}</a>
        <a class="link" href="/percorso/">Il mio percorso IT</a>
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

<section class="section it-block">
  <div class="wrap">
    <div class="sec-head">
      <p class="label">Profilo IT</p>
      <div>
        <h2 class="h2">Network &amp; Cybersecurity<span class="dot" aria-hidden="true"></span></h2>
        <p class="lead">Al corso ITS dell'ICT Campus di Benevento studio reti, sistemi e sicurezza: 1.800 ore tra aula, laboratorio e stage in azienda.</p>
      </div>
    </div>
    <div class="it-grid">
      ${percorso.competenze
        .slice(0, 2)
        .map((c) => `<div class="skill-group"><h3>${esc(c.area)}</h3><ul class="tags">${c.voci.map((v) => `<li>${esc(v)}</li>`).join('')}</ul></div>`)
        .join('')}
      <div class="skill-group"><h3>Certificazioni</h3><ul class="cert-mini">${percorso.certificazioni.map((c) => `<li>${esc(c.ente)} · ${esc(c.nome)}</li>`).join('')}</ul></div>
    </div>
    <p class="more"><a class="link" href="/percorso/">Formazione, competenze ed esperienze ${arrow}</a></p>
  </div>
</section>

<section class="section manifesto">
  <div class="wrap manifesto-inner">
    <p class="label">Studio62</p>
    <div>
      <p class="manifesto-text">${words}</p>
      <p class="more"><a class="link" href="/studio/">Perché 62 ${arrow}</a></p>
    </div>
  </div>
</section>

${socialBlock()}

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

<section class="cta">
  <div class="wrap cta-inner">
    <p class="label">Contatti</p>
    <h2 class="cta-title">Arriviamo<br>al punto<span class="dot" aria-hidden="true"></span></h2>
    <div class="cta-split">
      <a class="cta-card" href="/contatti/?tipo=progetto" data-cursor="Scrivi">
        <span class="label">Attività</span>
        <span class="cta-card-title">Hai un progetto?</span>
        <span class="cta-card-line">Un sito, una grafica, una campagna. ${arrow}</span>
      </a>
      <a class="cta-card" href="/contatti/?tipo=lavoro" data-cursor="Scrivi">
        <span class="label">Aziende e team IT</span>
        <span class="cta-card-title">Cerchi un profilo junior?</span>
        <span class="cta-card-line">Network &amp; Cybersecurity, diploma ITS nel 2027. ${arrow}</span>
      </a>
    </div>
  </div>
</section>
`;

  return layout({
    path: '/',
    title: 'Studio62 · Francesco Battaglia',
    description: site.description,
    body,
    bodyClass: 'is-home',
    jsonld: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: site.owner,
      url: site.url,
      jobTitle: 'Studente ITS Network & Cybersecurity · Web e graphic designer',
      sameAs: [site.instagram.url],
      brand: { '@type': 'Brand', name: 'Studio62', logo: site.url + '/img/logo/studio62-marchio-scuro.svg' },
      knowsAbout: [...percorso.competenze.flatMap((c) => c.voci), ...collaborazioni.map((s) => s.nome)],
    },
  });
}
