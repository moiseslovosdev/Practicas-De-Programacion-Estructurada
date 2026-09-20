/*
Tarea 3: Simulador de cajero automático con menú
Cree un programa que simule un cajero automático. Inicie con un saldo de $1000.
Muestre un menú con las opciones:
1. Consultar saldo
2. Retirar dinero
3. Depositar dinero
4. Salir
Usando Switch, ejecute la opción seleccionada:
- Opción 1: Muestre el saldo actual.
- Opción 2: Solicite el monto a retirar. Valide que sea mayor a 0, múltiplo de $5
  y que no exceda el saldo. Si cumple, reste del saldo; si no, muestre el error
  correspondiente.
- Opción 3: Solicite el monto a depositar. Valide que sea mayor a 0 y que no
  exceda $5000 en un solo depósito. Si cumple, sume al saldo; si no, muestre
  el error.
- Opción 4: Muestre "Gracias por usar el cajero" y salga.
- Si la opción no es válida, muestre "Opción no válida".
*/

const readline = require('readline');

const scam = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Cajero automático\nMenu opciones:\n1. Consultar saldo.\n2. Retirar dinero.\n3. Depositar dinero.\n4. Salir.");

scam.question("Ingrese una opcion: ", opcion => {
  if (!isNaN(opcion)) {
    opcion = parseInt(opcion);
    let saldo = 1000.00;
    switch (opcion) {
      case 1:
        console.log(`Su saldo actual es de: $${saldo}`);
        scam.close();
        break;
      case 2:
        scam.question("\nIngrese el monto a retirar: $", monto => {
          if (!isNaN(monto)) {
            monto = parseFloat(monto);
            if (monto % 5 == 0 && monto > 0) {
              if (monto <= saldo) {
                saldo -= monto;
                console.log(`Retiro de: $${monto} ha sido exitosamente.`);
              } else {
                console.log("El retiro excede el saldo actual.");
              }
            } else {
              console.log(monto > 0 ? "Su monto tiene que ser multipo de 5." : "Su monto tiene que ser mayor a 0.");
            }
          } else {
            console.log("ERROR: Solo se pueden ingresar numeros en este apartado.");
          }
          scam.close();
        });
        break;
      case 3:
        scam.question("Ingrese el monto a depositar: $", deposito => {
          if (!isNaN(deposito)) {
            deposito = parseFloat(deposito);
            if (deposito > 0 && deposito <= 5000) {
              saldo += deposito;
              console.log(`Su deposito se ha realizado de $${deposito}`);
            } else {
              console.log(deposito > 0 ? "\nValor muy alto para depositar." : "\nNo se puede depositar numeros negativos");
            }
          } else {
            console.log("\nERROR: Solo se pueden ingresar numeros en este apartado.");
          }
          scam.close();
        });
        break;
      case 4:
        console.log("\nGracias por usar el cajero.");
        scam.close();
        break;
      default:
          console.log("\nOpción no válida.");
          scam.close();
          break;
    }
  } else {
    console.log("\nERROR: Solo se pueden ingresar numeros en este apartado.");
    scam.close();
  }
});
