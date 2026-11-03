import { site, servizi } from '../config.js';
import { layout } from '../layout.js';
import { esc } from '../lib.js';

export default function contatti() {
  const body = `
<section class="page-hero contact-hero">
  <div class="wrap">
    <p class="label">Contatti</p>
    <h1 class="page-title">Arriviamo<br>al punto<span class="dot" aria-hidden="true"></span></h1>
  </div>
</section>
<section class="section section-tight">
  <div class="wrap contact-grid">
    <div class="contact-side">
      <p class="lead">Raccontami cosa fai e cosa ti serve. Ti rispondo personalmente.</p>
      <div class="contact-ways">
        <div><span class="label">Email</span>
          <button class="copy copy-dark" type="button" data-copy="${site.email}"><span class="copy-text">${site.email}</span><span class="copy-hint" aria-live="polite">Copia</span></button>
        </div>
        <div><span class="label">Instagram</span><a class="link" href="${site.instagram.url}" rel="noopener" target="_blank">@${site.instagram.handle}</a></div>
      </div>
    </div>
    <form class="form" name="contatti" method="POST" data-netlify="true" netlify-honeypot="sito-web" novalidate>
      <input type="hidden" name="form-name" value="contatti">
      <p class="hp"><label>Non compilare <input name="sito-web" tabindex="-1" autocomplete="off"></label></p>
      <div class="field"><label for="f-nome">Nome</label><input id="f-nome" name="nome" autocomplete="name" required></div>
      <div class="field"><label for="f-email">Email</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
      <fieldset class="field">
        <legend>Di cosa hai bisogno?</legend>
        <div class="chips">${servizi
          .map((s) => `<label class="chip-check"><input type="checkbox" name="servizi" value="${esc(s.nome)}"><span>${esc(s.nome)}</span></label>`)
          .join('')}<label class="chip-check"><input type="checkbox" name="servizi" value="Non lo so ancora"><span>Non lo so ancora</span></label></div>
      </fieldset>
      <div class="field"><label for="f-msg">Raccontami il progetto</label><textarea id="f-msg" name="messaggio" rows="5" required></textarea></div>
      <label class="consent"><input type="checkbox" name="privacy" required> <span>Ho letto l'<a href="/privacy/">informativa privacy</a>.</span></label>
      <button class="btn" type="submit">Invia</button>
      <p class="form-status" role="status" aria-live="polite"></p>
    </form>
  </div>
</section>
`;
  return layout({
    path: '/contatti/',
    title: 'Contatti',
    description: 'Hai un progetto? Scrivi a Studio62: brand identity, grafica, siti web e social.',
    body,
  });
}
