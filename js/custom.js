//menu toggle
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  document.body.classList.toggle("menu-open");
});

// change navbar color
window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");

  if (window.scrollY > 100) {
    header.style.backgroundColor = "#f5dfd0";
  } else {
    header.style.backgroundColor = "#f8e7dc";
  }
});
