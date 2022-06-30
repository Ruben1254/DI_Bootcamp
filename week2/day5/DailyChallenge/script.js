function bottles() {
	let usernumber = Number(prompt("How many bottles do you want on the wall?"));
	let beerNum = usernumber;
	for (let i = 1; i < usernumber+1; i++){
		if(i == 1){
			console.log(`${beerNum} bottles of beer on the wall\n${beerNum} bottles of beer\nTake ${i} down, pass it around\n${beerNum-i} bottles of beer\n`);
			beerNum -= i;
		}else if( i >= beerNum ){
			console.log(`${beerNum} bottles of beer on the wall\n${beerNum} bottles of beer\nTake ${beerNum} down, pass them around\nNo more bottle of beer on the wall`);
			break;
		}else {
			console.log(`${beerNum} bottles of beer on the wall\n${beerNum} bottles of beer\nTake ${i} down, pass them around\n${beerNum-i} bottles of beer\n`);
			beerNum -= i;
		}
	}
}
bottles();

