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

 // Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

// Setup
function testNotEqual(val) {
   if (val != 99) { // Change this line
     return "Not Equal";
   }
   return "Equal";
 }
 
 testNotEqual(10);

 // Setup
function testStrictNotEqual(val) {
   if (val !== 17) { // Change this line
     return "Not Equal";
   }
   return "Equal";
 }
 
 testStrictNotEqual(10);

 function testGreaterThan(val) {
   if (val > 100) {  // Change this line
     return "Over 100";
   }
 
   if (val > 10) {  // Change this line
     return "Over 10";
   }
 
   return "10 or Under";
 }
 
 testGreaterThan(10);

 function testGreaterOrEqual(val) {
   if (val >= 20) {  // Change this line
     return "20 or Over";
   }
 
   if (val >= 10) {  // Change this line
     return "10 or Over";
   }
 
   return "Less than 10";
 }
 
 testGreaterOrEqual(10);

 function testLessThan(val) {
   if (val < 25) {  // Change this line
     return "Under 25";
   }
 
   if (val < 55) {  // Change this line
     return "Under 55";
   }
 
   return "55 or Over";
 }
 
 testLessThan(10);

 function testLessOrEqual(val) {
   if (val <= 12) {  // Change this line
     return "Smaller Than or Equal to 12";
   }
 
   if (val <= 24) {  // Change this line
     return "Smaller Than or Equal to 24";
   }
 
   return "More Than 24";
 }
 
 testLessOrEqual(10);

 function testLogicalAnd(val) {
   // Only change code below this line
 
   if (val >= 25 && val <= 50) {
 
       return "Yes";
   }
 
   // Only change code above this line
   return "No";
 }
 
 testLogicalAnd(10);

 function testLogicalOr(val) {
   // Only change code below this line
 
   if (val > 20 || val < 10) {
     return "Outside";
   }
 
 
 
   // Only change code above this line
   return "Inside";
 }
 
 testLogicalOr(15);

 function testElse(val) {
   let result = "";
   // Only change code below this line
 
   if (val > 5) {
     result = "Bigger than 5";
   } else  {
     result = "5 or Smaller";
   }
 
   // Only change code above this line
   return result;
 }
 
 testElse(4);

 function testElseIf(val) {
   if (val > 10) {
     return "Greater than 10";
   } else if (val < 5) {
     return "Smaller than 5";
   } else {
   return "Between 5 and 10";
  }
 }
 
 testElseIf(7);

 function orderMyLogic(val) {
   if (val < 5) {
     return "Less than 5";
   } else if (val < 10) {
     return "Less than 10";
   } else {
     return "Greater than or equal to 10";
   }
 }
 
 orderMyLogic(7);


 function testSize(num) {
   // Only change code below this line
 if (num < 5) {
   return "Tiny";
 } else if (num < 10) {
   return "Small";
 } else if (num < 15) {
   return "Medium";
 } else if (num < 20) {
   return "Large";
 } else {
   return "Huge";
 }
 
   return "Change Me";
   // Only change code above this line
 }
 
 testSize(7);

 const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par -1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else {
    return names[6];
  }
  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);

function caseInSwitch(val) {
   let answer = "";
   // Only change code below this line
   switch (val) {
     case (1):
       answer = "alpha";
       break;
     case (2):
       answer = "beta";
       break;
     case (3):
       answer = "gamma";
       break;
     case (4):
       answer = "delta";
   }
 
 
   // Only change code above this line
   return answer;
 }
 
 caseInSwitch(1);

 function switchOfStuff(val) {
   let answer = "";
   // Only change code below this line
   switch (val) {
     case "a":
       answer = "apple";
       break;
     case "b":
       answer = "bird";
       break;
     case "c":
       answer = "cat";
       break;
     default:
       answer = "stuff";
   }
 
 
   // Only change code above this line
   return answer;
 }
 
 switchOfStuff(1);

 function sequentialSizes(val) {
   let answer = "";
   // Only change code below this line
 
   switch (val) {
     case 1:
     case 2:
     case 3:
       answer = "Low";
       break;
     case 4:
     case 5:
     case 6:
       answer = "Mid";
       break;
     case 7:
     case 8:
     case 9:
       answer = "High";
   }
 
   // Only change code above this line
   return answer;
 }
 
 sequentialSizes(1);

 function chainToSwitch(val) {
   let answer = "";
   // Only change code below this line
 
 
 
   switch (val) {
     case "bob":
       answer = "Marley";
       break;
     case 42:
       answer = "The Answer";
       break;
     case 1:
       answer = "There is no #1";
       break;
     case 99:
       answer = "Missed me by this much!";
       break;
     case 7:
       answer = "Ate Nine";
 
   }
 
   // Only change code above this line
   return answer;
 }
 
 chainToSwitch(7);

 function isLess(a, b) {
   // Only change code below this line
   return a < b;
   // Only change code above this line
 }
 
 isLess(10, 15);

 // Setup
function abTest(a, b) {
   // Only change code below this line
   if (a < 0) {
     return undefined;
   }
   if (b < 0) {
     return undefined;
   }
 
 
   // Only change code above this line
 
   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
 }
 
 abTest(2,2);

 let count = 0;

function cc(card) {
  // Only change code below this line
  if (card) {
    switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count++; 
        break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        count--;   
  } 

  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }

  // return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line

    const alpha = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
result = alpha[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

function checkObj(obj, checkProp) {
   // Only change code below this line
 
 
 
   if (obj.hasOwnProperty(checkProp)) {
     return obj[checkProp];
   } else {
     return "Not Found";
   };
 
 
 
 
   // Only change code above this line
 }

 const myArray = [];
 for ( let i = 9; i > 0; i -= 2) {
   myArray.push(i);
 }; 

const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total = total + myArr[i];
};

function multiplyAll(arr) {
   let product = 1;
   // Only change code below this line
   for (let i = 0; i < arr.length; i++) {
     for (let j = 0; j < arr[i].length; j++) {
       product = product * arr[i][j];
       console.log(product);
     }
   } 
   // Only change code above this line
   return product;
 }
 
 multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

 // Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
  console.log(i);
 } while (i < 5) {

}

function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
      return sum(arr, n - 1) + arr[n - 1];
  }
}