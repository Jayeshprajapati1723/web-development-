// create a business name generator by combining list of adjectives and shopnames and another words ;

// crazy amazing fire 
// engine foods garments 
// another words bros limited 
r = Math.random() ;

let first, second , third ;

function nameg() {
    if(r<0.33){
        first = "crazy"
    }
    else if (r < 0.66 && r> 0.33){
        first= "Amazing"
    }
    else {
        first = "fire"
    }

    //second
        if(r<0.33){
        second = "engine"
    }
    else if (r < 0.66 && r> 0.33){
        second= "garments"
    }
    else {
        second= "engine"
    }

    //third
        if(r<0.33){
        third = "ltd"
    }
    else if (r < 0.66 && r> 0.33){
        third= "bros"
    }
    else {
        third = "limited"
    }
    console.log(`business name : ${first} ${second} ${third}`)
}
nameg() ;
nameg();
nameg() ;