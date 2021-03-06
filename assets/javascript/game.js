$(document).ready(function () {
    // global variables
    let gameOn = false;
    let counters = {
        targetNum: 0,
        currentNum: 0,
        wins: 0,
        losses: 0,
        sapphire: 0,
        amethyst: 0,
        emerald: 0,
        ruby: 0
    };
    let buttonClass = "btn btn-dark";


    //add to wins
    function addWin() {
        counters.wins++;
        $("#wins").html(counters.wins);
        audioWin();
    }

    //add to losses
    function addLoss() {
        counters.losses++;
        $("#losses").html(counters.losses);
        audioLoss();
    }

    //get a random number to determine target number btwn 19-120
    function getTarget() {
        counters.targetNum = Math.floor(Math.random() * (102) + 19);
        $("#target-num").html(counters.targetNum);
    }

    //get  a random number to push as crystal values
    function getCrystalValues() {
        counters.sapphire = Math.floor(Math.random() * Math.floor(12) + 1);
        counters.amethyst = Math.floor(Math.random() * Math.floor(12) + 1);
        counters.emerald = Math.floor(Math.random() * Math.floor(12) + 1);
        counters.ruby = Math.floor(Math.random() * Math.floor(12) + 1);
        $("#sapphire").attr("data-value", counters.sapphire);
        $("#amethyst").attr("data-value", counters.amethyst);
        $("#emerald").attr("data-value", counters.emerald);
        $("#ruby").attr("data-value", counters.ruby);
    }

    // Make a sound for successful letter guesses
    function audioWin() {
        let audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "./assets/sounds/Successful-sound.mp3");
        audioElement.playbackRate = 3.0;
        audioElement.play();
    }

    // Make a sound for losses
    function audioLoss() {
        let audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "./assets/sounds/Error-sound.mp3");
        audioElement.playbackRate = 1.5;
        audioElement.play();
    }


    // clear values & reset
    function clear() {
        counters.sapphire = 0;
        counters.amethyst = 0;
        counters.emerald = 0;
        counters.ruby = 0;
        counters.currentNum = 0;
        counters.targetNum = 0;
        $("#sapphire").attr("data-value", 0);
        $("#amethyst").attr("data-value", 0);
        $("#emerald").attr("data-value", 0);
        $("#ruby").attr("data-value", 0);
        $("#current-num").html("0");
        $("#target-num").html("0")
        //reveal start button
        $("#start").attr("class", buttonClass);
        //stopping the img on.click from firing more per round
        $('.crystal-image').off().on('click', function () {
        });
    }
    // ---- Main app -----  
    // start game on button click
    $("#start").on("click", function () {
        // 1. randomize target number
        getTarget();
        // 2. randomize image values
        getCrystalValues();
        // 3. hide button w/ class
        $(this).addClass("hide");
        // game on
        gameOn = true;

        // allow clicks on crystal images
        $(".crystal-image").on("click", function () {
            if (gameOn) {
                // add the crystal's value to current number & print on page
                counters.currentNum += parseInt($(this).attr("data-value"));
                $("#current-num").html(counters.currentNum);
                // check for win or lose condition
                if (counters.currentNum === counters.targetNum) {
                    // add to win 
                    addWin();
                    // clear, reset, show button
                    clear();
                    //turn off game
                    gameOn = false;
                } else if (counters.currentNum > counters.targetNum) {
                    // add to lose
                    addLoss();
                    // clear, reset, show button
                    clear();
                    //turn off game to ignore gem clicks
                    gameOn = false;
                }
            } else {
                //do nothing;
            }
        });
    });
});