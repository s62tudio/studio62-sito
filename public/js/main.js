// Studio62 — interazioni. Tutto è costruito attorno al punto blu.
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* Header: bordo quando si scorre */
  const header = $('.site-header');
  const onScroll = () => header && header.classList.toggle('scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Menu mobile */
  const toggle = $('.menu-toggle');
  const menu = $('#menu');
  if (toggle && menu) {
    const setMenu = (open) => {
      menu.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Chiudi' : 'Menu';
      document.body.classList.toggle('menu-open', open);
    };
    toggle.addEventListener('click', () => setMenu(menu.hidden));
    addEventListener('keydown', (e) => e.key === 'Escape' && !menu.hidden && setMenu(false));
    matchMedia('(min-width: 900px)').addEventListener('change', (e) => e.matches && setMenu(false));
  }

  /* Cursore: un punto blu che dice cosa si può cliccare */
  const cursor = $('.cursor');
  if (cursor && finePointer && !reduce) {
    const label = $('.cursor-label', cursor);
    let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y, raf = 0;
    const loop = () => {
      cx += (x - cx) * 0.22; cy += (y - cy) * 0.22;
      cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = Math.abs(x - cx) + Math.abs(y - cy) > 0.1 ? requestAnimationFrame(loop) : 0;
    };
    addEventListener('pointermove', (e) => {
      x = e.clientX; y = e.clientY;
      document.documentElement.classList.add('has-cursor');
      if (!raf) raf = requestAnimationFrame(loop);
      const t = e.target.closest('[data-cursor], a, button, summary, label');
      const open = t && t.dataset.cursor;
      cursor.classList.toggle('is-open', !!open);
      cursor.classList.toggle('is-link', !!t && !open);
      if (open) label.textContent = open;
    }, { passive: true });
    document.addEventListener('pointerleave', () => document.documentElement.classList.remove('has-cursor'));
  }

  /* Lista lavori: anteprima che segue il mouse */
  $$('.work').forEach((work) => {
    const prev = $('.work-preview', work);
    if (!prev || !finePointer) return;
    const img = $('img', prev);
    let px = 0, py = 0, tx = 0, ty = 0, raf = 0;
    const loop = () => {
      px += (tx - px) * 0.16; py += (ty - py) * 0.16;
      prev.style.left = px + 'px'; prev.style.top = py + 'px';
      raf = prev.classList.contains('on') ? requestAnimationFrame(loop) : 0;
    };
    $$('.work-row', work).forEach((row) => {
      row.addEventListener('pointerenter', (e) => {
        img.src = row.dataset.preview;
        prev.style.setProperty('--pos', row.style.getPropertyValue('--pos') || 'center');
        if (!prev.classList.contains('on')) { px = tx = e.clientX; py = ty = e.clientY; }
        prev.classList.add('on');
        if (!raf) raf = requestAnimationFrame(loop);
      });
      row.addEventListener('pointermove', (e) => { tx = e.clientX + 40; ty = e.clientY; });
      row.addEventListener('pointerleave', () => prev.classList.remove('on'));
    });
  });

  /* Filtri della pagina Lavori */
  const chips = $$('.chip[data-filter]');
  chips.forEach((chip) =>
    chip.addEventListener('click', () => {
      const f = chip.dataset.filter;
      chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
      $$('.work-item').forEach((it) => { it.hidden = f !== '*' && !it.dataset.tipo.split(' ').includes(f); });
    })
  );

  /* Manifesto: le parole si accendono mentre scorri */
  const words = $$('.manifesto-text .w');
  if (words.length && !reduce) {
    const box = $('.manifesto-text');
    const update = () => {
      const r = box.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.35)));
      const n = Math.round(p * words.length);
      words.forEach((w, i) => w.classList.toggle('on', i < n));
    };
    addEventListener('scroll', update, { passive: true });
    update();
  }

  /* Telefoni nei case study: parallasse leggera mentre si scorre */
  const phones = $$('.is-phones .frame-phone');
  if (phones.length && !reduce) {
    let ticking = false;
    const move = () => {
      ticking = false;
      phones.forEach((ph, i) => {
        const box = ph.parentElement.getBoundingClientRect();
        if (box.bottom < 0 || box.top > innerHeight) return;
        const d = box.top + box.height / 2 - innerHeight / 2;
        ph.style.setProperty('--py', (d * (i % 2 ? -0.06 : 0.1)).toFixed(1) + 'px');
      });
    };
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(move); } }, { passive: true });
    move();
  }

  /* Reel: parte quando è visibile, si ferma quando esce dallo schermo */
  $$('.reel').forEach((box) => {
    const video = $('video', box);
    const sound = $('.reel-sound', box);
    if (!video) return;
    let userPaused = false;
    const play = () => { if (!userPaused) video.play().catch(() => {}); };
    if ('IntersectionObserver' in window && !reduce) {
      new IntersectionObserver((en) => en.forEach((e) => (e.isIntersecting ? play() : video.pause())), { threshold: 0.35 }).observe(video);
    }
    video.addEventListener('click', () => {
      if (video.paused) { userPaused = false; video.play().catch(() => {}); } else { userPaused = true; video.pause(); }
    });
    sound?.addEventListener('click', () => {
      video.muted = !video.muted;
      sound.setAttribute('aria-pressed', String(!video.muted));
      if (!video.muted) { userPaused = false; video.play().catch(() => {}); }
    });
    const ph = $('.frame-phone', box);
    if (ph && !reduce) {
      const move = () => {
        const r = box.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight) return;
        ph.style.setProperty('--py', ((r.top + r.height / 2 - innerHeight / 2) * 0.08).toFixed(1) + 'px');
      };
      addEventListener('scroll', () => requestAnimationFrame(move), { passive: true });
      move();
    }
  });

  /* Hero: progetti che scorrono nello smartphone, come le storie */
  const slides = $$('.hero-phone .hs');
  if (slides.length) {
    const bars = $$('.hero-phone .hs-bars i');
    const T = 2800; let k = 0;
    const show = (n) => {
      slides[k].classList.remove('on'); k = n; slides[k].classList.add('on');
      bars.forEach((b, i) => { b.classList.toggle('done', i < k); b.classList.remove('on'); });
      void bars[k].offsetWidth; bars[k].classList.add('on');
    };
    document.documentElement.style.setProperty('--hs-t', T + 'ms');
    if (!reduce) setInterval(() => show((k + 1) % slides.length), T);
    const ph = $('.hero-phone');
    if (!reduce) addEventListener('scroll', () => requestAnimationFrame(() => ph.style.setProperty('--py', (scrollY * -0.12).toFixed(1) + 'px')), { passive: true });
  }

  /* Copia email */
  $$('[data-copy]').forEach((b) =>
    b.addEventListener('click', async () => {
      const hint = $('.copy-hint', b);
      try {
        await navigator.clipboard.writeText(b.dataset.copy);
        b.classList.add('done'); hint.textContent = 'Copiata';
      } catch {
        const sel = getSelection(); const range = document.createRange();
        range.selectNodeContents($('.copy-text', b)); sel.removeAllRanges(); sel.addRange(range);
        hint.textContent = 'Selezionata';
      }
      setTimeout(() => { b.classList.remove('done'); hint.textContent = 'Copia'; }, 2200);
    })
  );

  /* Studio: 6 e 2 diventano F e B */
  const glyphs = $$('.glyph');
  if (glyphs.length) {
    glyphs.forEach((g) => g.addEventListener('click', () => g.classList.toggle('flip')));
    if (!reduce) setTimeout(() => glyphs.forEach((g, i) => setTimeout(() => g.classList.add('flip'), i * 180)), 1200);
  }

  /* Immagini dei case study: entrano con un leggero movimento */
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.remove('pre'); io.unobserve(en.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    $$('.gallery .g-item, .social-card, .steps li').forEach((el) => {
      if (el.getBoundingClientRect().top > innerHeight) { el.classList.add('reveal', 'pre'); io.observe(el); }
    });
  }

  /* Modulo contatti */
  const form = $('.form');
  if (form) {
    // Arrivando da "Hai un progetto?" o "Cerchi un profilo junior?" preseleziona l'argomento
    const tipo = new URLSearchParams(location.search).get('tipo');
    if (tipo === 'lavoro') $$('input[data-tipo="lavoro"]', form).forEach((i) => { i.checked = true; });
    const status = $('.form-status', form);
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      let ok = true;
      $$('[required]', form).forEach((el) => {
        const bad = el.type === 'checkbox' ? !el.checked : !el.value.trim() || (el.type === 'email' && !/^\S+@\S+\.\S+$/.test(el.value));
        el.closest('.field')?.classList.toggle('invalid', bad);
        if (bad) ok = false;
      });
      status.classList.toggle('err', !ok);
      if (!ok) { status.textContent = 'Controlla i campi evidenziati e la casella privacy.'; return; }
      // Il modulo invia davvero solo quando il sito è su Netlify (data-netlify) e FORM_ATTIVO è true.
      const FORM_ATTIVO = false;
      if (!FORM_ATTIVO) {
        status.textContent = 'Il modulo funziona. In questa anteprima non invia ancora: lo collegheremo con il sito definitivo.';
        return;
      }
      try {
        const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(new FormData(form)).toString() });
        if (!res.ok) throw new Error(res.status);
        form.reset();
        status.textContent = 'Ricevuto. Ti rispondo il prima possibile.';
      } catch {
        status.classList.add('err');
        status.textContent = 'Invio non riuscito. Scrivimi direttamente via email.';
      }
    });
  }

  /* Transizione di pagina: il punto si allarga e copre lo schermo */
  const veil = $('.veil');
  const KEY = 's62-veil';
  const coverScale = (x, y) => {
    const dx = Math.max(x, innerWidth - x), dy = Math.max(y, innerHeight - y);
    return (Math.hypot(dx, dy) * 2) / 20 + 2;
  };
  if (veil && !reduce) {
    // In arrivo da un'altra pagina: il punto si richiude al centro
    let from = null;
    try { from = JSON.parse(sessionStorage.getItem(KEY)); sessionStorage.removeItem(KEY); } catch {}
    if (from) {
      veil.style.left = innerWidth / 2 + 'px'; veil.style.top = innerHeight / 2 + 'px';
      veil.style.setProperty('--s', coverScale(innerWidth / 2, innerHeight / 2));
      veil.classList.add('cover');
      requestAnimationFrame(() => requestAnimationFrame(() => { veil.classList.add('shrink'); veil.classList.remove('cover'); }));
      veil.addEventListener('transitionend', () => veil.classList.remove('shrink'), { once: true });
    }
    addEventListener('pageshow', (e) => { if (e.persisted) veil.className = 'veil'; });

    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href]');
      if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (a.target && a.target !== '_self') return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.protocol.startsWith('mailto')) return;
      if (url.pathname === location.pathname && url.hash) return;
      if (/\.[a-z0-9]+$/i.test(url.pathname)) return;
      e.preventDefault();
      const x = e.clientX || innerWidth / 2, y = e.clientY || innerHeight / 2;
      veil.className = 'veil';
      veil.style.left = x + 'px'; veil.style.top = y + 'px';
      veil.style.setProperty('--s', coverScale(x, y));
      void veil.offsetWidth;
      veil.classList.add('grow', 'cover');
      try { sessionStorage.setItem(KEY, '1'); } catch {}
      setTimeout(() => { location.href = url.href; }, 560);
    });
  }
})();
