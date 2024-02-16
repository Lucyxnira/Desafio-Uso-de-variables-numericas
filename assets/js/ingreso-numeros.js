// Solicitar datos al usuario
var numero_1 = parseInt(prompt("Ingresa el primer número: "));
var numero_2 = parseInt(prompt("Ingresa el segundo número: "));
var numero_3 = parseInt(prompt("Ingresa el tercer número: "));
var numero_4 = parseInt(prompt("Ingresa el cuarto número: "));
var numero_5 = parseInt(prompt("Ingresa el quinto número: "));

// Realizar operación
var suma = numero_1 + numero_2 + numero_3 + numero_4 + numero_5;
var promedio = suma / 5;

// Mostrar resultados
alert(`la suma de los numeros es ${suma}, y su promedio es ${promedio}`);
