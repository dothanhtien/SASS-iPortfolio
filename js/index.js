const headerToggler = document.querySelector("#headerToggler");
const headerElem = document.querySelector("header.header");

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

$("#navbarSupportedContent").on("show.bs.collapse", function () {
  headerElem.classList.add("active");
  document.body.classList.add("noscroll");
});

$("#navbarSupportedContent").on("hide.bs.collapse", function () {
  headerElem.classList.remove("active");
  document.body.classList.remove("noscroll");
});
