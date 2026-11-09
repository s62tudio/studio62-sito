import { collaborazioni, metodo, faq } from '../config.js';
import { progetti } from '../progetti.js';
import { layout, ctaBlock } from '../layout.js';
import { esc, arrow } from '../lib.js';

function esempio(c) {
  if (c.esempio === 'social') return `<a class="link" href="/progetti/#social">Progetti di comunicazione ${arrow}</a>`;
  const ex = c.esempio ? progetti.find((p) => p.slug === c.esempio) : null;
  return ex ? `<a class="link" href="/progetti/${ex.slug}/">Esempio: ${esc(ex.cliente)} · ${esc(ex.breve)} ${arrow}</a>` : '';
}

export default function collaborazioniPage() {
  const body = `
<section class="page-hero">
  <div class="wrap">
    <p class="label">Collaborazioni</p>
    <h1 class="page-title">Progetti<br>su misura<span class="dot" aria-hidden="true"></span></h1>
    <p class="lead">Studio62 collabora con attività e piccole realtà su progetti singoli, con un obiettivo, dei tempi e una consegna chiari. Un sito, un'etichetta, una divisa, una campagna per un'apertura.</p>
  </div>
</section>

<section class="section section-tight">
  <div class="wrap">
    <div class="svc-detail">
      ${collaborazioni
        .map(
          (c) => `<article class="svc-item" id="${c.id}">
        <h2 class="svc-big">${esc(c.nome)}<span class="dot" aria-hidden="true"></span></h2>
        <div class="svc-body">
          <p class="svc-phrase">${esc(c.frase)}</p>
          <ul class="svc-includes">${c.include.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
          ${esempio(c)}
        </div>
      </article>`
        )
        .join('')}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="sec-head">
      <p class="label">Metodo</p>
      <div><h2 class="h2">Come funziona<span class="dot" aria-hidden="true"></span></h2></div>
    </div>
    <ol class="steps">
      ${metodo.map((m, i) => `<li><span class="step-n">${String(i + 1).padStart(2, '0')}</span><h3>${esc(m.nome)}</h3><p>${esc(m.testo)}</p></li>`).join('')}
    </ol>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="sec-head">
      <p class="label">Domande</p>
      <div><h2 class="h2">Prima di iniziare<span class="dot" aria-hidden="true"></span></h2></div>
    </div>
    <div class="faq">
      ${faq.map((f) => `<details><summary>${esc(f.d)}</summary><p>${esc(f.r)}</p></details>`).join('')}
    </div>
  </div>
</section>

${ctaBlock('Hai un progetto in mente?', 'Raccontamelo')}
`;
  return layout({
    path: '/collaborazioni/',
    title: 'Collaborazioni',
    description: 'Siti web, grafica e stampa, identità visiva e progetti di comunicazione: collaborazioni su progetti singoli per attività e piccole realtà.',
    body,
  });
}
