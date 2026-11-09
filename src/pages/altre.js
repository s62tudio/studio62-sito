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
    <p>Questa pagina spiega quali dati personali raccoglie il sito di Studio62, perché e come vengono trattati, secondo il Regolamento europeo 2016/679 (GDPR).</p>

    <h2>Chi tratta i dati</h2>
    <p>Il titolare del trattamento è ${site.owner}, che cura Studio62. Per qualsiasi domanda sui tuoi dati puoi scrivere a <a href="mailto:${site.email}">${site.email}</a>.</p>

    <h2>Quali dati raccoglie il sito</h2>
    <p><b>Modulo contatti.</b> Se compili il modulo, vengono raccolti il nome, l'indirizzo email, gli argomenti che selezioni e il testo del messaggio. Lo stesso vale se scrivi direttamente via email.</p>
    <p><b>Dati tecnici.</b> Come ogni sito, il servizio che lo ospita registra in automatico alcuni dati tecnici delle visite (per esempio l'indirizzo IP e il tipo di browser), che servono a far funzionare il sito e a proteggerlo.</p>

    <h2>Perché vengono usati</h2>
    <p>I dati del modulo servono solo a leggere la tua richiesta e a risponderti. La base giuridica è la tua richiesta stessa: senza questi dati non sarebbe possibile risponderti. Non vengono usati per pubblicità, non vengono venduti né ceduti ad altri.</p>

    <h2>Chi altro può vederli</h2>
    <p>Per far funzionare il sito vengono usati alcuni servizi esterni, che trattano i dati solo per conto di Studio62:</p>
    <ul>
      <li><b>FormSubmit</b> inoltra i messaggi del modulo alla casella email di Studio62.</li>
      <li><b>Google</b> (Gmail) ospita la casella email in cui arrivano i messaggi; dai server di Google viene caricato anche uno dei caratteri tipografici del sito.</li>
      <li><b>Cloudflare</b> ospita il sito.</li>
    </ul>
    <p>Alcuni di questi servizi possono trattare i dati anche fuori dall'Unione europea, con le garanzie previste dal GDPR.</p>

    <h2>Per quanto tempo</h2>
    <p>I messaggi vengono conservati per il tempo necessario a rispondere e a seguire l'eventuale progetto, e comunque non oltre 24 mesi dall'ultimo contatto, salvo diversa richiesta da parte tua.</p>

    <h2>Cookie</h2>
    <p>Il sito non usa cookie di profilazione né strumenti di statistica che ti tracciano. Usa solo una memoria tecnica del browser per far funzionare l'animazione di passaggio tra le pagine, che non contiene dati personali.</p>

    <h2>I tuoi diritti</h2>
    <p>Puoi chiedere in qualsiasi momento di vedere i dati che ti riguardano, di correggerli o di cancellarli, di limitarne l'uso o di opporti al trattamento, scrivendo a <a href="mailto:${site.email}">${site.email}</a>. Se ritieni che i tuoi dati siano trattati in modo scorretto puoi rivolgerti al Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" rel="noopener" target="_blank">garanteprivacy.it</a>).</p>

    <p class="prose-date">Ultimo aggiornamento: 9 novembre 2026</p>
  </div>
</section>`;
  return layout({ path: '/privacy/', title: 'Privacy', description: 'Informativa privacy di Studio62: quali dati raccoglie il sito, perché e come vengono trattati.', body, noindex: true });
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
