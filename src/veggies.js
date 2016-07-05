"use strict";



let veggiePrices = {"Lettuce": 0.90, "Tomato": 1.50, "Corn": 2.00};

let addVeggie = function(veggie) {
  return veggiePrices[veggie];
};

module.exports = addVeggie;
