window.addEventListener("scroll",function(){

    let nav = document.querySelector("nav")
    nav.classList.toggle("sticky",window.scrollY > 0)
})
const productos={ 
    "stock":
[      
   {
   "imagen": "/img/buzo-wilson.jpg", 
    "modelo":"Hoodies",
    "unidades":3,
    "precio": "$10.00"
    },
    {
    "imagen": "/img/crazy-black-21.png",
    "modelo":"Shirts",
    "unidades":4,
    "precio": "$15.00"
      },
     {
    "imagen": "/img/buzo-rosa.png",    
    "modelo":"Sweatshirts",
    "unidades":5,
    "precio": "$20.00"
    }

]
}   
const carrito=[]


const lista= document.getElementById("seleccion1")


const producto1=document.querySelector(".producto1")
producto1.addEventListener("click",()=> {

      agregarProducto()
      console.log(carritoParseado);
     alert("agregado al carrito")
      
})
const agregarProducto = ()=>{
    carrito.push(productos.stock[0])
    localStorage.setItem("carrito",JSON.stringify(carrito))    
    
       
}
const carritoParseado=JSON.parse(localStorage.getItem("carrito"))

