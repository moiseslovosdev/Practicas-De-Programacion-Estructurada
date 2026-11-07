/*
  Tarea 3: Procesamiento de arreglo de objetos con forEach y filter
  Cree un arreglo de objetos que represente producto, donde cada objeto tenga
  nombre y precio (por ejemplo: { nombre: "Laptop", precio: 800 }).
    1. Use forEach para recorrer el arreglo y mostrar en consola el nombre y precio de cada producto.
    2. Use filter para obtener un nuevo arreglo solo con los producto que cuesten más de $100.
    3. Muestre el nuevo arreglo filtrado en consola.
*/

const productos = [
  { nombre: "Laptop", precio: 800 },
  { nombre: "Computadora Desktop", precio: 1200 },
  { nombre: "Mouse", precio: 50 },
  { nombre: "Teclado", precio: 60 }
];
console.log("\nTodos los produtos.\n");
productos.forEach((producto, i) => console.log(` Producto #${i + 1}\n  -Nombre: ${producto.nombre}\n  -Precio: $${producto.precio}`));

const productoMayores100 = productos.filter(producto => producto.precio > 100);

console.log("\nProductos mayores a 100 dolares.\n");
productoMayores100.forEach((producto, i) => console.log(` Producto #${i + 1}\n  -Nombre: ${producto.nombre}\n  -Precio: $${producto.precio}`));
