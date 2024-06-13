// Function to handle image resizing
function handleImageResize() {
    var image = document.getElementById('landscape-image');
    var newSrc = window.innerWidth <= 1000 ? 'assets/images/home/homeImg2.jpg' : 'assets/images/home/homeImg.jpg';
    image.src = newSrc;
}

// Call the function when the page loads
window.addEventListener('load', handleImageResize);

// Call the function when the window is resized
window.addEventListener('resize', handleImageResize);


// For name hover
var texts = ["Soy Martin", "Ako si Martin", "Sono Martin", "я Мартин", "私はマーティンです", "I'm Martin"];
var currentIndex = 0;
var originalText = document.querySelector('.name').textContent;

document.querySelector('.name').addEventListener('mouseover', function() {
  var hoverText = this;
  var interval = setInterval(function() {
    hoverText.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
  }, 2000); // Change text every 2 seconds

  hoverText.addEventListener('mouseout', function() {
    clearInterval(interval);
    hoverText.textContent = originalText; // Reset text to original when mouse leaves
  });
});