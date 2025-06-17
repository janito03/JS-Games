'use strict';

// document.querySelector('.message').textContent = 'Correct guess! 🥳';
// document.querySelector('.number').textContent = 15;
// document.querySelector('.guess').value = 15;
// const variable = document.querySelector('.guess').value;
// console.log(variable);

const number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = number;
let score = 20;
let highscore = 0;

// Clicking on button Check
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(score, typeof score);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else {
    if (guess === number) {
      document.querySelector('.message').textContent = 'You guessed it!! 🥳';
      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      return;
    } else if (guess < number)
      document.querySelector('.message').textContent = 'Too low!';
    else document.querySelector('.message').textContent = 'Too high!';
  }

  score--;
  document.querySelector('.score').textContent = score;

  if (!score) {
    document.querySelector('.message').textContent = '😓 You lost the game!';
  }
});

// Clicking on button again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing..';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  number += Math.trunc(Math.random() * 20) + 1;
  number = number2;
});
