const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

const myStr = "This is the start. " + "This is the end."; // Change this line

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// Only change code below this line
const myName = "Stil";
const myStr = "My name is" + myName + "I am well!";

// Change code below this line
const someAdjective = "Stil";
let myStr = "Learning to code is ";
myStr += someAdjective;

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length -2]; // Change this line

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = myNoun + ' ' + myAdjective + ' ' + myVerb + ' ' + myAdverb;
console.log(wordBlanks);
 // Change this line
// Only change code above this line

// Only change code below this line
const myArray = ['array', 12];

// Only change code below this line
const myArray = [['name, 0'], ['value',1]];

const myArray = [50, 60, 70];
let myData = myArray[0];

// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;

const myArray = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
   [[10, 11, 12], 13, 14],
 ];
 
 const myData = myArray[2][1];

 // Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray.pop();

// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);

const myList = [
   ["potato", 2],
   ["tomato", 5],
   ["garlik", 1],
   ["apple", 2],
   ["orange", 3],
 ];

 function reusableFunction() {
   console.log("Hi World");
 }
 reusableFunction()

 function functionWithArgs(num1, num2) {
   console.log(num1 + num2);
 }
 functionWithArgs(1, 2);
 functionWithArgs(7, 9);