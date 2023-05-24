//Hamburger toggling Statement

const menu = document.querySelector("#image");
let nav = document.querySelector(".menu");
let changeImg = document.querySelector("#image");

menu.addEventListener("click", function () {
  if (nav.style.display == "block") {
    nav.style.display = "none";
    console.log("hideHamburgerMenu");
  } else {
    nav.style.display = "block";
    console.log("displayHamburgerMenu");
  }

  if (changeImg.src.match("./icons8-menu-rounded-30.png")) {
    changeImg.src = "././image/cancel.png";
    console.log("otherImg");
  } else {
    changeImg.src = "././image/icons8-menu-rounded-30.png";
    console.log("mainImg");
  }
});
