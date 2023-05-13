import { dataBase, url } from "../index.js";
import methodsAPI from "./apiMethods.js";
import { renderOptions, renderFiltered } from "./render_funtions.js";
import {
  button,
  list,
  todoInput,
  todoDesc,
  title,
  main,
  selector,
} from "./elements.js";

let sortedTasks = [];

export function showSelector(event) {
  if (event.target.dataset.action !== "filter") return;
  selector.classList.toggle("hide");
  selector.classList.toggle("show");
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
