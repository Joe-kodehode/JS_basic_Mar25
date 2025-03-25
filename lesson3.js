// Variables, Operators, Conditionals recap

// You can redeclare Let but not Const. This doesnt mean the data inside of a const can't be changed!

// const myArray = [1, 2, 3];
// myArray[1] = 5;

// console.log(myArray);

// const myString = "";
// myString += "hi";

// console.log(myString);

// Scenario: An online store managing product details.
const storeName = "Tech Haven"; //string
const productName = "Wireless headphones"; //string
let productPrice = 75; //number
let productQuantity = 1; //number
let isInStock = true; //boolean
const productTags = ["audio", "wireless", "accessory"]; //array
let discount; //undefined

//Display variable values using console.log()
// console.log("Store Name:", storeName);
// console.log("Product Name:", productName);
// console.log("Product Price:", productPrice);
// console.log("Product Quantity:", productQuantity);
// console.log("In Stock?", isInStock);
// console.log("Product Tags:", productTags);
// console.log("Discount:", discount); // Expected to be undefined

// productQuantity++;
const totalCost = productPrice * productQuantity;
// console.log(totalCost);

// productPrice += 10;
// console.log(productPrice);

// productQuantity--;

// console.log(productQuantity);

// Using the modulus operator:
// Find the remainder when total cost is divided by 50.
// console.log(totalCost);
// let remainder = totalCost % 50;
// console.log(remainder);

// Example: Decide promotion messages based on total cost.
// if (totalCost > 300) {
//   console.log("Congratulations! You qualify for a premium discount");
// } else if (totalCost > 200) {
//   console.log("You're close to a discount! Spend over 300 for free delivery!");
// } else {
//   console.log("Keep shopping to unlock special offers!");
// }

// Logical operators: Using AND (&&) and OR (||)
// Scenario: Show a special message if the product is in stock and either it's on sale or the quantity is high.

// let isOnSale = false;
// if (isInStock && (isOnSale || productQuantity > 3)) {
//   console.log("Special offer: Enjoy exclusive benefits on this product");
// } else {
//   console.log("Standard pricing applies");
// }

// Ternary operator: Determine shipping cost based on total cost.

// const shippingCost = totalCost >= 250 ? "Free shipping" : "$15 Shipping costs";

// console.log(shippingCost);

// Switch statement: Display messages based on the product category.
// let category = "accessory";

// switch (category) {
//   case "audio":
//     console.log("This product is in our audio department");
//     break;
//   case "accessory":
//     console.log("This product is in our accessories section");
//     break;
//   case "gadget":
//     console.log("This product is in our Gadgets collection.");
//     break;
//   default:
//     console.log("This product belongs to a general category");
// }

// console.log(typeof storeName);
// console.log(typeof productPrice);
// console.log(typeof isInStock);
// console.log(typeof productTags);
// console.log(productTags);

// Demonstrating Truthy and Falsey values:

// Example with an empty string (falsey)
// let emptyStr = "";
// if (emptyStr) {
//   console.log("Truthy");
// } else {
//   console.log("Falsey");
// }

// Example with a non-empty string (truthy)
let greeting = "Welcome!";
if (greeting) {
  console.log("Greeting detected");
} else {
  console.log("No greeting detected");
}

// Example with the number 0 (falsey)
// let zeroValue = -1;
// if (zeroValue) {
//   console.log("truthy.");
// } else {
//   console.log("falsey.");
// }

let firstName = "Alex";
let lastName = "Miller";

// const welcomeMessage =
//   "Welcome," + " " + firstName + " " + lastName + "! Enjoy your stay";

const welcomeMessage = `Welcome ${firstName} ${lastName}! Enjoy your stay`;
console.log(welcomeMessage);
