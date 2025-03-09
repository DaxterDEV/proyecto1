const estudiantes = new Map();
estudiantes.set("Ana", [85, 90, 78]);
estudiantes.set("Carlos", [92, 88, 95]);
estudiantes.set("Beatriz", [78, 85, 85]);
estudiantes.set("Daniel", [95, 90, 93]);
estudiantes.set("Elena", [60, 65, 70]);
estudiantes.set("jimmy", [60, 65, 70]);

// Obtener todas las notas en un solo array
const todasLasNotas = Array.from(estudiantes.values()).flat();

// Calcular el promedio general
const sumaTotal = todasLasNotas.reduce((acc, nota) => acc + nota, 0);
const promedioGeneral = sumaTotal / todasLasNotas.length;

console.log("El promedio de todas las notas es:", promedioGeneral.toFixed(2));
