// factorial calculation 
f= 1 ; 
n = 15 ;
if(n<0) {
    console.log("erro please enter positive no") 
} else{
    for(let i = n ; i>=1 ; i--) {
        f = f*i ;
    }
    
}
console.log(f) ;