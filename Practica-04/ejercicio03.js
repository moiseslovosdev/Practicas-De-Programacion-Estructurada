/*
Menú de conversiones: Muestre un menú con las siguientes opciones: 1) Convertir de grados Celsius a Fahrenheit, 2) Convertir de grados Fahrenheit a Celsius, 3) Salir. Usando Switch, ejecute la opción seleccionada. Fórmulas: °F = °C × 9/5 + 32, °C = (°F - 32) × 5/9.
*/

import readline from "node:readline";

const mc = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Bienvenido al menu\nOpciones:\n1) Convertir de grados Celsius a Fahrenheit\n2) Convertir de grados Fahrenheit a Celsius.\n3) Salir.");

mc.question("Seleccione una opcion: ", (opcion) => {
  if (!isNaN(opcion)) {
    opcion = parseInt(opcion);

    if (opcion != 3) {
      mc.question(`Cuantos grados ${opcion == 1 ? "Celsius" : "Fahrenheit"} desea convertir: `, (grados) => {
          if (!isNaN(grados)) {
            grados = parseFloat(grados);

            switch (opcion) {
              case 1:
                console.log(`Es igual a: ${(grados * 9 / 5 + 32).toFixed(2)}°F`);
                break;
              case 2:
                console.log(`Es igual a: ${((grados - 32) * 5 / 9).toFixed(2)}°C`);
                break;
              default:
                console.log("ERROR: Opcion invalida.");
            }
          } else console.log("ERROR: Solo se pueden ingresar numeros.");

          mc.close();
        });
    } else {
      console.log("Saliendo del sistema.");
      mc.close();
    }
  } else {
    console.log("ERROR: Solo se pueden ingresar numeros.");
    mc.close();
  }
});
