const { guardarDatos } = require('../database/database');

const eliminarVehiculo = (rl, vehiculos, callback) => {
  rl.question('Ingrese la placa del vehiculo a eliminar: ', entrada => {
    const placa = entrada.trim().toUpperCase();
    const existe = vehiculos.some(v => v.placa === placa);
    if (!existe) console.log('\n ERROR: Vehiculo no encontrado.');
    else {
      const restantes = vehiculos.filter(v => v.placa !== placa);
      vehiculos.length = 0;
      vehiculos.push(...restantes);
      guardarDatos(vehiculos);
      console.log('\n Vehiculo eliminado y archivo JSON actualizado.');
    }
    callback();
  });
};
module.exports = eliminarVehiculo;
