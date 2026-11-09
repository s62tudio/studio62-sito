// Impostazioni generali del sito. Modifica qui i dati e ricarica la pagina (in locale il server si riavvia da solo).

export const site = {
  name: 'Studio62',
  url: 'https://studio62.com', // dominio definitivo: serve per SEO e anteprime social
  owner: 'Francesco Battaglia',
  email: 's62tudio@gmail.com',
  instagram: { handle: '_studio_62_', url: 'https://www.instagram.com/_studio_62_/' },
  description:
    'Studio62 è un Creative Showcase: siti web, grafica e stampa, identità visiva e progetti di comunicazione per attività che vogliono farsi notare.',
  available: true, // mostra "Disponibile per nuovi progetti" in alto
};

export const nav = [
  { href: '/progetti/', label: 'Progetti' },
  { href: '/collaborazioni/', label: 'Collaborazioni' },
  { href: '/studio/', label: 'Studio' },
  { href: '/contatti/', label: 'Contatti' },
];

// I filtri della pagina Progetti. "tipo" nei progetti deve usare una di queste chiavi.
export const tipi = {
  web: 'Siti web',
  grafica: 'Grafica e stampa',
  sportswear: 'Sportswear',
};

// Le collaborazioni: progetti singoli, con un inizio e una fine.
export const collaborazioni = [
  {
    id: 'siti-web',
    nome: 'Siti web',
    frase: 'Un sito chiaro anche dal telefono, pubblicato e configurato per farsi trovare su Google.',
    include: ['Progetto e design', 'Pubblicazione, dominio e DNS', 'Versione mobile curata', 'Google Search Console'],
    esempio: 'capo-tre-venti-sito',
  },
  {
    id: 'grafica',
    nome: 'Grafica e stampa',
    frase: 'Etichette, divise, volantini: tutto quello che si tocca con mano, con i file pronti per la tipografia.',
    include: ['Etichette e packaging', 'Divise e abbigliamento sportivo', 'Volantini, manifesti, biglietti', 'File pronti per la stampa'],
    esempio: 'tramontana-etichetta',
  },
  {
    id: 'identita',
    nome: 'Identità visiva',
    frase: "Colori, caratteri e regole per presentarti sempre nello stesso modo, dall'insegna ai social.",
    include: ['Logo o restyling', 'Colori e caratteri', 'Kit per social e stampa'],
    esempio: null,
  },
  {
    id: 'comunicazione',
    nome: 'Progetti di comunicazione',
    frase: "Un lancio, un'apertura, una stagione: grafiche e contenuti social pensati per un obiettivo e un periodo definiti.",
    include: ['Piano dei contenuti', 'Grafiche e template', 'Pubblicazione per il periodo concordato'],
    esempio: 'social',
  },
];

export const metodo = [
  { nome: 'Ascolto', testo: 'Si parte dalla tua attività e da cosa ti serve: obiettivo, tempi e cosa verrà consegnato, messi in chiaro fin da subito.' },
  { nome: 'Idea', testo: 'Una direzione sola, ragionata. Non dieci bozze a caso.' },
  { nome: 'Progetto', testo: "Design e sviluppo, con passaggi chiari in cui vedi l'avanzamento." },
  { nome: 'Consegna', testo: 'Si stampa, si pubblica, si mette online. Tutto consegnato in ordine e verificato.' },
];

// Progetti di comunicazione sui social. Per aggiungerne uno, copia una riga.
export const social = [
  { nome: 'PM Style', settore: 'Barbiere', luogo: 'Cautano', handle: 'pmstyle___barbershop' },
  { nome: 'MOWE', settore: 'Movement & wellness', luogo: 'Cautano', handle: 'mowe.movementandwellness' },
  { nome: 'ASD Falchi Cautano', settore: 'Calcio', luogo: 'Seconda Categoria', handle: 'asd_falchi_cautano' },
];

export const clienti = ['Capo Tre Venti', 'Feltagrifer', 'ASD Falchi Cautano', 'PM Style', 'MOWE'];

export const faq = [
  {
    d: 'Quanto tempo serve?',
    r: 'Dipende dal progetto. Prima di iniziare si definisce cosa verrà consegnato e in quanto tempo, con aggiornamenti a ogni passaggio.',
  },
  {
    d: 'I progetti si possono seguire anche a distanza?',
    r: "Sì, dall'inizio alla consegna: ci si sente in videochiamata, al telefono o per messaggio, ovunque tu sia.",
  },
  {
    d: 'Cosa serve per iniziare?',
    r: "Solo un'idea di cosa fai e di dove vuoi arrivare. Al resto si pensa insieme.",
  },
];
