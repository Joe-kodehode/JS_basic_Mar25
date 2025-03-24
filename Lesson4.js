// Functions

//  A function is a block of code designed to do one specific task. It lets you write code once and reuse it, keeping your program clean and organized. However, the function won't do anything until you call it.

// ---------------------------------------------------
// Section 1: Function Declarations and Hoisting
// ---------------------------------------------------

function sayHello() {
  console.log("Hello!");
}

// Function call
sayHello();

// ---------------------------------------------------
// Section 2: Arrow Functions - No hoisting
// ---------------------------------------------------

const arrowFunction = () => {
  console.log("Hello from the arrow function");
};

arrowFunction();

// ---------------------------------------------------
// Section 3: Return Statements and Scope
// ---------------------------------------------------

function functionOne() {
  console.log("This function logs a message without returning a value");
}

functionOne();

function functionTwo() {
  const myMessage = "This function returns a message";
  return myMessage;
}

const returnedData = functionTwo();
console.log(returnedData);

// ---------------------------------------------------
// Section 4: Functions with Parameters
// ---------------------------------------------------

// Hard coded
function add() {
  return 3 + 4;
}

console.log(add());

// Soft coded (dynamic and reusable!)

function minus(num1, num2) {
  if (typeof num1 === "number" || typeof num2 === "number") {
    return num1 - num2;
  } else {
    console.log("Error, non-number detected");
  }
}

console.log(minus("5", 10));
console.log(minus(7, 3));
console.log(minus(20, 2));
console.log(minus(5892375923, 1));

const greeter = (time, name, accountCreated) => {
  return `Good ${time} ${name}! I can see you created your account on: ${accountCreated}`;
};

const userData = {
  userName: "Milos",
  userEmail: "Milos@gmail.com",
  userCreated: "18.03.25",
};

console.log(greeter("Morning", userData.userName, userData.userCreated));
console.log(greeter("Morning", "Marius"));
console.log(greeter("Afternoon", "Andrè"));
console.log(greeter("Evening", "Ben"));

// ---------------------------------------------------
// Section 5: Implicit Return in Arrow Functions
// ---------------------------------------------------

const adder = (num1, num2) => num1 + num2;

console.log(adder(5, 10));

// ---------------------------------------------------
// Section 6: Calculator Function Using Switch Statement
// ---------------------------------------------------

function calculator(num1, num2, operator) {
  console.log(operator);
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    case "*":
      return num1 * num2;
    default:
      return "Invalid operator";
  }
}

console.log(calculator(10, 5, " "));

// ---------------------------------------------------
// Section 7: Updating a Global Variable via a Function
// ---------------------------------------------------

// Let's say we're making a game and adjusting the players health.

let HP = 100;

const updateHP = (amount, direction) => {
  if (direction === "down") {
    HP -= amount;
    if (HP <= 0) {
      console.log("Game over");
      HP = 100;
    }
  } else if (direction === "up") {
    HP += amount;
  }
};

updateHP(50, "down");
console.log(HP);
updateHP(150, "up");
console.log(HP);
updateHP(300, "down");
console.log(HP);

// ---------------------------------------------------
// Section 8: Using Template Literals and Ternary Operator in a Function
// ---------------------------------------------------

const fruits = ["Banana", "Apple", "Pear", "Kiwi"];

const drinks = ["Water", "Soda", "Saft", "Tea", "Coffee"];

const checkItem = (item, array) =>
  `The array ${array.includes(item) ? "does" : "doesn't"} include ${item}`;

console.log(checkItem("Water", drinks));
6;
