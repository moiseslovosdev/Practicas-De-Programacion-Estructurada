/*
Validar calificación: Solicite una calificación (0-100). Muestre si aprobó (>=60) o reprobó (<60).
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese su calificación: ", (calificacion) => {
  if (calificacion >= 0 && calificacion <= 100) {
    if (calificacion >= 60) {
      console.log("Felicidades usted aprobo");
    } else {
      console.log("Locetimos pero usted no aprobo.");
    }
  } else {
    console.log("Su calificacion tiene que estar en el rango del rango del (0-100)");
  }

  rl.close();
});
