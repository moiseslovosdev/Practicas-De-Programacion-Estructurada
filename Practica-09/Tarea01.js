/*
  Tarea 1: Funciones recursivas para cálculos matemáticos
    Cree una función recursiva que calcule el factorial de un número entero positivo. Cree otra función
    recursiva que calcule la potencia de una base elevada a un exponente sin usar el operador **. Cree una
    tercera función recursiva que sume todos los números desde 1 hasta n. Solicite al usuario un número, y
    muestre el factorial, la potencia (usando ese número como base y como exponente) y la suma hasta ese
    número.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const validar = (numero) => {
  if (isNaN(numero)) {
    console.log("ERROR: solo se pueden ingresar numeros que este apartado.");
    rl.close();
    return true;
  }

  if (!(numero % 1 == 0)) {
    console.log("ERROR: No se pueden ingresar decimales.");
    rl.close();
    return true;
  }

  if (numero <= 0) {
    console.log("ERROR: No se pueden ingresar numeros negativos y ceros.");
    rl.close();
    return true;
  }
  return false
}


function factorial(numero) {
  if (numero == 0 || numero == 1) return 1;
  return numero * factorial(numero - 1);
}


function potencia(numero, exponente = numero) {
  if (exponente === 0) return 1;
  return numero * potencia(numero, exponente - 1);
}

function suma(n) {
  if (n <= 1) return 1;
  return n + suma(n - 1);
}

rl.question("Ingrese un numero: ", numero => {
  numero = parseFloat(numero);

  if (validar(numero)) {
    rl.close();
    return;
  }

  console.log(`El factorial del numero ${numero} es: ${factorial(numero)}.\nLa pontencia del numero ${numero} es: ${potencia(numero)}.\nLa suma hasta ese numero del numero ${numero} es: ${suma(numero)}`);

  rl.close();
});
