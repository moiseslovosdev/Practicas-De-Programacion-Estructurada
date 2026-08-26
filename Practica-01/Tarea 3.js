/* Tarea 3: Cálculo de Consumo de Electricidad
Una factura de electricidad es un documento que todos recibimos en nuestros hogares. En
esta tarea, usted simulará el cálculo de una factura eléctrica, incluyendo impuestos, que
es un proceso común en empresas de servicios.
Instrucciones:
Declare las siguientes variables:
• Una variable para los kilowatts (kWh) consumidos durante el mes
• Una variable con el precio fijo por kilowatt, que es $0.15
Con estos datos, realice los siguientes cálculos:
1. Costo base: Multiplique los kilowatts consumidos por el precio por kilowatt
2. Impuesto: Calcule el 10% del costo base (multiplique el costo base por 0.10)
3. Costo total: Sume el costo base más el impuesto
Finalmente, muestre en consola un resumen de la factura que incluya:
• La cantidad de kilowatts consumidos
• El costo base sin impuestos
• El monto del impuesto (10%)
• El costo total a pagar
Ejemplo de salida esperada:
Consumo: 250 kWh
Costo sin impuesto: $37.50
Impuesto (10%): $3.75
Costo total a pagar: $41.25 */

let kWk = 250;
let precio_kWh = 0.15;

let costo_base = kWk * precio_kWh;
let impuesto = costo_base * 0.10;
let costo_total = costo_base + impuesto;

console.log(`Cantidad de kilowatts consumidos: ${kWk} kWh.`);
console.log(`El costo base sin impuestos: $${costo_base.toFixed(2)}`)
console.log(`El monto del impuesto: $${impuesto.toFixed(2)}`);
console.log(`El costo total a pagar: $${costo_total}`);
