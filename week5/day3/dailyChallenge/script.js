const makeAllCaps = (array) => {
	const promiseCaps = new Promise ((resolve, reject) =>{
		if(array.forEach((item) => typeof(item) === "string")){
			const arrayJson = array.json()
			const upperArray = arrayJson.map((elements) => elements.toUpperCase)
			resolve (upperArray)
		}else {
			reject ("One of the elements not a string")
		}
	})
}

const sortWords = (arr) => {
	const sortWordsArray = new Promise ((resolve, reject) => {
		if (arr > 4 ) {
			const sortedArray = arr.sort();
			const jsonSorted = sortedArray.json()
			resolve(jsonSorted)
		}else {
			reject ("the array length smaller than or equal to 4")
		}
	})
}

makeAllCaps(["apple","banana","mango","peach","peer"])
	.then((arr) => sortWords(arr))
	.then((result) => console.log(result))
	.catch(error => console.log (error))






