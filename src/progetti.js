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
      instagram: 'https://www.instagram.com/p/DfXW5zOMyaP/',
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
    seo: "Il sito di Capo Tre Venti, cantina e agriturismo a Campoli del Monte Taburno: homepage, cantina, gallery e degustazioni, pensati per desktop e telefono.",
    cover: [
      { file: '01', w: 1891, h: 902, sizes: [640, 1200, 1800], screen: true, fit: 'contain', bg: '#0f0f0f', alt: 'Homepage: "Poesia in ogni singolo sorso" sul vigneto, con i badge "Dal 2018" e "21 novembre, inaugurazione dell\'agriturismo"' },
    ],
    richiesta: 'Un sito elegante che rappresenti al meglio il lavoro della cantina.',
    idea:
      "Il nome Capo Tre Venti nasce dalle tre correnti d'aria che ventilano i vigneti, e il sito parte da lì: linee dorate che ondeggiano come il vento, tre archi per tre vini (Scirocco, Tramontana e Bora), fondi scuri e titoli eleganti con l'arancio in corsivo. Un'atmosfera calda e raccolta, come entrare in cantina.",
    lavoro:
      "In homepage il vigneto fa da sfondo a \"Poesia in ogni singolo sorso\", con l'annuncio dell'inaugurazione dell'agriturismo in primo piano. Nella pagina della cantina Tramontana è protagonista, mentre Scirocco e Bora aspettano il loro posto come \"Presto disponibile\". La gallery si sfoglia per vigneti, uliveti, territorio e cantina. Su telefono ogni pagina è ripensata: i tre vini diventano un elenco numerato, e chi vuole una degustazione trova contatti e pulsante \"Richiedi disponibilità\" a portata di pollice. Il sito è indicizzato su Google tramite Search Console.",
    risultato:
      "Il sito è online e accompagnerà l'apertura dell'agriturismo, il 21 novembre 2026, insieme alla promozione sui social.",
    galleria: [
      { file: '02', w: 1885, h: 900, sizes: [640, 1200, 1800], span: 'full', screen: true, fit: 'contain', bg: '#121212', alt: 'Pagina La cantina: Tramontana al centro di tre archi, Scirocco e Bora presto disponibili' },
      { file: '04', w: 738, h: 1600, sizes: [640, 738], span: 'half', screen: true, full: true, alt: 'Su telefono: il nome nato dalle tre correnti d\'aria e l\'elenco dei vini Scirocco, Tramontana e Bora' },
      { file: '05', w: 738, h: 1600, sizes: [640, 738], span: 'half', screen: true, full: true, alt: "Su telefono: Vivi l'Esperienza, degustazioni guidate con info, contatti e pulsante Richiedi disponibilità" },
      { file: '03', w: 1894, h: 902, sizes: [640, 1200, 1800], span: 'full', screen: true, fit: 'contain', bg: '#0f0f0f', alt: 'Gallery "Vigneti, uliveti e cantina" con i filtri per vigneti, uliveti, territorio e cantina' },
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
    seo: 'Il sito di Feltagrifer, rivenditore di macchine agricole, giardinaggio e movimento terra: promozioni, catalogo filtrabile per categoria, marchio e utilizzo, noleggio e preventivi in un clic.',
    cover: [
      { file: '01', w: 1903, h: 939, sizes: [640, 1200, 1800], screen: true, fit: 'contain', bg: '#f6f7f4', alt: 'Homepage Feltagrifer: i marchi trattati in alto, il menu verde e la promozione autunno-inverno Blue Bird' },
    ],
    richiesta:
      'Il nuovo sito di Feltagrifer srl, rivenditore autorizzato di macchine agricole, attrezzature da giardino e macchine movimento terra.',
    idea:
      "Tanti marchi e tanti servizi diversi: vendita, usato, noleggio, promozioni. L'idea è rendere tutto facile da trovare: i marchi trattati in vista fin dalla prima riga, il verde e l'oro dell'azienda a fare da guida, e il preventivo sempre a un clic, da qualsiasi pagina.",
    lavoro:
      "In homepage le promozioni scorrono in un carosello, come l'offerta autunno-inverno Blue Bird con prezzi e scadenza, e otto soluzioni portano dritte alle categorie: trattori, escavatori, trinciatrici, attrezzatura agricola, motoseghe, potatura, macchine a batteria e noleggio. Il catalogo si filtra per categoria, marchio e utilizzo, e ogni prodotto ha il suo \"Richiedi info\". Su desktop WhatsApp, telefono, email e social stanno in una barra laterale; su telefono una barra in basso con Chiama, WhatsApp e Preventivo accompagna ogni pagina, dalle offerte come la Solis S90 al noleggio a breve, medio e lungo termine.",
    risultato:
      'Il sito è stampato come QR code sui biglietti da visita. Feltagrifer visita molte aziende, così il catalogo arriva direttamente a chi deve sceglierlo.',
    galleria: [
      { file: '02', w: 1893, h: 940, sizes: [640, 1200, 1800], span: 'full', screen: true, fit: 'contain', bg: '#f6f7f4', alt: 'Le nostre soluzioni: otto categorie, dai trattori Solis al noleggio' },
      { file: '04', w: 738, h: 1600, sizes: [640, 738], span: 'half', screen: true, full: true, alt: "Su telefono: l'offerta Solis S90 Shuttle XL con la barra Chiama, WhatsApp, Preventivo" },
      { file: '05', w: 738, h: 1600, sizes: [640, 738], span: 'half', screen: true, full: true, alt: 'Su telefono: i settori di noleggio, a partire dal movimento terra' },
      { file: '03', w: 1901, h: 937, sizes: [640, 1200, 1800], span: 'full', screen: true, fit: 'contain', bg: '#f6f7f4', alt: 'Catalogo prodotti con filtri per categoria, brand e utilizzo e il pulsante Richiedi info su ogni scheda' },
    ],
  },
];
