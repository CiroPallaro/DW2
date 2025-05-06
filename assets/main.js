alert("Alerta desde js")

console.log("Hola desde main.js")

const nombreProducto = "bondiolas"
let precioUnitario = "3000"

let cantidadDeseada = prompt("Cuantas " + nombreProducto + " quieres comprar?")

function sumarProductos(precioUnitario, cantidadDeseada){
   
    let PrecioTotal = precioUnitario * cantidadDeseada
    console.log("El precio del producto es: " + PrecioTotal)
    
}


sumarProductos(precioUnitario, cantidadDeseada)