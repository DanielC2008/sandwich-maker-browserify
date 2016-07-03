// You should also create an additional JavaScript file that handles interacting with the form elements and determining which method should be called.
// FOR MEAT
var getMeat = document.getElementById("selectMeatDiv");
getMeat.addEventListener("change", outputMeat);

function outputMeat () {
	if (event.target.checked) {
		var outputPrice = SandwichMaker.addMeat(event.target.value);
		SandwichMaker.addTopping(outputPrice);
  } 
  else if (!event.target.checked) {
  	outputPrice = SandwichMaker.addMeat(event.target.value);
		SandwichMaker.addTopping(-Math.abs(outputPrice));
  }
}
//FOR VEGGIE
var getVeggie = document.getElementById("selectVeggieDiv");
getVeggie.addEventListener("change", outputVeggie);

function outputVeggie () {
		if (event.target.checked) {
		var outputPrice = SandwichMaker.addVeggie(event.target.value);
		SandwichMaker.addTopping(outputPrice);
  } 
  else if (!event.target.checked) {
  	outputPrice = SandwichMaker.addVeggie(event.target.value);
		SandwichMaker.addTopping(-Math.abs(outputPrice));
  }
}
//FOR CHEESE
var getCheese = document.getElementById("selectCheeseDiv");
getCheese.addEventListener("change", outputCheese);

function outputCheese () {
	if (event.target.checked) {
		var outputPrice = SandwichMaker.addCheese(event.target.value);
		SandwichMaker.addTopping(outputPrice);
  } 
  else if (!event.target.checked) {
  	outputPrice = SandwichMaker.addCheese(event.target.value);
		SandwichMaker.addTopping(-Math.abs(outputPrice));
  }
}
//FOR CONDIMENTS
var getCondiments = document.getElementById("selectCondimentsDiv");
getCondiments.addEventListener("change", outputCondiments);

function outputCondiments () {
	if (event.target.checked) {
		var outputPrice = SandwichMaker.addCondiments(event.target.value);
		SandwichMaker.addTopping(outputPrice);
  } 
  else if (!event.target.checked) {
  	outputPrice = SandwichMaker.addCondiments(event.target.value);
		SandwichMaker.addTopping(-Math.abs(outputPrice));
  }
}
