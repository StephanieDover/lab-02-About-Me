

'use strict';


var userName = prompt('What is your name?');
alert('ok ' + userName + ', lets see how well you know me');

var seattle = prompt('Do I live in Seattle?')
if (seattle.trim().toLowerCase() == 'yes') {
  alert('sorry, not correct, I live on the Eastside');
  console.log(userName + ' Does not know I live in Bothell');
} else {
  alert('Correct! I live in Bothell, not Seattle');
  console.log(userName + ' Answered correctly to do I live in Seattle');
};
document.getElementById('live').style.display = 'inline-block';

var cats = prompt('do I like cats?')
if (cats.trim().toLowerCase() == 'yes') {
  alert('Correct!');
  console.log(userName + ' Answered correctly to do I like cats')
} else {
  alert('Sorry, not correct');
  console.log(userName + ' says I do not like cats, but cats are my favorite');
};
document.getElementById('meow').style.display = 'inline-block';

var pizza = prompt('Do I think pineapple belongs on pizza??')
if (pizza.trim().toLowerCase() == 'yes') {
  alert('thats right! because its delicious!');
  console.log(userName + ' answered correclty to Do I think pineapple belongs on pizza ');
} else {
  alert('sorry, I lOVE pineapple on my pizza');
  console.log(userName + ' does not think I like pineapple on my pizza');
};
document.getElementById('pineapple').style.display = 'inline-block';


var pink = prompt('Is my hair pink?')
if (pink.trim().toLowerCase() == 'yes') {
  alert('correct!');
  console.log(userName + ' Answered correctly to is hair pink')
} else {
  alert("hmm, you probably think it's #FF3DA3");
  console.log(userName + ' thinks hair is #FF3DA3');
};
document.getElementById('hair').style.display = 'inline-block';


var harryPotter = prompt('Am I in Slytherin?')
if (harryPotter.trim().toLowerCase() == 'yes') {
  alert('nope! Gryffindor');
  console.log(userName + ' would sort me into Slytherin');
} else {
  alert('Correct! Gryffindor is the right house!');
  console.log(userName + ' Answered correctly to am I in Slytherin');
};
document.getElementById('pottermore').style.display = 'inline-block';


alert('Thanks for playing ' + userName + ', now you are my new bff');

//end comment our finished code







/*

for(setup; condition; end of loop code){

}

for (var i=0; i<10; i++) {
console.log(i)
}

cat = [12, 21, 33, 55];
for (var i = 0; i < cat.length; i++){
console.log(cat[i]);
}


//TODO: I want to prompt the user to guess the number 12 and get four chances.
var correctNumber = 12;
var notDone = true;
var guess;

for(var guesses = 4; guesses > 0 && notDone; guesses--) {
guess = prompt('what is my favorite number?');
if (guess == correctNumber) {
notDone = false;
alert('You got it correct!');
} else {
alert('try again!');
} else if (guesses === 0) {
alert('sorry, you are out of guesses! Reload page to play again.')
}
}
}
user parseInt(guess); //this turns the string into a number
*/
