/* === 红色地标地图 === */
var map;
var markers = [];
var currentInfoWindow = null;

document.addEventListener('DOMContentLoaded', function() {
  initMap();
});

function initMap() {
  // Center on Qingdao
  map = new AMap.Map('map', {
    center: [120.355, 36.1],
    zoom: 11,
    mapStyle: 'amap://styles/light'
  });

  var landmarks = getAllLandmarks();

  landmarks.forEach(function(l, index) {
    var marker = new AMap.Marker({
      position: [l.coordinates.lng, l.coordinates.lat],
      title: l.name,
      label: {
        content: '<span style="background:#8B0000;color:#fff;padding:2px 6px;border-radius:3px;font-size:11px;">' + (index + 1) + '</span>',
        offset: new AMap.Pixel(0, -30)
      }
    });

    var infoWindow = new AMap.InfoWindow({
      content:
        '<div style="padding:8px;max-width:260px;">' +
          '<h4 style="margin:0 0 4px;color:#6B1D1D;">' + l.name + '</h4>' +
          '<p style="margin:0 0 4px;font-size:12px;color:#8B0000;">📍 ' + l.address + '</p>' +
          '<p style="margin:0 0 8px;font-size:12px;color:#555;">' + l.description.substring(0, 100) + '……</p>' +
          '<a href="characters/' + l.characterId + '.html" style="font-size:11px;color:#8B0000;">查看人物详情 →</a>' +
        '</div>',
      offset: new AMap.Pixel(0, -30)
    });

    marker.on('click', function() {
      if (currentInfoWindow) currentInfoWindow.close();
      infoWindow.open(map, marker.getPosition());
      currentInfoWindow = infoWindow;
    });

    marker.setMap(map);
    markers.push({ marker: marker, infoWindow: infoWindow, id: l.id });
  });

  renderLandmarkList(landmarks);

  // Check URL param for auto-focus
  var params = new URLSearchParams(window.location.search);
  var focusLoc = params.get('loc');
  if (focusLoc) {
    focusLandmark(focusLoc);
  }
}

function renderLandmarkList(landmarks) {
  var el = document.getElementById('landmark-list');
  if (!el) return;
  var html = '';
  landmarks.forEach(function(l, i) {
    html +=
      '<div class="landmark-list-item" data-loc="' + l.id + '" onclick="focusLandmark(\'' + l.id + '\')">' +
        '<h4>' + (i + 1) + '. ' + l.name + '</h4>' +
        '<p>📍 ' + l.address + '</p>' +
      '</div>';
  });
  el.innerHTML = html;
}

function focusLandmark(id) {
  var found = null;
  markers.forEach(function(m) {
    if (m.id === id) found = m;
  });
  if (!found) return;

  map.setCenter(found.marker.getPosition());
  map.setZoom(15);
  if (currentInfoWindow) currentInfoWindow.close();
  found.infoWindow.open(map, found.marker.getPosition());
  currentInfoWindow = found.infoWindow;

  document.querySelectorAll('.landmark-list-item').forEach(function(item) {
    item.classList.remove('active');
    if (item.getAttribute('data-loc') === id) {
      item.classList.add('active');
      item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}
