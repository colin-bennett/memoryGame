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

function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  if (isMatch) {
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

// function youWin() {
//   let isMatch = firstCard.dataset.name === secondCard.dataset.name;
//   let matches = 0;
//   if (isMatch === true) {
//     matches = matches + 2;
//   }
// }
// youWin();
// console.log(matches);
