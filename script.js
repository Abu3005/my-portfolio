"use strict";
const icon = document.querySelector(".nav-logo");
const over = document.querySelector(".over");
const times = document.querySelector(".times");
const links = document.querySelectorAll(".top");

icon.addEventListener("click", function () {
  over.style.display = "flex";
});
times.addEventListener("click", function() {
  over.style.display = "none";
})

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    over.style.display = "none";
  })
}
