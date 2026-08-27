/* Tarea 1: Procesar nombre de usuario
Solicite al usuario su nombre completo. Convierta el nombre a mayúsculas, extraiga las primeras 4 letras y luego conviértalo a minúsculas. Muestre todos los resultados.  */

let nombre_complete = "Maria Juliana Romero del Carmen";

let nombreMayus = nombre_complete.toLocaleUpperCase();
let primeras4letras = nombre_complete.slice(0, 4);
let nombreMin = nombre_complete.toLocaleLowerCase();

console.log("Nombre en mayusculas: " + nombreMayus);
console.log("Primeras letras del nombre completo: " + primeras4letras);
console.log("Nombre en minisculas: " + nombreMin);
