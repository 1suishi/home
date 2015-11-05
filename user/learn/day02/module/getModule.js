var myModule1 = require("./module");

var myModule2 = require("./module");

myModule1.setName("benniuo1");
myModule2.setName("benniuo2");
myModule1.sayHello(); 


// output Hello benniuo2
// 模块只加载了一次，
//myModule1 ,myModule2指向同一个模块