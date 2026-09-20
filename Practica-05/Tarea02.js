/*
Tarea 2: Clasificador de números con múltiples condiciones
Solicite tres números al usuario (a, b, c). Usando IF...ELSE IF y operadores
lógicos, determine y muestre:
- Si los tres son iguales: "Los tres números son iguales"
- Si los tres son diferentes: "Los tres números son diferentes"
- Si exactamente dos son iguales: "Hay dos números iguales"
- Además, indique cuál de los tres números es el mayor y cuál es el menor.
- Si algún número es negativo, agregue el mensaje "Hay números negativos".
*/

const readline = require('readline');

const cnmc = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

cnmc.question("Ingrese el primer numero: ", a => {
  cnmc.question("Ingrese el segundo numero: ", b => {
    cnmc.question("Ingrese el tercer numero: ", c => {
      a = parseFloat(a);
      b = parseFloat(b);
      c = parseFloat(c);
      if (a == b || b == c || a == c) {
        console.log("Los tres números son iguales");
      } else if (a != b && b != c && a != c) {
        console.log("Los tres números son diferentes");
      } else if (a == b || b == c) {
        console.log("Hay dos números iguales");
      }

      if (a > b && a > c) {
        console.log("El primer numero es mayor a los otros dos.");
      } else if (b > a && b > c) {
        console.log("El segundo numero es mayor a los otros dos.");
      } else if (c > a && c > b) {
        console.log("El tercer numero es mayor a los otros dos.");
      }

      if (!(a > b && a < c)) {
        console.log("El primer numero es menor a los otros dos.");
      } else if (!(b > a && b > c)) {
        console.log("El segundo numero es menor a los otros dos.");
      } else if (!(c > a && c > b)) {
        console.log("El tercer numero es menor a los otros dos.");
      }

      if (a < 0 || b < 0 || c < 0) console.log("Hay números negativos");

      cnmc.close();
    });
  });
});
