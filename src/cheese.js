"use strict";


let cheesePrices = {"Cheddar": 0.90, "Swiss": 1.50, "Goat": 2.00};

let addCheese = function(cheese) {
  return cheesePrices[cheese];
};

module.exports = addCheese;