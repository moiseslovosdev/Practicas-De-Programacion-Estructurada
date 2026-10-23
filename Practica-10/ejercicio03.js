/*

  Función para filtrar números: Cree una función que reciba un arreglo de números y use un
  bucle for para crear un nuevo arreglo solo con los números que sean pares y mayores a 10.

*/

function filtrarNumeros(arreglo) {
  let paresymayores10 = [];

  for (const numero of arreglo) if (numero > 10 && numero % 2 == 0) paresymayores10.push(numero);

  return paresymayores10;
}


const arregloNum = [1, 40, 20, 43, 56, 32, 65, 32, 76, 32, 45];

const numerosPares = filtrarNumeros(arregloNum);

console.log(numerosPares);
console.log("");
for (const numero of numerosPares)
  console.log(`Numero par y mayor que 10: ${numero}.`);
