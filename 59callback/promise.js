// sneppits bhi create kr skte h user snappits m jakr apni lganguage selct kro wah hm prefix define kr skteh  snippetssnippetssnippetssnippetssnippets

// alert("hello jayesh");
// console.log('hello world by clog snnepits');

// let prom1 = Promise((resolve,reject )=> {setTimeout ( () => {
//   console.log("hey i a done") 
// resolve("jayesh")
// } ,3000)

// } )

// prom1.then( (a) =>{
//     console.log("after resolve ",a)
// }


// )

let myPromise = new Promise((resolve, reject) => {
    let success =false ;
    if (success) {
        resolve("Kaam ho gaya!");
    } else {
        reject("Error aa gaya!");
    }
});

// Use kaise karein?
myPromise.then((val) => console.log(val)).catch((err) => console.error(err));   // Success ke liye
// Fail ke liye