let formUser = document.getElementById("formUser");

const fetchGif = function (e) {
	event.preventDefault()

	let gifSearch = e.target.gifsearch.value;

	let gifUrl = `https://api.giphy.com/v1/gifs/random?tag=${gifSearch}&rating=g&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`

	fetch(gifUrl)
		.then(response => response.json())
		.then(data => {
			let img = document.createElement('img');
			img.setAttribute('src', data.data.images.original.url)
			img.setAttribute('class', 'removeAll')
			document.body.appendChild(img)
			let br = document.createElement('br')
			br.setAttribute('class', 'removeBr')
			let butt = document.createElement('button')
			butt.setAttribute('value','DELETE')
			butt.setAttribute('class', 'removeButt')
			let del = document.createTextNode('DELETE')
			butt.appendChild(del)
			document.body.appendChild(butt)
			document.body.appendChild(br)

			const remove = () => {
				document.body.removeChild(img)
				document.body.removeChild(butt)
				}
			butt.addEventListener("click", remove)


		})


}

formUser.addEventListener("submit", fetchGif);


let delAll = document.createElement('button');
let delText = document.createTextNode('DELETE ALL');
let br2= document.createElement('br')
delAll.appendChild(delText);
document.body.appendChild(delAll);
document.body.appendChild(br2)

let images = document.getElementsByClassName("removeAll");
let removeButt = document.getElementsByClassName('removeButt')
let removeBr = document.getElementsByClassName('removeBr')
console.log(images)

const removeAgain = () => {
	let i = 0 
	for (let i = 0 ; i < images.length; i++){
		document.body.removeChild(images[i])
		document.body.removeChild(removeButt[i])
		document.body.removeChild(removeBr[i])
	} 
}


delAll.addEventListener("click", removeAgain)



