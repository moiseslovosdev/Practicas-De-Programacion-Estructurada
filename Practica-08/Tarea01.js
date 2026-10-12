/*
Tarea 1: Sistema de calificaciones con funciones
  Cree una función que reciba una calificación numérica (0-100) y devuelva la letra correspondiente (A, B, C, D, F).
  Cree otra función que reciba un arreglo de calificaciones y devuelva el promedio. Solicite al usuario cuántas
  calificaciones desea ingresar, almacene cada una en un arreglo, y al final muestre: cada calificación con su letra, el
  promedio y la letra del promedio.
*/
const readlineSync = require("readline-sync");

const validacion = (str, numeroEntero, notaValidacion, mayor0) => {
  let numero = 0;
  while (true) {
    numero = parseFloat(readlineSync.question(str));

    if (isNaN(numero)) {
      console.log("ERROR: No se pueden ingrear letras en este apardato.");
      continue;
    }

    if (mayor0)
      if (numero <= 0) {
        console.log("ERROR: No pueden ingresar numeros menores y iguales que 0");
        continue;
      }

    if (numeroEntero)
      if (!(numero % 1 == 0)) {
        console.log("ERROR: No puede ingresar numeros decimales.");
        continue;
      }

    if (notaValidacion)
      if (numero < 0 || numero > 100) {
        console.log("ERROR: La nota tiene que ser mayor o igual a 0 o 100");
        continue;
      }
    break;
  }

  return numero;
}

function calificacionLetra(calificacion) {
  if (calificacion >= 90) return 'A';
  else if (calificacion >= 80) return 'B';
  else if (calificacion >= 70) return 'C';
  else if (calificacion >= 60) return 'D';
  else return 'F';
}

function promedio(notas) {
  let promedio = 0;

  for (const nota of notas) promedio += nota;

  return promedio / notas.length;
}

let n = validacion("Ingrese cuantas notas va ingresar: ", true, false, true);
let notas = [];

for (let i = 1; i <= n; i++) notas.push(validacion(`Ingrese la nota #${i}: `, false, true, false));

for (let i = 0; i < notas.length; i++) console.log(`Nota #${i+1}: ${notas[i]} - letra calificacion: ${calificacionLetra(notas[i])}`)

let promedios = promedio(notas);
console.log(`\nPromedio de notas: ${promedios} - letra calificacion: ${calificacionLetra(promedios)}`);
