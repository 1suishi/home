var http  = require("http"),
	url = require("url"),
	util = require("util");

http.createServer(function(req, res) {
	res.writeHead(200,{
		'Content-Type' : 'text/html'
	});
	res.end(util.inspect(url.parse(req.url),true));
}).listen(3000);