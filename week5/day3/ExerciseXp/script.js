// Exercice 1

const compareToTen = (num) => {
	const success = new Promise ((resolve, reject) =>{
		if (num < 10 ){
			resolve (`${num} smaller than 10`)
		}else{
			reject (`${num} equal or bigger than 10`)
		}
		})

	success
		.then((result) => console.log(result))
		.catch((error) => console.log(error))
}

compareToTen(5)
compareToTen(18)


// Exercise 2
let hello = true
const newPromise = new Promise((resolve, reject) =>{
	setTimeout(() => {
		if (hello) {
			resolve("success")
		}else {
			reject("Ooops")
		}
	}, 4000)
})


newPromise
	.then((result) => console.log(result))
	.catch((error) => console.log(error))

const newResolvePromise = Promise.resolve("hello");

newResolvePromise
	.then((value) => console.log(value))

// exercise 3 

const promise1 = Promise.resolve(3)

promise1.then(res => console.log(res))