// filter(), includes("ERRO"), slit() y cojo el 2 índice que sería el texto de error
const logs = [
  "[2024-02-29] ERROR: Conexión fallida",
  "[2024-02-29] INFO: Usuario inició sesión",
  "[2024-02-29] ERROR: Fallo en la API",
  "[2024-02-29] WARNING: Uso alto de memoria"
];
// Extraer solo los errores
const errores = [];
logs.filter((error) => {
  let fix = error.includes("ERROR");
  if (fix == true) {
    const logsError = error.split(": ");
    errores.push(logsError[1]);
  }
});
// a) Resultado esperado
console.log(errores);
// → ["Conexión fallida", "Fallo en la API"]
//-------------------------------------------------------------------------------------------------------------
//b. Crear una función contarPorTipo(logs) para contar la cantidad de cada tipo de evento (ERROR, INFO, WARNING)
// reduce()
//Mi Solusion Aqui!
function contarPorTipo(logs) {
  return logs.reduce((acc, log) => {
    let tipo = log.split("] ")[1].split(":")[0]; // Extraer tipo (ERROR, INFO, WARNING)
    acc[tipo] = (acc[tipo] || 0) + 1;
    return acc;
  }, {});
}
// b) Resultado esperado
//contarPorTipo(logs);
console.log(contarPorTipo(logs));
// → {Error: 2, Info: 1, Warning: 1}
