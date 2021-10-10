/*Arpit Acherya, script for the dice page, that takes a collection of strings named accordingly to the dice images,
then rolls a random positive number for one to six and puts that number into h1 tag on the dice page. 
After that using the query Selector it looks for the diceimg class on the dice page and will insert the image there.
Image src will be calculated based on the number that we roller, turned into a full image src and putted into #diceimg on the dice page. */

const diceImages = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];

function rollDice(){
  randomNumber=Math.floor((Math.random()*6)+1);
  document.querySelector("h1").innerHTML=randomNumber;
  const img = document.querySelector('#diceimg'); // getting the image tag
  img.src = `images/${diceImages[diceImages.indexOf(`${randomNumber}.png`)]}`;
}
