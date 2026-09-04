/*
Tarea 4: Validar requisitos de empleado
Solicite nombre, edad y años de experiencia. Valide que la edad sea mayor a 18 Y que la experiencia sea mayor a 0. Si cumple ambas condiciones, muestre "Candidato válido". Si no cumple, muestre "No cumple con los requisitos".
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese su nombre: ", (nombre) => {
  rl.question("Ingrese su edad: ", (edad) => {
    rl.question("Cuantos anous de experiencia tiene: ", (anousExp) => {

      if (edad >= 18 && anousExp > 0) {
        console.log("Candidato válido");
      } else {
        console.log("No cumple con los requisitos");
      }

      rl.close();
    });
  });
});
