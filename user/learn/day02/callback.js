//callback  函数默认传递，不需要明确的写出来

var fs = require("fs");

fs.readFile("app.js",callback);  //callback 参数未明确给出



function callback(err,data){
	if(err){
		console.log(err);
	} else {
		console.log(data.toString());
	}
}


console.log("end");