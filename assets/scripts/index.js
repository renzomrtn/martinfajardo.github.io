function closeNotification() {
    var notification = document.getElementById("notification");
    notification.style.display = "none";
}

// Show the notification initially
var notification = document.getElementById("notification");
notification.style.display = "block";

window.addEventListener('resize', function () {
    var image = document.getElementById('landscape-image');
    var newSrc = window.innerWidth <= 1000 ? 'assets/images/home/homeImg2.jpg' : 'assets/images/home/homeImg.jpg';
    image.src = newSrc;
});

// Trigger the resize event initially to ensure the correct image is displayed on page load
window.dispatchEvent(new Event('resize'));
