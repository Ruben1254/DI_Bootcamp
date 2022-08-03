let http = require('http');

let server = http.createServer(function(req,res){
	// res.send('<html><h1>This is my first response</h1></html>');
	res.write('<html><h2>This is my second response</h2></html>');
	res.end('<html><p>This is my third response</p></html>');
});
server.listen(3000);
