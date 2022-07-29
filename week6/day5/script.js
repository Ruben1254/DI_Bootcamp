let form = document.getElementById("taskForm");

let allTask = JSON.parse(localStorage.getItem("task")) || [];

const addTask = (e) => {
	e.preventDefault();

	let name = document.getElementById("name");
	let description = document.getElementById("description");
	let start = document.getElementById("start");
	let end = document.getElementById("end");


	
		
	let objectTask = {
		name : name.value,
		description : description.value,
		start : start.value,
		end : end.value,
		completed : 'no'
		}

	allTask.push(objectTask);

	localStorage.setItem("task", JSON.stringify(allTask));

	window.location.href='calendar.html';
	
}



form.addEventListener("submit", addTask);
