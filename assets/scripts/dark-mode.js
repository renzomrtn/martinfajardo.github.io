// Check if dark mode preference is stored in localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Apply dark mode if the preference is true
if (isDarkMode) {
    document.body.classList.add('dark-mode');
    document.querySelector('.toggle i').classList.add('fa-toggle-on');
    document.querySelector('.toggle i').classList.remove('fa-toggle-off');
    // Change the image source based on dark mode state
    const poster = document.getElementById('poster');
    if (document.body.classList.contains('dark-mode')) {
        poster.src = 'assets/images/banner (2).png';
    } else {
        poster.src = 'assets/images/banner (1).png';
    }
}

function toggleDarkMode() {
    // Toggle the dark mode class on the body
    document.body.classList.toggle('dark-mode');

    // Toggle the class for the icon
    const toggleIcon = document.querySelector('.toggle i');
    toggleIcon.classList.toggle('fa-toggle-on');
    toggleIcon.classList.toggle('fa-toggle-off');

    // Toggle the image source based on dark mode state
    const poster = document.getElementById('poster');
    if (document.body.classList.contains('dark-mode')) {
        poster.src = 'assets/images/banner (2).png';
    } else {
        poster.src = 'assets/images/banner (1).png';
    }

    // Store the dark mode preference in localStorage
    const isDarkModeNow = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkModeNow.toString());
}