var fs = require('fs'),
    path = require('path'),
    http = require('http');



http.createServer(function (request, response) {
	console.log(request.url);
	// var urlInfo = parseURL(root,request.url);

	// combineFiles(urlInfo.pathnames,function(err,data){

	// 	if(err){
	// 		response.writeHead(404);
	// 		response.end(err.message);
	// 	} else{
	// 		response.writeHead(200,{
	// 			'Content-Type' : urlInfo.mime
	// 		});
	// 		response.end(data);
	// 	}
	// });
}).listen(1338);



