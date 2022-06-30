function starFrame() {
	let text = prompt("type several words");
	const wordsArray = text.split(",");
 let longerWord = 0;
 for (let k = 0; k < wordsArray.length ; k++ ){
 	if (longerWord < wordsArray[k].length){
 		longerWord = wordsArray[k].length;
 	}
 }
 let n = longerWord + 4;
 let str = "";
 for (let j = 0; j < wordsArray.length + 2; j++){
 	for (let i = 0; i < n; i++){
 		if ( i == 0 || i == n - 1){
 			str += "*";
 		}else if (j == 0 || j == wordsArray.length + 1){
 			str += "*";
 		}else if ((i == 1 || i == -2 || i > ((wordsArray[j-1].length)+1)) && ( 0 < j < wordsArray.length + 1)){
 			str += " ";
 		}else if ( j > 0 && 1 < i < ((wordsArray[j-1].length)+2)){
 				str += wordsArray[j-1][i-2];
 		}}
    str += "\n";
 	}
 console.log(str);
}

starFrame();