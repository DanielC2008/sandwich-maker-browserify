// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(originalMaker) {

  // Private variable to store the different meat prices
  var meatPrices = {"Turkey": .90, "Bacon": 1.50, "Salami": 2.00};

  // Augment the original object with another method
  originalMaker.addMeat = function(meat) {
    return meatPrices[meat];
  };

  // Return the new, augmented object with the new method on it
  return originalMaker;
})(SandwichMaker);