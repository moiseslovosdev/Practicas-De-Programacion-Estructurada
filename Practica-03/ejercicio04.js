/*
Categoría por edad: Solicite la edad del usuario. Clasifíquelo en: niño (0-12), adolescente (13-17), adulto (18-64) o adulto mayor (65+).
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese su edad: ", (edad) => {

  if (edad >= 0 && edad <= 12) {
    console.log("Usted es un niño.");
  } else if (edad <= 17) {
    console.log("Usted es un adolescente.");
  } else if (edad <= 64) {
    console.log("Usted es un adulto.");
  } else if (edad >= 65){
    console.log("Usted es un adulto mayor.")
  } else {
    console.log("No se pueden ingresar ")
  }

  rl.close();
});
