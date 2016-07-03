// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(originalMaker) {

  // Private variable to store the different meat prices
  var veggiePrices = {"Lettuce": .90, "Tomato": 1.50, "Corn": 2.00};

  // Augment the original object with another method
  originalMaker.addVeggie = function(veggie) {
    return veggiePrices[veggie];
  };

  // Return the new, augmented object with the new method on it
  return originalMaker;
})(SandwichMaker);