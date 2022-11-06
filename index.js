var randomNumber1 = Math.floor((Math.random()*6) + 1);
var randomNumber2 = Math.floor((Math.random()*6) + 1);
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");
if(randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!";
}
else if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "😁 Player 1 Wins!";
  document.querySelectorAll("p")[0].innerHTML = "Winner 🤩";
  document.querySelectorAll("p")[1].innerHTML = "Looser 🤣";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 😁";
  document.querySelectorAll("p")[1].innerHTML = "Winner 🤩";
  document.querySelectorAll("p")[0].innerHTML = "Looser 🤣";
}
