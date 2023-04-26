"use strict";

let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guessNum = Number(document.querySelector("#disp2").value);
  if (!guessNum) {
    document.querySelector(".message").textContent = "🚫🪫 No Number!";
  } else if (guessNum < secret) {
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "🪫 Too Low!";
  } else if (guessNum > secret) {
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "📈 Too High!";
  } else {
    document.querySelector("span").style.width = "35%";

    document.querySelector("body").style.background = "rgb(19, 209, 177)";
    document.querySelector("#disp1").textContent = secret;
    document.querySelector(".message").textContent = "🥳 Correct number";
    document.querySelector(".score").textContent = score;
    document.querySelector(".com").textContent = "🍾🎉🎊🎊 CONGRATULATION.....";
    highScore = document.querySelector(".highScore").textContent;
    if (highScore < score) {
      document.querySelector(".highScore").textContent = score;
    } else {
      document.querySelector(".highScore").textContent = highScore;
    }
  }

  if (score < 1) {
    document.querySelector(".message").textContent = "💥 Game Over...";
    document.querySelector(".score").textContent = "0";
    document.querySelector("body").style.background = "rgb(226, 172, 9)";
    document.querySelector(".com").textContent = "😒 you failed try again.....";
  }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.background = "rgb(0, 0, 0)";
  secret = Math.trunc(Math.random() * 20 + 1);
  document.querySelector("#disp1").textContent = "?";
  document.querySelector("#disp2").value = "";
  score = 20;
  document.querySelector(".com").textContent = "";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".message").textContent = "Start Guessing......";
});
