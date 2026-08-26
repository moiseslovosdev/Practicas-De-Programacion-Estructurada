/*TAREA
Tarea 1: Cálculo de Perímetro y Área de un Círculo
Un círculo es una figura geométrica muy común en matemáticas e ingeniería. En esta
tarea, usted necesita calcular dos propiedades importantes de un círculo: su perímetro
(también llamado circunferencia) y su área.
Instrucciones:
Declare una variable que contenga el radio de un círculo (puede usar cualquier valor
numérico que desee). Luego, realice los siguientes cálculos:
• Perímetro o Circunferencia: Utilice la fórmula 2 × π × radio. Este cálculo le da la
distancia alrededor del círculo.
• Área: Utilice la fórmula π × radio². Este cálculo le da el espacio total dentro del
círculo.
Para este ejercicio, considere que π (pi) es aproximadamente 3.14159. Ambos resultados
deben mostrarse en consola redondeados a dos decimales. Incluya un mensaje
descriptivo que indique claramente qué valor es el perímetro y cuál es el área.
Ejemplo de salida esperada:
Radio: 5
Perímetro: 31.42
Área: 78.54 */

let radio = 5;

let circunferencia = 2 * 3.14159 * radio;
let area = 3.14159 * radio ** 2;

console.log(`Radio: ${radio.toFixed(2)}`);
console.log(`Perímetro: ${circunferencia.toFixed(2)}`);
console.log(`Área: ${area.toFixed(2)}`);
