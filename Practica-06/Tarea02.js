/*
Tarea 2: Números primos
Solicite un número N. Usando un bucle FOR, determine si el número es primo o no. Un número primo solo es divisible entre 1 y sí mismo. Muestre el resultado. Además, muestre todos los números primos desde 1 hasta N.
*/

const readline = require('readline');

const np = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const primos = (N) => {
  let numerosDivisibles = "";
  let numerosNoDivisibles = "";
  let contNumerosDivicibles = 0;
  let numerosPrimos = "";

  for (let i = 1; i <= N; i++) {
    if (N % i == 0) {
      numerosDivisibles += `${i}, `;
      contNumerosDivicibles++;
    } else numerosNoDivisibles += `${i}, `;

    let numerop = 0;
    for (let j = 1; j <= i; j++)
      if (i % j == 0)
        numerop++;

    if (numerop == 2) numerosPrimos += `${i}, `;
  }
  return {
    numeroprimo: (contNumerosDivicibles == 2) ? "Es un numero primo": "No es un numero primo",
    divisible: numerosDivisibles.slice(0, -2),
    noDivisible: numerosNoDivisibles.slice(0, -2),
    cantidadPrimos: numerosPrimos.slice(0, -2)
  }
}


np.question("Ingrese un numero entero: ", (N) => {
  if (!isNaN(N)) {
    const primo = primos(parseInt(N));
    console.log(`El numero ${N}: ${primo.numeroprimo}.\nNumeros divisibles: ${primo.divisible}.\nNumeros no divisibles: ${primo.noDivisible}.\nNumeros primos 1 al ${N}: ${primo.cantidadPrimos}.`);
  } else console.log("Solo puede ingresar numeros.");
  np.close();
});
