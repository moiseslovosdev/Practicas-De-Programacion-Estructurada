/*Tarea 4: Información completa de fecha y hora
Obtenga la fecha y hora actual. Muestre en formato: "Hoy es 26/8/2026 y son las 9:15:30" */

let fecha = new Date();
let hoy = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
let hora = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;

console.log(`Hoy es ${hoy} y son las ${hora}`);
