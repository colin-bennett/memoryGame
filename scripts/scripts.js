document.querySelector(".start").addEventListener("click", startFunction);

function startFunction() {
  console.log("start was clicked");
  let display = document.querySelector("#time");
  startTimer(0, display);
}

document.querySelector(".reset").addEventListener("click", reloadPage);

function reloadPage() {
  document.location.reload();
}

function startTimer(startTime, display) {
  var timer = startTime,
    minutes,
    seconds;
  setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
    if (++timer < 0) {
      timer = startTimer;
    }
  }, 1000);
}

const cards = document.querySelectorAll(".gameCard");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
// let matches = 0;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;

  checkForMatch();
}
let matches = 0;
function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  if (isMatch) {
    matches += 2;
    youWin();
    setTimeout(function() {
      hideCards();
    }, 1500);
  } else {
    unflipCards();
  }
}

function hideCards() {
  firstCard.classList.add("hide");
  secondCard.classList.add("hide");

  resetBoard();
}
function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1500);
}

function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

(function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.ceil(Math.random() * 12);
    card.style.order = ramdomPos;
  });
})();

cards.forEach(card => card.addEventListener("click", flipCard));

//if you win, open modal//
function youWin() {
  if (matches === 12) {
    startTimer();
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
}
