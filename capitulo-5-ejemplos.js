/*
¿Qué son las funciones de orden superior?
Son funciones que pueden:

Recibir otra función como argumento.
Devolver una función como resultado.
🎯 ¿Para qué se usan?
Para hacer código más reutilizable y flexible.
Para evitar repetir lógica similar en varias partes del programa.
Se usan mucho en métodos de arrays como .map(), .filter(), y .reduce().
*/
//EJEMPLO 1
function suma(num) {
  return num + 2;
}
function fOrdenSuperior(argum, funcion) {
  return funcion(argum);
}
console.log(fOrdenSuperior(5, suma));

//EJEMPLO 1
const saludar = function (nombre) {
  return function () {
    return console.log("Hola, " + nombre + "!");
  };
};
const hacerSaludo = saludar("pedro");
hacerSaludo();

//NOTA IMPORTANTE (.map(), .filter(), y .reduce() Tambien son Funsiones
//  Superiores por que Reciven Una Funsion Como algumento )
