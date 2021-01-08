console.log("Client JavaScript starts here");

import React from "react";
import { hydrate } from "react-dom";
import App from "../../Main";

// Hydrate
hydrate(<App name="kevin hu" />, document);

/* Swipeable Page */
// Swipe strategy
// import Swipe from "swipejs";

// window.mySwipe = new Swipe(document.getElementById("slider"), {
//   startSlide: 0,
//   draggable: true,
//   continuous: true,
//   callback: function (index, element, dir) {},
//   transitionEnd: function (index, element) {},
// });

// Click strategy
// let mode = "read";
// document.getElementById("pulltab").addEventListener("click", (e) => {
//   mode = mode === "read" ? "edit" : "read";
//   console.log("Edit mode toggled --> ", mode);
// });
