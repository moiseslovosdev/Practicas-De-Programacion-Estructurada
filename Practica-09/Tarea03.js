/*
  Tarea 3: Funciones recursivas para manejo de cadenas
    Cree las siguientes funciones recursivas: una que reciba una cadena y devuelva la
    cantidad de vocales; otra que reciba una cadena y devuelva la cadena invertida; y otra
    que reciba una cadena y determine si es palíndromo (se lee igual al derecho y al revés).
    Solicite una palabra o frase al usuario y muestre los tres resultados.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarVocales(cadena) {
    if (cadena.length === 0) return 0;
    const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
    const esVocal = vocales.includes(cadena[0]) ? 1 : 0;
    return esVocal + contarVocales(cadena.slice(1));
}

function invertirCadena(cadena) {
  if (cadena === "") return "";
  return invertirCadena(cadena.slice(1)) + cadena[0];
}

function esPalindromo(cadena) {
  const letrasValidas = "abcdefghijklmnñopqrstuvwxyzáéíóúü";
  const palabraLimpia = cadena.toLowerCase().split('').filter(caracter => letrasValidas.includes(caracter)).join('');

  function verificar(s) {
    if (s.length <= 1) return true;
    if (s[0] !== s[s.length - 1]) return false;
    return verificar(s.slice(1, s.length - 1));
  }
  return verificar(palabraLimpia);
}

rl.question('Ingrese una palabra o frase: ', (entrada) => {
  const totalVocales = contarVocales(entrada);
  const cadenaInvertida = invertirCadena(entrada);
  const palindromo = esPalindromo(entrada);

  console.log(`\nCantidad de vocales: ${totalVocales}.\nCadena invertida: ${cadenaInvertida}\nEs palíndromo?: ${palindromo ? "Si" : "No"}.`);

  rl.close();
});
