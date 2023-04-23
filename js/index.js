let menu = false;

function onClickMenu() {
  console.log("BEFORE", menu);
  menu = !menu;
  console.log("AFTER", menu);
}

// now you can call your function to toogle the MENU
// onClickMenu();

function onClickMenu() {
  var nav = document.getElementById("menu");
  if (nav.style.display == "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}
