window.addEventListener("scroll",function(){

    let nav = document.querySelector("nav")
    nav.classList.toggle("sticky",window.scrollY > 0)
})
const productos={ 
    "stock":
[      
   {
    "modelo":"Hoodies",
    "unidades":3,
    "precio": "$10.00"
    },
    {
    "modelo":"Shirts",
    "unidades":4,
    "precio": "$15.00"
      },
     {
    "modelo":"Sweatshirts",
    "unidades":5,
    "precio": "$20.00"
    }

]
}   
const boton=document.querySelector(".agregar")
boton.addEventListener("click",()=>{
    let carrito= localStorage.getItem("buzo")
alert(carrito)
});
