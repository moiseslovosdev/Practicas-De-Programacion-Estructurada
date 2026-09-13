/*
Tarea 1: Clasificación de figuras geométricas
Solicite al usuario el número de lados de una figura (3, 4, 5, 6). Utilizando Switch, muestre el nombre de la figura correspondiente: 3=Triángulo, 4=Cuadrilátero, 5=Pentágono, 6=Hexágono. Si el número no está en la lista, muestre "Figura no reconocida".
*/

import readline from "node:readline";

const cfg = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

cfg.question("Ingrese el numero de lados que tiene la figura(3, 4, 5, 6): ", (lados) => {
  if (!isNaN(lados)) {
    lados = parseInt(lados);

    console.log("\nSu figura es:");
    switch (lados) {
      case 3:
        console.log("Un Triangulo");
        break;
      case 4:
        console.log("Un Cuadrilátero");
        break;
      case 5:
        console.log("Un Pentágono");
        break;
      case 6:
        console.log("Un Hexágono");
        break;
      default:
        console.log("Una figura no reconocida");
    }
  } else console.log("ERROR: solo se pueden ingresar numeros en este apartado.");
  cfg.close();
});
