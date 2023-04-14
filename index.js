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

const dataBase = [];
const url = "http://localhost:3000/tasks";

async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    dataBase.push(...data);
    render();
  } catch (error) {
    console.log(error);
  }
}
getData();

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
