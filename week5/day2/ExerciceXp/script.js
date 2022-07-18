// Exercise 1

const xhr = new XMLHttpRequest();

const requestData = (function (){
	xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
	xhr.responseType ="json";
	xhr.send();
})()

const loadData = function () {
	if (xhr["status"] !== 200){
		console.log("error")
	} else {
		consoleLogData(xhr.response)
	}
}

const consoleLogData = function (data) {
	console.log(data)
}

xhr.addEventListener("load", loadData);

// Exercise 2
const xhr2 = new XMLHttpRequest();
const requestData2 = (function (){
	xhr2.open("GET", "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
	xhr2.responseType ="json";
	xhr2.send();
})()

const loadData2 = function () {
	if (xhr2["status"] !== 200){
		console.log("error")
	} else {
		consoleLogData2(xhr2.response)
	}
}

const consoleLogData2 = function (data) {
	console.log(data)
}

xhr2.addEventListener("load", loadData2);


