/*Artem Bessonov, a function gets users set of the lower and upper range of numbers they want to roll, creates random number in this range and adds it to h(number) below*/
/*in case the number meets the validation criteria, otherwise error message is printed.*/
function rollRandomNumber(){
    var lowerRange=document.querySelector(".lowerRange").value;
    var upperRange=document.querySelector(".upperRange").value;
  /*Artem Bessonov, validation for range input*/
    if(lowerRange >= 0 && upperRange > lowerRange){
    randomNumber=Math.floor(Math.random() * (Number(upperRange) - Number(lowerRange) + 1)) + Number(lowerRange);
  document.querySelector("h1").innerHTML=randomNumber;
  }
  else{
  document.querySelector("h1").innerHTML="Range must be a positive number! Higher range must be greater than lower range!";
  }}