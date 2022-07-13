// Exercise 1
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// I am John Do from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// Exercise 2

function displayStudentInfo(objUser){
    let {first, last} = objUser;
    console.log(`Your full name is ${first} ${last}`)
}
displayStudentInfo({first: 'Elie', last:'Schoppik'});

// Exercise 3

const users = { user1: 18273, user2: 92833, user3: 90315 };
let usersArray = Object.entries(users);
console.log(usersArray);
// let Array2 = 
usersArray.forEach((obj) => obj[1] *= 2);
console.log(usersArray)

// Exercise 4
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
// typeof "object"


// Exercise 5

class Dog {
  constructor(name) {
    this.name = name;
  }
};

 // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

// Exercise 6 
 
// [2] === [2]  True 
// {} === {}  False

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) // 4
console.log(object3.number) // 4
console.log(object4.number) // 5


class Animal{
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color; 
    }
}
let beber = new Animal("Bebere", "cat", "black")
console.log(beber)
class Mamal extends Animal{
    constructor(name, type, color, cri){
        super(name, type, color);
        this.cri = cri;
    }
    sound(){
        console.log(`${this.name} is a ${this.color} ${this.type}  who do ${this.cri}`);
    }
}

let farmerCow = new Mamal("Roger", "dog", "blue", "coincoin");
farmerCow.sound()