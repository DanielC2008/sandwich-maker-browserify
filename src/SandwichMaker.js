"use strict";

let container = document.getElementById("priceContainer");

let totalPrice = 0;

let addTopping = function(toppingPrice) {
      totalPrice += toppingPrice;
			container.innerHTML = totalPrice;
    };

module.exports = addTopping;
    