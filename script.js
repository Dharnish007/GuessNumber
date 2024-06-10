'use strict';
let score = 20;
let highScore = 0;
let randomNumber = Math.floor(Math.random() * 20) + 1;

let checkNumber = function() {
    let userInput = Number(document.querySelector('.guess').value)
    if (score<=0) {
        document.querySelector('h1').textContent = 'You Loss'
        if (highScore<score) {
            document.querySelector('.highscore').textContent = String(score);
            highScore = score;
        }
        document.querySelector('body').style.background = '#e91e1e';
        document.querySelector('.number').textContent = randomNumber;
    }
    else {
        if (userInput===randomNumber) {
            document.querySelector('.message').textContent = "Correct Guess!!!";
            if (highScore<score) {
                document.querySelector('.highscore').textContent = String(score);
                highScore = score
            }
            let numberBox = document.querySelector('.number');
            numberBox.textContent = randomNumber;
            numberBox.style.width = '30rem';
            document.querySelector('body').style.background = '#60b347';
            document.querySelector('h1').textContent = 'You Won'
        }
        else if (userInput>randomNumber) {
            document.querySelector('.message').textContent = "Too High";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else if (userInput<randomNumber) {
            document.querySelector('.message').textContent = "Too Low";
            score--;
            document.querySelector('.score').textContent = score;
        }
    }   
}

let resetNumber = function() {
    document.querySelector('.message').textContent = "Start guessing...";
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.background = '#222';
    document.querySelector('.guess').value = '';
    randomNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector('h1').textContent = 'Guess My Number!'
}


document.querySelector('.check').addEventListener(
    'click',checkNumber
)

document.querySelector('.again').addEventListener(
    'click',resetNumber
)
