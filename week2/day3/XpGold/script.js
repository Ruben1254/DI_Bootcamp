// Exercise 1

let numbers = [123, 8409, 100053, 333333333, 7];
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 3 == 0){
		console.log(true)
	}else{
		console.log(false)
	}
}

// Exercise 2

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}

let name = prompt("type your name").toLowerCase();

if (name in guestList)
 { 
	console.log(`Hi! I'm ${name}, and I'm from ${guestList[name]}`)
} else{
	console.log(`Hi! I'm a guest`)
}

// Exercise 3
let age = [20,5,12,43,98,55];
let sum = 0;

for (let i = 0; i < age.length; i++) {
	sum += age[i]
}
console.log(sum)
