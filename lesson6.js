// Example 1 - Check if a list includes an item

const shoppingList = ["milk", "bread", "cheese"];
const gamesList = ["mario kart", "GTA6", "hello kitty island adventure"];

function checkItem(list, item) {
  const result = list.includes(item);
  return `The list ${result ? "does" : "doesn't"} include ${item}`;
}

console.log(checkItem(gamesList, "donkey kong"));

shoppingList.splice(1, 1, "ham");

console.log(shoppingList);

// Example 2 - Convert a Sentence into Kebab Case
// this-is-kebab-case

mySentence = "  Hello World From JavaScript  ";
anotherSentence = "hi this is my second sentence    ";

console.log(mySentence.trim().replaceAll(" ", "-"));

console.log(mySentence.trim().toLowerCase().split(" ").join("-"));

function toKebabCase(string) {
  return string.trim().replaceAll(" ", "-");
}

console.log(toKebabCase(mySentence));
console.log(toKebabCase(anotherSentence));

// Example 3 - Checking if a word is a palindrome

wordToCheck = "Racecar";

function isPalindrome(word) {
  const lower = word.toLowerCase();
  return lower === lower.split("").reverse().join("");
}

console.log(isPalindrome(wordToCheck));

// Example 4 - Shorten a String and Add “...” at the End

const myText = "This is a long sentence that needs shortening.";

const shorten = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
};

console.log(shorten(myText, 10));

// Math.random() is a built-in JavaScript method that gives you a random number between 0 (inclusive) and 1 (exclusive).

console.log(Math.floor(Math.random() * 10) + 1);

// Example 5 - Remove the Middle Element from an Array

myArray = ["A", "B", "C", "D"];

// Function to remove middle index of an array
function removeMiddle(array) {
  return array.toSpliced(Math.floor(array.length / 2), 1);
}

console.log(removeMiddle(myArray));

// Example 6 - Rock, paper scissors

userAnswer = "paper";

function rockPaperScissors(userInput, aiInput) {
  switch (userInput + aiInput) {
    case "rock" + "rock":
    case "scissors" + "scissors":
    case "paper" + "paper":
      return "it's a draw";
    case "rock" + "scissors":
    case "scissors" + "paper":
    case "paper" + "rock":
      return "user wins";
    default:
      return "AI wins";
  }
}

array = ["rock", "paper", "scissors"];

const randomAnswer = Math.floor(Math.random() * 3);

aiAnswer = array[randomAnswer];

console.log("User answered:", userAnswer);
console.log("AI answered:", aiAnswer);
console.log(rockPaperScissors(userAnswer, aiAnswer));
