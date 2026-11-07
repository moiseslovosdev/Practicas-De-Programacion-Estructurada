/*
  Tarea 1: Acumulación con reduce
  Cree un arreglo con las notas de un estudiante (por ejemplo: 8, 7, 9, 6, 10).
  Utilice el método reduce para calcular el promedio de las notas. Muestre el
  resultado en consola con 2 decimales.
*/

const notasEstudiante = [9, 3, 7, 7, 9, 10];

const promedio = (notasEstudiante.reduce((acumulador, nota) => acumulador + nota, 0) / notasEstudiante.length).toFixed(2);

console.log(`Promedio del estudiante: ${promedio}`);
