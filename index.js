import { render } from "./modules/render_funtions.js";
import { showSelector, SortTasks } from "./modules/sort_funcs.js";
import { showDeletedAll, deleteTasks } from "./modules/deleteAll.js";
import methodsAPI from "./modules/apiMethods.js";
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
  AZ,
} from "./modules/elements.js";
list.addEventListener("click", onCheck);
button.addEventListener("submit", addTask);
list.addEventListener("click", deleteTask);
list.addEventListener("click", editTask2);
footer.addEventListener("click", showSelector);
selector.addEventListener("click", SortTasks);
footer.addEventListener("click", deleteTask);

// localStorage // балкон

const dataBase = []; // storage    холодильник
const url = "http://localhost:3000/tasks"; // security server ATB

// почистити функції , нормально поназивати функції , полагодити рендер

// default sort settings old-new
methodsAPI("GET", url + `?_sort=title&_order=desc`)
  .then((data) => dataBase.push(...data))
  .then(() => render());

export { dataBase, url };
