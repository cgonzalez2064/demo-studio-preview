document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700);
document.documentElement.classList.add('mo-js');setTimeout(()=>document.documentElement.classList.add('mo-safe'),2500);
document.addEventListener('DOMContentLoaded', function () {
  var bar = document.querySelector('.demo-banner'); if (!bar) return;
  var root = document.documentElement, queued = false;
  function place() { queued = false; root.style.setProperty('--demo-off', Math.max(0, Math.round(bar.getBoundingClientRect().bottom)) + 'px'); }
  function ask() { if (!queued) { queued = true; requestAnimationFrame(place); } }
  place(); window.addEventListener('scroll', ask, { passive: true }); window.addEventListener('resize', ask); window.addEventListener('load', place);
});
