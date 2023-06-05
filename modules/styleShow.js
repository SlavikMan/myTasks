import { size_container, color_container } from "./elements";

export function showStyleSelector(event) {
  if (event.target.dataset.action !== "style") return;
  size_container.classList.toggle("hide");
  color_container.classList.toggle("hide");
}
