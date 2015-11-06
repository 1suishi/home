var fs = require("fs");

fs.open("event.js","r",function(err,fd){
	if(err){
		console.err(log);
		return;
	} else{


		var buf =  new Buffer(8);
		fs.read(fd,buf,0,8,null,function(err,bytesRead,buffer){
			if(err){
				console.log(err);
				return;
			}

			console.log("bytesRead: " + bytesRead);
			console.log(buffer.toString());
		})
	}
})