var modal = document.getElementById("myModal");
var createLabelModal = document.getElementById("createLabelModal");
var close2 = document.getElementById("close2");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btnCreate = document.getElementById("btnCreate");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

btnCreate.onclick = function () {
  createLabelModal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
close2.onclick = function () {
  createLabelModal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

