import {
  addTask,
  onCheck,
  editTask2,
  deleteTask,
  render,
} from "./modules/funcs.js";
import {
  button,
  list,
  todoInput,
  todoDesc,
  title,
} from "./modules/elements.js";

list.addEventListener("click", onCheck);
button.addEventListener("submit", addTask);
list.addEventListener("click", deleteTask);
list.addEventListener("click", editTask2);
// localStorage // балкон
const dataBase = []; // storage    холодильник
const url = "http://localhost:3000/tasks"; // security server ATB

fetch(url)
  .then((response) => response.json())
  .then((data) => dataBase.push(...data))
  .then(() => render())
  .catch((e) => console.log(e));

// const axios = require("axios");

// axios
//   .get("http://localhost:3000/tasks")
//   .then((resp) => {
//     data = resp.data;
//     data.forEach((e) => {
//       console.log(` "Success", ${e.title}, ${e.desc}, ${e.id}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

render();
export { dataBase };
