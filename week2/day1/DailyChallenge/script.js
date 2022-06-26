// first exercise
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift();
fruits.push("kiwi")
fruits.splice(0, 1)
fruits.reverse();
console.log(fruits)

// second exercise
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
let firstStep = moreFruits[1];
let secondStep = firstStep[1];
let thirdStep = secondStep[0]
console.log(thirdStep)

