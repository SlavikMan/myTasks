import { render } from "./modules/render_funtions.js";
import {
  showSelector,
  SortTasks,
  showStyleSelector,
  changeFontSize,
} from "./modules/sort_funcs.js";
import {
  showDeletedAll,
  agreeDeleteTasks,
  disagreeDeleteTasks,
  showInfo,
  nextSlide,
  prevSlide,
} from "./modules/deleteAll.js";
import { methodsAPI } from "./modules/apiMethods.js";
import {
  addTask,
  onCheck,
  editTask2,
  deleteTask,
} from "./modules/task-funcs.js";
import {
  button,
  list,
  todoInput,
  todoDesc,
  title,
  footer,
  selector,
  agree_btn,
  disagree_btn,
  size_selector,
  size_container,
  color_container,
  next,
  prev,
} from "./modules/elements.js";

// import { showStyleSelector } from "./modules/styleShow.js";
// import { showStyleSelector } from "./modules/styleSelector.js";

list.addEventListener("click", onCheck);
button.addEventListener("submit", addTask);
list.addEventListener("click", deleteTask);
list.addEventListener("click", editTask2);
footer.addEventListener("click", showSelector);
selector.addEventListener("click", SortTasks);
footer.addEventListener("click", showDeletedAll);
agree_btn.addEventListener("click", agreeDeleteTasks);
disagree_btn.addEventListener("click", disagreeDeleteTasks);
footer.addEventListener("click", showInfo);
footer.addEventListener("click", showStyleSelector);
size_selector.addEventListener("click", changeFontSize);
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
// localStorage // балкон

const dataBase = []; // storage    холодильник
const url = "http://localhost:3000/tasks"; // security server ATB

// почистити функції , нормально поназивати функції , полагодити рендер

// default sort settings old-new
methodsAPI("GET", url + `?_sort=title&_order=desc`)
  .then((data) => dataBase.push(...data))
  .then(() => render());

export { dataBase, url };
