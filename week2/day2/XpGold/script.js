// exercise 1
let speakingLanguage = prompt("Which language are you speaking ?").toLowerCase();

switch (speakingLanguage) {
	case "french":
		alert("Bonjour");
		break;
	case "english":
		alert("Hello");
		break;
	case "hebrew":
		alert("Shalom");
		break;
	default:
		alert("01110011 01101111 01110010 01110010 01111001")
}

// exercise 2
let grade = Number(prompt("enter your grade"))

if ( grade > 90) {
	console.log("A")
}else if (grade > 80 && grade <= 90) {
	console.log("B")
}else if (grade >= 70 && grade <= 80) {
	console.log("C") 
}else {
	console.log("D")
}

// exercise 3
let verb = prompt("type a verb");
let verbLength = verb.length;
let endIng = verb.indexOf("ing") 

if (verbLength >= 3 && endIng == -1) {
	console.log(`${verb}ing`)
}else if (verbLength >= 3 && endIng > -1) {
	console.log(`${verb}ly`)
}else{
	console.log(verb)
}

