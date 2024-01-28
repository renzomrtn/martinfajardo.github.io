function closeNotification() {
    var notification = document.getElementById("notification");
    notification.style.display = "none";
}

// Show the notification initially
var notification = document.getElementById("notification");
notification.style.display = "block";

window.addEventListener('resize', function () {
    console.log("Window resized");
    var image = document.getElementById('landscape-image');
    var newSrc = window.innerWidth <= 1000 ? 'assets/images/home/homeImg2.jpg?cache=' + Date.now() : 'assets/images/home/homeImg.jpg?cache=' + Date.now();
    console.log("New source: " + newSrc);
    image.src = newSrc;
});
