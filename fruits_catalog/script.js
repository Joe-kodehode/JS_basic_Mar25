// Fruit Catalog Project

const fruits = [
  { name: "Apple", color: "Red", calories: 52, pricePerKg: 3.5, origin: "USA" },
  {
    name: "Banana",
    color: "Yellow",
    calories: 89,
    pricePerKg: 1.2,
    origin: "Ecuador",
  },
  {
    name: "Orange",
    color: "Orange",
    calories: 47,
    pricePerKg: 2.8,
    origin: "Spain",
  },
  {
    name: "Strawberry",
    color: "Red",
    calories: 32,
    pricePerKg: 6.0,
    origin: "Mexico",
  },
  {
    name: "Mango",
    color: "Orange",
    calories: 60,
    pricePerKg: 4.0,
    origin: "India",
  },
  {
    name: "Grapes",
    color: "Green",
    calories: 69,
    pricePerKg: 2.5,
    origin: "Italy",
  },
  {
    name: "Pineapple",
    color: "Brown",
    calories: 50,
    pricePerKg: 3.0,
    origin: "Costa Rica",
  },
];

// Create a container to hold all fruit cards
const container = document.createElement("div");
container.classList.add("fruit-catalog");
document.body.appendChild(container);

// Loop through the fruits and create cards
for (let fruit of fruits) {
  const card = document.createElement("div");
  card.classList.add("fruit-card");

  //   title, image, color, origin, calories, price,

  const title = document.createElement("h2");
  title.classList.add("fruit-name");
  title.textContent = fruit.name;

  const image = document.createElement("img");
  image.src = `images/${fruit.name.toLowerCase()}.jpg`;
  image.alt = fruit.name;
  image.classList.add("fruit-image");

  const info = document.createElement("p");
  info.textContent = `Color: ${fruit.color}, Origin: ${fruit.origin}`;
  info.classList.add("fruit-info");

  const nutrition = document.createElement("p");
  nutrition.textContent = `Calories: ${fruit.calories} per 100g`;
  nutrition.classList.add("fruit-nutrition");

  const price = document.createElement("p");
  price.textContent = `Price: ${fruit.pricePerKg} kr/kg`;
  price.classList.add("fruit-price");

  card.append(title, image, info, nutrition, price);

  container.append(card);
}
