// svgs
import twitterSVG from "./assets/svg/twitter.svg";
import facebookSVG from "./assets/svg/facebook.svg";
import dribbleSVG from "./assets/svg/dribble.svg";
import youtubeSVG from "./assets/svg/youtube.svg";

export const renderInlineLoadedSvgs = () => {
  // get svg slots
  const svgSlots = document.querySelectorAll(".footer__socials--svg");
  // svgs
  const svgs = [twitterSVG, facebookSVG, dribbleSVG, youtubeSVG];
  // append svgs to slots
  Array.from(svgSlots).forEach((slot, i) => {
    slot.innerHTML = svgs[i];
  });
};
