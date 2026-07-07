/* === 红韵青岛·数智传薪 — Main JS === */

document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
});

/* === Navigation === */
function initNavigation() {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
  }

  // Set active nav link based on current page path
  var currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    var href = link.getAttribute('href');
    if (href && currentPath.endsWith(href.replace(/^\//, ''))) {
      link.classList.add('active');
    }
  });
}
