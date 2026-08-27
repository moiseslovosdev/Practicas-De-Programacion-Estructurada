/*Tarea 2: Información de producto con precio
Solicite el nombre del producto, precio unitario y cantidad. Muestre el nombre en mayúsculas, extraiga las primeras 3 letras del producto y muestre el precio total con 2 decimales. */

let nombre_product = "Harina Mazeca";
let precio_unitario = 2.0;
let cantidad = 4;

let nombreMayus_product = nombre_product.toLocaleUpperCase();
let nombre3letras_product = nombreMayus_product.slice(0, 3);
let precio_total = precio_unitario * cantidad;

console.log("Nombre del producto en mayusculas: " + nombreMayus_product);
console.log("Primeras 3 letras del producto: " + nombre3letras_product);
console.log("Precio total del producto: $" + precio_total.toFixed(2));
