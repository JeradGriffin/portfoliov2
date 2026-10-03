(function () {
  var reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reveals.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  // spine nav: highlight the section in view
  var links = [].slice.call(document.querySelectorAll('.navlink'));
  var targets = links.map(function (a) { return { a: a, t: document.querySelector(a.getAttribute('href')) }; })
    .filter(function (x) { return x.t; });
  if (targets.length) {
    var onScroll = function () {
      var y = window.scrollY + 140, cur = targets[0];
      targets.forEach(function (m) { if (m.t.offsetTop <= y) cur = m; });
      links.forEach(function (a) { a.classList.toggle('current', a === cur.a); });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // mobile hamburger
  var spine = document.querySelector('.spine');
  var toggle = document.querySelector('.spine-toggle');
  if (spine && toggle) {
    var setOpen = function (open) {
      spine.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', function () { setOpen(!spine.classList.contains('open')); });
    spine.querySelectorAll('.spine-menu a').forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  }

  // case-study lightbox (desktop only, like the original detail page)
  var lb = document.getElementById('lightbox');
  if (lb && !matchMedia('(pointer: coarse)').matches) {
    var big = lb.querySelector('img');
    document.querySelectorAll('[data-zoom]').forEach(function (img) {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function () { big.src = img.currentSrc || img.src; big.alt = img.alt; lb.hidden = false; });
    });
    lb.addEventListener('click', function (e) { if (e.target !== big) lb.hidden = true; });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') lb.hidden = true; });
  }
})();
