// selecting elements
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

// user rolls dice (clicks roll)
document.querySelector('.btn-roll').addEventListener('click', function() {
    // generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // display dice roll
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // check for rolled 1
})



// add dice to current score

// user holds score
