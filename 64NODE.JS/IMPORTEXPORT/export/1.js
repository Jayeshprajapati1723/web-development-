function add( a, b ) {
    return a +b ;
}
function sub (a,b) {
    return a -b ;
}
function mult (a,b) {
    return a *b ;
}

function div (a,b) {
    return a/b ;
}
// code hmara 1.js m h ise phle export kro module.exports se or fir jis file m acess lena h wah require likho 
module.exports  = add ;
module.exports = sub ;//ye add ko overide kr dega substract krega oro 

// ab bhot sare function ya code hua to module.exports ek bar m ek hi krta  h repeat likhe to overide kr deta h 
// ya to hm module.exports.propety kre 
function sub (a,b) {
    return a -b ;
}
function mult (a,b) {
    return a *b ;
}

function div (a,b) {
    return a/b ;
}
// module.exports.mult = mult;
// module.exports.add = add ;
// module.exports.div= div ;
// module.exports.sub = sub ;
//porpoeties se export kro tbhi overide nhi hoga or wha {add ,sub ,mult ,div etc } 


// ab ek sath kese kre object se 
module.exports = {
    add,sub,mult,div 
}