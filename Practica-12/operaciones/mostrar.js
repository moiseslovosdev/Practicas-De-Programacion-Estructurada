const mostrarVehiculos = (vehiculos, callback) => {
  console.log(`\n LISTA DE VEHICULOS DESDE EL ARCHIVO JSON\n${vehiculos.length === 0
    ? "No hay vehiculos registrados en el archivo."
    : JSON.stringify(vehiculos, null, 2)}`);
  callback();
};
module.exports = mostrarVehiculos;
