function closeNotification() {
    var notification = document.getElementById("notification");
    notification.style.display = "none";
}

// Show the notification initially
var notification = document.getElementById("notification");
notification.style.display = "block";

window.addEventListener('resize', function () {
    var image = document.getElementById('landscape-image');
    var newSrc = window.innerWidth <= 700 ? 'assets/images/homeImg2.jpg' : 'assets/images/homeImg.jpg';
    image.src = newSrc;
  });