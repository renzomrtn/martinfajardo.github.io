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