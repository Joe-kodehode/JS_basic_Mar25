// Typeof, comparison operators and conditionals

// The typeof Operator
let myVariable = true;

console.log(typeof myVariable);

// Comparison Operators

console.log(15 > 20); // Greater than operator
console.log(15 < 20); // Less than operator
console.log(15 >= 15); // Equal or greater than
console.log(15 <= 14); // Equal or less than

// The equality operator (==)
console.log(15 == "15");

// The strict equality operator (===) (Takes data types into account, best practice)
console.log(15 === "15");

// Not equal operator (!=)
console.log(15 != 20);
console.log(15 != "15");

// Strict not equal (Takes data types into account, best practice)
console.log(15 !== "15");

Conditionals;

// Basic if statement
let temperature = 15;
if (temperature > 25) {
  console.log("It's a hot day!");
}

// if ... else
if (temperature > 25) {
  console.log("It's a hot day!");
} else {
  console.log("it's not so hot");
}

// if ... else if ... else
if (temperature > 30) {
  console.log("It's a hot day!");
} else if (temperature >= 25) {
  console.log("It's a warm day");
} else if (temperature >= 20) {
  console.log("It's a pleasant day");
} else if (temperature >= 15) {
  console.log("It's a chilly day");
} else {
  console.log("it's a cold day");
}

// Logical operators: AND (&&) and OR (||)
let age = 19;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You are allowed to drive");
} else {
  console.log("You are NOT allowed to drive");
}

let redDay = false;
let day = "Sunday";
if (day === "Saturday" || day === "Sunday" || redDay === true) {
  console.log("I can stay home today");
} else {
  console.log("I need to go to work");
}

// Ternary Operator
// The ternary operator is a shortcut for simple if ...else statements.

let isMember = false;
if (isMember) {
  console.log("fee is $5");
} else {
  console.log("fee is $10");
}

console.log(isMember ? "fee is $5" : "fee is $10");

let fee = isMember ? "$5" : "$10";
console.log("Your fee is:", fee);

// Nested ternary
let userAge = 12;
let category = userAge < 13 ? "Child" : age < 18 ? "Teenager" : "Adult";
console.log(category);

// Switch Statement
// A switch statement checks a value against multiple cases.
let fruit = "grape";

switch (fruit) {
  case "apple":
    console.log("Apples are delicious!");
    break;

  case "banana":
    console.log("Bananas are a great source of potassium!");
    break;

  default:
    console.log("Unknown fruit selected.");
}

// Truthy and Falsey values
// In JavaScript, some values are automatically considered "truthy" (true) or "falsey" (false) when used in conditions.

// let truthyOrFalsey = "";
// falsey;
// let truthyOrFalsey = " ";
// truthy;
// let truthyOrFalsey = "hello";
// truthy;
// let truthyOrFalsey = 1;
// truthy;
// let truthyOrFalsey = 0;
// falsey;
// let truthyOrFalsey = null;
// falsey;
// let truthyOrFalsey;
// falsey;
// let truthyOrFalsey = [];
// truthy;

let result = truthyOrFalsey ? "truthy" : "falsey";
console.log(result);

// Template string / Template literal
let firstName = "Ola";
let lastName = "Nordmann";

// Without template string:
// const fullName = "Welcome" + " " + firstName + " " + lastName;

// With template string:
const fullName = `Welcome ${firstName} ${lastName}`;
console.log(fullName);
