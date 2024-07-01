// Adding click event listeners to all elements with the class 'drum'
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttona = this.innerHTML;
        makesound(buttona);
        animation(buttona);
    });
}

// Adding a keydown event listener to the document
document.addEventListener("keydown", function(event) {
    makesound(event.key);
    animation(event.key);
});

// Function to play sounds based on button or key pressed
function makesound(buttona) {
    switch (buttona) {
        case 'w':
            var tom = new Audio("sounds/tom-4.mp3");
            tom.play();
            break;

        default:
            console.log(buttona);
            break;
    }
}

// Function to add animation to the button pressed
function animation(current) {
    var an = document.querySelector("." + current); // Use querySelector to select a single element
    if (an) { // Check if the element exists
        an.classList.add("pressed");
        setTimeout(function() {
            an.classList.remove("pressed");
        }, 100);
    }
}


 $(document).ready(function() {
            var buttonColors = ["red", "blue", "green", "yellow"];

            function makesound(buttona) {
                switch (buttona) {
                    case 'red':
                        var tom = new Audio("sounds/red.mp3");
                        tom.play();
                        break;
                    case 'green':
                        var tom = new Audio("sounds/green.mp3");
                        tom.play();
                        break;
                    case 'yellow':
                        var tom = new Audio("sounds/yellow.mp3");
                        tom.play();
                        break;
                    case 'blue':
                        var tom = new Audio("sounds/blue.mp3");
                        tom.play();
                        break;
                    default:
                        console.log(buttona);
                        break;
                }
            }

            function nextSequence() {
                var randomNumber = Math.floor(Math.random() * buttonColors.length); // 0 to 3
                return randomNumber;
            }

            var randomChosenColor = buttonColors[nextSequence()];

            $("button").click(function() {
                makesound(randomChosenColor);
                randomChosenColor = buttonColors[nextSequence()]; // Update random color for next click
            });
        });
