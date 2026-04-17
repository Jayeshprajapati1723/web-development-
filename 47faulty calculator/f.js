// faulty calculator

// function calc(a,b) {
// if()

// }
// a= Math.random() < 0.1 ;
// console.log(a) ;

// function calc(a,b) {
// c= a+b ;
// c= c+Math.random()<0.1 ;
// }
// c= console.log(calc(5,2)) ;

let random = Math.random() ;
const inc ={
    "+" : "-",
    "-" : "+",
    "*" : "/" ,
    "/" : "*" 
}

function calc (a,b,c) {
if(random > 0.1) {
r = eval(`${a} ${c} ${b}`) ;
    return r ;
}else{
let f= inc[c];
r = eval(`${a} ${f} ${b}`) 
;return r ;
}

}

r = console.log(calc (2,4,"+") )
r = console.log(calc (2,4,"-") )
r = console.log(calc (2,4,"*") )
r = console.log(calc (2,4,"/") )
