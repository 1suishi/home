//readfile.js
//async 异步

/*
var fs = require("fs");

fs.readFile("app.js",function(err,data){
	if(err){
		console.log(err);
	} else {
		console.log(data.toString());
	}
});


console.log("end");


*/


//sync 同步


var fs = require("fs");

var data = fs.readFileSync("app.js");
	
console.log(data.toString());

console.log("end");
