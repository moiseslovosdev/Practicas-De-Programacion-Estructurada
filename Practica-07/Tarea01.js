/*

Tarea 1: Adivinar el número secreto (WHILE)
  Genere un número secreto entre 1 y 50 usando Math.floor(Math.random() * 50) + 1. Usando un
  bucle WHILE, solicite al usuario adivinar el número. En cada intento, indique si el número es
  mayor o menor que el secreto. Cuente los intentos y muéstrelos al final.

*/

const readlineSync = require('readline-sync');
const numeroSecreto = Math.floor(Math.random() * 50) + 1;
let intentos = 0;

console.log("Juego Numero Secreto\nIndicaciones:\n En este juego se le contara cuantos intentos utilizo.\n Y se le indicara en cada intento que si es mayor o menor al que ingreso\n El numero secreto es del 1 al 50.\n");

while (true) {
  let numeroIngresado = parseInt(readlineSync.question("Ingrese el numero: "));

  if (isNaN(numeroIngresado)) {
    console.log("\nERROR: No se permiten ingresar solo letras.\n");
    continue;
  }

  if (numeroIngresado % 1 == 0) {
    console.log("ERROR: No se pueden ingresar decimales.");
    continue;
  }

  if (numeroIngresado < 1 || numeroIngresado > 50) {
    console.log("ERROR: Debe ingresar del 1 al 50.");
    continue;
  }

  intentos++;
  if (numeroIngresado === numeroSecreto) {
    console.log(`\nGanastes era el numero: ${numeroSecreto}\nUtilizastes ${intentos} intentos.\n`);
    break;
  } else {
    console.log(`\nPerdistes: ${numeroIngresado > numeroSecreto ? "El numero es menor." : "El numero es mayor"}.\n`);
  }

}
