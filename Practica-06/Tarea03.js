/*
Tarea 3: Promedio de calificaciones
Solicite al usuario cuántas calificaciones desea ingresar. Usando un bucle FOR y readline, solicite cada calificación, acumule la suma y al final calcule y muestre el promedio. Además, muestre la calificación más alta y la más baja ingresada.
*/

const readline = require('readline');

const pc = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const validadorCantidadNota = (cantidadNotas) => {
  let msj = "";
  let estado = false;
  const num = Number(cantidadNotas);

  if (cantidadNotas.trim() === "") {
    msj = "No se puede dejar el campo vacío.";
  } else if (isNaN(num)) {
    msj = "Solo se pueden ingresar números.";
  } else if (num % 1 !== 0) {
    msj = "Solo se pueden ingresar números enteros.";
  } else if (num <= 0) {
    msj = "Debe ingresar al menos 1 nota.";
  } else {
    estado = true;
  }

  return {
    mensaje: msj,
    estado: estado
  };
};

const validadorNotaUnicas = (nota) => {
  let estado = false;
  let msj = "";

  const num = Number(nota);

  if (nota.trim() === "") {
    msj = "No se puede dejar el campo vacío.";
  } else if (isNaN(num)) {
    msj = "Solo se pueden ingresar números.";
  } else if (num < 0 || num > 10) {
    msj = "Solo se pueden ingresar números del 0 al 10.";
  } else {
    estado = true;
  }

  return {
    mensaje: msj,
    estado: estado
  };
};

const preguntar = (texto) => {
  return new Promise((resolve) => {
    pc.question(texto, (respuesta) => resolve(respuesta));
  });
};

async function main() {
  while (true) {
    let cantidadNotas = await preguntar("Cuantas notas desea ingresar: ");
    let condicion = validadorCantidadNota(cantidadNotas);

    if (condicion.estado) {
      cantidadNotas = parseInt(cantidadNotas);
      let nota = 0;

      let notaAlta = 0;
      let notaBaja = null;
      let totalSuma = 0;

      for (let i = 1; i <= cantidadNotas; i++) {
        nota = await preguntar(`Ingrese su nota #${i}: `);
        let condicionNota = validadorNotaUnicas(nota);

        if (condicionNota.estado) {
          nota = parseFloat(nota);
          if (nota > notaAlta) notaAlta = nota;
          if (notaBaja === null || nota < notaBaja) notaBaja = nota;
          totalSuma += nota;
        } else {
          console.log(condicionNota.mensaje);
          i--;
        }
      }

      let promedio = (totalSuma / cantidadNotas).toFixed(2);
      console.log(`\nPromedio de nota es de: ${promedio}\nNota más alta: ${notaAlta.toFixed(2)}\nNota más baja: ${notaBaja.toFixed(2)}`);
      pc.close();
      break;
    } else {
      console.log(condicion.mensaje);
    }
  }
}

main();
