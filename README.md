# Studio62 — sito

Prima versione funzionante del sito. Non ha dipendenze: serve solo **Node.js 20 o successivo** (https://nodejs.org, versione LTS).

## Aprirlo in locale

**Il modo più semplice:** doppio clic su `avvia.bat`. Si apre una finestra nera (il server, lasciala aperta) e il browser su http://localhost:4321.

In alternativa, da terminale nella cartella del sito:

    npm run dev

Poi apri http://localhost:4321. Quando modifichi un file in `src/`, il server si riavvia da solo: basta ricaricare la pagina.
Per fermarlo: chiudi la finestra o premi Ctrl + C.

## Dove si modifica cosa

- `src/config.js` — email, Instagram, servizi, metodo, social gestiti, clienti, domande frequenti
- `src/progetti.js` — i case study (testi, immagini, ordine)
- `src/pages/` — la struttura delle pagine
- `public/css/style.css` — lo stile
- `public/js/main.js` — le animazioni (cursore, transizioni, anteprime)

## Aggiungere un progetto

1. Crea la cartella `public/img/progetti/<nome-progetto>/` e metti le immagini con questi nomi:
   `01-640.jpg`, `01-1200.jpg`, `01-1800.jpg` (e le stesse in `.webp`), poi `02-…` e così via.
   Le larghezze disponibili vanno scritte nel campo `sizes` del progetto.
2. In `src/progetti.js` copia un blocco esistente e cambia testi e immagini.
   La pagina `/lavori/<nome-progetto>/` viene creata da sola.

## Mandare un'anteprima (Cloudflare)

1. Doppio clic su `crea-versione.bat`: crea la cartella `dist/` e apre la pagina di Cloudflare Drop.
2. Trascina la cartella `dist` su https://www.cloudflare.com/drop: ricevi un link `workers.dev` da mandare.
3. Entro 60 minuti clicca su "claim" e accedi (o crea un account Cloudflare gratuito), altrimenti il link scade.

Per aggiornare l'anteprima dopo una modifica: rilancia `crea-versione.bat` e ricarica `dist` su Cloudflare.

## Pubblicazione definitiva

`npm run build` (o `crea-versione.bat`) crea `dist/`, il sito statico da caricare su qualsiasi hosting.
Il modulo contatti è pronto per Netlify: per attivarlo, in `public/js/main.js` imposta `FORM_ATTIVO = true`.

## Da completare prima della pubblicazione

- Email definitiva in `src/config.js` (ora c'è `ciao@studio62.com`)
- Testo dell'informativa privacy (`src/pages/altre.js`)
- Una tua foto per la pagina Studio
- I testi della pagina Studio e del manifesto in homepage sono bozze da rivedere con la tua voce
- Le risposte alle domande della Fase 3 (servizi svolti, stemma Falchi, risultati, crediti)
