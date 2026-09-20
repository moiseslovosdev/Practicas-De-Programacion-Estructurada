/*
Tarea 1: Sistema de acceso bancario
Solicite al usuario su tipo de tarjeta (1=Débito, 2=Crédito, 3=Premium) y el monto
a retirar. Usando Switch, asigne un límite de retiro según el tipo de tarjeta:
1=$500, 2=$1000, 3=$2000. Luego, valide con IF si el monto solicitado es menor
o igual al límite y si es múltiplo de $10. Si cumple ambas condiciones, muestre
"Retiro exitoso". Si el monto excede el límite, muestre "Límite excedido". Si no
es múltiplo de $10, muestre "El monto debe ser múltiplo de 10". Si el tipo de
tarjeta no es válido, muestre "Tarjeta no válida".
*/

const readline = require('readline');

const sab = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log("Sistema De Acceso Bancario\nTipo de tarjetas:\n1. Debito\n2. Credito.\n3.Premiun.")
sab.question("Ingrese su tipo de tarjeta: ", Tarjeta => {
  sab.question("Ingrese el monto a retirar: ", montoTarjeta => {
    Tarjeta = parseInt(Tarjeta);
    montoTarjeta = parseFloat(montoTarjeta);
    switch (Tarjeta) {
      case 1:
        Tarjeta = 500;
        break;
      case 2:
        Tarjeta = 1000;
        break;
      case 3:
        Tarjeta = 2000;
        break;
      default:
        console.log("Tarjeta no válida");
        sab.close();
        return;
    }

    if (montoTarjeta % 10 == 0) {
      if (montoTarjeta >= 0 && montoTarjeta <= Tarjeta) {
        console.log("Retiro exitoso");
      } else if (montoTarjeta >= 500.01 && montoTarjeta <= Tarjeta) {
        console.log("Retiro exitoso");
      } else if (montoTarjeta >= 1000.01 && montoTarjeta <= Tarjeta) {
        console.log("Retiro exitoso");
      } else {
        console.log("Límite excedido");
      }
      sab.close();
    } else {
      console.log("El monto debe ser múltiplo de 10");
      sab.close();
    }
  });
});
