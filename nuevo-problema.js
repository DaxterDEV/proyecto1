// filter(), includes("ERROR"), slit() y cojo el 2 índice que sería el texto de error
const logs = [
  "[2024-02-29] ERROR: Conexión fallida",
  "[2024-02-29] INFO: Usuario inició sesión",
  "[2024-02-29] ERROR: Fallo en la API",
  "[2024-02-29] WARNING: Uso alto de memoria"
];
const errores = logs
  .filter((linea) => linea.includes("ERROR"))
  .map((linea) => linea.split(": ")[1]);

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

//---------------------------------------------------------------------------------------------------------------------
//Dado un array de ventas, calcular:
//Total de ventas
//Ventas por categoría
//Productos con más de $50 en ventas
const ventas = [
  { producto: "Laptop", categoria: "Electrónica", precio: 1000 },
  { producto: "Mouse", categoria: "Electrónica", precio: 25 },
  { producto: "Libro", categoria: "Educación", precio: 15 },
  { producto: "Mochila", categoria: "Educación", precio: 60 }
];
const totalVentas = ventas.reduce((acc, venta) => {
  acc += venta.precio;

  return acc;
}, 0);

//PARTE 2
const ventasPorCategoria = ventas.reduce((acc, vCategorias) => {
  acc[vCategorias.categoria] =
    (acc[vCategorias.categoria] || 0) + vCategorias.precio;

  return acc;
}, {});

//Productos con más de $50 en ventas
//CODIGO AQUI!
const productosCaros = ventas
  .filter((venta) => venta.precio > 50)
  .map((venta) => venta.producto);

// Total de ventas
console.log(`Total de ventas: $${totalVentas}`);
// Ventas por categoría
console.log(ventasPorCategoria); // → { Electrónica: 1025, Educación: 75 }
// Productos con más de $50 en ventas
console.log(productosCaros); // → ["Laptop", "Mochila"]
