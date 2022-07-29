(() =>{
	let task = JSON.parse(localStorage.getItem("task"));

	let [{name,description,start,end,completed}] = task;

	task.forEach((item,index) =>{
	let container = document.createElement('div');
	let h4 = document.createElement('h4');
	let p = document.createElement('p');
	let time = document.createElement('p');

	let nom = document.createTextNode(name);
	let des = document.createTextNode(`Description: ${description}`);
	let hour = document.createTextNode(start);

	h4.appendChild(nom);
	p.appendChild(des);
	time.appendChild(hour);

	container.appendChild(h4);
	container.appendChild(p);
	container.appendChild(time);

	document.body.appendChild(container)

	})
})()