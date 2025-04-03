// Lesson 8: JavaScript Objects

// --------------------------------------
// Section 1: What is an Object?
// --------------------------------------

// An object stores related data using key-value pairs.

const person = {
  name: "Alice",
  age: 32,
  job: "designer",
};

console.log(person);
// console.log(person.name);  // dot notation
// console.log(person["age"]); // bracket notation

// --------------------------------------
// Section 2: Creating and Modifying Key value pairs
// --------------------------------------

person.country = "Norway"; // add a new key/value pair
person.age = 33; // modify an existing key's value

// console.log(person);

// --------------------------------------
// Section 3: Looping Through an Object using 'for in' loop
// --------------------------------------

const key = "job";
console.log(person[key]);

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Dynamic key access is useful when you don’t know the property name in advance, like when looping through an object or handling user input.

// --------------------------------------
// Section 4: Nested Objects and Arrays
// --------------------------------------

const userData = {
  firstName: "Olav",
  lastName: "Hansen",
  age: 31,
  male: true,
  hobbies: ["Golf", "Hiking", "Cinema"],
  address: {
    streetName: "Solskinnsgaten",
    streetNumber: 38,
    postCode: 4050,
  },
  position: "Manager",
  fullName: function () {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  },
  addMiddleName: function (middle) {
    this.middleName = middle;
  },
};

userData.addMiddleName("Trond");
console.log(userData.fullName());

console.log(userData["address"]);

for (let key in userData) {
  if (key === "position") {
    continue;
  }
  console.log(`${key}: ${userData[key]}`);
}

// --------------------------------------
// Section 5: Arrays of Objects
// --------------------------------------

const products = [
  { productName: "Shirt", productId: 746352, stock: 32 },
  { productName: "Pants", productId: 745642, stock: 56 },
  { productName: "Socks", productId: 7498652, stock: 3 },
  { productName: "Underpants", productId: 7498646, stock: 0 },
];

//  Product name: Shirt, ID: 5345345 has 32 in stock

for (let product of products) {
  console.log(
    `Product name: ${product.productName}, ID: ${product.productId} has ${product.stock} in stock`
  );
}

// --------------------------------------
// Section 6: Descriptive Sentences with Objects
// --------------------------------------

const people = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  { name: "Avery", male: true, age: 28, hobbies: ["coding", "games", "memes"] },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  { name: "Otto", male: true, age: 36, hobbies: ["movies", "cinema", "music"] },
  {
    name: "Annabelle",
    male: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"],
  },
  {
    name: "Cathy",
    male: false,
    age: 18,
    hobbies: ["design", "drawing", "css", "warhammer"],
  },
];

//Let's write a 'for of' loop which console logs the persons name, age, if they are a man or woman, a random hobby.
// For example: "Cathy is a 18-year-old woman who enjoys drawing"

for (let person of people) {
  const randomNumber = Math.floor(Math.random());

  const randomHobby = person.hobbies[randomNumber * person.hobbies.length];

  console.log(
    `${person.name} is a ${person.age} year old ${
      person.male ? "man" : "woman"
    } who enjoys ${randomHobby}`
  );
}

// console.log(people);

// --------------------------------------
// Section 7: Working with Object Data
// --------------------------------------

// Calculate total age of all people

let sumAge = 0;

for (let person of people) {
  sumAge += person.age;
}

console.log(`Total combined age is: ${sumAge}`);

// --------------------------------------
// Section 8: Combining Hobbies with Spread Syntax
// --------------------------------------

const allHobbies = [];

for (let person of people) {
  allHobbies.push(...person.hobbies); // spreads each hobby into the array
}

console.log(allHobbies);

// --------------------------------------
// Section 9: Adding New Properties to Objects in an Array
// --------------------------------------

for (let person of people) {
  person.title = person.male ? "Mr" : "Ms";
}

console.log(people);

// --------------------------------------
// Summary
// --------------------------------------

// ✅ Objects use key-value pairs to store data.
// ✅ Dot and bracket notation let you access or update values.
// ✅ Objects can contain arrays, other objects, or even functions.
// ✅ You can loop through objects with for...in.
// ✅ Arrays can contain objects and be used with loops.
// ✅ Spread syntax can flatten nested arrays.
// ✅ You can dynamically add or modify object properties.
