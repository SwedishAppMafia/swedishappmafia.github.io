AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 200, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1600 * 0.75, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom" // defines which position of the element regarding to window should trigger the animation
});

window.onscroll = function() {
  update();
};

window.onload = function() {
  update();
};

window.onresize = function() {
  update();
};

function update() {
  setVariables();
  scrollFunction();
}

var logoTextSizeNormal = "2.2rem";
var navbarLinksSizeNormal = "1.2rem";
var navbarColorNormal = "transparent";

var logoTextSize = "2.5rem";
var navbarLinksSize = "1.5rem";
var navbarColor = "#181818";

var firstWidth = 1300;
var secondWidth = 1050;
var thirdWidth = 800;
var fourthWidth = 600;

var width = document.body.clientWidth;

function setVariables() {
  if (width > firstWidth) {
    console.log(width);
    logoTextSize = "2.5rem";
    logoTextSizeNormal = "2.2rem";
  }
  if (width <= fourthWidth) {
    logoTextSize = "5vw";
    logoTextSizeNormal = "4.5vw";
  }
}

function scrollFunction() {
  let navbar = document.getElementsByClassName("navbar").item(0);
  let navbarLogo = document.getElementsByClassName("navbar__logo").item(0);
  if (navbar.className.includes("hover") && navbar != null) {
    let navLinks = document.getElementsByClassName("navbar__link");
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      Array.from(navLinks).forEach(function(element) {
        element.style.fontSize = navbarLinksSizeNormal;
      });
      navbarLogo.style.fontSize = logoTextSizeNormal;
      navbar.style.backgroundColor = navbarColor;
    } else {
      Array.from(navLinks).forEach(function(element) {
        element.style.fontSize = navbarLinksSize;
      });
      navbarLogo.style.fontSize = logoTextSize;
      navbar.style.backgroundColor = navbarColorNormal;
    }
  }
}

/*

navbar__logo  fourth-width {
  font-size: 5vw;
}



*/
