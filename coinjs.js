/*Kripa Bhujel, coin page script, that randoms a number, and puts either heads or tails in the h1 tag and prints the image of the coin side*/
function flipCoin(){
  randomNumber=Math.floor((Math.random()*2)+1);
  if(randomNumber == 1){
  document.querySelector("h1").innerHTML="heads";
  const img = document.querySelector('#coinimg');
  img.src = "images/head.png";
  } 
  else{
  document.querySelector("h1").innerHTML="tails";
   const img = document.querySelector('#coinimg');
  img.src = "images/tail.png";
  }
}
