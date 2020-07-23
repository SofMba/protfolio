var deletebuttons = document.querySelectorAll(".fa-times");
var heartbuttons = document.querySelectorAll(".fa-heart");
var plusbuttons = document.querySelectorAll(".fa-plus");
var minusbuttoms = document.querySelectorAll(".fa-minus");
console.log(deletebuttons)

Array.from(deletebuttons).map((el) =>{    
  el.addEventListener("click" , () => {
      el.parentElement.parentElement.remove();
  });
});

Array.from(heartbuttons).map((el) =>{    
  el.addEventListener("click" , () => {
      el.classList.toggle("red");
  });
});

Array.from(plusbuttons).map((el) =>{    
  el.addEventListener("click" , () => {
       el.nextElementSibling.innerHTML = parseInt(el.nextElementSibling.innerHTML) +1
  });
});
Array.from(minusbuttoms).map((el) =>{    
  el.addEventListener("click" , () => {
       el.previousElementSibling.innerHTML = parseInt(el.previousElementSibling.innerHTML) -1
  });
});
Array.from(plusbuttons).map((el)=> {
  el.addEventListener("click", ()=> {
    el.nextElementSibling.innerHTML =
    parseInt(el.nextElementSibling.innerHTML)+1;
    var price = el.parentElement.nextElementSibling.innerHTML.replace("£","");
    console.log(total);
    total.innerHTML =
    parseInt(total.innerHTML.replace("£",""))+parseInt(price)+"£";
    });
});
Array.from(minusbuttoms).map((el)=> {
  el.addEventListener("click" , () => {
    if(el.previousElementSibling.innerHTML > 1) ;
      el.previousElementSibling.innerHTML=
      parseInt(el.previousElementSibling.innerHTML) -1;
  
    });
  });