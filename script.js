// selecting elements
const player0El = document.querySelector('.player-0');
const player1El = document.querySelector('.player-1');
const scoreEl0 = document.querySelector('#score-0');
const scoreEl1 = document.querySelector('#score-1');
const diceEl = document.querySelector('.dice');
const currentScore0 = document.querySelector('#current-0');
const currentScore1 = document.querySelector('#current-1');
const newButton = document.querySelector('.btn-new');
const rollDiceButton = document.querySelector('.btn-roll');
const holdButton = document.querySelector('.btn-hold');



//setting inital game status
scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
diceEl.classList.add('hidden');
currentScore0.textContent = 0;
currentScore1.textContent = 0;

let scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;

// user rolls dice (clicks roll)
rollDiceButton.addEventListener('click', function() {
    // generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // display dice roll
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // check for rolled 1
    if(dice !== 1) {
        // add dice to current score
        currentScore += dice
        document.getElementById(`current-${activePlayer}`).textContent = currentScore;
    } else {
        // switch to next player
        document.getElementById(`current-${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player-active');
        player1El.classList.toggle('player-active');
    }
})

// user holds score
holdButton.addEventListener('click', function() {
    // add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    currentScore = 0;
    // check score for 100, finish game
    if(scores[activePlayer] >= 10 ) {
        document.querySelector(`.player-${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player-${activePlayer}`).classList.remove('player-active');
        diceEl.classList.add('hidden');
        rollDiceButton.classList.add('hidden');
        holdButton.classList.add('hidden')

    } else {
        // switch to next player
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player-active');
        player1El.classList.toggle('player-active');
    }
})

newButton.addEventListener('click', function() {
    scores = [0, 0]
    currentScore = 0;
    activePlayer = 0;
    scoreEl0.textContent = 0;
    scoreEl1.textContent = 0;
    diceEl.classList.add('hidden');
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player-active');
    player1El.classList.remove('player-active');
})
