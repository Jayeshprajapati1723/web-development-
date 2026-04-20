// file module 
let fs = require("fs") ;
// file create kro 
let filename = "auto.txt" ;
let newfile=fs.writeFileSync(filename, "this is auto generated file by jayesh", "utf-8" );
console.log(newfile) ;
/**Iska Full Form aur Matlab kya hai?
UTF-8 ka full form hai Unicode Transformation Format - 8 bits.

Unicode: Ye ek universal "Code Book" hai jisme duniya ki har bhasha ke har ek character (A, B, क, अ, 😊, @) ko ek unique number diya gaya hai.

8-bit: Iska matlab hai ki ye har character ko store karne ke liye kam se kam 8 bits (1 byte) ka use karta hai. */

// data reading from file option k sath utf-8 or without mtlb converto sTrIng 

let readfile = fs.readFileSync(filename) ;
console.log(readfile) ;
// <Buffer 74 68 69 73 20 69 73 20 61 75 74 6f 20 67 65 6e 65 72 61 74 65 64 20 66 69 6c 65 20 62 79 20 6a 61 79 65 73 68>

readfile = fs.readFileSync(filename,"utf-8") ;
console.log(readfile) ;

// append file if file not exist than create and update new data a
fs.appendFileSync(filename,"hello jayesh append file use krna sikh gye ","utf-8") ;
console.log(fs.readFileSync(filename,"utf-8"));

notfilename = "notexist.txt" ;
// mujhe ise append krna h to kya hoga 
fs.appendFileSync(notfilename,"file exist m nhi dekhte h append kya krega ","utf-8");
console.log(fs.readFileSync(notfilename,"utf-8"),"after append print jo file nhi h use create kiya or data laya yha ") ;

// to file create kr dega or append add kr dega new m hi or read write sb kra dega mst h 


// file delete krne k liye unlink kr do 
fs.unlinkSync(filename) ;

let renamed = "renamednotfilename" ;
// rename kr dena file name ko (oldpath,newpath)
fs.renameSync(notfilename,renamed) ;

let jsfile = "2fs.js" ;
fs.writeFileSync(jsfile,"console.log('file created by sever ')","utf-8") ;