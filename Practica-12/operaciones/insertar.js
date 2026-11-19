const { guardarDatos } = require('../database/database');

const insertarVehiculo = (rl, vehiculos, callback) => {
  rl.question("Ingrese la placa: ", placaEntrada => {
    const placa = placaEntrada.trim().toUpperCase();
    if (!placa || vehiculos.some(v => v.placa === placa)) {
      console.log("\n ERROR: La placa esta vacia o ya existe.");
      return callback();
    }
    rl.question("Ingrese la marca: ", marcaEntrada => {
      rl.question("Ingrese el modelo: ", modeloEntrada => {
        rl.question("Ingrese el año: ", añoEntrada => {
          rl.question("Ingrese el precio ($): ", precioEntrada => {
            const marca = marcaEntrada.trim();
            const modelo = modeloEntrada.trim();
            const año = Number(añoEntrada);
            const precio = Number(precioEntrada);
            if (!marca || !modelo || !Number.isInteger(año) || año < 1886 || año > 2100 || !precioEntrada.trim() || !Number.isFinite(precio) || precio < 0) {
              console.log("\n ERROR: Datos invalidos. Verifique marca, modelo, año y precio.");
              return callback();
            }
            vehiculos.push({ placa, marca, modelo, año, precio });
            guardarDatos(vehiculos);
            console.log("\n Vehiculo registrado y guardado correctamente.");
            callback();
          });
        });
      });
    });
  });
};
module.exports = insertarVehiculo;
