window.addEventListener("scroll",function(){

    let nav = document.querySelector("nav")
    nav.classList.toggle("sticky",window.scrollY > 0)
})

    





  class Carrito{

     comprarProducto(e){
     e.preventDefault()
     if(e.target.classList.contains("agregar-carrito") ){
     const producto = e.target.parentElement.parentElement  
     console.log()
     this.leerDatosProductos(producto)
   
         }
    }

    leerDatosProductos(producto){
            const infoProducto = {
            imagen: producto.querySelector(`img`).src,
            modelo: producto.querySelector(`h4`).textContent,
            precio: producto.querySelector(`p`).textContent,
            productoId: producto.querySelector(`a`).getAttribute(`data-id`),
            cantidad:1
           
        }
        console.log(infoProducto)
        this.insertarCarrito(infoProducto)
    }
   insertarCarrito(producto){
       const row=document.createElement(`tr`) ;
       row.innerHTML = `
      
       <td>
       <img src =${producto.imagen}>
       </td>
       <td> ${producto.precio} </td>
       <td> ${producto.modelo}  </td>     
       <td> ${producto.cantidad}  </td>
       `;
       listaProductos.appendChild(row)
       this.guardarProductosLocalStorage(producto)
   }
       eliminarProducto(e){
       e.preventDefault();
       let producto,productoId;
       
       if (e.target.classList.contains(`borrar-producto`)) {
           e.target.parentElement.parentElement.remove();
           producto = e.target.parentElement.parentElement;
           productoId = producto.querySelector(`a`).getAttribute(`data-id`);
       }
       this.eliminarProductoLocalStorage(productoId)
    }
       vaciarCarrito(e){
          e.preventDefault()
          while(listaProductos.firstChild){
          listaProductos.removeChild(listaProductos.firstChild);
          }
          return false;
        }
       guardarProductosLocalStorage(producto){
         let productos
         productos=this.obtenerProductosLocalStorage()
         productos.push(producto)
         localStorage.setItem(`productos`,JSON.stringify(productos))
       }
       obtenerProductosLocalStorage(){
           let productoLs
           if (localStorage.getItem(`productos`)===null) {
               productoLs=[]
           }
           else{
               productoLs=JSON.parse(localStorage.getItem(`productos`))
           }
           return productoLs
          
       }
       eliminarProductoLocalStorage(productoId){
     let productosLs
     productosLs =this.obtenerProductosLocalStorage()
     productosLs.forEach(function(productoLs,index){
         if(productoLs.id===productoId){
             productosLs.splice(index,1)
         }
     })
     localStorage.setItem(`productos`,JSON.stringify(productosLs))
       }
       leerLocalStorage(){
           let productosLs
           productosLs=this.obtenerProductosLocalStorage()
           productosLs.forEach(function(producto){
            const row=document.createElement(`tr`) ;
            row.innerHTML = `
           
            <td>
            <img src =${producto.imagen}>
            </td>
            <td> ${producto.precio} </td>
            <td> ${producto.modelo}  </td>
            <td> ${producto.cantidad}  </td>
     
            `; 
           })
       }
   }
  


    const carro= new Carrito();
    
    const carrito =document.getElementById("carrito")
    
    const productos =document.getElementById("lista-productos")
    
    const listaProductos= document.querySelector("#lista-carrito ")
    
    const vaciarCarritoBtn=document.getElementById("vaciar-carrito")


    cargarEventos()

function cargarEventos(){
    productos.addEventListener(`click`,(e)=>{carro.comprarProducto(e)});
    carrito.addEventListener("click", ()=>{carro.eliminarProducto(e)});
    vaciarCarritoBtn.addEventListener("click",()=>{carro.eliminarProducto()});
    document.addEventListener( `DOMContentLoaded`,carro.leerLocalStorage())
}



