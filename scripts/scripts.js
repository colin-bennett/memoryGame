function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function() {
  var fiveMinutes = 60,
    display = document.querySelector("#time");
  startTimer(fiveMinutes, display);
};

// Card flip function

let card = document.querySelector(".card");
card.addEventListener("click", function() {
  card.classList.toggle("is-flipped");
});

/*
const section = document.querySelector("section");
section.addEventListener("click", clickFunction(e));

function clickFunction(e) {
  if (e.target.classList.contains("card__face--front")) {
    section.classList.toggle("is-flipped");
  } else {
  }
}
*/

// Loop for generating 12 cards within game board
/*
const board = document.querySelector(".gameBoard");
for (let i = 0; i < 12; i++) {
  const div = document.createElement("div");
  div.classList.add("cardContainer");
  div.innerHTML = `
    <div class="card">
      <div class="card__face card__face--front">front</div>
      <div class="card__face card__face--back">back</div>
    </div>
  `;
  board.append(div);
}
*/
