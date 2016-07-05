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