// Close the modal by clicking anywhere outside the image
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Open the modal and display the clicked image
function openModal(img) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImage");
  modal.style.display = "flex";
  modal.classList.add("show"); // Add the "show" class to activate the transition
  modalImg.src = img.src;
}


// anti right click
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
}, false);

// anti crtl shift i
document.addEventListener('keydown', function(e) {
  // Check if the keys Ctrl, Shift, and I are pressed simultaneously
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') {
    e.preventDefault(); // Prevent the default action (opening dev tools)
    alert('');
  }
});