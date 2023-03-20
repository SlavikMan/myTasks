let button = document.getElementById("add-task");
let list = document.getElementById("list");
let todoInput = document.getElementById("title");
let todoDesc = document.getElementById("desc");
let title = document.getElementById("title-list");

button.addEventListener("click", addTask);
list.addEventListener("click", actionsList);

// <input type="checkbox" class="bi-pencil-square" id="check" >
function addTask() {
  const currTask = `<li class="list__task">
  <a href="#"
    ><i class="bi-check2-circle bi" style="font-size: 23px"></i>
  </a>
  <a href="#"
     ><i class="bi-pencil-square bi" style="font-size: 23px"></i>
  </a>
  <a href="#"><i class="bin bi-trash bi" id="bin" style="font-size: 23px"></i> </a>
  <div class="list__task-title" id="title-list">${todoInput.value}</div>
  <div class="list__task-description">${todoDesc.value}</div>
</li>`;
  if (todoInput.value == "") {
    return;
  }
  list.innerHTML += currTask;
  todoInput.value = "";
  todoDesc.value = "";
}

function actionsList(event) {
  item = event.target;
  let a = item.parentElement;
  let wholeLi = a.parentElement;
  console.log(item);
  if (item.classList[0] === "bin") {
    wholeLi.remove();
  }
  if (item.classList[0] === "bi-check2-circle") {
    wholeLi.classList.add("done");
  }
  if (item.classList[0] === "bi-pencil-square") {
    let input = document.createElement("input");
    wholeLi.appendChild(input);
  }
}

let baseData = [
  {
    id: 13134356,
    title: "task - 1",
    desc: "cjvjvjv",
    isDone: true,
  },
  {
    id: 13134357,
    title: "task - 2",
    desc: "cjvjvjv hhh",
    isDone: false,
  },
  {
    id: 13134358,
    title: "task - 3",
    desc: "cjvjvjv bjbj",
    isDone: true,
  },
];

// let task = {
//   id: 13134356,
//   title: "cjvjvjv",
//   desc: "cjvjvjv",
//   isDone: false,
// };
// dz
// function addTask(){}
// different between button & submit

// render();

// function render() {
//   baseData.forEach((task) => {
//     const renderTask = `<li class="list__task" key=${task.id}>
//       <a href="#">
//         <i class="bi bi-check2-circle" style="font-size: 23px"></i>
//       </a>
//       <a href="#">
//         <i class="bi bi-pencil-square" style="font-size: 23px"></i>
//       </a>
//       <a href="#">
//         <i class="bi-trash bi  bin" style="font-size: 23px"></i>
//       </a>
//       <input class="list__task-title done">${task.title}</input>
//       <input class="list__task-description">${task.desc}</input>
//     </li>`;

//     list.innerHTML += renderTask;
//   });
// }

// const titles = tasks.map((task) => task.title); // [title1, title2]
// const descs = tasks.map((task) => task.desc);
// const chboxs = tasks.map((task) => task.isDone); //
// console.log(descs);
// console.log(titles);
// console.log(chboxs);

//console.log(titles);
// function render(event) {
//   for (let index = 0; index < titles.length; index++) {
//     // creating li
//     let li = document.createElement("li");
//     li.classList.add("list__task");

//     //creating checkBox
//     let checkBox = document.createElement("input");
//     checkBox.type = "checkbox";
//     checkBox.classList = "checkbox";
//     chboxs.forEach((task) => {
//       if (chboxs[index]) {
//         checkBox.checked = true;
//       }
//     });
//     li.appendChild(checkBox);

//     // creating completeButton
//     let completeButton = document.createElement("a");
//     completeButton.innerHTML =
//       '<i class="bi bi-check2-circle" style="font-size: 23px"></i>';
//     li.appendChild(completeButton);

//     // creating editButton
//     let editButton = document.createElement("a");
//     editButton.innerHTML =
//       '<i class="bi bi-pencil-square " style="font-size: 23px"></i>';
//     li.appendChild(editButton);

//     // creating deleteButton
//     let deleteButton = document.createElement("a");
//     deleteButton.innerHTML =
//       '<i class="bi bi-trash bin" style="font-size: 23px"></i>';
//     li.appendChild(deleteButton);

//     // creating taskTitle
//     let taskTitle = document.createElement("div");
//     taskTitle.innerText = titles[index]; // ""
//     taskTitle.classList.add("list__task-title");
//     li.appendChild(taskTitle);

//     //creating taskDesc
//     let taskDesc = document.createElement("div");
//     taskDesc.innerText = descs[index];
//     taskDesc.classList.add("list__task-description");
//     li.appendChild(taskDesc);

//     //atteching li to ul
//     list.appendChild(li);
//   }

//   // clearing input
//   todoInput.value = "";
//   todoDesc.value = "";
// }
