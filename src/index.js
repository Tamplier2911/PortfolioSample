// styles
import "./scss/index.scss";

// generator function runtime - e.g. async / await enabler
import "core-js/stable";
import "regenerator-runtime/runtime";

// functionalities
import { formEventListener } from "./form.js";
import { renderInlineLoadedSvgs } from "./svgs";
import { debouncedNavbarScrollHandler } from "./navbarOnScroll";

// on page load
window.onload = () => {
  // elements
  const form = document.getElementById("form-input");

  // FORM BEHAVIOUR
  form.addEventListener("submit", formEventListener);

  // SVG RENDERING
  renderInlineLoadedSvgs();

  // NAVBAR STYLING BASED ON SCROLL
  window.addEventListener("scroll", debouncedNavbarScrollHandler);

  console.log("Back on track!");
};
