/*Tarea 3: Calcular edad y años de experiencia
Solicite al usuario su año de nacimiento. Obtenga el año actual, calcule su edad y muestre: "Tu edad aproximada es: X años." */

let fecha = new Date();

let nacimiento = 2005;

let anioActual = fecha.getFullYear();

let edad = anioActual - nacimiento;

console.log(`Tu edad aproximada es: ${edad} años.`);
