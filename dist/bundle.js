(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let container = document.getElementById("priceContainer");

let totalPrice = 0;

let addTopping = function(toppingPrice) {
      totalPrice += toppingPrice;
			container.innerHTML = totalPrice;
    };

module.exports = addTopping;
    
},{}],2:[function(require,module,exports){
"use strict";

const sandwichModule = require("./sandwich");

},{"./sandwich":7}],3:[function(require,module,exports){
"use strict";


let cheesePrices = {"Cheddar": 0.90, "Swiss": 1.50, "Goat": 2.00};

let addCheese = function(cheese) {
  return cheesePrices[cheese];
};

module.exports = addCheese;
},{}],4:[function(require,module,exports){
"use strict";


let condimentPrices = {"Mustard": 0.90, "Mayo": 1.50, "Coffee": 2.00};

let addCondiments = function(condiment) {
    return condimentPrices[condiment];
  };

module.exports = addCondiments;
},{}],5:[function(require,module,exports){
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

},{"./SandwichMaker":1,"./cheese":3,"./condiments":4,"./meat":6,"./veggies":8}],6:[function(require,module,exports){
"use strict";


let meatPrices = {"Turkey": 0.90, "Bacon": 1.50, "Salami": 2.00};

function addMeat(meat) {
    return meatPrices[meat];
  }

module.exports = addMeat;
},{}],7:[function(require,module,exports){
"use strict";

const addVeggie = require("./veggies");
const addCheese = require("./cheese");
const addCondiments = require("./condiments");
const addMeat = require("./meat");
const addTopping = require("./SandwichMaker");
const interactive = require("./interactive");

const sandwich = {
	addVeggie,
	addCheese,
	addCondiments,
	addMeat,
	addTopping,
	interactive
};

module.exports = sandwich;
},{"./SandwichMaker":1,"./cheese":3,"./condiments":4,"./interactive":5,"./meat":6,"./veggies":8}],8:[function(require,module,exports){
"use strict";



let veggiePrices = {"Lettuce": 0.90, "Tomato": 1.50, "Corn": 2.00};

let addVeggie = function(veggie) {
  return veggiePrices[veggie];
};

module.exports = addVeggie;

},{}]},{},[2])


//# sourceMappingURL=bundle.js.map
