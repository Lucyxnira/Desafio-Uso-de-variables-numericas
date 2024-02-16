// Ingresar gardos Celsius
var grados_celsius = parseInt(prompt("Ingresa los grados Celsius:"));

// Realizar conversión 0 °C + 273.15 = 273.15 K

// Transformación de celsius a kelvin
var grados_kelvin = grados_celsius + 273.15;

// Transformación a fahrenheit
var grados_fahrenheit = grados_celsius * (9 / 5) + 32;

// Mostrar resultados
alert(`Conversión a gardos Kelvin: ${grados_kelvin}`);
alert(`Conversión a grados fahrenheit: ${grados_fahrenheit}`);