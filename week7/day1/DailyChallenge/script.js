const main = require('./main.js');

const a = main.largeNumber;
const b = 5;

console.log(a + b);

let http = require("http");

const server = http.createServer(function (req, res) {
	console.log("I'am listening");
	res.setHeader("Content-Type","text/html");
	res.end('<html><body><h1>Hi there at the frontend</h1></body></html>');	
});
server.listen(3000);

const dateT = main.date;

const server2 = http.createServer(function (req,res){
	console.log("server2");
	res.setHeader("Content-Type","text/html");
	res.end(`<html><body><p>The date and the time currently ${dateT}</p></body></html>`)
});
server2.listen(8080);