// Exercise 1
// 1

let h1 = document.getElementsByTagName('h1')[0];
console.log(h1);

// 2

let lastP = document.getElementsByTagName('p')[3];
lastP.remove();

//3
let h2 = document.getElementsByTagName('h2')[0];
h2.addEventListener("click", (e)=> {
	h2.setAttribute("style","background-color: red;")
});

//4
let h3 = document.getElementsByTagName('h3')[0];
h3.addEventListener("click", (e)=> {
	h3.setAttribute("style","display: none;")
});

//5
let button = document.getElementsByTagName('input')[0];
let paragraphes = document.querySelectorAll('p');
button.addEventListener('click', (e) => {
	let i = 0;
	while(i < paragraphes.length){
		paragraphes[i].setAttribute("style","font-weight: bold;")
		i++;
	}
});
