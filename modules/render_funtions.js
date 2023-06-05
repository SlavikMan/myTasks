import { dataBase } from "../index.js";
import { list, selector, rainbow } from "./elements.js";

export function render() {
  if (dataBase.length === 0) {
    rainbow.classList.toggle("hide");
    list.innerHTML = "<div class='empty'>There are no more tasks</div>";
  } else {
    list.innerHTML = "";
    // get data from API?
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
  }
}

export function renderOptions() {
  selector.innerHTML = "";

  const renderTamplateTask = `
  
    <option class="option" id="AZ" data-action="AZ" value="A-Z">A-Z</option>
    <option class="option" value="Z-A">Z-A</option>
    <option class="option" value="Old-New">Old-New</option>`;
  selector.innerHTML += renderTamplateTask;
}

export function renderFiltered(array) {
  list.innerHTML = "";
  array.forEach((task) => {
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
}
