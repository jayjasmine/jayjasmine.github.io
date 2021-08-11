// Change nav bar color on scrooll
const navBar = document.getElementById("nav-bar");

window.onscroll = function () {
  let top = window.scrollY;
  if (top >= 100) {
    navBar.style.backgroundColor = "var(--primary-color)";
    navBar.style.boxShadow = '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)';
  } else {
    navBar.style.backgroundColor = "transparent";
    navBar.style.transition = 'all 0.2s';
    navBar.style.boxShadow = 'none';
  }
}
