/*

  Calificaciones: Solicite la cantidad de estudiantes. Use una función recursiva para llenar un
  arreglo con sus notas (0 a 10). Al final, recorra el arreglo, cuente cuántos aprobaron (nota >= 6),
  cuántos reprobaron, y muestre la nota más alta.

*/

const readline = require('readline');

const estudiantes = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const notas = [];

const registraNotas = (actual, cantidadEstudiantes) => {
  if (actual > cantidadEstudiantes) {
    let cantidadAprobados = 0, cantidadReprobados = 0, notaAlta = 0;

    for (const nota of notas) {
      if (nota >= 6) cantidadAprobados++;
      else cantidadReprobados++;

      if (notaAlta < nota) notaAlta = nota;
    }

    console.log(`\n=== Resumen de notas ===\n - Cantidad de aprobados: ${cantidadAprobados}.\n - Cantidad de reprobados: ${cantidadReprobados}.\n - Nota mas alta: ${notaAlta}.`);

    estudiantes.close();
    return;
  }

  estudiantes.question(`Ingrese la nota del estudiante #${actual}: `, notaEstudiante => {
    notaEstudiante = notaEstudiante.trim() === "" ? NaN : Number(notaEstudiante);

    if (!Number.isFinite(notaEstudiante) || notaEstudiante < 0 || notaEstudiante > 10) {
      console.log("ERROR: La nota debe estar entre 0 y 10.");
      registraNotas(actual, cantidadEstudiantes);
      return;
    }

    notas.push(notaEstudiante);
    registraNotas(actual + 1, cantidadEstudiantes);
  });
};

estudiantes.question("Ingrese la cantidad de estudiantes: ", cantidadEstudiantes => {
  cantidadEstudiantes = Number(cantidadEstudiantes);

  if (!Number.isInteger(cantidadEstudiantes) || cantidadEstudiantes <= 0) {
    console.log("ERROR: Solo se pueden ingresar numeros enteros y mayores que 0.");
    estudiantes.close();
    return;
  }

  registraNotas(1, cantidadEstudiantes);
});
