var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
var gameStarted = false;
var level = 0;



// Function to start the game on keypress
$(document).keypress(function () {
    if (!gameStarted) {
        $("#level-title").text("Level " + level);
        nextSequence();
        gameStarted = true;
    }
});

$(".btn").click(function () {
    var clickedColor = $(this).attr('id');
    userClickedPattern.push(clickedColor);
    makeSound(clickedColor);
    animateButton(clickedColor);
    checkAnswer(userClickedPattern.length - 1);
});


// Function to generate the next sequence
function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * buttonColors.length);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    makeSound(randomChosenColor);
}


function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        var wrongSound = new Audio("sounds/wrong.mp3");
        wrongSound.play();
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

// Function to reset the game
function startOver() {
    level = 0;
    gamePattern = [];
    gameStarted = false;
}
function animateButton(buttonColor) {
    var button = $('#' + buttonColor);
    button.addClass("pressed");
    setTimeout(function () {
        button.removeClass("pressed");
    }, 200);
}
// Function to play sound based on button color
function makeSound(buttonColor) {
    switch (buttonColor) {
        case 'red':
            var redSound = new Audio("sounds/red.mp3");
            redSound.play();
            break;
        case 'green':
            var greenSound = new Audio("sounds/green.mp3");
            greenSound.play();
            break;
        case 'yellow':
            var yellowSound = new Audio("sounds/yellow.mp3");
            yellowSound.play();
            break;
        case 'blue':
            var blueSound = new Audio("sounds/blue.mp3");
            blueSound.play();
            break;
        default:
            console.log(buttonColor);
            break;
    }
}