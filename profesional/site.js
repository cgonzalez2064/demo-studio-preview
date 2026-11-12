/* Alero demo sites: motion and interaction. Only transform, opacity and clip-path are animated. */
(function () {
  'use strict';
  var doc = document, root = doc.documentElement;
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  root.classList.add('js');
  function $(s, c) { return (c || doc).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function lerp(a, b, t) { return a + (b - a) * t; }

  doc.addEventListener('DOMContentLoaded', function () {
    var vh = window.innerHeight, vw = window.innerWidth;
    window.addEventListener('resize', function () { vh = window.innerHeight; vw = window.innerWidth; }, { passive: true });

    /* ---- Demo bar offset for the fixed menu ---- */
    var bar = $('.demo-banner');
    function placeBar() { root.style.setProperty('--demo-off', (bar ? Math.max(0, Math.round(bar.getBoundingClientRect().bottom)) : 0) + 'px'); }
    placeBar();

    /* ---- Intro curtain (Premium) ---- */
    var intro = $('.intro');
    var start = 0;
    if (intro) {
      if (calm) { intro.remove(); } else {
        start = 900;
        setTimeout(function () { intro.classList.add('out'); }, 780);
        setTimeout(function () { intro.remove(); }, 1900);
      }
    }
    setTimeout(function () { root.classList.add('ready'); }, start);

    /* ---- Headlines split in lines ---- */
    function split(el) {
      if (el.dataset.done) return;
      var html = el.innerHTML;
      var parts = html.split(/<br\s*\/?>/i);
      el.innerHTML = parts.map(function (p, i) { return '<span class="line" style="--li:' + i + '"><span>' + p.trim() + '</span></span>'; }).join('');
      el.dataset.done = '1';
    }
    $$('[data-split]').forEach(split);

    /* ---- Paragraphs that light up word by word ---- */
    $$('[data-words]').forEach(function (el) {
      el.innerHTML = el.textContent.trim().split(/\s+/).map(function (w) { return '<span class="w">' + w + '</span>'; }).join(' ');
    });

    /* ---- Reveal on view ---- */
    var seen = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (!e.isIntersecting) return; var t = e.target; if (t.__clips) t.__clips.forEach(function (c) { c.classList.add('in'); }); if (t.hasAttribute('data-reveal') || t.hasAttribute('data-split')) t.classList.add('in'); seen.unobserve(t); });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }) : null;
    function watch() {
      $$('[data-reveal], [data-split], .clip[data-clip]').forEach(function (el) {
        if (el.closest('.hero') || !seen) { setTimeout(function () { el.classList.add('in'); }, el.closest('.hero') ? start + 60 : 0); return; }
        if (el.hasAttribute('data-clip')) { var host = el.parentNode; (host.__clips = host.__clips || []).push(el); seen.observe(host); } else seen.observe(el);
      });
    }
    watch();

    /* ---- Counters ---- */
    var counted = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return; counted.unobserve(e.target);
        var el = e.target, to = parseFloat(el.dataset.count), pre = el.dataset.pre || '', suf = el.dataset.suf || '', t0 = performance.now(), dur = 1700;
        if (calm) { el.textContent = pre + to.toLocaleString('es-GT') + suf; return; }
        (function tick(now) {
          var k = clamp((now - t0) / dur, 0, 1), v = Math.round(to * (1 - Math.pow(1 - k, 4)));
          el.textContent = pre + v.toLocaleString('es-GT') + suf;
          if (k < 1) requestAnimationFrame(tick);
        })(t0);
      });
    }, { threshold: 0.5 }) : null;
    $$('[data-count]').forEach(function (el) { if (counted) counted.observe(el); });

    /* ---- Hero slideshow ---- */
    $$('.slides').forEach(function (box) {
      var slides = $$('.slide', box), i = 0, bars = $$('.slides-nav button', box.parentNode), count = $('.slides-count b', box.parentNode), timer = 0, T = 5600;
      if (slides.length < 2) return;
      function go(n) {
        slides[i].classList.remove('on'); if (bars[i]) bars[i].classList.remove('on');
        i = (n + slides.length) % slides.length;
        slides[i].classList.add('on'); if (bars[i]) bars[i].classList.add('on');
        if (count) count.textContent = ('0' + (i + 1)).slice(-2);
      }
      function play() { clearInterval(timer); if (!calm) timer = setInterval(function () { go(i + 1); }, T); }
      bars.forEach(function (b, n) { b.addEventListener('click', function () { go(n); play(); }); });
      slides[0].classList.add('on'); if (bars[0]) bars[0].classList.add('on');
      setTimeout(play, start);
      doc.addEventListener('visibilitychange', function () { if (doc.hidden) clearInterval(timer); else play(); });
    });

    /* ---- Marquee: fill the row ---- */
    $$('.marquee').forEach(function (m) {
      var t = $('.marquee-track', m); if (!t) return;
      var c = t.cloneNode(true); c.setAttribute('aria-hidden', 'true'); m.appendChild(c);
    });

    /* ---- Services: floating preview ---- */
    $$('.svc').forEach(function (list) {
      if (!fine || vw < 960) return;
      var rows = $$('.svc-row', list), fl = doc.createElement('div'); fl.className = 'svc-float'; fl.setAttribute('aria-hidden', 'true');
      rows.forEach(function (r, n) { var im = $('.thumb img', r); if (!im) return; var c = doc.createElement('img'); c.src = im.currentSrc || im.src; c.alt = ''; c.dataset.n = n; fl.appendChild(c); });
      doc.body.appendChild(fl);
      var x = 0, y = 0, tx = 0, ty = 0, on = false, raf = 0;
      function loop() { x = lerp(x, tx, 0.14); y = lerp(y, ty, 0.14); fl.style.transform = 'translate3d(' + (x + 190) + 'px,' + y + 'px,0) translate(-50%,-50%) rotate(' + clamp((tx - x) * 0.05, -8, 8) + 'deg)'; raf = on || Math.abs(tx - x) > 0.5 ? requestAnimationFrame(loop) : 0; }
      list.addEventListener('pointermove', function (e) { tx = e.clientX; ty = e.clientY; if (!raf) raf = requestAnimationFrame(loop); });
      rows.forEach(function (r, n) {
        r.addEventListener('pointerenter', function (e) { if (!on) { x = tx = e.clientX; y = ty = e.clientY; } on = true; fl.classList.add('on'); $$('img', fl).forEach(function (im) { im.classList.toggle('on', +im.dataset.n === n); }); });
      });
      list.addEventListener('pointerleave', function () { on = false; fl.classList.remove('on'); });
      window.addEventListener('scroll', function () { if (on) { on = false; fl.classList.remove('on'); } }, { passive: true });
    });

    /* ---- Process: the picture follows the active step ---- */
    $$('.steps').forEach(function (box) {
      var steps = $$('.step', box), pics = $$('.steps-pics img', box);
      if (!steps.length) return;
      function set(n) { steps.forEach(function (s, k) { s.classList.toggle('on', k === n); }); pics.forEach(function (p, k) { p.classList.toggle('on', k === n); }); }
      set(0);
      if (!('IntersectionObserver' in window)) return;
      var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) set(steps.indexOf(e.target)); }); }, { rootMargin: '-45% 0px -45% 0px' });
      steps.forEach(function (s) { io.observe(s); });
    });

    /* ---- Menu: mark the section in view ---- */
    (function () {
      if (!('IntersectionObserver' in window)) return;
      var links = $$('.nav-links a[href^="#"], .menu a[href^="#"]:not(.btn)'), map = {};
      links.forEach(function (a) { var id = a.getAttribute('href').slice(1); (map[id] = map[id] || []).push(a); });
      var spy = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) return;
          links.forEach(function (a) { a.removeAttribute('aria-current'); });
          map[e.target.id].forEach(function (a) { a.setAttribute('aria-current', 'true'); });
        });
      }, { rootMargin: '-35% 0px -60% 0px' });
      Object.keys(map).forEach(function (id) { var el = doc.getElementById(id); if (el) spy.observe(el); });
    })();

    /* ---- FAQ ---- */
    $$('.faq-q').forEach(function (b) {
      b.addEventListener('click', function () {
        var open = b.getAttribute('aria-expanded') === 'true';
        $$('.faq-q', b.closest('.faq')).forEach(function (o) { o.setAttribute('aria-expanded', 'false'); o.closest('.faq-item').classList.remove('open'); });
        b.setAttribute('aria-expanded', open ? 'false' : 'true'); b.closest('.faq-item').classList.toggle('open', !open);
      });
    });

    /* ---- Before / after ---- */
    $$('.ba').forEach(function (ba) {
      var input = $('input', ba);
      function set(p) { ba.style.setProperty('--p', clamp(p, 0, 100) + '%'); }
      var live = false, held = false;
      function at(e) { var r = ba.getBoundingClientRect(); var v = clamp((e.clientX - r.left) / r.width * 100, 0, 100); set(v); if (input) input.value = v; }
      if (input) input.addEventListener('input', function () { live = true; set(+input.value); });
      ba.addEventListener('pointerdown', function (e) { live = held = true; at(e); });
      window.addEventListener('pointermove', function (e) { if (held) at(e); }, { passive: true });
      window.addEventListener('pointerup', function () { held = false; });
      window.addEventListener('pointercancel', function () { held = false; });
      if (!calm && 'IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (es) {
          if (!es[0].isIntersecting) return; io.disconnect();
          var t0 = performance.now();
          (function sway(now) { var k = (now - t0) / 1800; if (live) return; if (k > 1) { set(50); return; } set(50 + Math.sin(k * Math.PI * 2) * 22 * (1 - k)); requestAnimationFrame(sway); })(t0);
        }, { threshold: 0.6 });
        io.observe(ba);
      }
    });

    /* ---- Lightbox ---- */
    (function () {
      var items = $$('[data-lb]'); if (!items.length) return;
      var lb = doc.createElement('div'); lb.className = 'lb'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', 'Fotografía ampliada');
      lb.innerHTML = '<button class="x" aria-label="Cerrar">✕</button><button class="prev" aria-label="Anterior">←</button><img alt=""><button class="next" aria-label="Siguiente">→</button><p></p>';
      doc.body.appendChild(lb);
      var img = $('img', lb), cap = $('p', lb), i = 0, last = null;
      function show(n) { i = (n + items.length) % items.length; var a = items[i]; img.src = a.getAttribute('href'); img.alt = a.dataset.lb || ''; cap.textContent = a.dataset.lb || ''; }
      function open(n) { last = doc.activeElement; show(n); lb.classList.add('on'); root.classList.add('lock'); $('.x', lb).focus(); }
      function close() { lb.classList.remove('on'); root.classList.remove('lock'); if (last) last.focus(); }
      items.forEach(function (a, n) { a.addEventListener('click', function (e) { e.preventDefault(); open(n); }); });
      $('.x', lb).addEventListener('click', close); $('.prev', lb).addEventListener('click', function () { show(i - 1); }); $('.next', lb).addEventListener('click', function () { show(i + 1); });
      lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
      doc.addEventListener('keydown', function (e) { if (!lb.classList.contains('on')) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowLeft') show(i - 1); if (e.key === 'ArrowRight') show(i + 1); });
    })();

    /* ---- Menu ---- */
    var nav = $('.nav'), burger = $('.burger');
    if (burger) {
      burger.addEventListener('click', function () { var o = root.classList.toggle('menu-open'); burger.setAttribute('aria-expanded', o ? 'true' : 'false'); root.classList.toggle('lock', o); });
      $$('.menu a').forEach(function (a) { a.addEventListener('click', function () { root.classList.remove('menu-open', 'lock'); burger.setAttribute('aria-expanded', 'false'); }); });
      doc.addEventListener('keydown', function (e) { if (e.key === 'Escape' && root.classList.contains('menu-open')) burger.click(); });
    }

    /* ---- Language switch (Premium) ---- */
    (function () {
      var btns = $$('.lang button'); if (!btns.length) return;
      var nodes = $$('[data-en]');
      nodes.forEach(function (n) { n.dataset.es = n.innerHTML; });
      function set(l) {
        nodes.forEach(function (n) {
          n.innerHTML = l === 'en' ? n.dataset.en : n.dataset.es;
          if (n.hasAttribute('data-split')) { delete n.dataset.done; split(n); n.classList.add('in'); }
        });
        $$('[data-en-ph]').forEach(function (n) { if (!n.dataset.esPh) n.dataset.esPh = n.placeholder; n.placeholder = l === 'en' ? n.dataset.enPh : n.dataset.esPh; });
        root.lang = l; btns.forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.l === l ? 'true' : 'false'); });
      }
      btns.forEach(function (b) { b.addEventListener('click', function () { set(b.dataset.l); }); });
    })();

    /* ---- Demo forms: nothing is sent ---- */
    $$('form.form').forEach(function (f) { f.addEventListener('submit', function (e) { e.preventDefault(); f.classList.add('sent'); var ok = $('.form-ok', f); if (ok) ok.focus(); }); });

    /* ---- Tilt cards ---- */
    if (fine && !calm) $$('[data-tilt]').forEach(function (c) {
      c.addEventListener('pointermove', function (e) { var r = c.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5; c.style.transform = 'perspective(900px) rotateY(' + px * 7 + 'deg) rotateX(' + -py * 7 + 'deg) translateY(-6px)'; });
      c.addEventListener('pointerleave', function () { c.style.transform = ''; });
    });

    /* ---- Magnetic buttons ---- */
    if (fine && !calm) $$('[data-magnet]').forEach(function (b) {
      b.addEventListener('pointermove', function (e) { var r = b.getBoundingClientRect(); b.style.transform = 'translate(' + (e.clientX - r.left - r.width / 2) * 0.28 + 'px,' + (e.clientY - r.top - r.height / 2) * 0.38 + 'px)'; });
      b.addEventListener('pointerleave', function () { b.style.transform = ''; });
    });

    /* ---- Pointer follower (Premium) ---- */
    var cur = $('.cursor');
    if (cur && fine && !calm) {
      var cx = 0, cy = 0, ctx = 0, cty = 0, lab = $('span', cur);
      window.addEventListener('pointermove', function (e) { ctx = e.clientX; cty = e.clientY; cur.classList.add('on'); }, { passive: true });
      doc.addEventListener('pointerover', function (e) {
        var big = e.target.closest('[data-cursor]'), link = e.target.closest('a, button, input, select, textarea, label');
        cur.classList.toggle('big', !!big); cur.classList.toggle('link', !big && !!link);
        if (big && lab) lab.textContent = big.dataset.cursor;
      });
      doc.addEventListener('pointerleave', function () { cur.classList.remove('on'); });
      (function follow() { cx = lerp(cx, ctx, 0.2); cy = lerp(cy, cty, 0.2); cur.style.transform = 'translate3d(' + cx + 'px,' + cy + 'px,0)'; requestAnimationFrame(follow); })();
    } else if (cur) cur.remove();

    /* ---- Scroll-driven: menu, progress, parallax, word reveal, horizontal showcase ---- */
    var pars = $$('[data-par]').map(function (el) { return { el: el, k: parseFloat(el.dataset.par) || 0.1, on: false }; });
    var words = $$('[data-words]').map(function (el) { return { el: el, ws: $$('.w', el), on: false, n: -1 }; });
    var hpins = $$('.hpin').map(function (el) { return { el: el, track: $('.hpin-track', el), bar: $('.hpin-bar i', el), on: false, x: 0 }; });
    var prog = $('.progress'), heroEl = $('.hero');
    if ('IntersectionObserver' in window) {
      var near = new IntersectionObserver(function (es) { es.forEach(function (e) { e.target.__s.on = e.isIntersecting; }); }, { rootMargin: '20% 0px 20% 0px' });
      pars.concat(words, hpins).forEach(function (s) { s.el.__s = s; near.observe(s.el); });
    } else pars.concat(words, hpins).forEach(function (s) { s.on = true; });
    function sizePins() {
      hpins.forEach(function (h) {
        if (vw < 960 || calm) { h.el.style.removeProperty('--hpin-h'); h.track.style.transform = ''; h.dist = 0; return; }
        h.dist = Math.max(0, h.track.scrollWidth - vw);
        h.el.style.setProperty('--hpin-h', (vh + h.dist) + 'px');
      });
    }
    sizePins();
    /* ---- Back to top: appears after the first screen, its ring fills with the page ---- */
    var top = doc.createElement('button'); top.type = 'button'; top.className = 'totop'; top.setAttribute('data-top', '');
    top.setAttribute('aria-label', 'Volver arriba');
    top.innerHTML = '<svg viewBox="0 0 52 52" aria-hidden="true"><circle class="tt-track" cx="26" cy="26" r="24"/><circle class="tt-ring" cx="26" cy="26" r="24" pathLength="100"/><path d="M26 34V19M19.5 25.5 26 19l6.5 6.5"/></svg>';
    doc.body.appendChild(top);
    var ring = $('.tt-ring', top);
    $$('[data-top]').forEach(function (b) { b.addEventListener('click', function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: calm ? 'auto' : 'smooth' }); }); });
    var lastY = window.scrollY, ticking = false;
    function frame() {
      ticking = false;
      var y = window.scrollY, max = doc.documentElement.scrollHeight - vh;
      placeBar();
      if (nav) {
        var past = heroEl ? y > heroEl.offsetHeight - 120 : y > 40;
        nav.classList.toggle('is-solid', nav.hasAttribute('data-solid') ? y > 20 : past);
      }
      lastY = y;
      top.classList.toggle('on', y > vh * 0.9 && y < max - 90 && !root.classList.contains('menu-open'));
      ring.style.strokeDashoffset = (100 - (max > 0 ? clamp(y / max, 0, 1) : 0) * 100).toFixed(1);
      if (prog) prog.style.transform = 'scaleX(' + (max > 0 ? y / max : 0) + ')';
      if (!calm) pars.forEach(function (p) { if (!p.on) return; var r = p.el.parentNode.getBoundingClientRect(); p.el.style.transform = 'translate3d(0,' + ((r.top + r.height / 2 - vh / 2) * -p.k).toFixed(1) + 'px,0)'; });
      words.forEach(function (w) {
        if (!w.on) return; var r = w.el.getBoundingClientRect(), k = clamp((vh * 0.82 - r.top) / (r.height + vh * 0.42), 0, 1), n = Math.round(k * w.ws.length);
        if (n === w.n) return; w.n = n; w.ws.forEach(function (s, i) { s.classList.toggle('on', i < n); });
      });
      hpins.forEach(function (h) {
        if (!h.on || !h.dist) return; var r = h.el.getBoundingClientRect(), k = clamp(-r.top / (r.height - vh), 0, 1);
        h.track.style.transform = 'translate3d(' + (-k * h.dist).toFixed(1) + 'px,0,0)'; if (h.bar) h.bar.style.transform = 'scaleX(' + k + ')';
      });
    }
    function ask() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
    window.addEventListener('scroll', ask, { passive: true });
    window.addEventListener('resize', function () { sizePins(); ask(); });
    window.addEventListener('load', function () { sizePins(); frame(); });
    frame();
  });
})();
