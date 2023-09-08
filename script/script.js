var circle = document.querySelector("#circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotateValue = "rotate(0deg)"; // Initialize with an initial value
var rotateSum;

upBtn.onclick = function () {
  rotateSum = rotateValue + "rotate(-90deg)"; // Add a space before the new rotation
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};

downBtn.onclick = function () {
  rotateSum = rotateValue + "rotate(90deg)"; // Add a space before the new rotation
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};

document.getElementById("image").addEventListener("change", function () {
  const fileInput = this;
  const preview = document.getElementById("preview");
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result;
    };

    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
});
