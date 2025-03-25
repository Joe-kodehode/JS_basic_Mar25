// Methods

// A method in JavaScript is a built-in function that you use with a specific type of data, like strings or arrays. It lets you do something with that data—like change it, check it, copy or access part of it.

// --------------------------------------
// Section 1: String Methods
// --------------------------------------

const text = "Hello World, JavaScript World!";
console.log(text.trim()); // removes whitespace from both ends of the string
console.log(text.toUpperCase()); // converts the string to uppercase
console.log(text.toLowerCase()); // converts the string to lowercase
console.log(text.indexOf(" ")); // returns the starting index of "JavaScript" in the string
console.log(text.slice(7, 11)); // extracts characters from index 0 to 4
console.log(text.replace("World", "*****")); // replaces the first occurrence of "World" with "Universe"
console.log(text.replaceAll("World", "Universe")); // replaces all occurrences of "World" with "Universe"
console.log(text.charCodeAt(0)); // returns the Unicode value of the character at index 3
console.log(text.length); // returns the length of the string
const password = "12345";
if (password.includes("!") || password.includes("?")) {
  console.log("password accepted");
} else {
  console.log("Please use either ! or ? in your password");
}
console.log(text.split(" ")); // splits the string into an array of substrings by spaces
console.log(text.repeat(3)); // repeats the string 3 times

// --------------------------------------
// Section 1.2: Converting a String to a Number
// --------------------------------------

const numericString = "123.456xyz"; // example string containing numeric values with trailing characters
console.log(Number(numericString)); // converts entire string to a number; returns NaN if any part is invalid
console.log(parseInt(numericString)); // parses as an integer until an invalid character; returns 123
console.log(parseFloat(numericString)); // parses as a float until an invalid character; returns 123.45

// --------------------------------------
// Section 2: Array Methods
// --------------------------------------

const colors = ["Red", "Green", "Blue"];

console.log(colors.length); // returns the number of elements in the array

colors.push("Yellow"); // adds "Yellow" to the end and logs the updated array

colors.pop(); // removes and returns the last element ("Yellow")

colors.shift(); // removes and returns the first element ("Red")

colors.unshift("Purple"); // adds "Purple" at the beginning and logs the updated array
console.log(colors);

console.log(colors.join(" ")); // joins array elements into a string separated by " "

console.log(colors.includes("Green")); // checks if "Green" is in the array; returns true or false

console.log(colors);
colors.splice(0, 2, "Orange", "Magenta", "Pink"); // removes elements from the array, parameters are starting index, ammount of elements to remove, elements to replace the removed ones. Affects the original array!
console.log(colors);

// toSpliced(): Returns a new array with elements spliced in without modifying the original array
const newColors = colors.toSpliced(1, 1, "Grey", "Turqoise");
console.log(colors);
console.log(newColors);

let unsortedArray = ["dog", "and", "bar", "also", "bare"];
let sortedArray = unsortedArray.toSorted(); // returns a new sorted array without modifying the original. Works with strings or numbers.

console.log(sortedArray);

const reversedArray = sortedArray.toReversed(); // returns a new array with elements in reverse order

console.log(reversedArray);

console.log(sortedArray.at(0)); // accesses the first element using a positive index
console.log(sortedArray.at(-2)); // accesses the last element using a negative index
// console.log(sortedArray[0]);

// --------------------------------------
// Section 3: Number Methods
// --------------------------------------

const myNum = 3.1415926;

console.log(myNum.toFixed(2)); // returns a string representing myNum rounded to 2 decimal places
const newString = myNum.toString(); // converts myNum to a string
console.log(typeof newString);

console.log(myNum.toExponential()); // returns a string with myNum in exponential notation

// --------------------------------------
// Section 4: Chaining Methods Together
// --------------------------------------

const rawString = "   javaScript is fun!   ";

const processedString = rawString
  .trim()
  .replace("fun", "awesome")
  .toUpperCase();

rawString.trim()[0].toUpperCase();
console.log(rawString);

console.log(processedString);

const words = ["hello", "world"];

const messageFromArray = words.join(" ").toUpperCase();
console.log(messageFromArray);

const chainedNumber = myNum.toFixed(2).toString().repeat(2);

console.log(chainedNumber);

let word = "hello";
word = word.charAt(0).toUpperCase() + word.slice(2);
console.log(word); // "Hello"
