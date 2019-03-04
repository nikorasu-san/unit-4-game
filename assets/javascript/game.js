// global variables
let gameOn = false;
let counters = {
    targetNum = 0,
    currentNm = 0,
    Wins = 0,
    Loses = 0
}


//add to wins
function addWin() {
    counters.wins++;
}

//add to loses
function addLoses() {
    counters.loses++;
}

//get a random number to determine target number
function getTarget() {
    counters.targetNum = Math.floor(Math.random(19) * Math.floor(121));
}

//get  a random number to push as crystal values
function getCrystalValues() {
    let crystalValue = Math.floor(Math.random(1) * Math.floor(13));
}

// start game on button click
// 1. randomize target number
// 2. randomize image values
// 3. hide button w/ class

// main app --
document.onkeyup = function (event) {
}