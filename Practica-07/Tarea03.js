/*

Tarea 3: Inventario de productos (FOR...OF y FOR...IN)
  Cree un arreglo de objetos que represente un inventario con al menos 4 productos. Cada
  producto debe tener: nombre, precio y cantidad. Usando FOR...OF, recorra el arreglo y muestre
  cada producto con su valor total (precio × cantidad). Además, usando FOR...IN, recorra un
  objeto que represente el resumen del inventario (total de productos, valor total del inventario) y
  muestre sus propiedades.

*/

const inventario = [
  {
    nombre: "Laptop", precio: 800, cantidad: 5
  },
  {
    nombre: "Mouse", precio: 25, cantidad: 20
  },
  {
    nombre: "Teclado", precio: 45, cantidad: 15
  },
  {
    nombre: "Monitor", precio: 200, cantidad: 8
  }
];

let totalProductos = 0;
let valorInventarioTotal = 0;

for (const producto of inventario) {
  const valorTotalProducto = producto.precio * producto.cantidad;
  totalProductos += producto.cantidad;
  valorInventarioTotal += valorTotalProducto;

  console.log(`Producto: ${producto.nombre}`);
  console.log(` Precio unitario: $${producto.precio}`);
  console.log(` Cantidad: ${producto.cantidad}`);
  console.log(` Precio total: $${valorTotalProducto}\n`);
}

const resumenInventario = {
  totalStock: totalProductos,
  ValorInventario: valorInventarioTotal
};

console.log("Resumen de inventario.");
for (const propiedad in resumenInventario) {
  console.log(`${propiedad}: ${resumenInventario[propiedad]}`);
}
