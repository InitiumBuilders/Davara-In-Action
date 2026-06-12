/* DAVARA SAFE · motion layer
   One symbol carries the hero: a warm presence-pulse breathing through a
   cold field of agent-motes. Presence is the light; autonomy orbits it. */

(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- arrival emergence ---------- */
  var revealables = document.querySelectorAll(".rise, #triad-svg, #flow-svg, #triple-svg, #triple-svg-m, #loop-svg, #steer-svg, #fleet-svg");
  if ("IntersectionObserver" in window && !reduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("lit");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.05, rootMargin: "0px 0px -24px 0px" });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add("lit"); });
  }

  /* ---------- instrument count-up ---------- */
  var stats = document.querySelectorAll(".stat-n");
  function setStat(el, v, d) { el.textContent = d ? v.toFixed(d) : Math.round(v).toString(); }
  function countUp(el) {
    var target = parseFloat(el.getAttribute("data-n")) || 0;
    var d = parseInt(el.getAttribute("data-d") || "0", 10);
    if (reduced) { setStat(el, target, d); return; }
    var t0 = 0, DUR = 1300;
    function tick(t) {
      if (!t0) t0 = t;
      var p = Math.min(1, (t - t0) / DUR);
      var eased = 1 - Math.pow(1 - p, 3);
      setStat(el, target * eased, d);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if (stats.length) {
    if ("IntersectionObserver" in window && !reduced) {
      var sio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { countUp(e.target); sio.unobserve(e.target); }
        });
      }, { threshold: 0.4 });
      stats.forEach(function (el) { sio.observe(el); });
    } else {
      stats.forEach(function (el) {
        setStat(el, parseFloat(el.getAttribute("data-n")) || 0, parseInt(el.getAttribute("data-d") || "0", 10));
      });
    }
  }

  /* ---------- the reader's rail — scroll progress as presence ---------- */
  var rail = document.querySelector("#rail i");
  if (rail) {
    var railPending = false;
    function paintRail() {
      railPending = false;
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      rail.style.height = (max > 0 ? (doc.scrollTop / max) * 100 : 0) + "%";
    }
    window.addEventListener("scroll", function () {
      if (!railPending) { railPending = true; requestAnimationFrame(paintRail); }
    }, { passive: true });
    paintRail();
  }

  /* ---------- the presence beacon ---------- */
  var canvas = document.getElementById("beacon");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var W = 0, H = 0, cx = 0, cy = 0;
  var motes = [];
  var MOTE_N = 42;

  function size() {
    var r = canvas.getBoundingClientRect();
    W = Math.round(r.width); H = Math.round(r.height);
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // beacon sits right-of-center on wide screens, upper-right on narrow
    cx = W > 720 ? W * 0.74 : W * 0.78;
    cy = W > 720 ? H * 0.42 : H * 0.24;
    seedMotes();
  }

  function seedMotes() {
    motes = [];
    var GOLD = 0.6180339887;
    for (var i = 0; i < MOTE_N; i++) {
      var a = ((i + 1) * GOLD) % 1;          // deterministic golden-ratio scatter
      var b = ((i + 1) * GOLD * GOLD) % 1;
      motes.push({
        ox: a * W,
        oy: b * H,
        r: 0.6 + ((i * 7) % 10) / 9,
        ph: a * Math.PI * 2,
        sp: 0.00006 + b * 0.00009,
        amp: 6 + a * 14
      });
    }
  }

  var PULSE_MS = 2600;        // the heartbeat
  var RING_LIFE = 2200;

  function frame(t) {
    ctx.clearRect(0, 0, W, H);

    // cold field — the agents, drifting
    for (var i = 0; i < motes.length; i++) {
      var m = motes[i];
      var x = m.ox + Math.sin(t * m.sp + m.ph) * m.amp;
      var y = m.oy + Math.cos(t * m.sp * 0.8 + m.ph) * m.amp;
      var d = Math.hypot(x - cx, y - cy);
      // motes near the beacon warm up — accompaniment, not capture
      var near = Math.max(0, 1 - d / (W * 0.32));
      ctx.beginPath();
      ctx.arc(x, y, m.r, 0, 6.2832);
      ctx.fillStyle = near > 0.45
        ? "rgba(255,198,107," + (0.05 + near * 0.16).toFixed(3) + ")"
        : "rgba(90,215,255," + (0.04 + near * 0.10).toFixed(3) + ")";
      ctx.fill();
    }

    // the warm pulse — expanding attestation rings
    for (var k = 0; k < 3; k++) {
      var age = ((t + k * (PULSE_MS / 3)) % PULSE_MS) / RING_LIFE;
      if (age > 1) continue;
      var rad = 14 + age * Math.min(W, H) * 0.34;
      var alpha = (1 - age) * 0.16;
      ctx.beginPath();
      ctx.arc(cx, cy, rad, 0, 6.2832);
      ctx.strokeStyle = "rgba(255,198,107," + alpha.toFixed(3) + ")";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // the core — breathing, never extinguished
    var breathe = 0.5 + 0.5 * Math.sin((t % PULSE_MS) / PULSE_MS * 6.2832);
    var core = 2.6 + breathe * 1.6;
    var g = ctx.createRadialGradient(cx, cy, 0, cx, cy, core * 9);
    g.addColorStop(0, "rgba(255,198,107,0.85)");
    g.addColorStop(0.25, "rgba(255,198,107,0.25)");
    g.addColorStop(1, "rgba(255,198,107,0)");
    ctx.beginPath();
    ctx.arc(cx, cy, core * 9, 0, 6.2832);
    ctx.fillStyle = g;
    ctx.fill();
  }

  function staticFrame() {
    // truthful reduced-motion frame: field + two frozen rings + core
    ctx.clearRect(0, 0, W, H);
    frame(PULSE_MS * 0.35);
  }

  var running = false, rafId = 0;
  function loop(t) { frame(t); rafId = requestAnimationFrame(loop); }
  function start() { if (!running) { running = true; rafId = requestAnimationFrame(loop); } }
  function stop() { if (running) { running = false; cancelAnimationFrame(rafId); } }

  size();

  if (reduced) {
    staticFrame();
    window.addEventListener("resize", function () { size(); staticFrame(); });
    return;
  }

  // run only while the hero is on screen and the tab is visible
  var heroVisible = true;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      heroVisible = entries[0].isIntersecting;
      heroVisible && !document.hidden ? start() : stop();
    }, { threshold: 0 }).observe(canvas);
  }
  document.addEventListener("visibilitychange", function () {
    document.hidden || !heroVisible ? stop() : start();
  });

  var resizeT = 0;
  window.addEventListener("resize", function () {
    clearTimeout(resizeT);
    resizeT = setTimeout(size, 120);
  });

  start();
})();
