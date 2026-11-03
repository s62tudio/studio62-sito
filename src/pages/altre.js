import { site } from '../config.js';
import { layout } from '../layout.js';

export function privacy() {
  const body = `
<section class="page-hero">
  <div class="wrap">
    <p class="label">Informativa</p>
    <h1 class="page-title">Privacy<span class="dot" aria-hidden="true"></span></h1>
  </div>
</section>
<section class="section section-tight">
  <div class="wrap prose">
    <p class="note">DA COMPLETARE PRIMA DELLA PUBBLICAZIONE. Questo testo è un segnaposto: l'informativa va scritta con i dati reali del titolare (nome, eventuale partita IVA, recapito) e verificata.</p>
    <h2>Quali dati raccoglie questo sito</h2>
    <p>Il modulo contatti raccoglie nome, email e il testo del messaggio, solo per rispondere alla richiesta.</p>
    <h2>Titolare</h2>
    <p>${site.owner} · ${site.email}</p>
  </div>
</section>`;
  return layout({ path: '/privacy/', title: 'Privacy', description: 'Informativa privacy di Studio62.', body, noindex: true });
}

export function notFound() {
  const body = `
<section class="page-hero">
  <div class="wrap">
    <p class="label">Errore 404</p>
    <h1 class="page-title">Qui non c'è niente<span class="dot" aria-hidden="true"></span></h1>
    <p class="lead">La pagina che cerchi non esiste o è stata spostata.</p>
    <p class="more"><a class="btn" href="/">Torna alla home</a></p>
  </div>
</section>`;
  return layout({ path: '/404/', title: 'Pagina non trovata', description: 'Pagina non trovata.', body, noindex: true });
}
