/* ==========================================================================
   Alero: interaction layer
   Small, dependency-free effects on top of main.js. Each block is independent
   and checks what it needs, so removing one never breaks the rest.

   Rules followed everywhere:
   - Only transform, translate, opacity and canvas drawing are animated.
   - Nothing runs with "reduce motion" (system setting or the site's own
     accessibility panel); the page stays complete without this file.
   - Pointer effects run only with a mouse or trackpad; touch keeps native
     scrolling.
   - Work stops when its element is off screen or the tab is hidden.

   Packages: Express and Starter get the essentials (header, ribbon, scroll effects, counters).
   Profesional adds the floor plan drafted behind the headline and magnetic buttons. Premium adds the
   cursor label and the depth effect on the cover photos.
   ========================================================================== */
(function () {
  'use strict';

  var doc = document;
  var root = doc.documentElement;
  var reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var tier = root.classList.contains('pkg-premium') ? 3 : root.classList.contains('pkg-profesional') ? 2 : 1;

  function calm() { return reduceQuery.matches || root.classList.contains('a11y-motion'); }
  function each(list, fn) { Array.prototype.forEach.call(list, fn); }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

  /* ---------- 1. Header steps aside while scrolling down ---------- */
  (function () {
    var header = doc.getElementById('siteHeader');
    if (!header) return;
    var last = window.scrollY, ticking = false;
    function update() {
      ticking = false;
      var y = window.scrollY, dy = y - last;
      if (Math.abs(dy) < 6) return;
      var away = dy > 0 && y > 480 && !doc.querySelector('dialog[open]') && !calm();
      header.classList.toggle('is-away', away);
      last = y;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
  })();

  /* ---------- 2. Headline words (keeps the effect after a language change) ---------- */
  (function () {
    var heads = doc.querySelectorAll('[data-split]');
    if (!heads.length) return;
    function split(el) {
      if (el.querySelector('.fx-word')) return;
      var i = 0;
      (function walk(node) {
        each(Array.prototype.slice.call(node.childNodes), function (child) {
          if (child.nodeType === 3) {
            var frag = doc.createDocumentFragment();
            child.nodeValue.split(/(\s+)/).forEach(function (part) {
              if (!part) return;
              if (/^\s+$/.test(part)) { frag.appendChild(doc.createTextNode(' ')); return; }
              var outer = doc.createElement('span');
              var inner = doc.createElement('span');
              outer.className = 'fx-word d' + Math.min(i++, 14);
              inner.textContent = part;
              outer.appendChild(inner);
              frag.appendChild(outer);
            });
            node.replaceChild(frag, child);
          } else if (child.nodeType === 1) {
            walk(child);
          }
        });
      })(el);
    }
    each(heads, function (el) {
      split(el);
      new MutationObserver(function () { split(el); }).observe(el, { childList: true });
    });
  })();

  /* ---------- 3. Ribbon with the list of services ---------- */
  (function () {
    var box = doc.querySelector('[data-marquee]');
    if (!box) return;
    var sources = doc.querySelectorAll('.services-grid .service-link, .services-grid h3 [data-i18n]');
    if (!sources.length) sources = doc.querySelectorAll('.services-grid h3');
    if (sources.length < 3) return;
    var track = doc.createElement('div');
    track.className = 'marquee-track';
    function addSet() {
      each(sources, function (src) {
        var item = doc.createElement('span');
        item.className = 'marquee-item';
        item.textContent = src.textContent;
        var key = src.getAttribute('data-i18n');
        if (key) item.setAttribute('data-i18n', key);
        track.appendChild(item);
      });
    }
    addSet();
    box.appendChild(track);
    // Repeat until one half is wider than the screen, then double it for a seamless loop.
    var guard = 0;
    while (track.scrollWidth < window.innerWidth * 1.2 && guard++ < 6) addSet();
    var half = track.children.length;
    for (var n = 0; n < half; n++) track.appendChild(track.children[n].cloneNode(true));
    function pace() { box.style.setProperty('--mq', Math.max(18, Math.round(track.scrollWidth / 2 / 70)) + 's'); }
    pace();
    if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(pace);
  })();

  /* ---------- 4. Reviews: drag with momentum (mouse); touch scrolls natively ---------- */
  (function () {
    var rail = doc.querySelector('.reviews-grid');
    if (!rail || !finePointer) return;
    var down = false, moved = false, startX = 0, startLeft = 0, samples = [], raf = 0;
    function stop() { if (raf) { cancelAnimationFrame(raf); raf = 0; } }
    rail.addEventListener('pointerdown', function (e) {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      stop();
      down = true; moved = false;
      startX = e.clientX; startLeft = rail.scrollLeft;
      samples = [{ x: e.clientX, t: performance.now() }];
    });
    window.addEventListener('pointermove', function (e) {
      if (!down) return;
      var dx = e.clientX - startX;
      if (!moved && Math.abs(dx) < 8) return;   // hysteresis: a click stays a click
      if (!moved) { moved = true; rail.classList.add('is-dragging'); }
      rail.scrollLeft = startLeft - dx;
      samples.push({ x: e.clientX, t: performance.now() });
      if (samples.length > 5) samples.shift();
    });
    function release() {
      if (!down) return;
      down = false;
      if (!moved) return;
      var a = samples[0], b = samples[samples.length - 1];
      var velocity = b.t > a.t ? (a.x - b.x) / (b.t - a.t) * 1000 : 0;   // px/s, in scroll direction
      // Project where the gesture is going (exponential decay), then glide there.
      var rate = 0.994;
      var target = clamp(rail.scrollLeft + (velocity / 1000) * rate / (1 - rate), 0, rail.scrollWidth - rail.clientWidth);
      var from = rail.scrollLeft, t0 = performance.now(), dur = calm() ? 0 : 700;
      (function glide(now) {
        var k = dur ? clamp((now - t0) / dur, 0, 1) : 1;
        rail.scrollLeft = from + (target - from) * (1 - Math.pow(1 - k, 4));
        if (k < 1) raf = requestAnimationFrame(glide);
        else { raf = 0; rail.classList.remove('is-dragging'); }
      })(t0);
    }
    window.addEventListener('pointerup', release);
    window.addEventListener('pointercancel', release);
    rail.addEventListener('click', function (e) { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
    rail.addEventListener('dragstart', function (e) { e.preventDefault(); });
  })();

  /* ---------- 4b. Scroll-linked effects, driven here so they also run on iPhone Safari ---------- */
  (function () {
    var bar = doc.createElement('div');
    bar.className = 'fx-progress'; bar.setAttribute('aria-hidden', 'true');
    doc.body.appendChild(bar);
    // kind: how progress is measured while the element crosses the screen.
    var items = [];
    function add(sel, kind) { each(doc.querySelectorAll(sel), function (el) { items.push({ el: el, kind: kind, on: false }); }); }
    add('.footer-word', 'entry');
    add('.cta-inner h2', 'early');
    add('.about-art.has-photo .about-photo, .maternity-photo .maternity-img', 'through');
    var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { e.target.__fx.on = e.isIntersecting; });
      queue();
    }, { rootMargin: '10% 0px' }) : null;
    items.forEach(function (it) { it.el.__fx = it; if (io) io.observe(it.el); else it.on = true; });
    var ticking = false;
    function queue() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
    function update() {
      ticking = false;
      var still = calm(), vh = window.innerHeight || 1;
      var max = Math.max(1, doc.documentElement.scrollHeight - vh);
      bar.style.setProperty('--p', still ? 0 : clamp(window.scrollY / max, 0, 1).toFixed(4));
      items.forEach(function (it) {
        if (still) { it.el.style.removeProperty('--p'); return; }
        if (!it.on) return;
        var r = it.el.getBoundingClientRect(), p;
        if (it.kind === 'entry') p = (vh - r.top) / Math.max(1, r.height * 0.9);
        else if (it.kind === 'early') p = (vh - r.top) / Math.max(1, (vh + r.height) * 0.45);
        else p = (vh - r.top) / (vh + r.height);
        it.el.style.setProperty('--p', clamp(p, 0, 1).toFixed(4));
      });
    }
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue);
    new MutationObserver(queue).observe(root, { attributes: true, attributeFilter: ['class'] });
    update();
  })();

  /* ---------- 4c. Figures count up the first time they appear ---------- */
  (function () {
    var els = doc.querySelectorAll('.stat-value');
    if (!els.length || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        var el = e.target, text = el.textContent, m = text.match(/^(\D*)([\d,]+)(.*)$/);
        if (!m || calm()) return;
        var to = parseInt(m[2].replace(/,/g, ''), 10), comma = m[2].indexOf(',') > -1;
        if (!(to > 1)) return;
        var start = performance.now(), dur = 1400;
        (function tick(now) {
          if (el.textContent.indexOf(m[1]) !== 0 && m[1]) return;   // text replaced (language switch): stop
          var k = clamp((now - start) / dur, 0, 1), v = Math.round(to * (1 - Math.pow(1 - k, 3)));
          el.textContent = m[1] + (comma ? v.toLocaleString('en-US') : String(v)) + m[3];
          if (k < 1) requestAnimationFrame(tick); else el.textContent = text;
        })(start);
      });
    }, { threshold: 0.6 });
    each(els, function (el) { io.observe(el); });
  })();

  /* ---------- 4d. Reviews: on phones the list is stacked; show the rest on request ---------- */
  (function () {
    var btn = doc.querySelector('[data-reviews-more]');
    if (!btn) return;
    var section = btn.closest('.reviews');
    if (section.querySelectorAll('.review-card').length <= 3) { btn.hidden = true; return; }
    btn.addEventListener('click', function () { section.classList.add('show-all'); });
  })();

  if (tier < 2) return;

  /* ---------- 5. A floor plan drafted behind the headline (canvas) ---------- */
  (function () {
    var canvas = doc.querySelector('[data-plan]');
    var hero = canvas && canvas.parentNode;
    if (!canvas || !canvas.getContext || calm()) return;
    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = 0, h = 0, raf = 0, visible = true, running = false;
    var plan = null, t0 = 0, pointer = { x: 0, y: 0, on: false };
    var ink = '#1c1a17', accent = '#b5532b';
    var DRAW = 4200, HOLD = 5200, FADE = 900, G = 20;

    function readColors() {
      var cs = getComputedStyle(root);
      ink = cs.getPropertyValue('--text').trim() || ink;
      accent = cs.getPropertyValue('--accent').trim() || accent;
    }
    function snap(v) { return Math.round(v / G) * G; }
    function resize() {
      var r = hero.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      plan = make(); t0 = performance.now();
      if (!running) paint(performance.now());
    }
    // Recursive subdivision of a rectangle into rooms: every cut is a wall with a door.
    function make() {
      var wide = w >= 900;
      var x0 = snap(wide ? w * 0.5 : w * 0.06), y0 = snap(h * (wide ? 0.14 : 0.1));
      var W = snap(w - x0 - (wide ? 48 : w * 0.06)), H = snap(Math.min(h * 0.62, W * 0.78));
      var segs = [[x0, y0, x0 + W, y0], [x0 + W, y0, x0 + W, y0 + H], [x0 + W, y0 + H, x0, y0 + H], [x0, y0 + H, x0, y0]];
      var doors = [];
      (function cut(x, y, cw, ch, depth) {
        if (depth > 3 || cw < 120 || ch < 100) return;
        var vertical = cw / ch > 1.15 ? true : ch / cw > 1.15 ? false : Math.random() < 0.5;
        var k = 0.36 + Math.random() * 0.28;
        if (vertical) {
          var sx = snap(x + cw * k); if (sx <= x + G || sx >= x + cw - G) return;
          var dy = snap(y + ch * (0.25 + Math.random() * 0.4));
          segs.push([sx, y, sx, dy - 16], [sx, dy + 16, sx, y + ch]);
          doors.push({ x: sx, y: dy - 16, a0: 0, a1: Math.PI / 2 });
          cut(x, y, sx - x, ch, depth + 1); cut(sx, y, x + cw - sx, ch, depth + 1);
        } else {
          var sy = snap(y + ch * k); if (sy <= y + G || sy >= y + ch - G) return;
          var dx = snap(x + cw * (0.25 + Math.random() * 0.4));
          segs.push([x, sy, dx - 16, sy], [dx + 16, sy, x + cw, sy]);
          doors.push({ x: dx - 16, y: sy, a0: Math.PI * 1.5, a1: Math.PI * 2 });
          cut(x, y, cw, sy - y, depth + 1); cut(x, sy, cw, y + ch - sy, depth + 1);
        }
      })(x0, y0, W, H, 0);
      var total = 0;
      segs.forEach(function (sg) { sg.len = Math.abs(sg[2] - sg[0]) + Math.abs(sg[3] - sg[1]); total += sg.len; });
      return { x0: x0, y0: y0, W: W, H: H, segs: segs, doors: doors, total: total, label: (W / 40).toFixed(2) + ' m' };
    }
    function paint(now) {
      ctx.clearRect(0, 0, w, h);
      if (!plan) return;
      var el = now - t0, k = Math.min(el / DRAW, 1), fade = 1;
      if (el > DRAW + HOLD) fade = Math.max(0, 1 - (el - DRAW - HOLD) / FADE);
      var ease = 1 - Math.pow(1 - k, 3);
      var base = w >= 900 ? 0.62 : 0.34;
      // Grid.
      ctx.globalAlpha = 0.05 * base; ctx.strokeStyle = ink; ctx.lineWidth = 1;
      ctx.beginPath();
      for (var gx = (plan.x0 % G) + 0.5; gx < w; gx += G * 2) { ctx.moveTo(gx, 0); ctx.lineTo(gx, h); }
      for (var gy = (plan.y0 % G) + 0.5; gy < h; gy += G * 2) { ctx.moveTo(0, gy); ctx.lineTo(w, gy); }
      ctx.stroke();
      // Walls, drawn in order up to the current length.
      var left = plan.total * ease;
      ctx.globalAlpha = 0.26 * base * fade; ctx.lineWidth = 2.5; ctx.lineCap = 'square';
      ctx.beginPath();
      for (var i = 0; i < plan.segs.length && left > 0; i++) {
        var sg = plan.segs[i], f = Math.min(1, left / sg.len);
        ctx.moveTo(sg[0], sg[1]); ctx.lineTo(sg[0] + (sg[2] - sg[0]) * f, sg[1] + (sg[3] - sg[1]) * f);
        left -= sg.len;
      }
      ctx.stroke();
      // Doors and the dimension line appear once the walls are up.
      var late = Math.max(0, (k - 0.7) / 0.3);
      if (late > 0) {
        var showLabel = w >= 900;
        ctx.globalAlpha = 0.5 * base * fade * late; ctx.strokeStyle = accent; ctx.lineWidth = 1.25;
        plan.doors.forEach(function (d) { ctx.beginPath(); ctx.arc(d.x, d.y, 32, d.a0, d.a1); ctx.stroke(); });
        var yd = plan.y0 - 18, x1 = plan.x0, x2 = plan.x0 + plan.W * late;
        ctx.beginPath(); ctx.moveTo(x1, yd); ctx.lineTo(x2, yd);
        ctx.moveTo(x1 - 4, yd + 4); ctx.lineTo(x1 + 4, yd - 4); ctx.moveTo(x2 - 4, yd + 4); ctx.lineTo(x2 + 4, yd - 4);
        ctx.stroke();
        ctx.fillStyle = accent; ctx.font = '600 11px ' + (getComputedStyle(doc.body).fontFamily || 'sans-serif');
        ctx.textAlign = 'center'; if (showLabel) ctx.fillText(plan.label, plan.x0 + plan.W / 2, yd - 7);
      }
      // Drafting guides follow the pointer (mouse or trackpad only).
      if (pointer.on) {
        var px = snap(pointer.x) + 0.5, py = snap(pointer.y) + 0.5;
        ctx.globalAlpha = 0.35 * base; ctx.strokeStyle = accent; ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, h); ctx.moveTo(0, py); ctx.lineTo(w, py); ctx.stroke();
        ctx.setLineDash([]);
      }
      ctx.globalAlpha = 1;
      if (el > DRAW + HOLD + FADE) { plan = make(); t0 = now; }
    }
    function frame(now) {
      raf = 0;
      if (!running) return;
      paint(now);
      raf = requestAnimationFrame(frame);
    }
    function sync() {
      var should = visible && !doc.hidden && !calm();
      if (should && !running) { running = true; t0 = performance.now() - Math.min(performance.now() - t0, DRAW); if (!raf) raf = requestAnimationFrame(frame); }
      else if (!should) { running = false; }
      canvas.classList.toggle('is-on', should);
    }
    readColors(); resize();
    new ResizeObserver(function () { var r = hero.getBoundingClientRect(); if (Math.abs(r.width - w) > 1 || Math.abs(r.height - h) > 40) resize(); }).observe(hero);
    new IntersectionObserver(function (entries) { visible = entries[0].isIntersecting; sync(); }).observe(hero);
    doc.addEventListener('visibilitychange', sync);
    reduceQuery.addEventListener && reduceQuery.addEventListener('change', sync);
    new MutationObserver(function () { readColors(); sync(); }).observe(root, { attributes: true, attributeFilter: ['class'] });
    if (finePointer) {
      hero.addEventListener('pointermove', function (e) {
        var r = hero.getBoundingClientRect();
        pointer.x = e.clientX - r.left; pointer.y = e.clientY - r.top; pointer.on = true;
      }, { passive: true });
      hero.addEventListener('pointerleave', function () { pointer.on = false; });
    }
    sync();
  })();

  if (!finePointer) return;

  /* ---------- 6. Magnetic buttons ---------- */
  each(doc.querySelectorAll('[data-magnetic]'), function (btn) {
    btn.addEventListener('pointermove', function (e) {
      if (calm()) return;
      var r = btn.getBoundingClientRect();
      var x = (e.clientX - r.left - r.width / 2) * 0.22;
      var y = (e.clientY - r.top - r.height / 2) * 0.34;
      btn.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px)';
    });
    btn.addEventListener('pointerleave', function () { btn.style.transform = ''; });
    btn.addEventListener('pointerdown', function () { btn.style.transform = ''; });
  });

  if (tier < 3) return;

  /* ---------- 7. Cover photos follow the pointer at different depths ---------- */
  (function () {
    var art = doc.querySelector('[data-depth]');
    var hero = art && art.closest('.hero');
    if (!art) return;
    var layers = [];
    each(art.querySelectorAll('.hero-photo'), function (el, i) { layers.push({ el: el, k: [14, 26, 18][i] || 16 }); });
    var tx = 0, ty = 0, x = 0, y = 0, raf = 0;
    function tick() {
      x += (tx - x) * 0.09; y += (ty - y) * 0.09;
      layers.forEach(function (l) { l.el.style.translate = (x * l.k).toFixed(2) + 'px ' + (y * l.k).toFixed(2) + 'px'; });
      raf = (Math.abs(tx - x) + Math.abs(ty - y) > 0.002) ? requestAnimationFrame(tick) : 0;
    }
    hero.addEventListener('pointermove', function (e) {
      if (calm()) return;
      var r = hero.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5; ty = (e.clientY - r.top) / r.height - 0.5;
      if (!raf) raf = requestAnimationFrame(tick);
    }, { passive: true });
    hero.addEventListener('pointerleave', function () { tx = 0; ty = 0; if (!raf) raf = requestAnimationFrame(tick); });
  })();

  /* ---------- 8. Cursor label over photos and the reviews row ---------- */
  (function () {
    var targets = '.service-media, .area-card.has-photo, .doc-avatar.has-photo, .reviews-grid';
    var dot = doc.createElement('div');
    dot.className = 'fx-cursor';
    dot.setAttribute('aria-hidden', 'true');
    doc.body.appendChild(dot);
    var tx = 0, ty = 0, x = 0, y = 0, raf = 0, on = false;
    function label(el) {
      var en = (root.getAttribute('lang') || 'es').slice(0, 2) === 'en';
      if (el.classList.contains('reviews-grid')) return en ? 'Drag' : 'Arrastre';
      return en ? 'View' : 'Ver';
    }
    function tick() {
      x += (tx - x) * 0.2; y += (ty - y) * 0.2;
      dot.style.transform = 'translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,0)';
      raf = on || Math.abs(tx - x) + Math.abs(ty - y) > 0.5 ? requestAnimationFrame(tick) : 0;
    }
    doc.addEventListener('pointermove', function (e) {
      if (e.pointerType !== 'mouse') return;
      tx = e.clientX; ty = e.clientY;
      var hit = !calm() && e.target.closest && e.target.closest(targets);
      if (hit && e.target.closest('a.btn, button.btn, .text-link, .service-open, .area-open')) hit = null;
      if (hit && !on) { x = tx; y = ty; dot.textContent = label(hit); }
      on = !!hit;
      dot.classList.toggle('is-on', on);
      if (on && !raf) raf = requestAnimationFrame(tick);
    }, { passive: true });
    doc.addEventListener('pointerdown', function () { dot.classList.remove('is-on'); on = false; });
    doc.addEventListener('scroll', function () { dot.classList.remove('is-on'); on = false; }, { passive: true });
  })();
})();
