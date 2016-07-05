"use strict";

const addVeggie = require("./veggies");
const addCheese = require("./cheese");
const addCondiments = require("./condiments");
const addMeat = require("./meat");
const addTopping = require("./SandwichMaker");

// You should also create an additional JavaScript file that handles interacting with the form elements and determining which method should be called.
// FOR MEAT
let getMeat = document.getElementById("selectMeatDiv");
getMeat.addEventListener("change", outputMeat);

function outputMeat () {
	if (event.target.checked) {
		let outputPrice = addMeat(event.target.value);
		addTopping(outputPrice);
  } 
  else if (!event.target.checked) {
  	let outputPrice = addMeat(event.target.value);
		addTopping(-Math.abs(outputPrice));
  }
}
//FOR VEGGIE
let getVeggie = document.getElementById("selectVeggieDiv");
getVeggie.addEventListener("change", outputVeggie);

function outputVeggie () {
		if (event.target.checked) {
		let outputPrice = addVeggie(event.target.value);
		addTopping(outputPrice);
  } 
  else if (!event.target.checked) {
  	let outputPrice = addVeggie(event.target.value);
		addTopping(-Math.abs(outputPrice));
  }
}
//FOR CHEESE
let getCheese = document.getElementById("selectCheeseDiv");
getCheese.addEventListener("change", outputCheese);

function outputCheese () {
	if (event.target.checked) {
		let outputPrice = addCheese(event.target.value);
		addTopping(outputPrice);
  } 
  else if (!event.target.checked) {
  	let outputPrice = addCheese(event.target.value);
		addTopping(-Math.abs(outputPrice));
  }
}
//FOR CONDIMENTS
let getCondiments = document.getElementById("selectCondimentsDiv");
getCondiments.addEventListener("change", outputCondiments);

function outputCondiments () {
	if (event.target.checked) {
		let outputPrice = addCondiments(event.target.value);
		addTopping(outputPrice);
  } 
  else if (!event.target.checked) {
  	let outputPrice = addCondiments(event.target.value);
		addTopping(-Math.abs(outputPrice));
  }
}

module.exports = {outputMeat, outputVeggie, outputCondiments, outputCheese};
