window.addEventListener("scroll",function(){

    let nav = document.querySelector("nav")
    nav.classList.toggle("sticky",window.scrollY > 0)
})


    
const productos=[

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



   
const carrito=[]
const agregarProducto = ()=>{
    carrito.push(productos)
    localStorage.setItem("productos",JSON.stringify(productos))    
    
  
}
agregarProducto()




const producto1=document.querySelector(".producto1")
     producto1.addEventListener("click",()=> {

     const carritoParseado=JSON.parse(localStorage.getItem("productos"))
     producto1.innerHTML +=
 
     `
     <section class="modal" id="modal">

            <div class="modal-container">
                <div id="seleccion1">
                <div class="agregar">
                <h6>${ carritoParseado[0].imagen}</h6>
                <h6>${ carritoParseado[0].modelo}</h6>
                <h6>${ carritoParseado[0].precio}</h6>
            </div> 
                 </div>
                 <a href="#producto" class="close">x</a>
                 <button class="delete" >eliminar</button>
             </div>
        </section>
            
      `
     console.log(carritoParseado[0])
    
})




