import SmoothScroll from "smoothscroll";
const ele = document.getElementsByClassName("headshot").item(0),
  btn = document.getElementById("back-to-top");

function isScrolledIntoView(el) {
  const rect = el.getBoundingClientRect(),
    elemTop = rect.top,
    elemBottom = rect.bottom;

  let isCompletelyVisible = elemTop >= 0 && elemBottom <= window.innerHeight,
    isPartiallyVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isCompletelyVisible;
}

window.onscroll = function() {
  return isScrolledIntoView(ele)
    ? (btn.style.opacity = "0")
    : (btn.style.opacity = "1");
};

// Sticky Scrolling for footer
var scrollPos = 0,
  footer = document.getElementById("sticky-footer"),
  // info = document.getElementById("info-box"),
  ableToScroll =
    window.innerHeight + window.pageYOffset < document.body.offsetHeight;
if (ableToScroll) footer.classList.add("hide");
// adding scroll event
window.addEventListener("scroll", function () {
  // detects new state and compares it with the new one
  if (document.body.getBoundingClientRect().top > scrollPos) {
    // info.setAttribute("data-scroll-direction", "UP");
    footer.classList.add("hide");
  } else {
    // info.setAttribute("data-scroll-direction", "DOWN");
    footer.classList.remove("hide");
  }
  // saves the new position for iteration.
  scrollPos = document.body.getBoundingClientRect().top;
});
