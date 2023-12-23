function closeNotification() {
    var notification = document.getElementById("notification");
    notification.style.display = "none";
}

// Show the notification initially
var notification = document.getElementById("notification");
notification.style.display = "block";

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Get the <i> element inside the .toggle element
    const toggleIcon = document.querySelector('.toggle i');

    // Toggle the class for the icon
    toggleIcon.classList.toggle('fa-toggle-on');
    toggleIcon.classList.toggle('fa-toggle-off'); // Change this to the off state class if you have one
}
