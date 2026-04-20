let path = require("path")
// path moudle 
console.log(__filename) ;
// dir + full file name 
console.log(__dirname) ;
// directory path 
console.log((path.extname(__filename)),"extension")
// file name with extension 
console.log((path.parse(__filename))) ;
//file name seprate kr deta h

let joinpath = path.join("fol","students","data.txt");
console.log(joinpath) ;
// fol\students\data.txt
let resolve = path.resolve(joinpath) ;
console.log(resolve) ;