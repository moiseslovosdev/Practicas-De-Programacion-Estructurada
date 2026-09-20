/*
Ejercicio Práctico 1: Sistema de calificación con bonificación

Solicite al usuario su nombre, su calificación final (0-100) y si entregó todos los trabajos (si/no).

    Si la calificación es >= 90 y entregó todos los trabajos, su nota final se incrementa en 5 puntos (sin pasar de 100).
    Si la calificación es >= 70 pero < 90, y entregó todos los trabajos, su nota se incrementa en 3 puntos.
    Si la calificación es < 70, no hay bonificación.

Muestre: nombre, calificación original, bonificación aplicada y calificación final.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese su nombre: ", (nombre) => {
  rl.question("Ingrese su calificacion: ", (calificacion) => {
    rl.question("Entrego todos los trabajos (si/no): ", (respuesta) => {
      let calificacionp = parseFloat(calificacion);
      let respuestal = respuesta.toLocaleLowerCase();
      let bonificación = 0;

      if (calificacionp <= 0 || calificacionp > 100) {
        console.log("La calificacion tiene que estar entre 0 y 100.");
      } else {
        if (respuestal === "si") {
          if (calificacionp >= 90) {
            bonificación = 5;
          } else if (calificacionp >= 70) {
            bonificación = 3;
          }
        }
      }

      let notaF = calificacionp + bonificación;

      if (notaF > 100) {
        notaF = 100;
      }
      console.log("Sistema de bonificacion: ");
      console.log("Nombre:", nombre);
      console.log("Calficacion sin bonificacion:", calificacionp);
      console.log("Su bonificacion es: ", bonificación);
      console.log("Calificacion final: ", notaF);
      rl.close();
    });
  });
});
