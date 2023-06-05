import {
  delete_warn,
  disagree_btn,
  agree_btn,
  main,
  info,
  infoText,
  slider,
  slide,
  prev,
  next,
  fullSlider,
  arrowAdd,
  arrowReset,
  arrowEdit,
  arrowCheck,
  arrowSort,
  heart,
} from "./elements.js";
import { methodsAPI } from "./apiMethods.js";
import { dataBase, url } from "../index.js";

export function showDeletedAll(event) {
  if (event.target.dataset.action !== "deleteAll") return;
  delete_warn.classList.toggle("hide");
}

export function agreeDeleteTasks() {
  dataBase.forEach((task) => {
    methodsAPI("DELETE", url + `/${task.id}`);
  });
}
export function disagreeDeleteTasks(event) {
  delete_warn.classList.toggle("hide");
}

export function showInfo(event) {
  if (event.target.dataset.action !== "info") return;

  infoText.classList.toggle("hide");
}
// ============================

const arraySlides = [
  "To get started simply type your first item in the box below and a new list will be created automatically. Click the 'add' button to add items to your list and the 'remove' button to edit items out.ey",
  "Click the 'reset' button to clear your list and start over.",
  "In order to edit descriptions to your items click the 'description' button.",
  "You can also check off items by using the check-boxes. ",
  "Once your list is complete you can choose how you would like to see the items displayed with the 'sort list' drop-box. ",
  "Enjoy making your lists and check back for new features in the future!",
];

{
  /* <div>{arraySlides[0]}</div> */
}
let iter = 0;

export function nextSlide(event) {
  if (event.target.dataset.action !== "next") return;
  if (iter === arraySlides.length) {
    iter = 0;
  }

  slider.innerHTML = "";
  if (iter === 0) {
    // slider.style.top = "25px";
    heart.classList.add("hide");

    arrowAdd.classList.toggle("hide");
  } else if (iter === 1) {
    arrowAdd.classList.toggle("hide");
    arrowReset.classList.toggle("hide");
  } else if (iter === 2) {
    arrowReset.classList.toggle("hide");
    arrowEdit.classList.toggle("hide");
  } else if (iter === 3) {
    arrowEdit.classList.toggle("hide");
    arrowCheck.classList.toggle("hide");
  } else if (iter === 4) {
    arrowCheck.classList.toggle("hide");
    arrowSort.classList.toggle("hide");
  } else if (iter === 5) {
    arrowSort.classList.toggle("hide");
    heart.classList.toggle("hide");
  }
  const renderSlide = `<div class="slide" id="slide"> ${arraySlides[iter]}</div> `;
  slider.innerHTML += renderSlide;

  iter += 1;
}

export function prevSlide(event) {
  if (event.target.dataset.action !== "prev") return;
  if (iter === 0) {
    iter = arraySlides.length;
  }

  if (iter === 0) {
    // slider.style.top = "25px";
    console.log(iter);
    arrowReset.classList.add("hide");

    heart.classList.add("hide");
    arrowAdd.classList.toggle("hide");
  } else if (iter === 1) {
    console.log(iter);
    heart.classList.add("hide");

    arrowReset.classList.toggle("hide");
  } else if (iter === 2) {
    console.log(iter);
    heart.classList.add("hide");
    arrowAdd.classList.add("hide");

    arrowReset.classList.toggle("hide");
    arrowEdit.classList.toggle("hide");
  } else if (iter === 3) {
    console.log(iter);
    heart.classList.add("hide");
    arrowAdd.classList.add("hide");

    arrowEdit.classList.toggle("hide");
    arrowCheck.classList.toggle("hide");
  } else if (iter === 4) {
    console.log(iter);
    heart.classList.add("hide");

    arrowCheck.classList.toggle("hide");
    arrowSort.classList.toggle("hide");
  } else if (iter === 5) {
    console.log(iter);
    arrowAdd.classList.add("hide");

    arrowSort.classList.toggle("hide");
    heart.classList.toggle("hide");
  }

  iter -= 1;
  slider.innerHTML = "";
  const renderSlide = `<div class="slide" id="slide"> ${arraySlides[iter]}</div> `;
  slider.innerHTML += renderSlide;
}
