// Commenting our code
// hotkey to comment ctrl + *
// multi-line-comment shift + alt + A

// console log
// console.log("hello world");

// Variables and Data Types
// Variables store data values. Here we'll see different types of data.

// camelCase
// this is when we write the first word's letter in lowercase and subsequent first letters of words in upper case. it's used for naming variables in JavaScript.

// String(text)
// exampleText = "this is my text";
// console.log(exampleText);

// Integer(number)
// myVar = 5;
// console.log(myVar);

// Boolean (true or false)
// thisIsTrue = true;
// thisIsFalse = false;

// console.log(thisIsTrue);

// Array (list of values)
// exampleArray = ["this is my string", 100, false];

// console.log(exampleArray);
// Targeting a specific index in the array (remember indexes start at 0)
// console.log(exampleArray[3]);

// Object (hold key value pairs)
// let person = {
//   name: "Joe",
//   age: 37,
//   location: "Stavanger",
// };
// console.log(person);

// let user = {
//     userName: "John",
//     accountCreated: "01.05.17"
// }
// console.log(user);

// Undefined
// let undefinedExample;
// console.log(undefinedExample);

// Null
// exampleOfNull = null;
// console.log(exampleOfNull);

// Let and Const

// Using let (value can change):
// let changeableMessage = "I can change!";
// console.log(changeableMessage);
// changeableMessage = "I've changed!";
// console.log(changeableMessage);

// let healthPoints = 100;
// healthPoints = 50;
// console.log(healthPoints);

// Using const (value should not change):
// const fixedValue = "I cannot change!";
// console.log(fixedValue);
// Trying to reassign fixedValue will cause an error:

// fixedValue = "Attempting to change...";

// Operators
// Operators perform calculations or comparisons.

// let a = 10;
// let b = 5;

// console.log(a + b); // Addition: 15
// console.log(a - b); // Subtraction: 5
// console.log(a * b); // Multiplication: 50
// console.log(a / b); // Division: 2
// console.log(a % b); // Modulus (remainder): 0

// Using the + operator with strings to concatenate them:
// let firstName = "Jane";
// let lastName = "Doe";

// console.log("Full Name: " + firstName + " " + lastName);

// let counter = 0;
// Increment operator (++) increases a number by 1:
// counter++;
// console.log(counter);

// The following 2 lines do the same thing, use the 2nd line.
// counter = counter + 2;
// counter += 2;

// DRY - Don't repeat yourself!
// Don't have multiple identical lines to increase count by 3:
// counter++;
// counter++;
// counter++;

// Do this instead:
// counter += 3;
// console.log(counter);

// Decrement operator (--) decreases a number by 1:
// counter--
// counter -= 4;

// console.log(counter);

// // Addition assignment (+=):
// let score = 10;
// console.log("Initial score:", score);
// score += 5; // Equivalent to score = score + 5;
// console.log("After adding 5:", score); // 15

// // Subtraction assignment (-=):
// score -= 3; // Equivalent to score = score - 3;
// console.log("After subtracting 3:", score); // 12

// // Multiplication assignment (*=):
// score *= 2; // Equivalent to score = score * 2;
// console.log("After multiplying by 2:", score); // 24

// // Division assignment (/=):
// score /= 4; // Equivalent to score = score / 4;
// console.log("After dividing by 4:", score); // 6

// // Remainder assignment (%=):
// score %= 5; // Equivalent to score = score % 5;
// console.log("After modulus 5:", score); // 6 mod 5 equals 1
