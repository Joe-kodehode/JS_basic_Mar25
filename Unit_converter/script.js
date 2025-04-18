const fromUnit = document.querySelector("#from");
const toUnit = document.querySelector("#to");
const button = document.querySelector("#calculateBtn");
const input = document.querySelector("#userInput");
const resultText = document.querySelector("#result");

function convert() {
  const inputValue = parseInt(input.value);
  const fromUnitValue = fromUnit.value;
  const toUnitValue = toUnit.value;
  let result;

  // Input validation to make sure the user is entering a number
  if (isNaN(inputValue)) {
    resultText.textContent = "Please enter a valid number";
    return;
  }

  // Conditional to check which unit the user has selected for "to" and "from" dropdowns and what conversion to use based on the selections.

  //   switch (fromUnitValue + "-" + toUnitValue) {
  //     case "meters-kilometers":
  //       result = inputValue / 1000;
  //       break;
  //     case "meters-miles":
  //       result = inputValue * 0.000621371;
  //       break;
  //     case "kilometers-meters":
  //       result = inputValue * 1000;
  //       break;
  //     case "kilometers-miles":
  //       result = inputValue * 0.621371;
  //       break;
  //     case "miles-meters":
  //       result = inputValue * 1609.34;
  //       break;
  //     case "miles-kilometers":
  //       result = inputValue * 1.60934;
  //       break;
  //     default:
  //       result = inputValue;
  //   }

  // BONUS - Create a conversion rates object. This not only makes it easier to add more units later but also keeps the logic concise.
  const conversionRates = {
    meters: { kilometers: 0.001, miles: 0.000621371 },
    kilometers: { meters: 1000, miles: 0.621371 },
    miles: { meters: 1609.34, kilometers: 1.60934 },
  };

  // Get the conversion factor from the converstionRates object.
  const factor = conversionRates[fromUnitValue][toUnitValue];

  result = inputValue * factor;

  resultText.textContent = result.toFixed(2);
}

fromUnit.addEventListener("change", sameUnits);
toUnit.addEventListener("change", sameUnits);

function sameUnits() {
  if (fromUnit.value === toUnit.value) {
    button.disabled = true;
    resultText.textContent = "Please select unique values";
  } else {
    button.disabled = false;
    resultText.textContent = "";
  }
}
