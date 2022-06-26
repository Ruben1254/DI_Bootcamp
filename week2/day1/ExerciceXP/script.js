// Exercice 1
let favoriteFood = "chocolate";
let favoriteMeal = "dinner";
let sentence = `I eat ${favoriteFood} at every ${favoriteMeal}` ;
console.log(sentence) 

// Exercice 2 part1
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length
let myWatchedSeriesSentence = myWatchedSeries.toString()
let seriesSentence = `I watched ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}`
console.log(seriesSentence)

// Part 2
myWatchedSeries.splice(2, 1, "friends");
myWatchedSeries.push("lupin");
myWatchedSeries.unshift("suits")
let thirdItem = myWatchedSeries[2];
let thirdLetter = thirdItem.charAt(2);
console.log(thirdLetter)
console.log(myWatchedSeries)

// Exercice 3
let celsiusTemperature = 20;
let fahrenheitTemperature = celsiusTemperature / 5 * 9 + 32;
let temperatureSentence = `${celsiusTemperature}°C is ${fahrenheitTemperature}°F`
console.log(temperatureSentence)

// Exercice 4 
// 1) a+b equal 55 because both of them are numbers
// 2) a+b equal 23 because they gave a new value to the variable
// 3) c have not any value 
// 4)  the outcome will be <7 5>  because 3 and 4 are two numbers but 5 is a string.  
