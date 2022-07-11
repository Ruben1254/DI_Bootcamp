let client = "John";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries.fruits.forEach((value) => {
        console.log(value);
    })
} 
displayGroceries();

const cloneGroceries = () => {
    let user = client;
    client = "Betty"; // just after the invokation
    let shopping = groceries;
    groceries.totalPrice = "35$"; // just after the invokation
    groceries.other.payed = false; // just after the invokation
}
cloneGroceries();

