var http = require('http');


var server = new http.Server();

server.on("request",function (request, response) {
	console.log(request.url);
	
	response.writeHead(200,{
		'Content-Type' : 'text/html'
	});
	response.write("<p>Node.js</p>");
	response.end("<p>javaScript</p>");
	

}).listen(3000);



