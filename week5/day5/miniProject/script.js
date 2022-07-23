async function retrievCharacter() {
	document.getElementById("name").textContent = ""
	document.getElementById("height").textContent = ""
	document.getElementById("gender").textContent = ""
	document.getElementById("byear").textContent = ""
	document.getElementById("home").textContent = ""
	

	let container = document.getElementById("container");
	let icon = document.createElement("i")
	icon.setAttribute("class", "fa-solid fa-spinner fa-spin-pulse fa-5x")
	container.appendChild(icon)

	let randomNum = Math.floor(Math.random() * 83) + 1;

	try{
		const fetch1 = await fetch(`https://www.swapi.tech/api/people/${randomNum}`)
		container.removeChild(icon)
		if(fetch1.status == 200){
			const object1 = await fetch1.json()
			console.log(object1)
			home(object1)
		}else{
			throw new Error ("Click again")
		}
	} catch(error){
		console.log(error.message)
	}
}

async function home(item) {
	try{
		const fetch2 = await fetch(`${item.result.properties.homeworld}`)
		console.log(fetch2)

		if(fetch2.status == 200){
			const object2 = await fetch2.json()
			console.log(object2)
			display(item, object2)
		}else{
			throw new Error ("fetch2 problem")
		}
	}catch(error){
		console.log(error.message)
	}
}


const display = (obj1 , obj2) => {

	let {result :{properties :{birth_year, gender, height, name}}} = obj1
	let {result :{properties :{name : nameplanet }}} = obj2

	let nameChac = document.getElementById("name")
	let textName =document.createTextNode(`${name}`)
	let heightChac = document.getElementById("height")
	let textHeight =document.createTextNode(`Height: ${height}`)
	let genderChac = document.getElementById("gender")
	let textGender =document.createTextNode(`Gender: ${gender}`)
	let byear = document.getElementById("byear")
	let textByear =document.createTextNode(`Birth Year: ${birth_year}`)
	let planet = document.getElementById("home")
	let textPlanet =document.createTextNode(`Planet: ${nameplanet}`)

	console.log(nameChac)

	nameChac.appendChild(textName)
	heightChac.appendChild(textHeight)
	genderChac.appendChild(textGender)
	byear.appendChild(textByear)
	planet.appendChild(textPlanet)
}







let btn = document.getElementById('btn')
btn.addEventListener("click", retrievCharacter)