function closeNotification() {
    var notification = document.getElementById("notification");
    notification.style.display = "none";
}

// Show the notification initially
var notification = document.getElementById("notification");
notification.style.display = "block";

/*
window.addEventListener('resize', function () {
    var image = document.getElementById('landscape-image');
    var newSrc = window.innerWidth <= 1000 ? 'assets/images/home/homeImg2.jpg' : 'assets/images/home/homeImg.jpg';
    image.src = newSrc;
});
*/
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