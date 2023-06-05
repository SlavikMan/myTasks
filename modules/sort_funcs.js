import { dataBase, url } from "../index.js";
import { methodsAPI } from "./apiMethods.js";
import { renderOptions, renderFiltered, render } from "./render_funtions.js";
import {
  button,
  list,
  todoInput,
  todoDesc,
  title,
  main,
  selector,
  selector_container,
  size_container,
  color_container,
  size_selector,
  color_selector,
} from "./elements.js";

let sortedTasks = [];

export function showSelector(event) {
  if (event.target.dataset.action !== "filter") return;
  selector_container.classList.toggle("hide");
  renderOptions();
}

export function SortTasks() {
  const selectorValue = selector.value;
  if (selectorValue === "A-Z") {
    sortedTasks = dataBase.sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
  } else if (selectorValue === "Z-A") {
    sortedTasks = dataBase.sort((a, b) => {
      if (a.title > b.title) return -1;
      if (a.title < b.title) return 1;
      return 0;
    });
  } else if (selectorValue === "Old-New") {
    sortedTasks = dataBase.sort((a, b) => {
      return Date.parse(b.createdAt) - Date.parse(a.createdAt);
    });
  }
  renderFiltered(sortedTasks);
}

export function showStyleSelector(event) {
  if (event.target.dataset.action !== "style") return;
  size_container.classList.toggle("hide");
  color_container.classList.toggle("hide");
}

export function changeFontSize(event) {
  const selectorValue = size_selector.value;
  if (selectorValue === "13") {
    console.log(title.style.fontSize);
  }
}
