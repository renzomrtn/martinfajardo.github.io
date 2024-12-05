// For name hover
var texts = ["Soy Martin", "Ako si Martin", "Sono Martin", "я Мартин", "私はマーティンです", "I'm Martin"];
var currentIndex = 0;
var originalText = document.querySelector('.name').textContent;

document.querySelector('.name').addEventListener('mouseover', function() {
  var hoverText = this;
  var interval = setInterval(function() {
    hoverText.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
  }, 1500);

  hoverText.addEventListener('mouseout', function() {
    clearInterval(interval);
    hoverText.textContent = originalText; // Reset text to original when mouse leaves
  });
});
/*
// Set zoomControl to false to hide zoom controls
var map = L.map('map', {
  center: [13.624962, 123.182401],
  zoom: 13,
  zoomControl: false  // Disable zoom controls
});

// Minimalist map tiles with less clutter
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap &copy; CartoDB'
}).addTo(map);

// Omit the marker if not needed
L.marker([13.624962, 123.182401]).addTo(map)
.bindPopup('Naga City, PH')
//.openPopup();

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
}, false);
*/