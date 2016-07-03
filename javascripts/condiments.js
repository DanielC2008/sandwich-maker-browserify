// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(originalMaker) {

  // Private variable to store the different meat prices
  var condimentPrices = {"Mustard": .90, "Mayo": 1.50, "Coffee": 2.00};

  // Augment the original object with another method
  originalMaker.addCondiments = function(condiment) {
    return condimentPrices[condiment];
  };

  // Return the new, augmented object with the new method on it
  return originalMaker;
})(SandwichMaker);