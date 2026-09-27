/*
Tarea 1: Factorial de un número
Solicite un número entero positivo al usuario. Usando un bucle FOR, calcule y muestre su factorial. Ejemplo: 5! = 5 × 4 × 3 × 2 × 1 = 120.
*/

const readline = require('readline');

const fn = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

fn.question("Ingrese un numero positivo: ", (numero) => {
  if (!isNaN(numero) && numero >= 0) {
    numero = parseInt(numero);
    if (numero > 1) {
      let resultadoFactorial = 1;
      let representacionFactorial = "";
      for (let i = numero; i > 0; i--){
        resultadoFactorial *= i;
        representacionFactorial += `${i} x `;
      }
      console.log(`${numero}! = ${representacionFactorial.slice(0, -3)} = ${resultadoFactorial}`);
    } else {
      console.log(`${numero}! = 1`);
    }
  } else console.log("ERROR:", isNaN(numero) ? "Solo se pueden ingresar numeros." : "El numero tiene que ser positivo.");
  fn.close();
});
