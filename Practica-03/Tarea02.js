/*
Tarea 2: Comparar calificaciones
Solicite al usuario dos calificaciones (0-100). Compare cuál es la más alta. Si son iguales, indíquelo. Muestre un mensaje descriptivo con el resultado.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese su primera nota (0-100): ", nota1 => {
  rl.question("Ingrese su segunda nota: ", nota2 => {
    if (nota1 == nota2) {
      console.log("Sus dos notas son iguales" + nota1 + " = " + nota2);
    } else {
      console.log("Sus dos notas no son iguales" + nota1 + " != " + nota2);
    }
    rl.close();
  })
});
