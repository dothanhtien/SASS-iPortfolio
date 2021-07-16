const headerToggler = document.querySelector("#headerToggler");
const headerElem = document.querySelector("header.header");

const typeWriterText = "I’m Mike Tyson";
const typeWriterElem = document.querySelector(".typewriter");
let typeWriterIndex = 0;

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document
      .querySelector("header.header .navbar")
      .classList.add("navbar--scrolled");
  } else {
    document
      .querySelector("header.header .navbar")
      .classList.remove("navbar--scrolled");
  }
};

// header
$("#navbarSupportedContent").on("show.bs.collapse", function () {
  headerElem.classList.add("active");
  document.body.classList.add("noscroll");
});

$("#navbarSupportedContent").on("hide.bs.collapse", function () {
  headerElem.classList.remove("active");
  document.body.classList.remove("noscroll");
});

// banner
(function typeWriter() {
  if (typeWriterIndex < typeWriterText.length) {
    typeWriterElem.innerHTML += typeWriterText.charAt(typeWriterIndex);
    typeWriterIndex++;
    setTimeout(typeWriter, 200);
  }
})();
