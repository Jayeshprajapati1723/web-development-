const os = require("os") ;

// os moudle sb nikalna 
console.log("platform",os.platform()) ;

// user 
console.log("platform",os.userInfo()) ;

//architechture
console.log("platform",os.arch()) ;

// free memory 
console.log("platform",os.freemem(),"bytes") ;

// totoal memroy 
console.log("platform",os.totalmem(),"bytes") ;

// uptime
console.log("platform",os.uptime(),"sec") ;

console.log("platform",os.uptime()/60,"sec") ;
// leptop kbse cahlue h 

// 7. User Info (Aapka PC username aur home folder)
console.log("User Info:", os.userInfo().username);

// 8. Home Directory Path
console.log("Home Directory: " + os.homedir());

// 9. Temporary Files Folder
console.log("Temp Folder: " + os.tmpdir());