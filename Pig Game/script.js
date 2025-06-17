'use strict';

const score1Pl = document.querySelector('#score--0');
const score2Pl = document.querySelector('#score--1');
const currentPl1 = document.querySelector('#current--0');
const currentPl2 = document.querySelector('#current--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnHoldDice = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');

let currentPoints = 0;
let pointsPlayer1 = 0;
let pointsPlayer2 = 0;
let player1Active = true;
let playing = true;

score1Pl.textContent = 0;
score2Pl.textContent = 0;
diceEl.classList.add('hidden');

const endPlayersTurn = function () {
  if (player1Active) {
    pointsPlayer1 += currentPoints;

    if (pointsPlayer1 >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector('.player--0').classList.add('player--winner');
      document.querySelector('.player--0').classList.remove('player--active');
    }

    score1Pl.textContent = pointsPlayer1;
    currentPoints = 0;
    currentPl1.textContent = 0;
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
  } else {
    pointsPlayer2 += currentPoints;

    if (pointsPlayer2 >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector('.player--1').classList.add('player--winner');
      document.querySelector('.player--1').classList.remove('player--active');
    }

    score2Pl.textContent = pointsPlayer2;
    currentPoints = 0;
    currentPl2.textContent = 0;
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
  }

  if (playing) player1Active = !player1Active;
};

btnRollDice.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentPoints += dice;
      if (player1Active) {
        currentPl1.textContent = currentPoints;
      } else {
        currentPl2.textContent = currentPoints;
      }
    } else {
      currentPoints = 0;
      if (player1Active) {
        currentPl1.textContent = 0;
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
      } else {
        currentPl2.textContent = 0;
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
      }
      player1Active = !player1Active;
    }
  }
});

btnHoldDice.addEventListener('click', function () {
  if (playing) {
    endPlayersTurn();
  }
});

btnNewGame.addEventListener('click', function () {
  currentPoints = 0;
  pointsPlayer1 = 0;
  pointsPlayer2 = 0;
  player1Active = true;
  playing = true;

  score1Pl.textContent = 0;
  score2Pl.textContent = 0;
  diceEl.classList.add('hidden');

  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
});
