const input = document.querySelector(".lang-input");
console.log(input);
const addButton = document.querySelector("#add-btn");
const dellButton = document.querySelector("#delete-btn");
const table = document.querySelector("#table");
const sectionList = document.querySelector("#list");
console.log(list);
let counter = 0;

document.querySelector(".lang-input").addEventListener("keydown", (e) => {
  if (e.code === "Enter" || e.code === "NumpadEnter") {
    document.querySelector("#add-btn").click();
  }
});

document.querySelector("#add-btn").addEventListener("click", () => {
  if (input.value === "") {
    alert("please enter a task");
    return;
  }
  document.querySelector("#list");
  document.querySelector(
    "#list"
  ).innerHTML += `<div class="div"> <i class="fa-sharp fa-solid fa-check red_check"></i><p class="lii">${input.value} </p> <i class="fa-solid fa-trash red_trash"></i></div>`;
  input.value = "";
  input.focus();

  const check = document.querySelectorAll(".fa-check");
  const trash = document.querySelectorAll(".fa-trash");

  check.forEach((i) => {
    i.addEventListener("click", () => {
      i.classList.contains("red_check")
        ? (i.classList.add("green_check"),
          i.classList.remove("red_check"),
          (i.nextElementSibling.style.textDecoration = "line-through"),
          (counter += 1))
        : (i.classList.add("red_check"),
          i.classList.remove("green_check"),
          (i.nextElementSibling.style.textDecoration = "none"),
          (counter -= 1));
      document.querySelector("#complated").innerHTML = `${counter}`;
    });
  });
  trash.forEach((item) => {
    item.addEventListener("click", () => {
      item.parentElement.remove();
      if (
        item.previousElementSibling.previousElementSibling.classList.contains(
          "green_check"
        )
      ) {
        counter -= 1;
      }
      document.querySelector("#complated").innerHTML = `${counter}`;
      document.querySelector("#total").innerHTML = `${
        document.querySelector("#list").childElementCount
      }`;
    });
    document.querySelector("#total").innerHTML = `${
      document.querySelector("#list").childElementCount
    }`;
  });
  document.querySelector("#complated").innerHTML = `${counter}`;
});
