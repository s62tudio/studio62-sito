import { progetti } from '../progetti.js';
import { layout, ctaBlock } from '../layout.js';
import { workList, socialBlock, instagramBlock } from '../components.js';

export default function lavori() {
  const body = `
<section class="page-hero">
  <div class="wrap">
    <p class="label">Portfolio</p>
    <h1 class="page-title">Lavori<span class="dot" aria-hidden="true"></span> <sup class="count">${progetti.length}</sup></h1>
    <p class="lead">Identità, stampa, siti web e social. Ogni progetto racconta cosa chiedeva il cliente e come ci siamo arrivati.</p>
  </div>
</section>
<section class="section section-tight">
  <div class="wrap">${workList(progetti, { filterable: true })}</div>
</section>
${socialBlock()}
${instagramBlock()}
${ctaBlock('Il prossimo progetto', 'potrebbe essere il tuo')}
`;
  return layout({
    path: '/lavori/',
    title: 'Lavori',
    description: 'I progetti di Studio62: maglie da gioco, etichette, siti web e pagine social per attività vere.',
    body,
  });
}
