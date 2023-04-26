function crear() {

  let numeroCalc = document.querySelector("input[type=number]").value;

  let calcContent = "";

  for (let i = 0; i < numeroCalc; i++) {
    calcContent +=
      `<div class="calculadora">
        <label>Introduzca el primer número:</label>
        <input type="number" id="numero1-${i}">
        <label>Introduzca el segundo número:</label>
        <input type="number" id="numero2-${i}">
        <label>Introduzca el tipo de operación:</label>
        <input type="text" placeholder="|+|-|/|*|" id="operacion-${i}">
        <input type="button" value="Calcula!" onclick="calcula(${i})">
        <div id="resultado${i}"></div>
      </div>`;
  }

  document.querySelector("#contenedor").innerHTML = calcContent;
  
}

function calcula(calc) {
  let numero1 = document.getElementById("numero1-" + calc).value; //*Punto 1 (abajo).
  let numero2 = document.getElementById("numero2-" + calc).value;
  let operacion = document.getElementById("operacion-" + calc).value;

  let total = 0;
  switch (operacion) {
    case "+":
      total = Number(numero1) + Number(numero2); //Number pasa todo a número.
      break;
    case "-":
      total = numero1 - numero2;
      break;
    case "/":
      total = numero1 / numero2;
      break;
    case "*":
      total = numero1 * numero2;
      break;
    default:
      alert("Operacion no permitida!");
      break;
  }

  document.getElementById("resultado"+calc).innerHTML = total;

}


/* *Punto 1: La función calcula() se utiliza para realizar la operación aritmética correspondiente a una determinada calculadora. La función toma un argumento llamado calc, que se utiliza para determinar qué calculadora se está procesando (basado en el índice del bucle for que se utilizó para generar la calculadora).

En el código que proporcionaste, +calc se utiliza para convertir la variable calc en un número.

En JavaScript, el operador de suma (+) también se puede utilizar como operador unario para convertir una variable en un número. Si se utiliza con una variable que contiene un valor de tipo cadena de texto, como en este caso, el operador + convierte el valor en un número.

Por lo tanto, en la línea de código onclick="calcula(${i})", el operador + se utiliza para convertir el índice i en un número antes de pasarlo como argumento a la función calcula(). Esto es necesario porque el índice i se utiliza para generar los identificadores de elemento únicos para cada calculadora, pero los identificadores deben ser cadenas de texto y no números.

En resumen, +calc convierte la variable calc en un número para que se pueda utilizar como argumento numérico en la función calcula().

*Ej. +calc: En este ejemplo, se crea una variable calc con el valor "3", que es una cadena de texto. La función typeof se utiliza para comprobar que el tipo de dato de calc es una cadena de texto.

A continuación, se aplica el operador unario + a la variable calc, lo que la convierte en un número. La función typeof se utiliza de nuevo para comprobar que calc ahora es de tipo numérico.

En resumen, +calc convierte el valor de cadena de texto "3" en el número 3.

let calc = "3";
console.log(typeof calc); // string

calc = +calc;
console.log(typeof calc); // number

document.getElementById() es una función de JavaScript que se utiliza para obtener un elemento de la página HTML utilizando su atributo id. En este caso, la función busca el elemento con el id "numero1-" seguido del valor de la variable calc. Por ejemplo, si calc tiene el valor 2, la función buscará el elemento con el id "numero1-2".

.value se utiliza para obtener el valor del elemento seleccionado. En este caso, el elemento seleccionado es el campo de entrada numérica (input) con el id "numero1-" seguido del valor de la variable calc, y .value se utiliza para obtener su valor.

En resumen, let numero1 = document.getElementById("numero1-"+ calc).value; se utiliza para obtener el valor del primer campo de entrada numérica (input) en una calculadora en línea, basándose en el valor de la variable calc.


!!!En el código que has proporcionado, calc es un parámetro de la función calcula(). Este parámetro se utiliza en la llamada a la función calcula() en el siguiente código:

<input type="button" value="Calcula!" onclick="calcula(${i})">

En esta línea, ${i} se utiliza para pasar el valor de i como argumento al llamar a la función calcula(). Como i es un índice que se incrementa en cada iteración del bucle for, este valor se utiliza para generar diferentes valores de calc en cada iteración del bucle.

Por ejemplo, si numeroCalc (que se define como la cantidad de calculadoras que se van a crear) tiene un valor de 3, el bucle for creará tres calculadoras, con calc tomando los valores 0, 1 y 2 en cada iteración. En la primera iteración del bucle, calc será igual a 0, en la segunda iteración calc será igual a 1, y así sucesivamente.


 */


