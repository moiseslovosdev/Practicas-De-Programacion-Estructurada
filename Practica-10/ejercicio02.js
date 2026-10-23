/*

Función generadora de tabla de multiplicar: Cree una función que reciba un número y devuelva un arreglo
con su tabla de multiplicar del 1 al 10 (usando for). Luego imprima el arreglo.

*/

function tablaMutiplicar(numero) {
  if (typeof numero !== 'number' || !Number.isFinite(numero)) {
    return 'El dato debe ser un numero.';
  }

  console.log(`La tabla de multiplicar del ${numero} es`);

  for (let i = 0; i <= 10; i++){
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

tablaMutiplicar(4);
