/*
Día de la semana: Solicite un número del 1 al 7. Utilizando Switch, muestre el día de la semana correspondiente (1=Lunes, 7=Domingo). Si el número no está en ese rango, muestre "Día no válido".
*/
import readline from "node:readline";

const ds = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

ds.question("Ingrese un numero del 1 - 7: ", (numeroDia) => {
  switch (numeroDia) {
    case "1":
      console.log("lunes");
      break;
    case "2":
      console.log("Martes");
      break;
    case "3":
      console.log("Miercoles");
      break;
    case "4":
      console.log("Jueves");
      break;
    case "5":
      console.log("Viernes");
      break;
    case "6":
      console.log("Sabado");
      break;
    case "7":
      console.log("Domingo");
      break;
    default:
      console.log("Dia no valido.");
  }
  ds.close();
});
