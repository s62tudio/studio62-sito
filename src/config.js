// Impostazioni generali del sito. Modifica qui i dati e ricarica la pagina (in locale il server si riavvia da solo).

export const site = {
  name: 'Studio62',
  url: 'https://studio62.com', // dominio definitivo: serve per SEO e anteprime social
  owner: 'Francesco Battaglia',
  email: 's62tudio@gmail.com',
  instagram: { handle: '_studio_62_', url: 'https://www.instagram.com/_studio_62_/' },
  description:
    'Studio62 è uno studio creativo: siti web, grafica e stampa, identità visiva e progetti di comunicazione per attività che vogliono farsi notare.',
  available: true, // mostra "Disponibile per nuovi progetti" in alto
};

export const nav = [
  { href: '/lavori/', label: 'Lavori' },
  { href: '/collaborazioni/', label: 'Collaborazioni' },
  { href: '/studio/', label: 'Studio' },
  { href: '/contatti/', label: 'Contatti' },
];

// I filtri della pagina Lavori. "tipo" nei progetti deve usare una di queste chiavi.
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
    esempio: 'feltagrifer-sito',
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
    d: 'Viene rilasciata fattura?',
    r: 'No: Studio62 collabora su progetti singoli con prestazione occasionale e rilascia una ricevuta. Se ti serve qualcosa di continuativo, se ne parla e si trova la soluzione giusta.',
  },
  {
    d: 'Si può lavorare anche a distanza?',
    r: 'Sì. Studio62 lavora da remoto: ci si sente in videochiamata, al telefono o per messaggio, ovunque tu sia.',
  },
  {
    d: 'Cosa serve per iniziare?',
    r: "Solo un'idea di cosa fai e di dove vuoi arrivare. Al resto si pensa insieme.",
  },
];

// ---------- Profilo IT (pagina Percorso) ----------

export const percorso = {
  titolo: 'Network & Cybersecurity',
  intro:
    'Studio per diventare tecnico della sicurezza di reti e sistemi. Il diploma in grafica e i progetti per clienti veri mi hanno insegnato a lavorare con le persone; la sicurezza informatica è dove voglio costruire la mia carriera.',
  disponibilita: 'Diploma ITS previsto nel 2027. Da allora disponibile per opportunità in ambito IT e sicurezza, anche con trasferimento in Italia o all’estero.',

  formazione: [
    {
      periodo: '2025 – 2027',
      titolo: 'Diploma ITS · IT Security Specialist: Network & Cybersecurity Specialist',
      ente: 'Fondazione ITS Academy ICT Campus, Benevento',
      dettagli: '1.800 ore: 1.080 di aula e laboratorio, 720 di stage in azienda.',
      moduli: ['CCNA', 'Sicurezza di rete', 'VA/PT', 'Crittografia', 'Malware analysis', 'Linux', 'Windows Internals', 'Cloud security', 'C', 'Python', 'Java', 'Basi di dati'],
    },
    {
      periodo: '2024',
      titolo: 'Diploma di Istituto Tecnico in Grafica e Comunicazione',
      ente: 'Istituto Superiore Palmieri Rampone Polo, Benevento',
      dettagli: 'Progettazione grafica, comunicazione pubblicitaria, fotografia, video editing, siti web.',
      moduli: [],
    },
  ],

  competenze: [
    { area: 'Reti e sicurezza', voci: ['TCP/IP', 'Switch e router Cisco', 'VLAN', 'Wireless', 'Fondamenti di VA/PT', 'Crittografia'] },
    { area: 'Sistemi e codice', voci: ['Windows', 'Linux', 'C', 'Python', 'Java', 'HTML/CSS', 'SQL'] },
    { area: 'Web', voci: ['WordPress', 'Google Search Console', 'Cloudflare', 'GitHub', 'Netlify'] },
    { area: 'Grafica', voci: ['Photoshop', 'Illustrator', 'InDesign', 'Premiere', 'Canva'] },
  ],

  certificazioni: [
    { nome: 'CCNA: Introduction to Networks', ente: 'Cisco' },
    { nome: 'CCNA: Switching, Routing and Wireless Essentials', ente: 'Cisco' },
    { nome: 'DigComp 2.2 · Livello Avanzato', ente: 'AICA' },
    { nome: 'DigComp 2.2 · Livello C2', ente: 'EIPASS' },
  ],

  esperienze: [
    {
      periodo: 'Gennaio – Maggio 2027',
      titolo: 'Stage curricolare ITS',
      ente: 'Seconda parte dello stage in azienda',
      voci: [],
      futuro: true,
    },
    {
      periodo: 'Giugno – Luglio 2026',
      titolo: 'Stage curricolare ITS · Digital agency',
      ente: 'Neikos S.r.l., Benevento',
      voci: ['Grafiche per campagne pubblicitarie e contenuti social', 'Supporto alla gestione di siti WordPress', 'Affiancamento nelle attività sistemistiche'],
    },
    {
      periodo: 'In corso',
      titolo: 'Studio62 · Web e graphic design',
      ente: 'Progetti per attività del territorio',
      voci: ['Siti web con SEO e Google Search Console', 'Grafica per la stampa e il digitale', 'Progetti di comunicazione social'],
      link: '/lavori/',
    },
  ],
};
