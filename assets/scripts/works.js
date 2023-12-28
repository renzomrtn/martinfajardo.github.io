// Open the modal and display the clicked image
function openModal(img) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImage");
  modal.style.display = "flex";
  modal.classList.add("show"); // Add the "show" class to activate the transition
  modalImg.src = img.src;
}
// Close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}