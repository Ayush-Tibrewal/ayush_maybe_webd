var randomNumber1 = Math.floor(Math.random()*6)+1;
var diceImage = "dice" + randomNumber1 + ".png";
document.querySelectorAll(".img2")[0].setAttribute("src", diceImage)


var randomNumber2 = Math.floor(Math.random()*6)+1;
var diceImage2 = "dice" + randomNumber2 + ".png";
document.querySelectorAll(".img1")[0].setAttribute("src", diceImage2)
if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML = "PLAYER ONE HAS WON";
}else{
    document.querySelector("h1").innerHTML = "PLAYER TWO HAS WON"; 
}