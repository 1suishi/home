var os=require('os');


//1, 异步方式
// 得倒地址后立刻返回


	function getIp(callback){
		var ifaces=os.networkInterfaces();
		for (var dev in ifaces) {
			ifaces[dev].forEach(function(details){
				if (details.family=='IPv4' && details.address !="127.0.0.1") {
					// console.log(details.address);  
					callback(details.address);
				}
			});
		}
	}

	//test 代码

	getIp(function(data){
		console.log("getIp resule is : "+data);
	});


/*********************************************************************/


// 2,forEach 是一个同步方法，
// 函数会等到forEach执行完毕后返回
// 通过 re 传递结果

//不足：foreach 不能break 结束

// 解释:
// 	foreach 中 回调函数的返回值 是回调函数的返回值，不是真个函数的返回值
// 	新手注意

	function getIp3(callback){
		var ifaces=os.networkInterfaces();
		var re ;
		for (var dev in ifaces) {
		  ifaces[dev].forEach(function(details){
		    if (details.family=='IPv4' && details.address !="127.0.0.1") {
		    	//console.log(details.address);		    	 
		    	re = details.address;
		    	return;
		    }
		  });
		}
		return re;
	}

	//test 代码

	var ip3 = getIp3();
	console.log("getIp3 resule is : "+ip3);

/*********************************************************************/


// 3,顺序执行, 无异步, 与2不同 forEach不能使用break,for可以使用break停止

	function getIp1(){
		var ifaces = os.networkInterfaces();
		for (var dev in ifaces) {
			for(var i = 0, p = ifaces[dev]; i < p.length; i++){
				if (p[i].family == 'IPv4' && p[i].address != "127.0.0.1") {	 
			    	return p[i].address;
		    	}
			}
		}	
		return false;
	}


	//test 代码

	var ip1 = getIp1();
	console.log("getIp1 resule is : "+ip1);


/*********************************************************************/

// 这个方法严重走冤枉路，只是为了理解一下概念 ：异步，回调函数
// 利用函数立即执行是 防止闭包 错误的一个方法，这个跟异步有关
// 这个方法全是同步，自然比起作用，还多了不少麻烦

// 立即执行这个函数的返回值跟真个函数的返回值无关
// 所以还是用外部变量


//函数内注释的部分
// 直接将变量等于这个立即函数的返回值，可能会得 else中的值，跟目的不同了


	function getIp2(){
		var ifaces = os.networkInterfaces();
		for (var dev in ifaces) {
			for(var i = 0, p = ifaces[dev]; i < p.length; i++){
			 	var re;
			 	(function(d){
			 		if (d.family == 'IPv4' && d.address != "127.0.0.1") {
			     		//console.log(d.address); 
			    		re =  d.address;
			    		
		     		}
			 	})(p[i]);

			 	// re = (function(d){
			 	// 	if (d.family == 'IPv4' && d.address != "127.0.0.1") {
			  //    		//console.log(d.address); 
			  //   		//re =  d.address;
			  //   		return d.address;
		   //   		}else{
		   //   			return "123";
		   //   		}
			 	// })(p[i]);
			 	
			}	 
		}	
		return re;		
	}

	//test 代码
	var ip2 = getIp2();
	console.log("getIp2 resule is : "+ip2);

