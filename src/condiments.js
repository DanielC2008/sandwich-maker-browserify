"use strict";


let condimentPrices = {"Mustard": 0.90, "Mayo": 1.50, "Coffee": 2.00};

let addCondiments = function(condiment) {
    return condimentPrices[condiment];
  };

module.exports = addCondiments;