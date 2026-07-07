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

/* === Character Detail Rendering === */
function renderCharacter(id) {
  var c = getCharacter(id);
  if (!c) return;

  document.title = c.name + ' — 红韵青岛·数智传薪';

  renderCharHeader(c);
  renderBio(c);
  renderStories(c);
  renderLandmarks(c);
  renderMedia(c);
  initTabs();
}

function renderCharHeader(c) {
  var header = document.getElementById('char-header');
  if (!header) return;
  var photoHtml = c.photo
    ? '<img src="' + c.photo + '" alt="' + c.name + '" class="char-photo">'
    : '<div class="char-photo-placeholder">📷</div>';
  header.innerHTML =
    '<div class="container">' +
      photoHtml +
      '<div class="char-info">' +
        '<h1>' + c.name + '</h1>' +
        '<p class="identity">' + c.identity + '</p>' +
        '<p class="lifespan">' + c.birth + ' — ' + (c.death || '') + '</p>' +
        '<p class="char-quote">"' + c.quote + '"</p>' +
      '</div>' +
    '</div>';
}

function renderBio(c) {
  var el = document.getElementById('tab-bio');
  if (!el) return;
  var photoHtml = c.photo
    ? '<img src="' + c.photo + '" alt="' + c.name + '" class="bio-photo">'
    : '<div class="bio-photo-placeholder">📷</div>';

  var labels = { name: '姓名', jiguan: '籍贯', minzu: '民族', shengzu: '生卒', shenfen: '身份', gongxian: '贡献' };
  var tableRows = '';
  Object.keys(c.info).forEach(function(key) {
    tableRows += '<tr><td>' + labels[key] + '</td><td>' + c.info[key] + '</td></tr>';
  });

  var timelineItems = '';
  c.timeline.forEach(function(t) {
    timelineItems +=
      '<div class="timeline-item">' +
        '<div class="timeline-year">' + t.year + ' 年</div>' +
        '<div class="timeline-text">' + t.event + '</div>' +
      '</div>';
  });

  el.innerHTML =
    '<div class="bio-layout">' +
      '<div class="bio-sidebar">' +
        photoHtml +
        '<table class="info-table">' + tableRows + '</table>' +
      '</div>' +
      '<div class="bio-timeline">' + timelineItems + '</div>' +
    '</div>';
}

function renderStories(c) {
  var el = document.getElementById('tab-stories');
  if (!el) return;
  var html = '';
  var labels = ['一', '二', '三'];
  c.stories.forEach(function(s, i) {
    var imgHtml = s.image
      ? '<img src="' + s.image + '" alt="" class="story-image">'
      : '<div class="story-image-placeholder">📷</div>';
    html +=
      '<div class="story-item">' +
        '<div class="story-header" data-story="' + i + '">' +
          '<div>' +
            '<span class="story-number">故事' + labels[i] + '</span>' +
            '<span class="story-title">' + s.title + '</span>' +
          '</div>' +
          '<span class="story-arrow">▶ 展开</span>' +
        '</div>' +
        '<div class="story-body">' +
          '<div class="story-text">' + s.content + '</div>' +
          imgHtml +
        '</div>' +
      '</div>';
  });
  el.innerHTML = html;

  el.querySelectorAll('.story-header').forEach(function(header) {
    header.addEventListener('click', function() {
      var body = this.nextElementSibling;
      var arrow = this.querySelector('.story-arrow');
      var isOpen = body.classList.contains('open');
      if (isOpen) {
        body.classList.remove('open');
        this.classList.remove('open');
        arrow.textContent = '▶ 展开';
      } else {
        body.classList.add('open');
        this.classList.add('open');
        arrow.textContent = '▼ 收起';
      }
    });
  });
}

function renderLandmarks(c) {
  var el = document.getElementById('tab-landmarks');
  if (!el) return;
  var html = '';
  c.landmarks.forEach(function(l) {
    var imgHtml = l.image
      ? '<img src="' + l.image + '" alt="" class="landmark-image">'
      : '<div class="landmark-image-placeholder">📷</div>';
    html +=
      '<div class="landmark-card" data-loc="' + l.id + '" onclick="window.location.href=\'../map.html?loc=' + l.id + '\'">' +
        imgHtml +
        '<div class="landmark-info">' +
          '<h3>🏛️ ' + l.name + '</h3>' +
          '<p class="landmark-address">📍 ' + l.address + '</p>' +
          '<p class="landmark-desc">' + l.description + '</p>' +
          '<p class="landmark-meta">🕐 ' + l.hours + ' &nbsp;|&nbsp; 🎫 ' + l.ticket + '</p>' +
        '</div>' +
      '</div>';
  });
  el.innerHTML = html;
}

function renderMedia(c) {
  var el = document.getElementById('tab-media');
  if (!el) return;
  var html = '<div class="media-list">';
  c.media.forEach(function(m) {
    html +=
      '<div class="media-item">' +
        '<div class="media-left">' +
          '<span class="media-icon">🎬</span>' +
          '<div class="media-info">' +
            '<h4>' + m.title + '</h4>' +
            '<p class="media-source">' + m.source + '</p>' +
          '</div>' +
        '</div>' +
        '<a href="' + m.url + '" target="_blank" rel="noopener" class="btn media-link">前往观看 →</a>' +
      '</div>';
  });
  html += '</div>';
  el.innerHTML = html;
}

/* === Tab Switching === */
function initTabs() {
  var buttons = document.querySelectorAll('.tab-btn');
  var panels = document.querySelectorAll('.tab-content');

  buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var target = this.getAttribute('data-tab');

      buttons.forEach(function(b) { b.classList.remove('active'); });
      this.classList.add('active');

      panels.forEach(function(p) { p.classList.remove('active'); });
      var panel = document.getElementById('tab-' + target);
      if (panel) panel.classList.add('active');
    });
  });
}
