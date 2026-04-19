//the magical sorting hat 
//gryffinder less than 6
let sn = ["jayesh", "ramesh", "raj", "gajendra", "devendra", "yash"];
let hn = ["Grayffindor", "hufflepuff", "revenclaw", "slytherm"]

// function magichat(sn) {
//     let magic = sn.forEach((element, i) => {
//         if (element.length < 6) {
//             element = element + hn[0];
//         } else if (element.length < 8) {
//             element = element + hn[1];
//         } else if (element.length < 12) {
//             element = element + hn[2];
//         }
//         else if (element.length >= 12) {
//             element = element + hn[3]
//         }
//     });
//     console.log(magic);
// }
// magichat(sn);

let ahn = sn.map(element  => {
        if (element.length < 6) {
            element = element + " "+ hn[0]; return element ;
        } else if (element.length < 8) {
            element = element +" "+ hn[1]; return element ;
        } else if (element.length < 12) {
            element = element +" "+ hn[2];return element;
        }
        else if (element.length >= 12) {
            element = element +" "+ hn[3]
        return element;} 
}
)
console.log(ahn) ;