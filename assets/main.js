


//Código de Clase 3
/*
const nombreProducto = "bondiolas"
const precioUnitario = "3000"

let cantidadDeseada = prompt("Cuantas " + nombreProducto + " quieres comprar?")
let Descuento=precioUnitario*0.10
let precioDescuento = precioUnitario-Descuento

    function sumarProductosDescuentos(precioDescuento, cantidadDeseada){

        let PrecioTotal = precioDescuento*cantidadDeseada

        alert("El precio del producto es: " + PrecioTotal)
    }

function sumarProductos(precioUnitario, cantidadDeseada){
   
        let PrecioTotal = precioUnitario * cantidadDeseada
        
        console.log("El precio del producto es: " + PrecioTotal)
}
        if (cantidadDeseada >= 5){
            
            sumarProductosDescuentos(precioDescuento, cantidadDeseada)
        }else{
            sumarProductos(precioUnitario, cantidadDeseada)
        }
*/

//Código de clase 4
/* 
const nombreProducto = "bondiolas"
const precioUnitario = "3000"

let cantidadDeseada = prompt("Cuantas " + nombreProducto + " quieres comprar?")

function sumarProductos(precioUnitario, cantidadDeseada){
   
    let PrecioTotal = precioUnitario * cantidadDeseada
    console.log("El precio del producto es: " + PrecioTotal)
    
}


sumarProductos(precioUnitario, cantidadDeseada)
*/

//Código de Clase 5
/*
const Productos = ["Queso", "Fiambre", "Bondiola", "Chorizo", "Pan a leña"];

for(let i=0; i<Productos.length; i++){
    console.log("Producto " + (i+1) + ": " + Productos[i]);
}

Productos.pop()

console.log("Nuevo stock después de la venta")

for(let i=0; i<Productos.length; i++){
    console.log("Producto " + (i+1) + ": " + Productos[i]);
} */

//Código de Clase 6
/*
const producto = {
    nombre: "Camiseta",
    precio: "$9.600",
    cantidadDisponible: "30 unidades"
}
producto.categoria = "Vestimenta";
console.log("Producto 1: " + producto.nombre + ", " + "precio: " + producto.precio + ", " + "categoria: " + producto.categoria + ", " + "cantidad: " + producto.cantidadDisponible);

producto.nombre = "Zapatillas";
producto.categoria = "Calzado";

delete producto.cantidadDisponible

console.log("Producto 2: " + producto.nombre + ", " + "precio: " + producto.precio + ", " + "categoria: " + producto.categoria + ", " + "cantidad: Sin stock");
*/

//Código de Clase 8
/*
const baseDeDatos = [
    {
        categoria: "Eléctrodomesticos",
        productos:[
            {nombre: "calefactor", precio: 259075, descuento: 0.5, },
            {nombre: "caloventor", precio: 25999, descuento: 0.7, },
            {nombre: "pava eléctrica", precio: 18250, descuento: 0.7, },
            {nombre: "estufa eléctrica", precio: 41929, descuento: 0.7, },
        ]
    },
    {
        categoria: "Herramientas",
        productos:[
            {nombre: "Martillo", precio: 20400, descuento: 0.5, },
            {nombre: "Destornillador", precio: 15600, descuento: 0.7, },
            {nombre: "Pinza", precio: 13670, descuento: 0.6, },
            {nombre: "Cutter", precio: 6400, descuento: 0.3, },
        ]
    }
]

baseDeDatos[0].productos[1].precio = 24000

for(const categoria of baseDeDatos){
    for(const producto of categoria.productos){
        let productoNombre = document.createElement("h2");
        let productoPrecio = document.createElement("p");
        productoNombre.innerHTML = producto.nombre;
        productoPrecio.innerHTML = "El precio es: $" +producto.precio;
        console.log(productoNombre.isConnected);
        console.log(productoPrecio.isConnected);
        document.body.appendChild(productoNombre);
        document.body.appendChild(productoPrecio);
    }
}
*/

//Código de Clase 9


let boton = document.createElement("button");
boton.innerHTML = "Agregar al carrito";
boton.setAttribute("id", "btnCarrito");
console.log(boton);
console.log(boton.isConnected)
document.body.appendChild(boton);

boton.addEventListener("click", function() {
    let contenedor = document.createElement("h3");
    contenedor.innerHTML = "Ha agregado el producto";
    console.log(contenedor);
    console.log(contenedor.isConnected)
    document.body.appendChild(contenedor)
})





