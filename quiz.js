/** 
 * A quiz app asking 5 questions and then awarding the user with a Gold, Silver, or Bronze medal.
 * 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

 let correctAnswers = 0; 

// 2. Store the rank of a player

let playerRank = 0; 

// 3. Select the <main> HTML element

var main = document.querySelector('main');
/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/


const an1 = prompt("what is the name of your 1");
if (an1.toUpperCase().trim() === 'VAN'){
  correctAnswers += 1; 
}; 

const an2 = prompt("what is the name of your 2");
if (an2.toUpperCase().trim() === 'WES'){
  correctAnswers += 1; 
}; 

const an3 = prompt("what is the name of your 3");
if (an3.toUpperCase().trim() === 'GOOSE'){
  correctAnswers += 1; 
}; 

const an4 = prompt("whats dinner");
if (an4.toUpperCase().trim() === 'FOOD'){
  correctAnswers += 1; 
}; 

const an5 = prompt("whats drink");
if (an5.toUpperCase().trim() === 'WATER'){
  correctAnswers += 1; 
}; 
console.log(correctAnswers); 



/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
let prize = 0; 

if (correctAnswers === 5){
  prize = 'gold';
}else if (correctAnswers >= 3){
  prize = 'silver';
}else if (correctAnswers >= 1){
  prize = 'bronze'
}else{
  prize = 'shit'
}; 


  




// 6. Output results to the <main> element

main.innerHTML = (`<h1>Way to go! you get ${prize}</h1>`)


