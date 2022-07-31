const main = require('./main.js');

const a = main.largeNumber;
const b = 5;

console.log(a + b);

let http = require("http");

const server = http.createServer(options, function (req, res) {
	console.log("I'am listening");
	res.setHeader("Content-Type","text/html");
	res.end('<html><body><p>My Module is main</p><br><h1>Hi there at the frontend</h1></body></html>');	
});
server.listen(3000);
