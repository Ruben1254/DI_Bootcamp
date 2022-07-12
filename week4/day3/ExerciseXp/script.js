// Exercise 2

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const welcomeStudent = users.map((person) =>`Hello ${person["firstName"]}`);
console.log(welcomeStudent);

const resident = users.filter((job) => job["role"].includes('Full Stack Resident'));
console.log(resident);

// cont last = users.filter((job) => job["role"].includes('Full Stack Resident')).map((person) => person["lastName"]);
// console.log(last);

// Exercise 3 

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const epicString = epic.reduce((acc,mots) => acc+ " " + mots );
console.log(epicString);

// Exercise 4

let students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

const valid = students.filter((pass) => pass["isPassed"] == true);
console.log(valid);

const sent = valid.forEach((nam) => console.log(`Good job ${nam["name"]}, you passed the course in ${nam["course"]},`));
console.log(sent);