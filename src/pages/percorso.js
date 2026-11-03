import { site, percorso } from '../config.js';
import { layout } from '../layout.js';
import { esc, arrow } from '../lib.js';

export default function percorsoPage() {
  const p = percorso;
  const body = `
<section class="page-hero">
  <div class="wrap">
    <p class="label">Percorso · Profilo IT</p>
    <h1 class="page-title page-title-long">Network &amp;<br><span class="nowrap">Cybersecurity<span class="dot" aria-hidden="true"></span></span></h1>
    <p class="lead">${esc(p.intro)}</p>
  </div>
</section>

<section class="section section-tight">
  <div class="wrap">
    <div class="sec-head">
      <p class="label">Formazione</p>
      <div class="timeline">
        ${p.formazione
          .map(
            (f) => `<article class="tl-item">
          <span class="tl-when">${esc(f.periodo)}</span>
          <div class="tl-body">
            <h2 class="tl-title">${esc(f.titolo)}</h2>
            <p class="tl-org">${esc(f.ente)}</p>
            <p>${esc(f.dettagli)}</p>
            ${f.moduli.length ? `<ul class="tags">${f.moduli.map((m) => `<li>${esc(m)}</li>`).join('')}</ul>` : ''}
          </div>
        </article>`
          )
          .join('')}
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="sec-head">
      <p class="label">Competenze</p>
      <div><h2 class="h2">Dalla rete al pixel<span class="dot" aria-hidden="true"></span></h2></div>
    </div>
    <div class="skills">
      ${p.competenze
        .map((c) => `<div class="skill-group"><h3>${esc(c.area)}</h3><ul class="tags">${c.voci.map((v) => `<li>${esc(v)}</li>`).join('')}</ul></div>`)
        .join('')}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="sec-head">
      <p class="label">Certificazioni</p>
      <ul class="certs">
        ${p.certificazioni.map((c) => `<li><span class="cert-name">${esc(c.nome)}</span><span class="label">${esc(c.ente)}</span></li>`).join('')}
      </ul>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="sec-head">
      <p class="label">Esperienze</p>
      <div class="timeline">
        ${p.esperienze
          .map(
            (e) => `<article class="tl-item${e.futuro ? ' is-next' : ''}">
          <span class="tl-when">${esc(e.periodo)}</span>
          <div class="tl-body">
            <h2 class="tl-title">${esc(e.titolo)}</h2>
            <p class="tl-org">${esc(e.ente)}</p>
            ${e.voci.length ? `<ul class="tl-list">${e.voci.map((v) => `<li>${esc(v)}</li>`).join('')}</ul>` : ''}
            ${e.link ? `<a class="link" href="${e.link}">Guarda i lavori ${arrow}</a>` : ''}
          </div>
        </article>`
          )
          .join('')}
      </div>
    </div>
  </div>
</section>

<section class="cta">
  <div class="wrap cta-inner">
    <p class="label">Aziende e team IT</p>
    <h2 class="cta-title">Cerchi un profilo<br>junior in ambito IT<span class="dot" aria-hidden="true"></span></h2>
    <p class="cta-note">${esc(p.disponibilita)}</p>
    <div class="cta-actions">
      <a class="btn btn-light" href="/contatti/?tipo=lavoro">Contattami ${arrow}</a>
      <button class="copy" type="button" data-copy="${site.email}"><span class="copy-text">${site.email}</span><span class="copy-hint" aria-live="polite">Copia</span></button>
    </div>
  </div>
</section>
`;
  return layout({
    path: '/percorso/',
    title: 'Percorso · Network & Cybersecurity',
    description: `${site.owner}, studente ITS in Network & Cybersecurity a Benevento: formazione, competenze in reti e sicurezza, certificazioni Cisco CCNA ed esperienze.`,
    body,
    jsonld: {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      mainEntity: {
        '@type': 'Person',
        name: site.owner,
        jobTitle: 'Studente ITS Network & Cybersecurity',
        url: site.url + '/percorso/',
        alumniOf: p.formazione.map((f) => ({ '@type': 'EducationalOrganization', name: f.ente })),
        knowsAbout: p.competenze.flatMap((c) => c.voci),
        hasCredential: p.certificazioni.map((c) => ({ '@type': 'EducationalOccupationalCredential', name: `${c.ente} ${c.nome}` })),
      },
    },
  });
}
