var field = '[1][2][f3][ab]';

var chain = field.split(']').join('').split('[');


// var first = field.split("]");
// console.log(first);

console.log(chain);    //[ '', '1', '2', 'f3', 'ab' ]
						//多一个‘’

chain.shift();
console.log(chain);  //['1', '2', 'f3', 'ab' ]

