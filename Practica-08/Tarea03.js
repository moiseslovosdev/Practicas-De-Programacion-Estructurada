/*

Tarea 3: Funciones para manejo de cadenas
Cree las siguientes funciones: una que reciba una cadena y devuelva la cantidad de
vocales; otra que reciba una cadena y devuelva la cadena invertida; y otra que reciba una
cadena y determine si es palíndromo (se lee igual al derecho y al revés). Solicite una
palabra o frase al usuario y muestre los tres resultados.

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function contadorVocales(frase) {
  const vocales = "aeiouAEIOU";
  let contador = 0;

  for (let i = 0; i < frase.length; i++)
    if (vocales.includes(frase[i]))
      contador++;

  return contador;
}

function invertirCadena(frase) {
  return frase.split('').reverse().join('');
}

function palindromo(frase, fraseInvertida) {
  return frase === fraseInvertida ? "Si" : "No";
}

rl.question("Ingrese una frase: ", frase => {
  const cantidadVocales = contadorVocales(frase);
  const fraseInvertida = invertirCadena(frase);
  const frasePalindromo = palindromo(frase, fraseInvertida);

  console.log(`\nSu frase es: ${frase}.\n -Cantidad de vocales: ${cantidadVocales}\n-Frase invertida: ${fraseInvertida}.\n -Es palindromo: ${frasePalindromo}`);
  rl.close();
});
