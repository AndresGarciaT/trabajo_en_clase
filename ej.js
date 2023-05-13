/*escribe una función llamada mayorArray() que reciba un array de números enteros como parámetro y retorne el número mayor del array.
Dentro de la función, debes utilizar los siguientes ciclos:
Un ciclo for para recorrer el array y comparar cada elemento con el número mayor encontrado hasta el momento.
Un ciclo while para imprimir cada elemento del array.
Un ciclo do-while para contar la cantidad de números impares que tiene el array.
La función debe cumplir con los siguientes requisitos:
Debe recibir un array como parámetro y retornar un número entero.
Si el array está vacío, la función debe retornar el valor null.
Si el array tiene un solo elemento, la función debe retornar ese elemento.
La función debe utilizar un ciclo for para recorrer el array y encontrar el número mayor.
La función debe utilizar un ciclo while para imprimir cada elemento del array en la consola.
La función debe utilizar un ciclo do-while para contar la cantidad de números impares que tiene el array.
La función no debe modificar el array original ni utilizar funciones de orden superior como forEach, map, filter, etc */
function mayorArray(numeros_enteros) {
    if (numeros_enteros.length == 0) {
      return null;
    }
  
    let numeroMayor = numeros_enteros[0];
   
    for (let i = 1; i < numeros_enteros.length; i++) {
      if (numeros_enteros[i] > numeroMayor) {
        numeroMayor = numeros_enteros[i];
      }
    }
  
    let j = 0;
    while (j < numeros_enteros.length) {
      console.log(numeros_enteros[j]);
      j++;
    }
  
    let k = 0;
    let numerosImpares = 0;
  
    do {
      if (numeros_enteros[k] % 2 === 1) {
        numerosImpares++;
      }
      k++;
    } while (k < numeros_enteros.length);
  
    console.log("Cantidad de numero impares: ", numerosImpares);
  
    return console.log("Numero mayor", numeroMayor);
  }

mayorArray([1, 2, 0, 4, 10, 66]);


