(() =>{
	let task = JSON.parse(localStorage.getItem("task"));

	let [{name,description,start,end,completed}] = task;

	task.forEach((item,index) =>{
	let container = document.createElement('div');
	let h4 = document.createElement('h4');
	let p = document.createElement('p');
	let time = document.createElement('p');

	let today = new Date();
	let taskDate = new Date(start);
	let remainingDay = Math.round((taskDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
	let nodeDay = document.createTextNode(`Remaining time: ${remainingDay} days`);

	let year = start.slice(0,10)
	let hour = start.slice(11,16)
	console.log(remainingDay)

	let nom = document.createTextNode(name);
	let dateHour = document.createTextNode(`Date: ${year} at ${hour}`);


	h4.appendChild(nom);
	p.appendChild(dateHour);
	time.appendChild(nodeDay);

	container.appendChild(h4);
	container.appendChild(p);
	container.appendChild(time);

	document.body.appendChild(container);

	container.addEventListener('click', displayDes);

	})
})()


function displayDes(e) {
	console.log(e.target)
}



