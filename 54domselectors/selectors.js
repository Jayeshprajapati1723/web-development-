let getele = document.getElementsByClassName("box1") ;
console.log(getele) ;

// kch changes kr do yhi se 
getele[3].style.backgroundColor = "red" ;

get = document.getElementById("six") ;
// console.log(get) ;
get.style.backgroundColor = "orange" ;

// querry selector : only first elemment lao 

document.querySelector(".box1").style.backgroundColor= "white" ;

// querryselectorall se sab group a jate h 
document.querySelectorAll(".box1").forEach (box =>{
   box.style.backgroundColor= "red" ;
})

// get element id by tag NAME DIV ETC


/*

matches(selector)
Ye method sirf ye check karke batata hai ki kya koi element kisi khaas CSS selector se match karta hai ya nahi.

Return Type: Ye sirf True ya False deta hai.

Kaise use karein? Maano aapne ek loop chalaya saare boxes par, aur aap check karna chahte ho ki kis box mein .red-box wali class hai.

Example: element.matches(".red-box") -> Agar element mein wo class hogi, toh True aayega.

2. closest(selector)
Ye niche se upar (Child to Parent) ki taraf search karta hai.

Logic: Ye sabse pehle khud element ko check karega, agar wo selector match nahi hua, toh uske Parent par jayega, phir Grandparent par, jab tak use wo selector mil na jaye.

Kab use karein? Maano ek button ek complex div ke andar hai, aur aapko us button ke main container tak pahunchna hai.

Example: button.closest(".container") -> Ye sabse paas wala container dhoond nikalega.

3. contains(otherElement)
Ye upar se niche (Parent to Child) check karta hai.

Logic: Ye check karta hai ki kya Element A ke andar Element B maujood hai ya nahi.

Example: document.body.contains(myBox) -> Ye batayega ki kya myBox body ke andar hai?

Mst Baat: Agar aap ElementA.contains(ElementA) karoge (matlab khud ko check karoge), toh bhi ye True hi dega.
*/