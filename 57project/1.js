// card factory banani h 

let a = document.querySelector(".container");
let title, cname, views, yearago, duration, thumbnail;
function cardfactory(title, cname, views, yearago, duration, thumbnail) {
  if(views < 1000 ) {
    views ="views:"+ views +"hundreeds"
   } else if(views<100000 && views > 1000)
       {views = views / 1000 + "k";
   } 
    yearago = yearago + "months";

    a.insertAdjacentHTML("beforeend", `<div 
        class='card'><img src="${thumbnail}" /> <div class=title u>${title}</div>
        <div class=cname u> ${cname} </div>
      <div class=views u>   ${views} </div>
       <div class=yearago u> ${yearago} </div>
 <div class=duration u> ${duration} </div>

    </div>`   );
}
cardfactory("vid1", "jsp channel", 10000, 7, "20:21", "image copy.png") 
cardfactory("vid2",'apna college' ,600,8,"31:32","image copy.png") 
cardfactory("vid2",'apna college' ,600,8,"31:32","image copy 2.png") 