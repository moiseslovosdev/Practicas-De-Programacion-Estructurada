const fs = require('fs');
const path = require('path');
const ARCHIVO_JSON = path.join(__dirname, '..', 'vehiculos.json');

const cargarDatos = () => {
  if (fs.existsSync(ARCHIVO_JSON)) {
    const contenido = fs.readFileSync(ARCHIVO_JSON, 'utf8');
    return JSON.parse(contenido);
  }
  fs.writeFileSync(ARCHIVO_JSON, JSON.stringify([], null, 2));
  return [];
};

const guardarDatos = (vehiculos) => fs.writeFileSync(ARCHIVO_JSON, JSON.stringify(vehiculos, null, 2));
module.exports = { cargarDatos, guardarDatos };
