alert("Alerta desde js")

console.log("Hola desde main.js")

const nombreProducto = "bondiolas"
const precioUnitario = "3000"
let cantidadDeseada = prompt("Cuantas " + nombreProducto + " quieres comprar?")

precioTotal = precioUnitario * cantidadDeseada

alert("El coste total es de: " + precioTotal)