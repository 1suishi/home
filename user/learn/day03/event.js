// 一个事件注册两个 事件监听器 ，两个监听器顺序执行
var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('someEvent', function( argv1, argv2) {
	console.log("listener1",argv1,argv2);
});

emitter.on('someEvent', function( argv1, argv2) {
	console.log("listener2",argv1,argv2);
});

emitter.emit('someEvent','benniuo',1990);

//console.log("end");