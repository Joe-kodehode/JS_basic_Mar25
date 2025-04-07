// DOM Manipulation with JavaScript

// --------------------------------------
// Section 1: What is the DOM?
// --------------------------------------

// The DOM (Document Object Model) is how JavaScript interacts with HTML on a web page.
// It turns your HTML into a structure of objects you can access and change using JS.

// --------------------------------------
// Section 2: Targeting existing HTML Elements in JavaScript
// --------------------------------------

const button = document.getElementById("my-button"); // targets element with id="my-button"

const heading = document.querySelector("h1"); // targets the first matching element in the html

const items = document.querySelectorAll(".list-item");

const items2 = document.getElementsByClassName("list-item");

console.log(items2);

// --------------------------------------
// Section 3: Changing Text or HTML Content
// --------------------------------------

// textContent sets or gets the plain text inside an element (no HTML tags)
heading.textContent = "Welcome to the lesson on DOM manipulation!";

// innerHTML sets or gets the HTML inside an element (can include tags)
heading.innerHTML = "<span style='color: red'>DOM Manipulation</span>";

console.log(heading);

// ⚠️ Security Warning:
// Be careful when using innerHTML with content that comes from the user or an external source.
// It can create a security risk called XSS (Cross-Site Scripting).
// Always use textContent if you're not intentionally adding HTML tags.

// --------------------------------------
// Section 4: Changing Styles
// --------------------------------------

heading.style.fontSize = "36px";
heading.style.color = "blue";
heading.style.textTransform = "uppercase";

// --------------------------------------
// Section 5: Creating and Adding Elements
// --------------------------------------

// Create a new <p> element
const styledParagraph = document.createElement("p");

// Set the text content
styledParagraph.textContent =
  "This is the text content of our newly created paragaph";

// Add a class
styledParagraph.classList.add("custom-paragraph");

// Add the element to the end of the body
document.body.appendChild(styledParagraph);
// document.body.append(styledParagraph);

// 📌 append vs appendChild:
// - appendChild() only accepts **DOM nodes** (elements)
// - append() can accept **DOM nodes OR text**, and also multiple things at once

const image = document.createElement("img");

image.setAttribute(
  "src",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/320px-Red_Apple.jpg"
);

image.setAttribute("alt", "A red apple");

image.setAttribute("width", "200");

document.body.appendChild(image);

// 📌 setAttribute vs classList.add:
// setAttribute("class", "one two") → sets or replaces all classes
// classList.add("extra") → adds a class without removing others

const firstParagraph = document.createElement("p");
firstParagraph.textContent = "I was added to the top!";
firstParagraph.style.color = "#222";
document.body.prepend(firstParagraph);

const midParagraph = document.createElement("p");
midParagraph.textContent = "I'm in the middle";

const target = document.querySelector("p:nth-of-type(2)");

document.body.insertBefore(midParagraph, target);

// 📌 Summary of placement methods:
// append() → adds to the end
// prepend() → adds to the beginning
// insertBefore(newNode, referenceNode) → inserts before a specific node

// 🧠 What is a DOM node?
// A DOM node is any single part of the document tree:
// - An element (like <p> or <div>)
// - A text node (plain text)
// - A comment node (<!-- like this -->)
// Most of the time, when you're working with elements, you're using element nodes.

// Add a new list item to an existing list

const list = document.querySelector(".my-list");
const newItem = document.createElement("li");

newItem.textContent = "I was added with JS!";

list.appendChild(newItem);

// --------------------------------------
// Section 6: Removing Elements
// --------------------------------------

const firstListItem = document.querySelector("#first-li");

list.removeChild(firstListItem); // removes the first list item

// --------------------------------------
// Section 7: Parent and Child Relationships
// --------------------------------------

// You can move between elements in the DOM using parent/child/sibling relationships

console.log(list.parentElement); // the parent of the <ul>
console.log(list.children); // all child <li> elements
console.log(list.firstElementChild); // first child
console.log(list.lastElementChild); // last child

// --------------------------------------
// Section 8: classList Methods
// --------------------------------------

const box = document.querySelector(".box");

// Add a class
box.classList.add("active");

// Remove a class
box.classList.remove("hidden");

// Toggle a class (adds if missing, removes if present)
box.classList.toggle("highlight");

// Check if an element has a class
console.log(box.classList.contains("highlight")); // true or false

// --------------------------------------
// Section 9: Creating a List in a Loop
// --------------------------------------

// Let's create a list of favorite movies and display them on the page

const favoriteMovies = [
  "Inception",
  "The Matrix",
  "Lord of the Rings",
  "Gladiator",
  "Spirited Away",
  "Interstellar",
  "Cast Away",
];

const movieHeading = document.createElement("h2");

// Create a heading
movieHeading.textContent = "My favorite movies";
movieHeading.classList.add("section-heading");
document.body.append(movieHeading);

// Create the <ul> element
const movieList = document.createElement("ul");
movieList.classList.add("movie-list");
document.body.append(movieList);

// Loop through the array and create <li> elements

for (let i = 0; i < favoriteMovies.length; i++) {
  const listItem = document.createElement("li");
  listItem.classList.add("movie-item");
  listItem.textContent = favoriteMovies[i];

  movieList.appendChild(listItem);
}

// --------------------------------------
// Summary
// --------------------------------------

// ✅ The DOM is how JavaScript connects to HTML
// ✅ Use querySelector, getElementById, etc. to select elements
// ✅ Use .textContent, .innerHTML, and .style to change content and appearance
// ✅ Use createElement + appendChild to add elements
// ✅ Use removeChild to delete elements
// ✅ DOM has a parent/child/sibling structure you can navigate
// ✅ classList helps manage CSS classes
