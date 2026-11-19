const readline = require('readline');
const { cargarDatos } = require('./database/database');

const insertarVehiculo = require('./operaciones/insertar');
const mostrarVehiculos = require('./operaciones/mostrar');
const actualizarVehiculo = require('./operaciones/actualizar');
const eliminarVehiculo = require('./operaciones/eliminar');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const vehiculos = cargarDatos();

const menuPrincipal = () => {
  console.log("\n--- CONCESIONARIA: SISTEMA DE REGISTRO DE VEHICULOS ---\n1. Insertar nuevo vehiculo.\n2. Mostrar todos los vehiculos (JSON).\n3. Actualizar vehiculo.\n4. Eliminar vehiculo.\n5. Salir.");
  rl.question("Seleccione una opcion: ", opcion => {
    switch (opcion) {
      case '1':
        insertarVehiculo(rl, vehiculos, menuPrincipal);
        break;
      case '2':
        mostrarVehiculos(vehiculos, menuPrincipal);
        break;
      case '3':
        actualizarVehiculo(rl, vehiculos, menuPrincipal);
        break;
      case '4':
        eliminarVehiculo(rl, vehiculos, menuPrincipal);
        break;
      case '5':
        console.log("\nSaliendo... Datos guardados en 'vehiculos.json'.");
        rl.close();
        break;
      default:
        console.log("\n Opcion no valida.");
        menuPrincipal();
    }
  });
};
console.log("Bienvenido al sistema CRUD modular de la concesionaria.");
menuPrincipal();
