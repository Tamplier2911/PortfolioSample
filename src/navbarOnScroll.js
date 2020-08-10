import { debounce } from "./debounce.js";

// get scroll position in percentages
const getScrollPoss = () => {
  const { scrollX, scrollY } = window;
  const limit = document.body.offsetHeight - window.innerHeight;

  // const x = Math.floor(scrollX / (limit / 100));
  const y = Math.floor(scrollY / (limit / 100));

  // get nav elements
  const navElements = document.querySelectorAll(".links__li");
  const navElementsArray = Array.from(navElements);

  // remove active class
  navElementsArray.forEach((element) => {
    element.classList.remove("links__active");
  });

  // add active class based on scroll position
  if (y <= 25) navElementsArray[0].classList.add("links__active");
  else if (y <= 50) navElementsArray[1].classList.add("links__active");
  else if (y <= 95) navElementsArray[2].classList.add("links__active");
  else if (y >= 95) navElementsArray[3].classList.add("links__active");
};

// debounce scroll handler
// add scroll handler to window object
export const debouncedNavbarScrollHandler = debounce(getScrollPoss, 100);
