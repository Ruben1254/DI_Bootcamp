let http = require('http');

const user = {
        firstname: 'John',
        lastname: 'Doe'
    };

const server = http.createServer(function(req,res){
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify(user))
});

server.listen(8080)