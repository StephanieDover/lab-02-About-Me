
'use strict';

var numCorrectAnswer = 1;
var correctAnswer = false;
var userName = prompt('What is your name?');
var correctNumber = 8;
var notDone = true;
var guess;
alert('ok ' + userName + ', lets see how well you know me');

correctAnswer = false;
var cities = ['pullman', 'bainbridge', 'bellevue', 'mukilteo']
var cityLength = cities.length;
for(var guesses = 9; guesses > 0 && notDone; guesses--) {
var guessCity =  prompt('Guess a city where I previsously lived in Washington State');
for (var cityLoop = 0; cityLoop < cityLength; cityLoop++) {
  if(guessCity.trim().toLowerCase() == cities[cityLoop]) {
    alert('Great Guess! ' + userName + ', You are correct!')
    correctAnswer = true;
    notDone = false;
    numCorrectAnswer++;
    console.log( userName + ' answered cities prompt correctly')
  }
}
if (!correctAnswer) {
  alert('sorry, wrong answer')
}
}


var seattle = prompt('Do I live in Seattle?')
if (seattle.trim().toLowerCase() == 'yes') {
  alert('sorry, not correct, I live on the Eastside');
  console.log(userName + ' Does not know I live in Bothell');
} else {
  alert('Correct! I live in Bothell, not Seattle');
  console.log(userName + ' Answered correctly to do I live in Seattle');
  numCorrectAnswer++;
};
//document.getElementById('live').className = 'show';
//document.getElementById('live').style.display = 'inline-block';


var cats = prompt('do I like cats?')
if (cats.trim().toLowerCase() == 'yes') {
  alert('Correct!');
  console.log(userName + ' Answered correctly to do I like cats')
  numCorrectAnswer++;
} else {
  alert('Sorry, not correct');
  console.log(userName + ' says I do not like cats, but cats are my favorite');
};
//document.getElementById('meow').style.display = 'inline-block';

var pizza = prompt('Do I think pineapple belongs on pizza??')
if (pizza.trim().toLowerCase() == 'yes') {
  alert('thats right! because its delicious!');
  console.log(userName + ' answered correclty to Do I think pineapple belongs on pizza ');
  numCorrectAnswer++;
} else {
  alert('sorry, I lOVE pineapple on my pizza');
  console.log(userName + ' does not think I like pineapple on my pizza');
};
//document.getElementById('pineapple').style.display = 'inline-block';


var pink = prompt('Is my hair pink?')
if (pink.trim().toLowerCase() == 'yes') {
  alert('correct!');
  console.log(userName + ' Answered correctly to is hair pink')
  numCorrectAnswer++;
} else {
  alert("hmm, you probably think it's #FF3DA3");
  console.log(userName + ' thinks hair is #FF3DA3');
};
//document.getElementById('hair').style.display = 'inline-block';


var harryPotter = prompt('Am I in Slytherin?')
if (harryPotter.trim().toLowerCase() == 'yes') {
  alert('nope! Gryffindor');
  console.log(userName + ' would sort me into Slytherin');
} else {
  alert('Correct! Gryffindor is the right house!');
  console.log(userName + ' Answered correctly to am I in Slytherin');
  numCorrectAnswer++;
};
document.getElementById('pottermore').style.display = 'inline-block';



for(var guesses = 9; guesses > 0 && notDone; guesses--) {
  guess = prompt('what is my favorite number?');
  if (guess == correctNumber) {
    notDone = false;
    alert('You got it correct!');
    numCorrectAnswer++;
  } else if (guesses === 0) {
    alert('sorry, you are out of guesses! Reload page to play again.')
  }else {
    alert('try again!');
  }
}



if (numCorrectAnswer < 3) {
  alert('Thanks for playing ' + userName + ' you got ' + numCorrectAnswer + ' out of 7 correct. it\'s ok, we can still be bffs');
} else if (numCorrectAnswer >= 3 && numCorrectAnswer < 5 ) {
  alert('Thanks for playing ' + userName + ' you got ' + numCorrectAnswer + ' out of 7 correct. You know a lot! what a great friend!');
} else {
  alert('Thanks for playing ' + userName + ' you got ' + numCorrectAnswer + ' out of 7 correct. you are my new BFF!');
}
