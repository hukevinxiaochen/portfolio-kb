console.log("Client JavaScript starts here");
/* Toggle Edit Mode */

// Swipe strategy
const Swipe = require("swipejs");
window.mySwipe = new Swipe(document.getElementById("slider"), {
  startSlide: 0,
  auto: 3000,
  draggable: true,
  autoRestart: false,
  continuous: true,
  disableScroll: true,
  stopPropagation: true,
  callback: function (index, element, dir) {},
  transitionEnd: function (index, element) {},
});

// Click strategy
// let mode = "read";
// document.getElementById("pulltab").addEventListener("click", (e) => {
//   mode = mode === "read" ? "edit" : "read";
//   console.log("Edit mode toggled --> ", mode);
// });
