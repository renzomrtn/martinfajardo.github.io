function closeNotification() {
    var notification = document.getElementById("notification");
    notification.style.display = "none";
}

// Show the notification initially
var notification = document.getElementById("notification");
notification.style.display = "block";

// Get the header element
const header = document.querySelector('.top-nav');

// Get the initial position of the header
const headerPosition = header.offsetTop;

// Function to check if the header should become sticky
function makeHeaderSticky() {
    if (window.pageYOffset > headerPosition) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

// Add a scroll event listener to trigger the function
window.addEventListener('scroll', makeHeaderSticky);
