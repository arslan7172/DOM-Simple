//var san1=Math.floor(Math.random()*6+1);
//var san2=Math.floor(Math.random()*6+1);
//var surat_1='dice'+san1+'.png';
//var surat_2='dice'+san2+'.png';
//document.querySelector('img').src="dice2.png";
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Oyunchy 1 Utdy!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Oyunchy 2 Utdy! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Denlik!";
}
