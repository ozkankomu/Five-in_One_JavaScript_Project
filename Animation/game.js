const body = document.querySelector("body");
const car = document.querySelector(".car");
const ground = document.querySelector(".ground");
const carimg = document.querySelector(".car img");
let flag = true;

body.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    if (!ground.classList.contains("pop-up")) {
      ground.classList.add("pop-up");
      car.classList.add("right");
    } else {
      ground.classList.remove("pop-up");
      car.classList.remove("right");
    }
  }
});

body.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    if (flag) {
      carimg.setAttribute("src", "./img/Img_06.png");
      flag = false;
    } else {
      carimg.setAttribute("src", "./img/Img_05.png");
      flag = true;
    }
  }
});
