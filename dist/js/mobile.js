var isOpen = false;

function useNav() {
  if (!isOpen) {
    document.getElementById("mobile__menu").style.width = "100%";
    document.getElementById("hamburger").classList.add("is-active");
    isOpen = true;
  } else {
    document.getElementById("mobile__menu").style.width = "0";
    document.getElementById("hamburger").classList.remove("is-active");
    isOpen = false;
  }
}

window.onresize = function() {
  resetNav();
};

function resetNav() {
  document.getElementById("mobile__menu").style.width = "0";
  document.getElementById("hamburger").classList.remove("is-active");
  isOpen = false;
}
