import { dataBase, url } from "../index.js";
// import { render } from "./render.js";
import { methodsAPI } from "./apiMethods.js";
import { button, list, todoInput, todoDesc, title } from "./elements.js";
// const url = "http://localhost:3000/tasks";

export function addTask(event) {
  event.preventDefault();
  //validation
  const newTask = {
    id: Math.floor(Math.random() * 10000),
    title: todoInput.value,
    desc: todoDesc.value,
    isDone: false,
    createdAt: new Date(Date.now()),
  };
  dataBase.push(newTask);
  methodsAPI("POST", url, newTask);
  // render(dataBase);
  todoInput.value = "";
  todoDesc.value = "";
}

export function onCheck(event) {
  if (event.target.dataset.action !== "check") return;
  const taskElement = event.target.closest(".list__task");
  const taskId = parseInt(taskElement.getAttribute("key"));
  const task = dataBase.find((task) => task.id === taskId);
  task.isDone = !task.isDone;
  taskElement.classList.toggle("done");
  methodsAPI("PATCH", url + `/${taskId}`, { isDone: task.isDone });
}

export function deleteTask(event) {
  event.preventDefault();
  if (event.target.dataset.action !== "delete") return;
  let taskTitle = event.target.closest(".list__task");
  let taskId = parseInt(taskTitle.getAttribute("key"));
  const taskIndex = dataBase.findIndex((task) => task.id === taskId);

  dataBase.splice(taskIndex, 1);
  taskTitle.innerHTML = "";
  methodsAPI("DELETE", url + `/${taskId}`);
}

export function editTask2(event) {
  if (event.target.dataset.action !== "edit") return;
  let taskEl = event.target.closest(".list__task");
  let taskId = parseInt(taskEl.getAttribute("key"));
  let currTask = dataBase.find((task) => task.id === taskId);

  const editedTaskValue = {
    title: taskEl.querySelector(".list__task-title"),
    desc: taskEl.querySelector(".list__task-description"),
  };

  taskEl.querySelector(".list__task-title").contentEditable = true;
  taskEl.querySelector(".list__task-title").style.backgroundColor = "#e6e8ea";
  taskEl.querySelector(".list__task-description").contentEditable = true;
  taskEl.querySelector(".list__task-description").style.backgroundColor =
    "#e6e8ea";

  taskEl.querySelector(".list__task-title").addEventListener("blur", () => {
    currTask.title = editedTaskValue.title.innerText;
    currTask.desc = editedTaskValue.desc.innerText;
    // render();
    const editedTask = {
      title: currTask.title,
      desc: currTask.desc,
    };
    methodsAPI("PATCH", url + `/${taskId}`, editedTask);
  });

  taskEl
    .querySelector(".list__task-description")
    .addEventListener("blur", () => {
      currTask.title = editedTaskValue.title.innerText;
      currTask.desc = editedTaskValue.desc.innerText;
      // render();
      const editedTask = {
        title: currTask.title,
        desc: currTask.desc,
      };
      methodsAPI("PATCH", url + `/${taskId}`, editedTask);
    });
}
