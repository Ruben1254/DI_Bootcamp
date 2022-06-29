// // Exercise 1 part 1
function infoAboutMe() {
	console.log("I'm Ruben,26 years old and I love history.")
}
infoAboutMe();

// // part 2
function infoAboutPerson(personName, personAge, personFavoriteColor) {
	console.log(`Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`)
}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

// // Exercise 2
function calculateTip() {
	let bill = Number(prompt("type the bill amount"));
	let tip;
	if ( bill < 50){
		tip = bill * 0.2;
	} else if ( 50 <= bill <= 200){
		tip = bill * 0.15;
	}else{
		tip = bill * 0.1;
	}
	console.log(bill, tip );
}
calculateTip();

// // Exercise 3
function isDivisible() {
	let sum = 0;
	for (i = 0; i <= 500; i++){
		if ( i % 23 == 0){
			console.log(i)
			sum += i;
		}
	}
	console.log(sum)
}
isDivisible();

function isDivisible(a) {
	let sum = 0;
	for (i = 0; i <= 500; i++){
		if ( i % a == 0){
			console.log(i)
			sum += i;
		}
	}
	console.log(sum)
}
isDivisible(3);
isDivisible(45);

// Exercise 4

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}

let shoppingList = ["banana", "orange", "apple"];

function myBill() {
let sum = 0;
for ( i = 0; i < shoppingList.length; i++){
	if ( shoppingList[i] in stock && stock[shoppingList[i]] != 0){
 		sum += prices[shoppingList[i]]; 
 		stock[shoppingList[i]] = stock[shoppingList[i]] - 1; 
		}
	}
	console.log(sum)
}
myBill();
console.log(stock);

// Exercise 5


function changeEnough(itemPrice, amountOfChange) {
	let change = [0.25, 0.1, 0.05, 0.01];
	let sum = 0;
	for ( i = 0; i < change.length; i++){
		sum += (change[i] * amountOfChange[i]);
	}
	if (itemPrice <= sum) {
		console.log(true);
	}else{
		console.log(false)
	}
}
changeEnough(4.25, [25, 20, 5, 0]);
changeEnough(14.11, [2,100,0,0]);
changeEnough(0.75, [0,0,20,5]);

// Exercise 6

function hotelCost() {
	let cost = Number(prompt("How many night will you spend in the hotel?"));
	if (Number.isNaN(cost) || cost === 0){
		return hotelCost();
	}else{
		let sum = 140 * cost;
		// console.log(sum); 
	}
}
// hotelCost();

function planeRideCost() {
	let destination = prompt("Enter a destination");
	let flightCost = 0;
	if (destination == null || destination == "" ){
		return planeRideCost();
	}else {
		destination.toLowerCase
	}
	if (destination == "london" ){
		flightCost = 183;
	}else if (destination == "paris"){
		flightCost = 220;
	}else {
		flightCost = 300;
	}
	// console.log(flightCost);
}
// planeRideCost()

function rentalCarCost() {
	let carCost = Number(prompt("How many day will you rent the car?"));
	let carSum = 0;
	if (Number.isNaN(carCost) || carCost === 0){
		return rentalCarCost();
	}else if (carCost <= 10){
		carSum = carCost * 40;
	}else{
		carSum = carCost * 40 * 0.95;
	}
	// console.log(carSum); 
}
// rentalCarCost()

function totalVacationCost() { 
	rentalCarCost();
	planeRideCost();
	hotelCost();
	 console.log(`The car cost $${carSum}, the hotel cost $${sum} 
     "the plane ticket cost ${flightCost}`)
}

totalVacationCost();
