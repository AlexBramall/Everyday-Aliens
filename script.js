function expandingBox() {
  var element = document.getElementById("expanding-box");
  element.classList.toggle("closed");
}

function popNav() {
  var element = document.getElementsByClassName("nav-pop");
  element.classList.toggle("nav-closed");
}

var i = 0; // STARTING POINT
var images = []; // IMAGES ARRAY
var time = 1000; // TIME BETWEEN SWITCH

// IMAGE LIST
images[0] = "images/slide/slide1.JPG";
images[1] = "images/slide/slide2.JPG";
images[2] = "images/slide/slide3.JPG";
images[3] = "images/slide/slide4.JPG";
images[4] = "images/slide/slide5.JPG";
images[5] = "images/slide/slide6.JPG";
images[6] = "images/slide/slide7.JPG";
images[7] = "images/slide/slide8.JPG";
images[8] = "images/slide/slide9.JPG";
images[9] = "images/slide/slide10.JPG";
images[10] = "images/slide/slide11.JPG";
images[11] = "images/slide/slide12.JPG";

// CHANGE IMAGE
function changeImg() {
  document.transition.src = images[i];
  // CHECK IF INDEX IS UNDER THE MAX
  if (i < images.length - 1) {
    // ADD 1 TO THE INDEX
    i++;
  } else {
    // RESET BACK TO 0
    i = 0;
  }
  // RUN FUNCTION EVERY X SECONDS
  setTimeout("changeImg()", time);
}

// RUN FUNCTION WHEN PAGE LOADS

window.onload = changeImg;

let btnShow = document.getElementById("nav-discord-button");

btnShow.addEventListener("click", () => {
  swal(
    "Our Discord is Not Open Just Yet",
    "Continue to Check Our Twitter for Updates 👽"
  );
});
