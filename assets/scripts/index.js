function closeNotification() {
    var notification = document.getElementById("notification");
    notification.style.display = "none";
}

// Show the notification initially
var notification = document.getElementById("notification");
notification.style.display = "block";

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
