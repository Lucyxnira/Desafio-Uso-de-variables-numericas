// Ingresar ambos numeros

var numero_1 = parseInt(prompt("Ingresa un número mayor a cero:"));
var numero_2 = parseInt(prompt("Ingresa otro numero mayor a cero y diferente al anterior"));

// Seleccionar realizar operación matemática

var suma = numero_1 + numero_1;
var resta = numero_1 - numero_2;
var division = numero_1 / numero_2;
var multiplicacion = numero_1 * numero_2;
var modulo = numero_1 % numero_2;

// Mostrar resultado

alert(`Resultado suma: ${suma}`);
alert(`Resultado resta: ${resta}`);
alert(`Resultado división: ${division}`);
alert(`Resultado multiplicación: ${multiplicacion}`);
alert(`Resultado modulo: ${modulo}`);
