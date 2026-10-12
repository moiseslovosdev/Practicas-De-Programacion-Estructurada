/*

Tarea 2: Funciones para figuras geométricas
Cree funciones para calcular el área y el perímetro de las siguientes figuras: círculo, cuadrado, rectángulo y
triángulo. Cada función debe recibir los parámetros necesarios y retornar el resultado. Cree un menú con Switch
para que el usuario elija la figura y luego ingrese los datos necesarios. Muestre el área y el perímetro con 2
decimales.

*/

const readlineSync = require("readline-sync");

const validar = (str, numeroEntero) => {
  let numero = 0;

  while (true) {
    numero = parseFloat(readlineSync.question(str));

    if (isNaN(numero)) {
      console.log("ERROR: Solo se pueden ingrear numeros en este campo.");
      continue;
    }

    if (numeroEntero)
      if (!(numero % 1 == 0)) {
        console.log("ERROR: no se permiten decimales en este apartado.");
        continue;
      }

    break;
  }

  return numero;
}


function circulo(radio) {

  return {
    figura: "Circulo",
    area: (3.1416 * radio ** 2).toFixed(2) + " cm",
    perimetro: (2 * 3.1416 * radio).toFixed(2) + " cm"
  }
}

function cuadrado(lado) {
  return {
    figura: "Cuadrado",
    area: (lado ** 2).toFixed(2) + " cm²" ,
    perimetro: (lado * 4).toFixed(2) + " cm"
  }
}

function rectangulo(ancho, largo) {
  return {
    figura: "Rectangulo",
    area: (ancho * largo).toFixed(2) + " cm",
    perimetro: (2 * (ancho + largo)).toFixed(2) + " cm"
  }
}

function triangulo(base, altura, primerLado, segundoLado) {

  return {
    figura: "Triangulo",
    area: (base * altura / 2).toFixed(2) + " cm",
    perimetro: (primerLado + segundoLado + base).toFixed(2) + " cm"
  }
}


let opcion = validar("Menu de figuras\n1. Circulo.\n2. Cuadrado.\n3. Rectangulo.\n4. Triangulo.\nIngrese una opcion: ", true);

let resultado = {};
switch (opcion) {
  case 1:
    let radio = validar("\nIngrese el radio en cm: ", false);
    resultado = circulo(radio);
    break;
  case 2:
    let lado = validar("\nIngrese el lado en cm: ", false);
    resultado = cuadrado(lado);
    break;
  case 3:
    const ancho = validar("Ingrese el ancho del rectangulo (cm): ", false);
    const largo = validar("Ingrese el largo del rectangulo (cm): ", false);
    resultado = rectangulo(ancho, largo);
    break;
  case 4:
    const base = validar("Ingrese la base del triangulo (cm): ", false);
    const altura = validar("Ingrese la altura del triangulo (cm): ", false);
    const primerLado = validar("Ingrese el primer lado (cm): ", false);
    const segundoLado = validar("Ingrese el segundo lado (cm): ", false)
    resultado = triangulo(base, altura, primerLado, segundoLado);
    break;
  default:
    console.log(`ERROR: La opcion #${opcion} no es valida.`);
}

console.log(`\nCalculo del ${resultado.figura}\n -Total Area: ${resultado.area}.\n -Total del perimetro: ${resultado.perimetro}.\n`);
