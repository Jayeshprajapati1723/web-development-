// array are mutable 
// push(): End mein element add karta hai.

// pop(): End se element hatata hai.

// shift(): Shuruat se element hatata hai.

// unshift(): Shuruat mein element add karta hai.
a =[1,2,3] ;
console.log(a[0]) ;
console.log(a[1]) ;
console.log(a[2]) ;
console.log(a.length) ;
console.log(typeof(a)) ;

console.log(a.toString(),"tostrings") ;

// push and pop
a.push("jayesh") // ye last m insert krega 
console.log(a) ;

a.pop() ;
console.log(a,"pop remove last elements")

a.shift() ; //remove first element of an array 
console.log(a,"shift perform remove the first element from the array ") ;

console.log(a.unshift("jayesh"),"unshift insert value from the first ") // 
console.log(a) ;

// a1 = [5,10,15] ; a2= [11,12,13]
//  a3 =concat(a1,a2);
// // = concat(a1,a2)
// console.log(a3)

// slice splice(): Beech mein se delete ya add karne ke liye.

// Syntax: arr.splice(index, kitne_hatao, naya_maal)
s= [2,3,4] 
s.splice(0,1,13)
console.log(s) ;
/**, Array methods JavaScript ka sabse powerful part hain. Inhe seekh liya toh data handle karna bohot aasaan ho jayega. C++ aur Java background ki wajah se aapko ye bahut fast samajh aayenge.

Chaliye, sabse important methods ko categories mein divide karke samajhte hain:

1. Basic Methods (Add/Remove)
Ye methods array ke elements ke saath khelte hain.

push(): End mein element add karta hai.

pop(): End se element hatata hai.

shift(): Shuruat se element hatata hai.

unshift(): Shuruat mein element add karta hai.

2. Transformation Methods (Sabse Important)
Ye methods array ko "transform" karte hain aur naya array return karte hain.

map(): Har element par koi operation perform karke naya array deta hai.

Example: Saare numbers ko double karna.

filter(): Kisi condition ke basis par elements ko chhaantta (filter) hai.

Example: Sirf 18 se bade numbers nikaalna.

reduce(): Poore array ko calculate karke ek single value mein badal deta hai.

Example: Saare numbers ka sum nikaalna. */

j = [2,4,6] ;
console.log(j.map(val => val*4),"after map") ;

age = [18,20,16,15]
newage = age.filter(val=> val>= 18 ) ;
console.log(age) ;
console.log(newage);

// 3. Searching & Indexing
// indexOf(): Kisi element ka index batata hai.

// includes(): Check karta hai ki element array mein hai ya nahi (True/False).

// find(): Pehla aisa element deta hai jo condition poori kare.

// for each loop console pritn k liye use kro 
stu = ["jayesh","ramehs","gajendra"]

stu.forEach(element => {
    console.log(`students : ${element}`)
    
});
totfees=0;
 fees =  [400, 600, 300, 800, 500, 1000]
fees.forEach((fees,i)=>{
if(fees>=500) {
    totfees = totfees+ fees;
}
})
console.log(totfees) ;