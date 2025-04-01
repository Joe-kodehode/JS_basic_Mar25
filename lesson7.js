// Lesson 7: JavaScript Loops

// A loop is a way to repeat code without writing it multiple times.

// --------------------------------------
// Section 1: Why We Use Loops
// --------------------------------------

const names = ["Tom", "Eric", "Jessica", "Joe", "Endre"];
console.log(names.length);
console.log(`Hei ${names[0]}`);
console.log(`Hei ${names[1]}`);
console.log(`Hei ${names[2]}`);
console.log(`Hei ${names[3]}`);

// DRY - Don't repeat yourself!

// --------------------------------------
// Section 2: The for Loop
// --------------------------------------

// for (where the loop starts, when the loop is going to end, how it incraments)

for (let i = names.length - 1; i >= 0; i--) {
  console.log(`Hei ${names[i]}`);
}

// --------------------------------------
// Section 3: Combining Loops with Functions and Methods
// --------------------------------------

// Creating a function with a loop to greet names in an array

function greetEveryone(nameArray) {
  const cleanedNames = [];
  for (let i = 0; i < nameArray.length; i++) {
    cleanedNames.push(nameArray[i].trim().toLowerCase());
  }
  return cleanedNames;
}
const people = ["alice", " BOB ", "charlie", "dEbBy"];

console.log(greetEveryone(people));

function greetEveryone(nameArray) {
  for (let i = 0; i < nameArray.length; i++) {
    const name =
      nameArray[i].trim() +
      nameArray[i].charAt(0).toUpperCase() +
      nameArray[i].slice(1).toLowerCase();
    console.log(`Hello, ${name}!`);
  }
}

greetEveryone(people);

// Creating a function with a loop to combine elements in an array to a string

function makeSentenceWithLoop(wordsArray) {
  let sentence = "";
  for (let i = 0; i < wordsArray.length; i++) {
    sentence += wordsArray[i];
    if (i < wordsArray.length - 1) {
      sentence += " ";
    } else {
      sentence += ".";
    }
  }
  return sentence;
}

console.log(makeSentenceWithLoop(["Loops", "are", "really", "useful"]));

function makeSentence(wordsArray) {
  return wordsArray.join(" ") + ".";
}

console.log(makeSentence(["Loops", "are", "really", "useful"]));

// --------------------------------------
// Section 4: The for...of Loop
// --------------------------------------

const colors = ["red", "green", "blue"];

const allColors = [];
for (let color of colors) {
  allColors.push(color);
  console.log(allColors);
}

// --------------------------------------
// Section 5: The while Loop
// --------------------------------------

let count = 1;

while (count <= 5) {
  console.log(`Current count: ${count}`);
  count++;
}

// Guessing game with while loop

const secret = Math.floor(Math.random() * 10) + 1;

let guess = 0;

while (guess !== secret) {
  guess++;
  console.log(`Currently guessing: ${guess}`);
  if (guess === secret) {
    console.log(`Correct! The secret number was: ${guess}`);
  }
}

// console.log(secret);

// --------------------------------------
// Section 6: Creating Arrays with Loops
// --------------------------------------

function makeRandomArray(rolls, max) {
  const result = [];

  for (let i = 0; i < rolls; i++) {
    const rand = Math.ceil(Math.random() * max);
    result.push(rand);
  }
  return result;
}

const randomNumbers = makeRandomArray(10, 50);

console.log(randomNumbers);

// --------------------------------------
// Section 7: Finding the Biggest Number
// --------------------------------------

function findMax(numbers) {
  let biggest = 0;
  for (let number of numbers) {
    if (number > biggest) {
      biggest = number;
    }
  }
  return biggest;
}

console.log(findMax(randomNumbers));

// --------------------------------------
// Section 8: Using break and continue
// --------------------------------------

const moreNames = [
  "Tom",
  "Eric",
  "Jessica",
  "Scott",
  "Anna",
  "Carl",
  "Elisabeth",
  "Benny",
  "Oliver",
  "Andy",
  "Jenny",
  "Ashley",
  "Erin",
  "Patrick",
];

for (let name of moreNames) {
  if (name === "Andy") {
    break;
  }
  console.log(name);
}

// --------------------------------------
// Summary
// --------------------------------------

// for        → best when using an index or counting
// for...of   → great for looping through array values
// while      → useful when you don’t know how many times to repeat
// break      → stops the loop early
// continue   → skips to the next loop cycle
