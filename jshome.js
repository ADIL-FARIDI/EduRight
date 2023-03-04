const popup = document.getElementById("popup");
const openButton = document.getElementById("learn-more-btn");
const closeButton = document.getElementById("close-popup-btn");

openButton.addEventListener("click", function () {
  popup.style.display = "block";
});

closeButton.addEventListener("click", function () {
  popup.style.display = "none";
});
