let button = document.getElementById("add-task");

let list = document.getElementById("list");
let todoInput = document.getElementById("title");
let todoDesc = document.getElementById("desc");
let title = document.getElementById("title-list");
let isDone = document.getElementById("btn-cossout");

list.addEventListener("click", onCheck);
button.addEventListener("submit", addTask);

const baseData = [
  {
    id: 13134356,
    title: "Wolk with dog",
    desc: "cjvjvjv",
    isDone: true,
  },
];

render();

function addTask(event) {
  event.preventDefault();
  //validation
  const newTask = {
    id: Math.floor(Math.random() * 10000),
    title: todoInput.value, // empty   створити умову якщо цей елемент пустий то не показувати
    desc: todoDesc.value, // empty і можна попробувати до 50 елем
    isDone: false,
  };
  baseData.push(newTask);

  // const currTask = `<li class="list__task" key = ${newTask.id} >
  // <button type="button" data-action="done" class="task-btn" id="btn-cossout" >
  // <i class="check-true bi bi-check2-circle" style="font-size: 23px"></i>
  // </i></button>
  //   <a href="#"
  //      ><i class="bi-pencil-square bi" style="font-size: 23px"></i>
  //   </a>
  //   <a href="#"><i class="bin bi-trash bi" id="bin" style="font-size: 23px"></i> </a>
  //   <div class="list__task-title " id="title-list">${todoInput.value}</div>
  //   <div class="list__task-description done">${todoDesc.value}</div>
  // </li>`;
  render(baseData);
  // if (todoInput.value == "") {
  //   return;
  // }
  // list.innerHTML += currTask;
  todoInput.value = "";
  todoDesc.value = "";
  console.log(baseData);
}

function onCheck(event) {
  console.log("onCheck", event.target.options);
  event.preventDefault();
  console.log(event.target.dataset);
  if (event.target.dataset.action === "done") {
    const parentNode = event.target.closest("list__task");

    const id = baseData(parentNode.id);
    const task = baseData.find((task) => task.id === id);

    task.done = !task.done;

    const taskTitle = parentNode.querySelector(".list__task-title");
    const taskDescription = parentNode.querySelector(".list__task-description");

    taskTitle.classList.toggle("done");
    taskDescription.classList.toggle("done");
  }
}

// function actionsList(event) {
//   item = event.target;
//   let a = item.parentElement;
//   let wholeLi = a.parentElement;
//   console.log(item);
//   if (item.classList[0] === "bin") {
//     wholeLi.remove();
//   }
//   if (item.classList[0] === "bi-check2-circle") {
//     wholeLi.classList.add("done");
//   }
//   if (item.classList[0] === "bi-pencil-square") {
//     let input = document.createElement("input");
//     wholeLi.appendChild(input);
//   }
// }

// і щоб з бази даних міняло isDone відповідно до того як є на сайті

function render() {
  list.innerHTML = "";
  baseData.forEach((task) => {
    const renderTamplateTask = `<li class="list__task " key =${task.id}>
    <button type="button" data-action="done" class="task-btn" id="btn-cossout" >
    <i class="check-true bi bi-check2-circle"  data-action="done" style="font-size: 23px" ></i>
    </i></button>
      <a href="#"
         ><i class="bi-pencil-square bi" style="font-size: 23px"></i>
      </a>
      <a href="#"><i class="bin bi-trash bi" id="bin" style="font-size: 23px"></i> </a>
      <div class="list__task-title " id="title-list">${task.title}</div>
      <div class="list__task-description ">${task.desc}</div>
    </li>`;
    list.innerHTML += renderTamplateTask;
  });
}
