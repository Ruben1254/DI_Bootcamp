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

// Exercise 2
//1

let form = document.getElementsByTagName('form')[0]
console.log(form)

//2
let fname = document.getElementById('fname')
console.log(fname)

let lname = document.getElementById('lname')
console.log(lname)

let submit = document.getElementById('submit')
console.log(submit)

//3 

let first = document.getElementsByName('fname')[0]
console.log(first)

let last = document.getElementsByName('lname')[0]
console.log(last)

//4

let formul = document.getElementsByTagName('form')[0]

formul.addEventListener('submit', (e) => {
	e.preventDefault()
	console.log(fname.value)
	
	let ul = document.getElementsByClassName('usersAnswer')[0]

	let li1 = document.createElement('li')
	let li2 = document.createElement('li')

	let name = document.createTextNode(fname.value)
	let lastname = document.createTextNode(lname.value)
    
	li1.appendChild(name)
	li2.appendChild(lastname)

	ul.appendChild(li1)
	ul.appendChild(li2)
})