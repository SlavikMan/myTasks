import { selector_container, infoText } from "./elements";

// export function showInfo(event) {
//   if (event.target.dataset.action !== "info") return;
//   console.log("hello");

//   infoText.classList.toggle("blur");
//   // infoText.classList.toggle("hide");
// }

export function showInfo(event) {
  if (event.target.dataset.action !== "info") return;
  info.classList.toggle("blur2");
}
