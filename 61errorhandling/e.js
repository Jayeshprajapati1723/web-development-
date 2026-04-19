// error handling 
let a = prompt("enter a no") ;
let b= prompt("enter no second")
let sum = a +b ; 
console.log("sum is ",sum) ;

//to abhi ye string ki trh add kr dega jese a = 5 b = 6 
// 5+ 6 >> 56 not 11 so we use as  parseInt
sum = parseInt(a) + parseInt(b)
console.log("sum is ",sum) ;

// yha to thik h integer hi lega agr integer ni to Nan a jayega a

// pr hm chahte erro de to hm ye kr skte h 
if(isNaN(a) || isNaN(b)) {
    throw SyntaxError("only inteeger value are allowed")
}
sum = parseInt(a) + parseInt(b)
console.log("sum is ",sum) ;

// ab handle kese kre shi no k bad bhi error de to agr jese m *x kr du pr ye to undefined h 
//in result sum*x
// console.log("sum ",x*sum) ;//error a jayega x is not defined 
try {
    console.log("sum ",x*sum) ;
} catch (error) {
    console.log("error a gya bhai")
}
// Bas ek technical point clear karlo—finally akele nahi reh sakta, wo hamesha try (aur optional catch) ke saath hi aata hai. Lekin haan, function ke andar iska behavior bilkul "ziddi" hota hai.

// 💡 Selection wala point: finally ki "Zidd"
// Maan lo aapne function ke andar 10 jagah return likha hai. JavaScript engine jaise hi return dekhta hai, wo bag pack karke function se bahar nikalne lagta hai. Lekin agar raste mein use finally dikh gaya, toh wo ruk jayega, pehle finally ka kaam karega, aur phir bahar jayega.