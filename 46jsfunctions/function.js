// function in javascripts
function nice(name) {
    console.log(`hello my name is ${name}`) ;
}
nice("jayesh") ;

function sum(a,b) {
    c = a+b ;
    return c ;
}

c= sum(5,8) 
console.log(c) ;

// default paramenter 
function add(a,b,c=3) {
    return a+b+c ;
}

console.log(add(2,2,4)) ;
// nan not a number ;

// arrow function
const f = (x)=>{
    console.log("hey i am arrow function",x) ;
}

f(8) ; f(111) ;