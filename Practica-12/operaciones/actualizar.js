const { guardarDatos } = require('../database/database');

const actualizarVehiculo = (rl, vehiculos, callback) => {
  rl.question("Ingrese la placa del vehiculo a actualizar: ", entrada => {
    const index = vehiculos.findIndex(v => v.placa === entrada.trim().toUpperCase());
    if (index === -1) {
      console.log("\n ERROR: Vehiculo no encontrado.");
      return callback();
    }
    const vehiculo = vehiculos[index];
    console.log("\n Vehiculo encontrado. Presione Enter para conservar el dato actual.");
    rl.question(`Nueva marca (${vehiculo.marca}): `, marca => {
      rl.question(`Nuevo modelo (${vehiculo.modelo}): `, modelo => {
        rl.question(`Nuevo año (${vehiculo.año}): `, añoEntrada => {
          rl.question(`Nuevo precio (${vehiculo.precio}): `, precioEntrada => {
            const año = añoEntrada.trim() ? Number(añoEntrada) : vehiculo.año;
            const precio = precioEntrada.trim() ? Number(precioEntrada) : vehiculo.precio;
            if (!Number.isInteger(año) || año < 1886 || año > 2100 || !Number.isFinite(precio) || precio < 0) {
              console.log("\n ERROR: año o precio invalido. No se realizaron cambios.");
              return callback();
            }
            vehiculo.marca = marca.trim() || vehiculo.marca;
            vehiculo.modelo = modelo.trim() || vehiculo.modelo;
            vehiculo.año = año;
            vehiculo.precio = precio;
            guardarDatos(vehiculos);
            console.log("\n Vehiculo actualizado correctamente.");
            callback();
          });
        });
      });
    });
  });
};
module.exports = actualizarVehiculo;
