function playTheGame() {
	let confirmation = confirm("Would you want to play?");
	if (confirmation == false){
		alert("No problem, Goodbye");
	}else{
		let userNum = Number(prompt("Enter a number between 0 and 10"));
		if (Number.isNaN(userNum)){
			alert("Sorry it's not a number,Goodbye");
		}else if (userNum < 0 || userNum > 10){
			alert("Sorry it's not a good number,Goodbye")
		}else{
			let computerNumber = Math.floor(Math.random() * 11);
			compareNumbers(userNum,computerNumber);
		}
	}
}


function compareNumbers(userNum, computerNumber) {
	for (let i = 0; i < 3; i++) {
			if (i == 2){
			alert("out of chances");
		}else if ( userNum === computerNumber){
			alert("WINNER");
			break;
		}else if(userNum > computerNumber){
			let newNum = Number(prompt("Your number is bigger then the computer's, guess again"));
			userNum = newNum;
		}else if(userNum < computerNumber){ 
			let anOtherNum = Number(prompt("Your number is smaller then the computer’s, guess again"));
			userNum = anOtherNum;
		}
	}
}