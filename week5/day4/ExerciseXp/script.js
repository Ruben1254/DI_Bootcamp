// Exercise 1

async function swapi () {
    let respSwapi = await fetch('https://www.swapi.tech/api/starships/9/')
    let result = await respSwapi.json()
    return console.log(result)
}
swapi()

// exercise 2

// the outcome will be two strings :"calling" and  "resolved" (after more than 2 seconde)

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();