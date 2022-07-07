let newDiv = document.getElementsByTagName('div')[0]; 
console.log(newDiv);

document.getElementsByTagName('ul')[0].lastElementChild.textContent = "Richard";

for (let i = 0; i < 2; i++){
	document.getElementsByTagName('ul')[i].firstElementChild.textContent = "Ruben";
}

let parentElem = document.getElementsByTagName("ul")[1];
let childtElem = document.getElementsByTagName("ul")[1].getElementsByTagName("li")[1];;
parentElem.removeChild(childtElem);
