const todoInput = document.querySelector(".lang-input");
const addBtn = document.querySelector("#add-btn");
const dellBtn = document.querySelector("#delete-btn");
const todoUl = document.getElementById("list");
let counter = 0;

let todos = JSON.parse(localStorage.getItem("TODOS")) || [];

const renderSavedTodos = () => {
  todos.forEach((todo) => {
    createListElement(todo);
    document.querySelector("#total").innerHTML = `${
      document.querySelector("#list").childElementCount
    }`;
    document.querySelector("#complated").innerHTML = `${counter}`;
  });
};

renderSavedTodos();

addBtn.addEventListener("click", () => {
  if (todoInput.value.trim() === "") {
    alert("PLease enter new todo");
  } else {
    const newTodo = {
      id: new Date().getTime(),
      class: "red",
      completed: false,
      text: todoInput.value,
    };

    createListElement(newTodo);

    //?Yeni olusturulan todo'yu diziye sakla
    todos.push(newTodo);

    localStorage.setItem("TODOS", JSON.stringify(todos));
    console.log(todos);
    todoInput.value = "";
    todoInput.focus();
  }
});

function createListElement(newTodo) {
  const { id, completed, text } = newTodo; //!destr.
  let element = document.querySelector("#list");
  element.innerHTML += `<div class="div" id=${id}> <i class="fa-sharp fa-solid fa-check red_check"></i><p class="lii">${text} </p> <i class="fa-solid fa-trash red_trash"></i></div>`;
  todoInput.value = "";
  document.querySelector("#total").innerHTML = `${
    document.querySelector("#list").childElementCount
  }`;
  document.querySelector("#complated").innerHTML = `${counter}`;
}
document.querySelector("#complated").innerHTML = `${counter}`;
document.querySelector("#total").innerHTML = `${
  document.querySelector("#list").childElementCount
}`;

todoUl.addEventListener("click", (e) => {
  const id = e.target.parentElement.getAttribute("id");
  //! event, bir delete butonundan geldi ise
  if (e.target.classList.contains("fa-trash")) {
    //? delete butonunun parent'ini DOM'dan sil
    e.target.parentElement.remove();
    //? todos dizisinin son halini localStorage'e sakla
    todos = todos.filter((todo) => todo.id !== Number(id));
    localStorage.setItem("TODOS", JSON.stringify(todos));
    if (
      e.target.previousElementSibling.previousElementSibling.classList.contains(
        "green_check"
      )
    ) {
      counter -= 1;
    }
    document.querySelector("#complated").innerHTML = `${counter}`;
    document.querySelector("#total").innerHTML = `${
      document.querySelector("#list").childElementCount
    }`;
  } else if (e.target.classList.contains("fa-check")) {
    e.target.classList.contains("red_check")
      ? (e.target.classList.add("green_check"),
        e.target.classList.remove("red_check"),
        (e.target.nextElementSibling.style.textDecoration = "line-through"),
        (counter += 1))
      : (e.target.classList.add("red_check"),
        e.target.classList.remove("green_check"),
        (e.target.nextElementSibling.style.textDecoration = "none"),
        (counter -= 1));
    document.querySelector("#complated").innerHTML = `${counter}`;
    // i.classList.add("green_check");
  }
});

document.querySelector(".lang-input").addEventListener("keydown", (e) => {
  if (e.code === "Enter" || e.code === "NumpadEnter") {
    document.querySelector("#add-btn").click();
  }
});

//? Baslangicta input aktif olsun
window.onload = function () {
  todoInput.focus();
};

function tt(todos) {
  if (e.target.classList.contains("green_check"))
    todos.forEach((i) => {
      if (i.id == e.target.parentElement.id) {
        return (i.class = "green_check");
      }
    });
}
