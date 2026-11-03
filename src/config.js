// Impostazioni generali del sito. Modifica qui i dati e riavvia (o ricarica, se il server è in modalità sviluppo).

export const site = {
  name: 'Studio62',
  url: 'https://studio62.com', // dominio definitivo: serve per SEO e anteprime social
  owner: 'Francesco Battaglia',
  // DA SOSTITUIRE: email definitiva da mostrare sul sito
  email: 'ciao@studio62.com',
  instagram: { handle: '_studio_62_', url: 'https://www.instagram.com/_studio_62_/' },
  description:
    'Studio62 è lo studio creativo di Francesco Battaglia: brand identity, grafica, siti web e social per attività che vogliono farsi notare.',
  available: true, // mostra "Disponibile per nuovi progetti" in alto
};

export const nav = [
  { href: '/lavori/', label: 'Lavori' },
  { href: '/servizi/', label: 'Servizi' },
  { href: '/studio/', label: 'Studio' },
  { href: '/contatti/', label: 'Contatti' },
];

// I filtri della pagina Lavori. "tipo" nei progetti deve usare una di queste chiavi.
export const tipi = {
  web: 'Siti web',
  grafica: 'Grafica e stampa',
  sportswear: 'Sportswear',
};

export const servizi = [
  {
    id: 'brand-identity',
    nome: 'Brand identity',
    frase: "Un'immagine riconoscibile, da usare ovunque: insegna, biglietti, social, sito.",
    include: ['Logo e marchio', 'Colori e caratteri', "Regole d'uso", 'Kit per social e stampa'],
    esempio: 'falchi-cautano-maglia',
  },
  {
    id: 'grafica',
    nome: 'Grafica e stampa',
    frase: 'Etichette, divise, volantini: tutto quello che si tocca con mano.',
    include: ['Etichette e packaging', 'Divise e abbigliamento sportivo', 'Volantini, manifesti, biglietti', 'File pronti per la stampa'],
    esempio: 'tramontana-etichetta',
  },
  {
    id: 'siti-web',
    nome: 'Siti web',
    frase: 'Un sito chiaro anche dal telefono, che porta contatti veri.',
    include: ['Progetto e design', 'Sviluppo e pubblicazione', 'Testi', 'Versione mobile curata'],
    esempio: 'feltagrifer-sito',
  },
  {
    id: 'seo',
    nome: 'SEO',
    frase: 'Farti trovare da chi ti sta già cercando su Google.',
    include: ['Struttura e testi pensati per la ricerca', 'Google Search Console', 'Velocità e ottimizzazione'],
    esempio: 'capo-tre-venti-sito',
  },
  {
    id: 'social',
    nome: 'Social media',
    frase: 'Profili curati e costanti, senza che tu debba pensarci ogni giorno.',
    include: ['Gestione dei profili', 'Grafiche e contenuti', 'Calendario dei post'],
    esempio: null,
  },
  {
    id: 'comunicazione',
    nome: 'Comunicazione digitale',
    frase: 'Un piano semplice: cosa dire, dove e quando.',
    include: ['Strategia di comunicazione', 'Coerenza tra sito, social e stampa', 'Lanci e promozioni'],
    esempio: null,
  },
];

export const metodo = [
  { nome: 'Ascolto', testo: 'Mi racconti la tua attività, cosa funziona e cosa no. Nessun questionario infinito.' },
  { nome: 'Idea', testo: 'Ti propongo una direzione sola, ragionata. Non dieci bozze a caso.' },
  { nome: 'Progetto', testo: "Disegno e sviluppo, con passaggi chiari in cui vedi l'avanzamento." },
  { nome: 'Lancio', testo: 'Pubblichiamo, stampiamo, mettiamo online. E controllo che funzioni.' },
];

// Pagine social gestite. Per aggiungerne una, copia una riga.
export const social = [
  { nome: 'PM Style', settore: 'Barbiere', luogo: 'Cautano', handle: 'pmstyle___barbershop' },
  { nome: 'MOWE', settore: 'Movement & wellness', luogo: 'Cautano', handle: 'mowe.movementandwellness' },
  { nome: 'ASD Falchi Cautano', settore: 'Calcio', luogo: 'Seconda Categoria', handle: 'asd_falchi_cautano' },
];

export const clienti = ['Capo Tre Venti', 'Feltagrifer', 'ASD Falchi Cautano', 'PM Style', 'MOWE'];

export const faq = [
  {
    d: 'Quanto tempo serve?',
    r: "Dipende dal progetto. Prima di iniziare ti do una stima chiara dei tempi, e ti aggiorno a ogni passaggio.",
  },
  {
    d: 'Lavori anche fuori dalla tua zona?',
    r: 'Sì. Lavoro da remoto: ci sentiamo in videochiamata, al telefono o su WhatsApp, ovunque tu sia.',
  },
  {
    d: 'Posso aggiornare il sito da solo?',
    r: "Dipende dal tipo di sito e da quanto spesso cambia. Ne parliamo all'inizio e scegliamo la soluzione più comoda per te.",
  },
  {
    d: 'Cosa mi serve per iniziare?',
    r: 'Solo un\'idea di cosa fai e di dove vuoi arrivare. Al resto pensiamo insieme.',
  },
];
