var fs = require("fs");

fs.readFile('event.js', function(err,data){
	if(err){
		console.log(err);
	} else{
		console.log(data.toString());
	}
})