/*
Calculadora de operaciones: Solicite dos números y un operador (+ , - , * , /). Usando Switch, realice la operación correspondiente y muestre el resultado. Si el operador no es válido, muestre un mensaje de error.
*/

import readline from "node:readline";

const co = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

co.question("Ingrese el primero numero: ", (n1) => {
  co.question("Ingrese el segundo numero: ", (n2) => {
    co.question("Ingrese el operador (+ , - , * , /): ", (operador) => {
      if (!isNaN(n1) && !isNaN(n2)) {
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);
        switch (operador) {
          case "+":
            console.log(`Su suma es: ${n1 + n2}`);
            break;
          case "-":
            console.log(`Su resta es: ${n1 - n2}`);
            break;
          case "*":
            `Su multiplicacion es: ${n1 * n2}`
            break;
          case "/":
            console.log(n2 != 0 ? `Su divicion es: ${n1 / n2}` : "No se puede dividir entre 0.");
            break;
          default:
            console.log("ERROR: Operacion seleccionada es invalida.")
        }
      } else console.log("ERROR: Solo se pueden ingresar numeros.");

      co.close();
    });
  });
});
