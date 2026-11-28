/*
  Registro de Edades: Solicitar las edades de varias personas
  mediante una función recursiva, guardarlas en un arreglo
  y calcular el promedio de edad.
*/

import readline from "node:readline";

const registro = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const edades = [];

const registroEdades = (actual, cantidad) => {
  if (actual > cantidad) {
    let edadTotal = 0;

    console.log("\n--- Resumen de edades ---\n");

    for (let i = 0; i < edades.length; i++) {
      edadTotal += edades[i];
      console.log(`Persona ${i + 1}: ${edades[i]} año${edades[i] === 1 ? "" : "s"}.`);
    }

    console.log(`\nPromedio de edad: ${(edadTotal / cantidad).toFixed(2)} años.`);
    registro.close();
    return;
  }

  registro.question(`Ingrese la edad de la persona #${actual}: `, edadPersona => {
    edadPersona = edadPersona.trim() === "" ? NaN : Number(edadPersona);

    if (!Number.isInteger(edadPersona) || edadPersona < 0) {
      console.log("ERROR: Edad incorrecta.");
      registroEdades(actual, cantidad);
      return;
    }

    edades.push(edadPersona);
    registroEdades(actual + 1, cantidad);
  });
};

registro.question("¿Cuántas personas desea registrar?: ", cantidadPersonas => {
  cantidadPersonas = Number(cantidadPersonas);

  if (!Number.isInteger(cantidadPersonas) || cantidadPersonas <= 0) {
    console.log("ERROR: Cantidad incorrecta.");
    registro.close();
    return;
  }

  registroEdades(1, cantidadPersonas);
});
