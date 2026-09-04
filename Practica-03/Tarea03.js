/*
Tarea 3: Descuento por monto de compra
Solicite el monto de compra. Si es mayor a $100, aplique 15% de descuento. Si es mayor a $50, aplique 10%. En otro caso, no hay descuento. Muestre el monto original, el descuento aplicado y el total a pagar con 2 decimales.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el monto de la compra: ", (montoCompra) => {
  montoCompra = parseFloat(montoCompra);
  let descuento = 0.0;
  let montoFinal = 0.0;

  if (montoCompra > 100) {
    descuento = montoCompra * 0.15;
    montoFinal = montoCompra - descuento;
  } else if (montoFinal > 50) {
    descuento = montoCompra * 0.10;
    montoFinal = montoCompra - descuento;
  } else {
    montoFinal = montoCompra;
  }
  console.log(`Monto original: $${montoCompra}\nDescuento aplicado: $${descuento}\nTotal a pagar: $${montoFinal.toFixed(2)}`);
  rl.close();
});
