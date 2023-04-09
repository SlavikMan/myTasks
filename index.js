let button = document.getElementById("add-task");
let list = document.getElementById("list");
let todoInput = document.getElementById("title");
let todoDesc = document.getElementById("desc");
let title = document.getElementById("title-list");

list.addEventListener("click", onCheck);
button.addEventListener("submit", addTask);
list.addEventListener("click", deleteTask);
list.addEventListener("click", editTask2);

const baseData = [
  {
    id: 13134356,
    title: "Walk with dog",
    desc: "cjvjvjv",
    isDone: false,
  },
];

render();

function addTask(event) {
  event.preventDefault();
  //validation
  const newTask = {
    id: Math.floor(Math.random() * 10000),
    title: todoInput.value,
    desc: todoDesc.value,
    isDone: false,
  };
  baseData.push(newTask);

  render(baseData);

  todoInput.value = "";
  todoDesc.value = "";
}

function onCheck(event) {
  if (event.target.dataset.action !== "check") return;
  const taskElement = event.target.closest(".list__task");
  const taskId = parseInt(taskElement.getAttribute("key"));
  const task = baseData.find((task) => task.id === taskId);
  console.log(task);
  task.isDone = !task.isDone;
  taskElement.classList.toggle("done");
}

function deleteTask(event) {
  if (event.target.dataset.action !== "delete") return;
  let taskTitle = event.target.closest(".list__task");
  let taskId = parseInt(taskTitle.getAttribute("key"));
  const taskIndex = baseData.findIndex((task) => task.id === taskId);
  console.log(taskIndex);
  baseData.splice(taskIndex, 1);
  taskTitle.innerHTML = "";
}

function editTask2(event) {
  if (event.target.dataset.action !== "edit") return;
  let taskEl = document.querySelector(".list__task");
  let taskId = parseInt(taskEl.getAttribute("key"));
  let taskBase = baseData.find((task) => task.id === taskId);
  let title = document.querySelector(".list__task-title");
  let desc = document.querySelector(".list__task-description");

  title.contentEditable = true;
  title.style.backgroundColor = "#e6e8ea";
  desc.contentEditable = true;
  desc.style.backgroundColor = "#e6e8ea";

  title.addEventListener("blur", () => {
    taskBase.title = title.textContent;
    taskBase.desc = desc.textContent;
    render();
  });
  desc.addEventListener("blur", () => {
    taskBase.title = title.textContent;
    taskBase.desc = desc.textContent;
    render();
  });
  console.log(baseData);
}

function render() {
  list.innerHTML = "";
  baseData.forEach((task) => {
    const renderTamplateTask = `<li class="list__task " key =${task.id}>
    <i class="check-true bi bi-check2-circle" data-action="check" style="font-size: 23px" ></i>
    <i class="bi-pencil-square bi" data-action="edit" style="font-size: 23px"></i>
    <i class="bin bi-trash bi" data-action="delete" id="bin" style="font-size: 23px"></i>
    <div class="list__task-title " id="title-list">${task.title}</div>
    <div class="list__task-description ">${task.desc}</div>
    </li>`;
    list.innerHTML += renderTamplateTask;
  });
}
