document.querySelectorAll('.left a').forEach(link => {
    link.addEventListener('click', () => {
        // Hide all snippets
        document.querySelectorAll('.snippet').forEach(snippet => {
            snippet.classList.remove('active');
        });

        // Show the target snippet
        const targetId = link.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});
// Select all anchor tags
const anchors = document.querySelectorAll(".left a");

// Add a click event listener to each anchor
anchors.forEach(anchor => {
    anchor.addEventListener("click", () => {
        // Remove the active class from all anchors
        anchors.forEach(a => a.classList.remove("active"));

        // Add the active class to the clicked anchor
        anchor.classList.add("active");
    });
});

function message() {
    alert("Comming Soon!");
  }