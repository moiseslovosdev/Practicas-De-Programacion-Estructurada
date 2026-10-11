/*

Tarea 2: Cajero automático mejorado (DO...WHILE)
  Cree un cajero con saldo inicial de $1000. El menú debe repetirse hasta que el usuario salga: 1)
  Consultar saldo, 2) Retirar, 3) Depositar, 4) Salir. Valide que los retiros no excedan el saldo y que
  los depósitos sean mayores a 0. Use Switch y DO...WHILE.

*/

const readlineSync = require("readline-sync");

let saldoInicial = 1000;

let opcion = 0;

const validar = (str) => {
  let monto = 0;
  while (true) {
    monto = parseFloat(readlineSync.question(str));

    if (isNaN(monto)) {
      console.log("ERROR: No se permiten letras en este apartado.");
      continue;
    }

    if (monto <= 0) {
      console.log("ERROR: El monto tiene que ser mayor que 0");
      continue;
    }
    break;
  }
  return monto;
}

const retiro = () => {
  while (true) {
    let saldoRetirar = validar("Ingrese la cantidad a retirar: ");

    if (saldoRetirar <= saldoInicial) {
      saldoInicial -= saldoRetirar;
      console.log(`Su retiro de $${saldoRetirar} ha sido aprovado.`);
      break;
    } else {
      console.log("ERROR: El monto a retira no tiene que ser mayor a saldo de la cuenta.");
    }
  }
}

const deposito = () => {
  let saldoDeposito = validar("Ingrese la cantidad a depositar: ");
  console.log(`Deposito de $${saldoDeposito} ha sido aprovado.`);
  saldoInicial += saldoDeposito;
}

do {
  opcion = parseFloat(readlineSync.question("Menu cajero\n 1) Consultar saldo.\n 2) Retirar.\n 3) Depositar.\n 4) Salir.\nIngrese una opcion: "));

  if (isNaN(opcion)) {
    console.log("ERROR: No se pueden ingresar letras.");
    continue;
  }

  if (!(opcion % 1 == 0)) {
    console.log("ERROR: No se pueden ingresar decimales.");
    continue;
  }

  switch (opcion) {
    case 1:
      console.log(`Su saldo es: $${saldoInicial.toFixed(2)}.`);
      break;
    case 2:
      retiro();
      break;
    case 3:
      deposito();
      break;
    case 4:
      console.log("Gracias por usar el cajero.")
      break;
    default:
      console.log(`ERROR: La opcion #${opcion} es invalida.`);
  }

} while (opcion != 4);
