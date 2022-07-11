// Exercise 1

const sum = (a,b) =>a + b;

// Exercise 2

function converter (weight) {
	let poids = weight * 1000;
	console.log(`${poids} gr`);
}
converter(34)

const masse = function (weight) {
	let poids = weight * 1000;
	console.log(`${poids} gr`);
}
masse(34)

// function declaration give a name to the function when a function expression is anonymous

const massConverter = weight => weight * 1000 + " gr";
console.log(massConverter(54));

// Exercise 3

(function (children, name, location, job){
	let div = document.getElementById("hello")
	let text = document.createTextNode(`You will be a ${job} in ${location},
	and married to ${name} with ${children} kids`);
	div.appendChild(text);
	document.body.appendChild(div);
})("4","Avital","Ramat Gan","developer");

// Exercise 4

(function (username){
	let div = document.createElement("div");
	let name = document.createTextNode(username);
	div.appendChild(name);
	document.getElementsByClassName("topnav")[0].appendChild(div);
})("john") // I had no any idea how to do that in the rigth way

// Exercise 5

function makeJuice(drinkSize) {
	const ingredients = []
	 function addIngrediens(first, second, third) {
	 	let divs = document.createElement("div");
	 	let tex = document.createTextNode(`The client wants a ${drinkSize} juice, containing ${first}, ${second}, ${third}`);
	 	divs.appendChild(tex)
	 	document.body.appendChild(divs);
	 }
	 addIngrediens("orange","mango","passionfruit");
}
makeJuice("medium")

function makeJuice(drinkSize) {
	const ingredients = []
	 function addIngrediens(first, second, third) {
	 	ingredients.push(first);
	 	ingredients.push(second);
	 	ingredients.push(third);
	 }
	 function displayJuice() {
	 	let divss = document.createElement("div");
	 	let texx = document.createTextNode(`The client wants a ${drinkSize} juice, containing `);
	 	divss.appendChild(texx)
	 	document.body.appendChild(divss);

	 	ingredients.forEach((argument) =>{
	 	let texxt = document.createTextNode(`${argument}, `)
	 	divss.appendChild(texxt)
		})
	 }
	 addIngrediens("orange","mango","passionfruit");
	 addIngrediens("peach","litchi","pear")
	 displayJuice()
}
makeJuice("medium")