function Hello(){
	var name;

	this.setName = function(theName){
		this.name  = theName;
	};

	this.sayHello = function(){
		console.log("Hello " + this.name);
	};
};

module.exports = Hello;