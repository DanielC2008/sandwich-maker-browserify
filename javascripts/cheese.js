//This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(originalMaker) {

  // Private variable to store the different meat prices
  var cheesePrices = {"Cheddar": .90, "Swiss": 1.50, "Goat": 2.00};

  // Augment the original object with another method
  originalMaker.addCheese = function(cheese) {
    return cheesePrices[cheese];
  };

  // Return the new, augmented object with the new method on it
  return originalMaker;
})(SandwichMaker);