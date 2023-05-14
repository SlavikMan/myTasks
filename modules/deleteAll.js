import {
  delete_warn,
  disagree_btn,
  agree_btn,
  main,
  info,
  infoText,
} from "./elements.js";
import { methodsAPI } from "./apiMethods.js";
import { dataBase, url } from "../index.js";

export function showDeletedAll(event) {
  if (event.target.dataset.action !== "deleteAll") return;
  delete_warn.classList.toggle("hide");
}

export function agreeDeleteTasks() {
  dataBase.forEach((task) => {
    methodsAPI("DELETE", url + `/${task.id}`);
  });
}
export function disagreeDeleteTasks(event) {
  delete_warn.classList.toggle("hide");
}

export function showInfo(event) {
  if (event.target.dataset.action !== "info") return;
  infoText.classList.toggle("blur2");
  infoText.classList.toggle("hide");
  // infoText.addEventListener("blur", () => {
  //   infoText.classList.toggle("blur2");
  //   infoText.classList.toggle("hide");
  // });
}
