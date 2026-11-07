/*
  Tarea 2: Fábrica de funciones
  Cree una función de orden superior llamada crearMultiplicador que reciba un
  número (el factor) y devuelva una nueva función que multiplique cualquier
  número por ese factor. Luego, cree un "duplicador" (factor 2) y un "triplicador"
  (factor 3), y pruebe ambas funciones con un número para mostrar los
  resultados.
*/

function crearMultiplicador(factor) {
  return (numero) => numero * factor;
}

const duplicador = crearMultiplicador(2);
const triplicador = crearMultiplicador(3);

console.log("--- Resultados ---");
console.log(` -Duplicador: ${duplicador(2)}`);
console.log(` -Triplicador: ${triplicador(2)}`)
