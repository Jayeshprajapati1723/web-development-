// insert and deletion by js 
// 3. insertAdjacentHTML (The Professional's Choice) 🚀
// Ye sabse mst method hai. Ye element ko bina "destroy" kiye uske aas-paas ya andar content insert karta hai.

// Syntax: element.insertAdjacentHTML(position, text)

// Positions: beforebegin, afterbegin, beforeend, afterend.

// Fayda: Ye innerHTML se fast hai kyunki ye poore DOM tree ko dubara rebuild nahi karta.


// 1. innerText vs textContent (Sirf Text ke liye)
// Agar aapko box ke andar sirf text badalna hai (HTML nahi), toh ye do options hain:

// innerText: Ye wahi text dikhata hai jo screen par dikh raha hai (CSS ko follow karta hai).

// textContent: Ye zyada fast hai aur sara text utha leta hai, chahe wo CSS se hidden (display: none) hi kyun na ho.

// Best Kaunsa? Hamesha textContent yaad rakho, ye performance mein behtar hai.

// 2. innerHTML (HTML Structure ke liye)
let a =document.querySelector(".box") ;

a.textContent = "hi this is jayesh" ;
a.style.backgroundColor = "red" ;

a.innerText = "hi this is devednra "


// PURI HTML CHANGE YA NEW ADD 
a.innerHTML = "<div>hi jayesh i am innerHTML</div>"

// INNERADJACENT

a.insertAdjacentHTML("afterbegin","<p>hello</p>")

a.insertAdjacentElement("afterend","<p>by</p>" )

let box = document.querySelector(".box");

// 1. Element se theek pehle (Outside)
box.insertAdjacentHTML("beforebegin", "<p>Pehle wala</p>");

// 2. Element ke andar, shuruat mein
box.insertAdjacentHTML("afterbegin", "<span>Start: </span>");

// 3. Element ke andar, aakhiri mein
box.insertAdjacentHTML("beforeend", "<span> :End</span>");

// 4. Element ke theek baad (Outside)
box.insertAdjacentHTML("afterend", "<p>Baad wala</p>");