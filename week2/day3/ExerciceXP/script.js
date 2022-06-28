// Exercise 1 part 1
let people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people[2] = "Jason";
people.push("Ruben");
console.log(people.indexOf("Mary"));
console.log(people.slice(1,3));
console.log(people.indexOf("Foo")); // It's return -1 because "Foo" isn't an element of the array
let last = people[people.length-1];
console.log(last);
console.log(people);


// Exercise 1 part 2
for (let i in people) {
	console.log(people[i]);
}

for (let i in people) {
	if (people[i] === "Jason"){
		break;
	}
   console.log(people[i]);
}

// Exercise 2
let colors = ["white", "green", "red", "grey", "black"];
for (let i = 0; i < colors.length; i++) {
	console.log(`My #${i + 1} choice is ${colors[i]}`);
} 

let suffixes = ["st", "nd", "rd", "th", "th"] 
for (let i = 0; i < colors.length; i++) {
	console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
} 

// Exercise 3

let userAnswer = Number(prompt("Enter a number"));
typeof userAnswer;
while (userAnswer < 10 ) {
	userAnswer = Number(prompt("Enter a number"));
}

// Exercice 4

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}
console.log(building["numberOfFloors"]);
console.log(building["numberOfAptByFloor"]["firstFloor"]);
console.log(building["numberOfAptByFloor"]["thirdFloor"]);
console.log(building['numberOfRoomsAndRent']["dan"][0]);

if (building["numberOfRoomsAndRent"]["sarah"][1] + building["numberOfRoomsAndRent"]["david"][1] > building["numberOfRoomsAndRent"]["dan"][1]) {
	building["numberOfRoomsAndRent"]["dan"][1] = 1200
}
console.log(building["numberOfRoomsAndRent"]["dan"][1]);


// Exercie 5 


let family ={
	numbOfFam: 5,
	ChildrenByFam: 8,
	underEighteen: 20,
}

for ( x in family) {
	console.log(x)
}

for (x in family) {
	console.log(family[x])
}

