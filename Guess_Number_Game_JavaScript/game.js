//* variables
let sayi = Math.round(Math.random() * 100);
console.log(sayi);
const check = document.querySelector(".check-btn");

const again = document.querySelector(".again-btn");
const msg = document.querySelector(".msg");
let score = 10;

let topScore = localStorage.getItem("topScore") || 0;
document.querySelector(".top-score").textContent = topScore;

//* Ceheck button  Click Events

check.addEventListener("click", () => {
  const input = Number(document.querySelector(".guess-input").value);
  if (input < 0 || input > 100 || !input) {
    msg.innerHTML = "Please enter a valid number";
  } else if (input === sayi) {
    msg.innerHTML =
      "Conragts You Win... <i class='fa-solid fa-face-grin-hearts fa-2x'></i>";
    document.body.style.backgroundColor = "green";
    check.disabled = "ture";
    document.querySelector(".secret-number").textContent = sayi;
    if (score > topScore) {
      localStorage.setItem("topScore", score);
      document.querySelector(".top-score").textContent = score;
    }
  } else {
    score--;
    document.querySelector(".score").textContent = score;
    if (score > 0) {
      input > sayi
        ? (msg.innerHTML =
            "<i class='fa-solid fa-arrow-trend-down fa-2x'></i> Decrease your Guess...")
        : (msg.innerHTML =
            " <i class='fa-solid fa-arrow-trend-up fa-2x'></i> Increase your Guess...");
    } else {
      msg.innerHTML =
        "Sorry you lost... <i class='fa-regular fa-face-sad-tear fa-2x'></i> ";
      check.disabled = true;
      document.body.style.backgroundColor = "red";
      document.querySelector(".secret-number").textContent = sayi;
    }
    document.querySelector(".score").textContent = score;
  }
});

//* Again Click buton Events

document.querySelector(".again-btn").addEventListener("click", () => {
  sayi = Math.round(Math.random() * 100);
  console.log(sayi);
  score = 10;
  document.querySelector(".score").textContent = score;
  check.disabled = false;
  msg.innerHTML = "Starting..";
  document.body.style.backgroundColor = "#1c0662";
  document.querySelector(".secret-number").textContent = "?";
  document.querySelector(".guess-input").value = "";
});

document.querySelector(".guess-input").addEventListener("keydown", (e) => {
  if (e.code === "Enter" || e.code === "NumpadEnter") {
    document.querySelector(".check-btn").click();
  }
});
