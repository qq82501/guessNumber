'use strick';

let score = Number(document.querySelector('.score').textContent);
let highscore = 0;
let secretNum = Math.trunc(Math.random() * 20 + 1);
console.log(secretNum);

const setMsg = function (message) {
  document.querySelector('.message').textContent = message;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const reset = function () {
  score = 20;
  setScore(score);
  setMsg('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  secretNum = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  console.log(secretNum);
};

//Check Event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = '⛔No number entered⛔';
  } else if (guess) {
    if (guess === secretNum) {
      setMsg('You won the game! 🎉');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNum;
      if (score > highscore)
        document.querySelector('.highscore').textContent = score;
    } else {
      if (score > 1) {
        setMsg(guess > secretNum ? 'too high!' : 'too low!');
        score--;
        setScore(score);
      } else {
        setMsg('You lost the game💥');
        score = 0;
        setScore(score);
      }
    }
  }
});

//Again
document.querySelector('.again').addEventListener('click', function () {
  reset();
});
