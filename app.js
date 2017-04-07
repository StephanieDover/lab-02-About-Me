'use strict';

var correctAnswer = false;
var userName = prompt('What is your name?');
var correctNumber = 8;
var notDone = true;
var guess;
var counter = 0;
var q1 = 'Do I live in Seattle?';
var q2 = 'do I like cats?';
var q3 = 'Do I think pineapple belongs on pizza??';
var q4 = 'Is my hair pink?';
var q5 = 'Am I in Slytherin?';

alert('ok ' + userName + ', lets see how well you know me');
function cityGuessingGame () {
  var functionCounter;
  var cities = ['pullman', 'bainbridge', 'bellevue', 'mukilteo'];
  var cityLength = cities.length;
  for(var guesses = 9; guesses > 0 && notDone; guesses--) {
    var guessCity =  prompt('Guess a city where I previsously lived in Washington State');
    for (var cityLoop = 0; cityLoop < cityLength; cityLoop++) {
      if(guessCity.trim().toLowerCase() == cities[cityLoop]) {
        alert('Great Guess! ' + userName + ', You are correct!');
        correctAnswer = true;
        notDone = false;
        functionCounter = 1;
        console.log( userName + ' answered cities prompt correctly');
      }
    }
    if (!correctAnswer) {
      alert('sorry, wrong answer');
      functionCounter = 0;
    }
  } return functionCounter;
}
counter += cityGuessingGame();

function questions(q, correct) {
  var functionCounter;
  var questionPrompt = prompt(q);
  if (questionPrompt.trim().toLowerCase() == correct) {
    alert('Correct!!!');
    functionCounter = 1;
  } else {
    alert('Wrong');
    functionCounter = 0;
  };
  return functionCounter;
  console.log(counter);
}

counter += questions(q1, 'no');
counter += questions(q2, 'yes');
counter += questions(q3, 'yes');
counter += questions(q4, 'yes');
counter += questions(q5, 'no');

function guessingGame () {
  var functionCounter;
  for(var guesses = 9; guesses > 0 && !notDone; guesses--) {
    guess = prompt('what is my favorite number?');
    if (guess == correctNumber) {
      notDone = true;
      alert('You got it correct!');
      functionCounter = 1;
    } else if (guesses === 0) {
      alert('sorry, you are out of guesses! Reload page to play again.');
      functionCounter = 0;
    }else {
      alert('try again!');
    }
  }
  return functionCounter;
}
counter += guessingGame();
console.log(notDone);
if (counter < 3) {
  alert('Thanks for playing ' + userName + ' you got ' + counter + ' out of 7 correct. it\'s ok, we can still be bffs');
} else if (counter >= 3 && counter < 5 ) {
  alert('Thanks for playing ' + userName + ' you got ' + counter + ' out of 7 correct. You know a lot! what a great friend!');
} else {
  alert('Thanks for playing ' + userName + ' you got ' + counter + ' out of 7 correct. you are my new BFF!');
}
