//foreach 是一个同步方法
//可以看到程序在foreach中循环
// 而之后的打印语句并未执行

var arr = ['a', 'b', 'c'];
 var str = '123';
 arr.forEach(function(item) {
   str += item;
   while (true) {};  //用一个死循环，卡死它~~
 });
 console.log(str);