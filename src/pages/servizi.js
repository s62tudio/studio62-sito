import { servizi, metodo, faq } from '../config.js';
import { progetti } from '../progetti.js';
import { layout, ctaBlock } from '../layout.js';
import { esc, arrow } from '../lib.js';

export default function serviziPage() {
  const body = `
<section class="page-hero">
  <div class="wrap">
    <p class="label">Servizi</p>
    <h1 class="page-title">Cosa faccio<span class="dot" aria-hidden="true"></span></h1>
    <p class="lead">Sei servizi che si parlano tra loro. Puoi chiederne uno solo, o costruire tutta la tua immagine da zero: logo, stampa, sito e social con la stessa voce.</p>
  </div>
</section>

<section class="section section-tight">
  <div class="wrap">
    <div class="svc-detail">
      ${servizi
        .map((s) => {
          const ex = s.esempio ? progetti.find((p) => p.slug === s.esempio) : null;
          return `<article class="svc-item" id="${s.id}">
        <h2 class="svc-big">${esc(s.nome)}<span class="dot" aria-hidden="true"></span></h2>
        <div class="svc-body">
          <p class="svc-phrase">${esc(s.frase)}</p>
          <ul class="svc-includes">${s.include.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
          ${ex ? `<a class="link" href="/lavori/${ex.slug}/">Esempio: ${esc(ex.cliente)} ${arrow}</a>` : s.id === 'social' ? `<a class="link" href="/lavori/#social">Le pagine che curo ${arrow}</a>` : ''}
        </div>
      </article>`;
        })
        .join('')}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="sec-head">
      <p class="label">Metodo</p>
      <div><h2 class="h2">Come lavoriamo insieme<span class="dot" aria-hidden="true"></span></h2></div>
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

${ctaBlock('Non sai di cosa hai bisogno?', 'Raccontami cosa fai')}
`;
  return layout({
    path: '/servizi/',
    title: 'Servizi',
    description: 'Brand identity, grafica e stampa, siti web, SEO, social media e comunicazione digitale, spiegati in modo semplice.',
    body,
    jsonld: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: servizi.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.nome, description: s.frase })),
    },
  });
}
