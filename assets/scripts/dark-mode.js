// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const toggleIcon = document.querySelector('.toggle i');

    // Toggle between light and dark mode classes
    body.classList.toggle("dark-mode");

    // Toggle between toggle icons
    toggleIcon.classList.toggle('fa-toggle-on');
    toggleIcon.classList.toggle('fa-toggle-off');

    // You can also save the user's preference in localStorage for persistence
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);

    if (body.classList.contains('dark-mode')) {
        poster.src = 'assets/images/banner (2).png';
    } else {
        poster.src = 'assets/images/banner (1).png';
    }
}

// Function to set the dark mode state
function setDarkModeState(isDarkMode) {
    const body = document.body;
    const toggleIcon = document.querySelector('.toggle i');

    // Set the dark mode state
    if (isDarkMode) {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }

    // Toggle between toggle icons
    toggleIcon.classList.toggle('fa-toggle-on', isDarkMode);
    toggleIcon.classList.toggle('fa-toggle-off', !isDarkMode);
}

// Check if the user has a dark mode preference and set it
document.addEventListener("DOMContentLoaded", function () {
    const savedDarkMode = localStorage.getItem("darkMode");

    // Set the initial dark mode state based on the saved preference
    setDarkModeState(savedDarkMode === "true");
});

