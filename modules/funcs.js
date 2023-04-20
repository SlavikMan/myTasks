import { dataBase } from "../index.js";
import {
  postAddTask,
  postDeleteTask,
  postEditTask,
  postOnCheck,
} from "./postRequests.js";
import { button, list, todoInput, todoDesc, title } from "./elements.js";
const url = "http://localhost:3000/tasks";

const functions = {
  addTask: function (event) {
    event.preventDefault();
    //validation
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      title: todoInput.value,
      desc: todoDesc.value,
      isDone: false,
    };
    dataBase.push(newTask);
    postAddTask("Post", url, newTask);
    render(dataBase);
    console.log(dataBase);
    todoInput.value = "";
    todoDesc.value = "";
  },

  onCheck: function (event) {
    if (event.target.dataset.action !== "check") return;
    const taskElement = event.target.closest(".list__task");
    const taskId = parseInt(taskElement.getAttribute("key"));
    const task = dataBase.find((task) => task.id === taskId);
    task.isDone = !task.isDone;
    taskElement.classList.toggle("done");
    postOnCheck(taskId, task.isDone);
  },

  deleteTask: function (event) {
    if (event.target.dataset.action !== "delete") return;
    let taskTitle = event.target.closest(".list__task");
    let taskId = parseInt(taskTitle.getAttribute("key"));
    const taskIndex = dataBase.findIndex((task) => task.id === taskId);

    dataBase.splice(taskIndex, 1);
    taskTitle.innerHTML = "";
    postDeleteTask(taskId);
  },

  editTask2: function (event) {
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
      render();
      postEditTask(taskId, currTask.title, currTask.desc);
    });

    taskEl
      .querySelector(".list__task-description")
      .addEventListener("blur", () => {
        currTask.title = editedTaskValue.title.innerText;
        currTask.desc = editedTaskValue.desc.innerText;
        render();
        postEditTask(taskId, currTask.title, currTask.desc);
      });
  },

  render: function () {
    list.innerHTML = "";
    dataBase.forEach((task) => {
      const renderTamplateTask = `<li class="list__task ${
        task.isDone ? "done" : ""
      }"  key =${task.id}>
      <i class="check-true bi bi-check2-circle" data-action="check" style="font-size: 23px" ></i>
      <i class="bi-pencil-square bi" data-action="edit" style="font-size: 23px"></i>
      <i class="bin bi-trash bi" data-action="delete" id="bin" style="font-size: 23px"></i>
      <div class="list__task-title " id="title-list">${task.title}</div>
      <div class="list__task-description ">${task.desc}</div>
      </li>`;
      list.innerHTML += renderTamplateTask;
    });
  },
};

export const addTask = functions.addTask;
export const onCheck = functions.onCheck;
export const deleteTask = functions.deleteTask;
export const editTask2 = functions.editTask2;
export const render = functions.render;
