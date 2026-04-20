// const add = require("./1.js") ;

// console.log(add(5,10)) ;

// kya ye ek sath sb function lega nhi kya alg line m krne se hoga nhi 
// const mult = require("./1.js") ;
// console.log(mult(a,b)) ;

const {add ,sub ,mult ,div} = require("./1.js") ;
console.log(add(5,11)) ;
console.log(sub(5,11));
console.log(mult(5,11));
console.log(div(5,11));

// ab hmne sbko ek sath object se export kiya h to hm 
// acess bhi object.entities k use kr skte h acess k liye 
let math = require ("./1.js")
console.log(math.add(15,20)) ;