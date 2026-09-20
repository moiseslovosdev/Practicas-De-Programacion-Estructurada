/*
Ejercicio Práctico 2: Clasificador de triángulos

Solicite las longitudes de los tres lados de un triángulo.

    Primero valide que los lados puedan formar un triángulo (la suma de dos lados debe ser mayor que el tercero).
    Si es válido, clasifíquelo usando Switch según su tipo: Equilátero (tres lados iguales), Isósceles (dos lados iguales) o Escaleno (tres lados diferentes).

Muestre: el tipo de triángulo y su perímetro.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Cladificador de Triangulos.\nIngrese la longitud el primer lado: ", lado1 => {
  rl.question("Ingrese la longitud el segundo lado: ", lado2 => {
    rl.question("Ingrese la longitud el tercer lado: ", lado3 => {
      if (!(isNaN(lado1) && isNaN(lado2) && isNaN(lado3))) {
        lado1 = parseFloat(lado1);
        lado2 = parseFloat(lado2);
        lado3 = parseFloat(lado3);
        if (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado3 + lado1 > lado2) {
          let tipoFigura = 0;
          if (lado1 == lado2 && lado2 == lado3) tipoFigura = 1;
          else if ((lado1 == lado2) || (lado2 == lado3) || (lado3 == lado1)) tipoFigura = 2;
          else tipoFigura = 3;

          switch (tipoFigura) {
            case 1:
              console.log(`Este es un triangulo: Equilátero.\nSu perimetro es: ${lado1 + lado2 + lado3}`);
              break;
            case 2:
              console.log(`Este es un triangulo: Isósceles.\nSu perimetro es: ${lado1 + lado2 + lado3}`);
              break;
            case 3:
              console.log(`Este es un triangulo: Escaleno.\nSu perimetro es: ${lado1 + lado2 + lado3}`);
              break;
          }
        } else {
          console.log("Este no es un triangulo");
        }

      } else {
        console.log("ERROR: Solo se pueden ingresar numeros en este apartado.");
      }

      rl.close();
    });
  });
});
