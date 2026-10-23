/*
  Tarea 2: Funciones recursivas con figuras y menú
    Cree funciones recursivas para calcular lo siguiente: una que sume los primeros n números pares; otra que
    sume los primeros n números impares; y otra que calcule el n-ésimo término de la serie de Fibonacci. Cree
    un menú con Switch para que el usuario elija la operación, luego ingrese el valor de n. Muestre el resultado
    con mensajes descriptivos.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const validar = (numero) => {
  if (isNaN(numero)) {
    console.log("ERROR: No se puede ingrear letras.");
    return true;
  }

  return false;
}

function suma_numero_pares(n, contador = 0) {
  if (n == 0) return contador;
  if (n % 2 == 0) contador++;
  return suma_numero_pares(n - 1, contador);
}

function suma_numero_impares(n, contador = 0) {
  if (n == 0) return contador;
  if (!(n % 2 == 0)) contador++;
  return suma_numero_pares(n - 1, contador);
}

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

rl.question("Menu:\n1. Suma de los numero pares.\n2. Suma de los numeros impares.\n3. Calculo de n-ésimo término de la serie de Fibonacci.\n4. Salir.\nIngrese una opcion: ", opcion => {
  opcion = parseFloat(opcion);

  if (validar(opcion)) {
    rl.close();
    return;
  }

  switch (opcion) {
    case 1:
      rl.question("\nSuma de numeros pares.\nIngrese un numero: ", n => {
        n = parseFloat(n);
        if (validar(n)) {
          rl.close();
          return;
        }
        console.log(`El numero ${n} tiene: ${suma_numero_pares(n)} numeros pares.`);
        rl.close();
      });
      break;
    case 2:
      rl.question("\nSuma de numeros impares.\nIngrese un numero: ", n => {
        n = parseFloat(n);
        if (validar(n)) {
          rl.close();
          return;
        }
        console.log(`El numero ${n} tiene: ${suma_numero_impares(n)} numeros impares.`);
        rl.close();
      });
      break;
    case 3:
      rl.question("\nCalculo de n-ésimo término de la serie de Fibonacci.\nIngrese un numero: ", n => {
        n = parseFloat(n);
        if (validar(n)) {
          rl.close();
          return;
        }

        console.log(`Su calculo de n-ésimo término de la serie de Fibonacci es: ${fibonacci(n)}`);
        rl.close();
      });
      break;
    case 4:
      console.log("Goodbye");
      rl.close();
      break;
    default:
      console.log(`ERROR: Opcion #${opcion} no es valida.`);
      rl.close();
  }

});
