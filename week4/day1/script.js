// // #1
// function q1() {
//     var a = 5;  
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }

// // run in the console:
// q1()
// // a = 3

// //#2
// var a = 0;
// function q2() {
//     a = 5;
// }

// function q22() {
//     alert(a);
// }

// // run in the console:
// q22() // a = 0
// q2() // a = 5 
// q22() // a = 5

// //#3
// function q3() {
//     window.a = "hello";
// }


// function q32() {
//     alert(a);
// }

// // run in the console:
// q3() // hello
// q32() // hello

// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }


// // run in the console:
// q4() // a = "test"

// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a); // a = 2



// // Exercise 2 

// const winBattle = () => true ;

// let experiencePoints = winBattle ? 10 : 1 ;

// console.log(experiencePoints);

// // Exercise 3

// const IsString = (varia) => {
//     typeof(varia) === 'string' ? true : false; 
//     }  

// Exercise 4

// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// function checkColor(){
//     for (let i = 0; i < colors.length; i++) {
//         console.log(`${i+1}# choice is ${colors[i]} `)
//     }
// }
// checkColor();

// colors.includes("Violet") ?  console.log("yeah") : console.log("No....");

// Exercise 5

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];