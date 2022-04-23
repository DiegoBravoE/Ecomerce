window.addEventListener("scroll",function(){

    let nav = document.querySelector("nav")
    nav.classList.toggle("sticky",window.scrollY > 0)
})

    
const stock=[

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





  class Carrito{

     comprarProducto(e){
     e.preventDefault()
     if(e.target.classList.contains("agregar-carrito") ){
     const producto = e.target.parentElement.parentElement
     this.leerDatosProductos(producto)
     console.log(producto);
         }
    }

    leerDatosProductos(producto){
        const infoProducto = {
            imagen: producto.querySelector(`img`).src,
            modelo: producto.querySelector(`p`).textContent,
            precio: producto.querySelector(`h4`).textContent,
            id: producto.querySelector(`div`).getAttribute(`data-id`),
            cantidad:1
        }
        this.insertarCrrito(infoProducto)
    }
   insertarCrrito(producto){
       const row=document.createElement(`tr`) ;
       row.innerHTML = `
       <td>
       <img src ="${producto.imagen}"
       </td>
       <td>
       ${producto.precio} 
       </td>
       <td>
       ${producto.modelo}
         
       </td>
       <td>
       <a href="#" class="borrar-producto fas fa-times-circle"data id= "${producto.id}" ></a> 
       </td>
       `;
       listaProductos.appendChild(row)
   }
   eliminarProducto(e){
       e.preventDefault();
       let producto
       let productoId
       if (e.target.classList.contains(`borrar-producto`)) {
           e.target.parentElement.parentElement.remove();
           producto = e.target.parentElement.parentElement;
           productoId = producto.querySelector(`a`).getAttribute(`data-id`)
       }
   }
  }


const carro= new Carrito();
const carrito =document.getElementById("carrito")
const productos =document.getElementById("lista-productos")
const listaProductos= document.querySelector("#lista-carrito tbody")
  

cargarEventos()

function cargarEventos(){
    productos.addEventListener(`click`,(e)=>{carro.comprarProducto(e)})
    
}


