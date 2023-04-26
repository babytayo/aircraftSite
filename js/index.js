//Hamburger toggling Statement
function onClickMenu() {
  var nav = document.getElementById("menu");
  if (nav.style.display == "block") {
    nav.style.display = "none";
    console.log("hideHamburgerMenu");
  } else {
    nav.style.display = "block";
    console.log("displayHamburgerMenu");
  }
}

//Changing img src toggle Statement

function swapImg() {
  var img = document.getElementById("image");
  if (img.src.match("./icons8-menu-rounded-30.png")) {
    img.src = "././image/cancel.png";
    console.log("otherImg");
  } else {
    img.src = "././image/icons8-menu-rounded-30.png";
    console.log("mainImg");
  }
}
