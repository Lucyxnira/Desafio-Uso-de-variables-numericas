// Solicitar datos al usuario
var total_dias = parseInt(prompt("Ingresa la cantidad de días:"));

// Realizar operación
var anios = Math.floor(total_dias / 365);
var semanas = Math.floor(total_dias / 7);
var meses = Math.floor(total_dias / 30);
var dias = Math.floor(total_dias / 1);

// Mostrar resultados
alert(`Durante los ${total_dias} días que estuviste viajando pasaron ${anios} años, ${semanas} semanas, ${meses} meses y ${dias} días, pero te seguí esperando Benjamín`);

