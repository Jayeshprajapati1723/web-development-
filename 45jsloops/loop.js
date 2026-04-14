let a = 2 ; 
for(let i = 1 ; i< 11 ; i++) {
    let tab = a*i ;
    console.log(tab) ;
}
c= 0 ;
i = 4 ;
while(i!=0) {
    console.log("hello i ") ;
    i--;
        c++ ;
}
let j = 0;
do{ console.log("jayesh do while loop create ")
j++ ;
}while(j!=3);

const ob = { 
    name : "jayesh" ,roll : "dvlpr"
, sal : 200000000 
}

//for in object for in loop
for(ky in ob) {
    console.log(ky , ob[ky]) ;
    //key and value nikal skte h pr key k liye use krte h in mtlb andr ki key ese kch yad rkh skte h logic 
}

//for of loop array string special give value one by one 
let b ="jayesh"
for(i of b ) {
    console.log(i) ;
}