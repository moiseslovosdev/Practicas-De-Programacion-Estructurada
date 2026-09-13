/*
Calificación por letra: Solicite una calificación numérica (0-100). Usando Switch, convierta a calificación por letra según: A (90-100), B (80-89), C (70-79), D (60-69), F (0-59). Muestre la calificación en letra. (Ayuda: use Math.floor(calificacion / 10) para obtener el rango).
*/

import readline from "node:readline";

const cl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

cl.question("Ingrese su calificacion (0 - 100): ", (calificacion) => {
  if (!isNaN(calificacion) && calificacion >= 0 && calificacion <= 100) {
    switch (Math.floor(calificacion / 10)) {
      case 10:
      case 9:
        console.log("A");
        break;
      case 8:
        console.log("B");
        break;
      case 7:
        console.log("C");
        break;
      case 6:
        console.log("D");
        break;
      default:
        console.log("B");
    }
  } else console.log(isNaN(calificacion) ? "ERROR: Solo se pueden ingresar numeros." : "ERROR: Rango no valido");
  cl.close();
});
