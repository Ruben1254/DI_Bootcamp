const makeAllCaps = (array) => {
	return new Promise ((resolve, reject) =>{
		if(array.every((item) => typeof(item) === "string")){
			// const arrayJson = array.json()
			const upperArray = array.map((elements) => elements.toUpperCase())
			resolve (upperArray)
		}else {
			reject ("One of the elements not a string")
		}
	})
}

const sortWords = (arr) => {
	return new Promise ((resolve, reject) => {
		if (arr.length > 4 ) {
			const sortedArray = arr.sort();
			resolve(sortedArray)
		}else {
			reject ("the array length smaller than or equal to 4")
		}
	})
}

makeAllCaps(["apple","banana","mango","peach","peer"])
	.then((arr) => sortWords(arr))
	.then((result) => console.log(result))
	.catch(error => console.log (error))


// Second Daily Challenge




