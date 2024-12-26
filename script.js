// ROCK : 1
// PAPER : 2
// SCISSOR : 3

let score = JSON.parse(localStorage.getItem('score')) ||
{
    wins : 0,
    loses: 0,
    tie: 0
};
updateScore();

function updateScore() {
    document.querySelector('.js-score')
    .innerHTML = `Wins : ${score.wins} \nLoses : ${score.loses} \nTies : ${score.tie}`;
}

function playGame(playerMove) {
    let result = '';
    let compMove = comp();
    if (playerMove === "scissors") {
        if (compMove === 'scissors') {
            result = `A tie!`;
        } 
        else if (compMove === 1) {
            result = "Computer Wins!";
        } 
        else {
            result = "You Win!";
        }
    } 

    else if (playerMove === "rock") {
        console.log('YOU CHOOSE : ROCK');
        if (compMove === 'rock') {
            result = `A tie!`;
        } 
        else if (compMove === 'paper') {
            result = "Computer Wins!";
        } 
        else {
            result = "You Win!";
        }
    } 
    
    else {
        console.log('YOU CHOOSE : PAPER');
        if (compMove === 'paper') {
            result = `A tie!`;
        } 
        else if (compMove === 'scissors') {
            result = "Computer Wins!";
        } 
        else {
            result = "You Win!";
        }
    }

    if (result === 'You Win!') {
        score.wins++;
    }
    else if (result === 'Computer Wins!') {
        score.loses++;
    }
    else if (result === `A tie!`) {
        score.tie++;
    }
    localStorage.setItem('score',JSON.stringify(score));
    updateScore();
    document.querySelector('.js-move')
        .innerHTML = `       You
        <img src="${playerMove}.png" alt="" class="move-icon">
        <img src="${compMove}.png" alt="" class="move-icon">
        Computer`;
    document.querySelector('.js-result')
        .innerHTML = `${result}`;
    displayScore();
}

function comp() {
    const num = Math.random();
    if (num >= 0 && num <= 1 / 3) {
        const move = 'rock';
        return move;
    }
    if (num > 1 / 3 && num <= 2 / 3) {
        const move = 'paper';
        return move;
    }
    if (num > 2 / 3) {
        const move = 'scissors';
        return move;
    }
}

function clearScore(score) {
    console.log('\nSCORE BOARD CLEARED\n');
    score.wins = 0;
    score.loses = 0;
    score.tie = 0;
    displayScore();
    localStorage.removeItem('score');
    updateScore(); 
}

function displayScore() {
    console.log(`Wins : ${score.wins} \nLoses : ${score.loses} \nTies : ${score.tie}`);
}
