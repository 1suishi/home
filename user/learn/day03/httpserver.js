var http = require('http');



http.createServer(function (request, response) {
	console.log(request.url);
	
	response.writeHead(200,{
		'Content-Type' : 'text/html'
	});
	response.write("<p>Node.js</p>");
	

}).listen(3000);



