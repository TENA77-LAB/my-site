(function () {
  "use strict";

  var preloader = document.getElementById("preloader");
  if (preloader) {
    window.setTimeout(function () {
      preloader.classList.add("preloader--hide");
      window.setTimeout(function () {
        preloader.setAttribute("hidden", "");
        document.body.classList.add("is-ready");
      }, 650);
    }, 1400);
  }

  var bar = document.getElementById("scrollProgress");
  function onScroll() {
    if (!bar) return;
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    var p = max > 0 ? (window.scrollY / max) * 100 : 0;
    bar.style.width = p + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("reveal--in");
            io.unobserve(en.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    document.querySelectorAll(".reveal").forEach(function (el) {
      io.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("reveal--in");
    });
  }

  document.querySelectorAll("[data-parallax]").forEach(function (wrap) {
    var inner = wrap.querySelector(".parallax-inner");
    if (!inner || reduceMotion) return;
    function tick() {
      var r = wrap.getBoundingClientRect();
      var vh = window.innerHeight || 1;
      var t = (r.top + r.height * 0.5 - vh * 0.5) / vh;
      inner.style.transform = "translateY(" + (t * 18).toFixed(2) + "px)";
    }
    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", tick, { passive: true });
    tick();
  });
})();
