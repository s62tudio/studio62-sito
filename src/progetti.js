// I case study. L'ordine di questa lista è l'ordine in homepage e nella pagina Lavori.
//
// Per aggiungere un progetto:
// 1. metti le immagini in public/img/progetti/<slug>/ con i nomi 01-640.jpg, 01-1200.jpg ... (vedi README)
// 2. copia un blocco qui sotto e cambia i testi.
//
// Campi immagine: file = prefisso del file ("01"), sizes = larghezze disponibili,
// w/h = proporzioni originali, span = "full" | "half" | "third", screen = true per gli screenshot.

export const progetti = [
  {
    slug: 'falchi-cautano-maglia',
    cliente: 'ASD Falchi Cautano',
    titolo: 'Una maglia nera per una squadra a due colori',
    breve: 'Maglia da gioco',
    anno: 2026,
    tipo: ['sportswear', 'grafica'],
    servizio: 'Sportswear design',
    crediti: [],
    link: null,
    seo: 'Design della maglia da gioco per ASD Falchi Cautano: nero dominante, rosso e blu in asimmetria, il falco sulla manica.',
    cover: [
      { file: '01', w: 3107, h: 4661, sizes: [640, 1200, 1800], alt: 'Giocatore in campo con la nuova maglia nera dei Falchi Cautano, un piede sul pallone' },
      { file: '02', w: 3520, h: 5280, sizes: [640, 1200, 1800], alt: 'La maglia appesa nello spogliatoio: nero, manica rossa e manica blu' },
    ],
    richiesta: 'Una nuova maglia da gioco per la squadra.',
    idea:
      "Il nero come colore dominante, per dare alla maglia un'impronta di eleganza, grinta e professionalità. Il rosso e il blu, i colori sociali, entrano in modo asimmetrico: uno per manica, e ripresi nei dettagli grafici sul retro.",
    lavoro:
      "Sulla manica la figura del falco, il simbolo del club, insieme allo stemma della società. Le finiture personalizzate raccontano la storia della squadra e la sua presenza in campo.",
    risultato: null,
    galleria: [
      { file: '03', w: 2970, h: 4455, sizes: [640, 1200, 1800], span: 'half', alt: 'Ritratto di un giocatore con la maglia, manica blu con il falco giallo' },
      { file: '04', w: 3173, h: 4759, sizes: [640, 1200, 1800], span: 'half', alt: 'Retro della maglia con il numero 8 e le bande rossa e blu' },
      { file: '05', w: 3359, h: 5038, sizes: [640, 1200, 1800], span: 'half', alt: 'Dettaglio dello stemma del club sul petto' },
      { file: '06', w: 4032, h: 6048, sizes: [640, 1200, 1800], span: 'half', alt: 'Dettaglio della manica blu con il falco giallo' },
      { file: '07', w: 3045, h: 4568, sizes: [640, 1200, 1800], span: 'third', alt: 'La maglia appesa, vista frontale' },
      { file: '08', w: 3743, h: 5615, sizes: [640, 1200, 1800], span: 'third', alt: 'Il retro della maglia con il numero 20' },
      { file: '10', w: 2926, h: 4389, sizes: [640, 1200, 1800], span: 'third', alt: 'La maglia nello spogliatoio, con gli scarpini sulla panca' },
    ],
  },
  {
    slug: 'capo-tre-venti-sito',
    // Video verticale (reel) mostrato dentro uno smartphone. File in public/video/<file>.mp4 e copertina <file>.jpg
    video: {
      file: 'capo-tre-venti-reel',
      titolo: 'Dal vigneto al digitale',
      testo: "Il reel che racconta il progetto: dal sito pensato prima di tutto per il telefono fino all'invito all'inaugurazione dell'agriturismo.",
    },
    cliente: 'Capo Tre Venti',
    titolo: "Dalla cantina all'agriturismo, in un sito solo",
    breve: 'Sito web',
    anno: 2026,
    tipo: ['web'],
    servizio: 'Web design & UI/UX · SEO',
    crediti: [],
    link: { label: 'capotreventi.com', url: 'https://capotreventi.com' },
    seo: "Il sito della cantina Capo Tre Venti: storia, vini, degustazioni e agriturismo, in un'esperienza elegante su desktop e mobile.",
    cover: [
      { file: '01', w: 1890, h: 847, sizes: [640, 1200, 1800], screen: true, alt: 'Homepage del sito Capo Tre Venti: "Poesia in ogni singolo sorso" sopra il vigneto' },
    ],
    richiesta: 'Un sito elegante che rappresenti al meglio il lavoro della cantina.',
    idea:
      "Un'esperienza digitale all'altezza della struttura: estetica raffinata, layout pulito e un percorso che valorizza ogni parte del brand, dalla storia della cantina ai vini, fino alle degustazioni e all'agriturismo.",
    lavoro:
      "Navigazione fluida e reattiva su desktop e telefono. Ogni vino ha la sua scheda con ingredienti, valori nutrizionali e indicazioni per lo smaltimento, raggiungibile anche dal QR code stampato sull'etichetta. Indicizzazione su Google tramite Search Console.",
    risultato:
      "Il sito è online e accompagnerà l'apertura dell'agriturismo, il 21 novembre 2026, insieme alla promozione sui social.",
    galleria: [
      { file: '02', w: 1877, h: 851, sizes: [640, 1200, 1800], span: 'full', screen: true, alt: 'Pagina I nostri vini con Scirocco, Tramontana e Bora' },
      { file: '04', w: 952, h: 1600, sizes: [640, 952], span: 'half', screen: true, alt: 'Homepage su mobile' },
      { file: '05', w: 824, h: 1600, sizes: [640, 824], span: 'half', screen: true, dark: true, alt: 'Pagina La cantina su mobile: Custodi di un territorio magico' },
      { file: '03', w: 1890, h: 852, sizes: [640, 1200, 1800], span: 'full', screen: true, alt: 'Scheda del vino Tramontana con ingredienti, valori nutrizionali e smaltimento' },
    ],
  },
  {
    slug: 'tramontana-etichetta',
    cliente: 'Capo Tre Venti',
    titolo: "Il vigneto, ridisegnato a mano sull'etichetta",
    breve: 'Etichetta Tramontana',
    anno: 2026,
    tipo: ['grafica'],
    servizio: 'Graphic & label design',
    crediti: [],
    link: null,
    seo: "L'etichetta della Falanghina Tramontana di Capo Tre Venti: il paesaggio del vigneto ridisegnato a mano, con dettagli in rilievo.",
    cover: [
      { file: '01', w: 1066, h: 1600, sizes: [640, 1066], alt: 'Etichetta Tramontana: scritta corsiva blu sopra il paesaggio illustrato del vigneto' },
      { file: '02', w: 1066, h: 1600, sizes: [640, 1066], alt: 'Bottiglia di Tramontana intera su fondo azzurro' },
    ],
    richiesta: "L'etichetta per Tramontana, la Falanghina della cantina Capo Tre Venti.",
    idea:
      "Tutto parte da una foto vera del vigneto immerso nel paesaggio. Quella scena è stata rielaborata fino a diventare un'illustrazione su misura, che lega il territorio al vino.",
    lavoro:
      "Progetto grafico realizzato in Adobe Illustrator. Particolare attenzione alla stampa e alle finiture: dettagli in rilievo che danno volume e rendono l'etichetta da toccare, oltre che da guardare. Sul retro, un QR code porta direttamente alla scheda del vino sul sito della cantina, con ingredienti e valori nutrizionali.",
    risultato: null,
    galleria: [
      { file: '03', w: 1066, h: 1600, sizes: [640, 1066], span: 'half', alt: 'Retro etichetta con testo descrittivo e QR code' },
      { file: '04', w: 1066, h: 1600, sizes: [640, 1066], span: 'half', alt: 'Bottiglia di Tramontana, vista frontale' },
    ],
  },
  {
    slug: 'feltagrifer-sito',
    cliente: 'Feltagrifer',
    titolo: 'Un catalogo enorme, facile da esplorare',
    breve: 'Sito web',
    anno: 2026,
    tipo: ['web'],
    servizio: 'Web design & UI/UX · SEO',
    crediti: [],
    link: { label: 'feltagrifer.com', url: 'https://feltagrifer.com' },
    seo: 'Il sito di Feltagrifer, rivenditore di macchine agricole: un catalogo vasto organizzato per categoria, marchio e utilizzo, dal prodotto al preventivo.',
    cover: [
      { file: '01', w: 1895, h: 862, sizes: [640, 1200, 1800], screen: true, alt: 'Homepage Feltagrifer con la promozione autunno-inverno' },
    ],
    richiesta:
      'Il nuovo sito di Feltagrifer srl, rivenditore autorizzato di macchine agricole, attrezzature da giardino e macchine movimento terra.',
    idea:
      'Trasformare un catalogo vasto e articolato in qualcosa di semplice da esplorare: prodotti per categoria, marchio e utilizzo, sezioni per promozioni, usato e noleggio, e una vetrina dei marchi trattati.',
    lavoro:
      'Ogni pagina accompagna dalla ricerca del prodotto giusto fino alla richiesta di preventivo. Chiamata, WhatsApp ed email sono sempre a portata di mano: in una barra laterale su desktop e in basso su telefono.',
    risultato:
      'Il sito è stampato come QR code sui biglietti da visita. Feltagrifer visita molte aziende, così il catalogo arriva direttamente a chi deve sceglierlo.',
    galleria: [
      { file: '02', w: 1881, h: 861, sizes: [640, 1200, 1800], span: 'full', screen: true, alt: 'Catalogo prodotti con filtri per categoria, marchio e utilizzo' },
      { file: '04', w: 822, h: 1600, sizes: [640, 822], span: 'half', screen: true, alt: 'Pagina dei marchi su mobile, con la barra Chiama, WhatsApp, Preventivo' },
      { file: '05', w: 962, h: 1600, sizes: [640, 962], span: 'half', screen: true, alt: 'Ricerca con suggerimenti su mobile' },
      { file: '03', w: 1886, h: 861, sizes: [640, 1200, 1800], span: 'full', screen: true, alt: 'Pagina promozioni con le offerte in corso' },
    ],
  },
];
