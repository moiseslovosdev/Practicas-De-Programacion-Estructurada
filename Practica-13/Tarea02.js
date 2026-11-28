/*
  Inventario de Precios: Pregunte cuántos productos va a registrar.
  Use una función recursiva para pedir el precio de cada uno y
  guardarlo en un arreglo. Al finalizar, recorra el arreglo y
  muestre solo los precios mayores a $15.00, además de calcular
  la suma total de la compra.
*/

const readline = require('readline');

const Inventario = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const productos = [];

const registrarProductos = (actual, cantidadProductos) => {
  if (actual > cantidadProductos) {
    let totalPrecio = 0;

    console.log("\nProductos con precios mayores a $15.00:");

    for (const precioProducto of productos) {
      totalPrecio += precioProducto;

      if (precioProducto > 15) {
        console.log(` - $${precioProducto.toFixed(2)}`);
      }
    }

    console.log(`\n - Precio total: $${totalPrecio.toFixed(2)}`);

    Inventario.close();
    return;
  }

  Inventario.question(`Ingrese el precio del producto #${actual}: `, precioProducto => {
    precioProducto = Number(precioProducto);

    if (!Number.isFinite(precioProducto) || precioProducto <= 0) {
      console.log("ERROR: Solo se pueden ingresar numeros positivos.");
      registrarProductos(actual, cantidadProductos);
      return;
    }

    productos.push(precioProducto);
    registrarProductos(actual + 1, cantidadProductos);
  });
};

Inventario.question("Cuantos productos va a registrar?: ", cantidadProductos => {
  cantidadProductos = Number(cantidadProductos);

  if (!Number.isInteger(cantidadProductos) || cantidadProductos <= 0) {
    console.log("ERROR: Ingrese un número entero positivo.");
    Inventario.close();
    return;
  }

  registrarProductos(1, cantidadProductos);
});
