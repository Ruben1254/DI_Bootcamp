let sentence = "This soccer player is not so bad.";
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

if (wordBad < wordNot || wordNot == -1 || wordBad == -1) {
	console.log(sentence)
} else {
	console.log("This soccer player is good.")
}