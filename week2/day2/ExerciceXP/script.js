// exercice 1
let x = 5;
let y = 2;

if (x > y) {
	console.log("x is the biggest number")
} else {
	console.log("x is not the biggest number")
}

 // exercice 2
let newDog = "Chihuahua";
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if (newDog == "Chihuahua") {
	console.log("I love Chihuahuas, it’s my favorite dog breed")
} else {
	console.log("I dont care, I prefer cats")
}

// exercise 3
let userNumber = Number(prompt("Enter a number!"));
if (userNumber % 2 == 0) {
	console.log("x is an even number")
} else {
	console.log("x is an odd number")
}

// exercice 4 
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
let usersLength = users.length;
switch (usersLength) {
	case 0 :
		console.log("no one is online");
		break;
	case 1 :
		console.log(`${users[0]} is online`);
		break;
	case 2 :
		console.log(`${users[0]} and ${users[1]} are online`);
		break;
	default : 
		console.log(`${users[0]}, ${users[1]} and ${usersLength-2} more are online`);
}