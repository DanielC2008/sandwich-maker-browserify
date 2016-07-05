"use strict";


let meatPrices = {"Turkey": 0.90, "Bacon": 1.50, "Salami": 2.00};

function addMeat(meat) {
    return meatPrices[meat];
  }

module.exports = addMeat;