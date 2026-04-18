get = document.querySelectorAll(".box");

r = Math.random();
// get.forEach(element => {
//     if(r < 0.25) {
//         element.style.backgroundColor = "red" ;
//     } else if(r<0.50 && r>0.25) {
//                element.style.backgroundColor = "green" ;
//     }
//     else if(r<0.75 && r>0.50) {
//                element.style.backgroundColor = "black" ;
//     }
//     else {
//           element.style.backgroundColor = "blue" ;
//     }
// });

// get.forEach( (e,i ) => {
//    if(i%2==0) {
//      e.style.backgroundColor = "blue" ;
//    } else{
//          e.style.backgroundColor = "red" ;
//    }
// });

get.forEach((e, i) => {
    if (i == 1) {
        e.style.backgroundColor = "black  ";
        e.style.color = "gold";
    }
    else if (i == 2) {
        e.style.backgroundColor = "red  ";
        e.style.color = "black";

    } else if (i == 3) {
        e.style.backgroundColor = "yellow  ";
        e.style.color = "green";

    }
    else if (i == 4) {
        e.style.backgroundColor = "green ";
        e.style.color = "black";

    } else {
        e.style.backgroundColor = "pink  ";
        e.style.color = "blue";
    }
});

