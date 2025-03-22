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

//Aplanamiento, Ejercicio CAP-5
let arrays = [[1, 2, 3], [4, 5], [6]];
// Tu código aquí.
const aplanado = arrays.reduce((acc, aplanar) => acc.concat(aplanar), []);
console.log(aplanado);
// → [1, 2, 3, 4, 5, 6]

//NOTA PROBLEMA SIN RESOLVER.
/*
NOMBRE DE Problema : Everything
Los arrays también tienen un método every análogo al método some.
Este método devuelve true cuando la función dada devuelve true para cada elemento en el array.
En cierto modo, some es una versión del operador || que actúa en arrays.
y every es como el operador &&. Implementa every como una función.
que recibe un array y una función de predicado como parámetros.
Escribe dos versiones, una usando un bucle y otra usando el método some.
*/
//NOTA IMPORTANTE ESTE PROBELAM LO RESOLVERE EN VIVO NECESITO ACLARACION
function every(array, test) {
  // Your code here.
}

console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true
