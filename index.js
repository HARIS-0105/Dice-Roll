//alert("Welcome");
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var randimg1="images/dice"+randomNumber1+".png";
var randimg2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src",randimg1);
document.querySelectorAll("img")[1].setAttribute("src",randimg2);
if(randomNumber2==randomNumber1){
    document.querySelector("h1").textContent="Draw Match";
}
if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent="Player 2 won";
}
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player 1 won";
}