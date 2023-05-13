import {
  button,
  list,
  todoInput,
  todoDesc,
  title,
  main,
  selector,
  delete_warn,
} from "./elements.js";
import methodsAPI from "./apiMethods.js";
import { dataBase, url } from "../index.js";
let sortedTasks = [];

export function showDeletedAll(event) {
  if (event.target.dataset.action !== "deleteAll") return;
  sortedTasks = [];
  dataBase.forEach((task) => {
    methodsAPI("DELETE", url + `/${task.id}`);
  });

  renderFiltered(sortedTasks);
}

// add here show warninig function

export function deleteTasks(event) {
  if (event.target.dataset.action !== "deleteAll") return;
  delete_warn.classList.toggle("hide");
  delete_warn.classList.toggle("show");
}
