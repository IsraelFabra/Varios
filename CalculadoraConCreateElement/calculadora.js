function crear() {

  let numeroCalc = document.querySelector("input[type=number]").value;
  let contenedor = document.querySelector("#contenedor");

  for (let i = 0; i < numeroCalc; i++) {
    let divCalc = document.createElement("div");
    divCalc.setAttribute("class", "calculadora");

    let label1 = document.createElement("label");
    label1.textContent = "Introduzca el primer número:";
    divCalc.appendChild(label1);

    let input1 = document.createElement("input");
    input1.setAttribute("type", "number");
    input1.setAttribute("id", "numero1-"+i);
    divCalc.appendChild(input1);

    let label2 = document.createElement("label");
    label2.textContent = "Introduzca el segundo número:";
    divCalc.appendChild(label2);

    let input2 = document.createElement("input");
    input2.setAttribute("type", "number");
    input2.setAttribute("id", "numero2-" + i);
    divCalc.appendChild(input2);

    let label3 = document.createElement("label");
    label3.textContent = "Introduzca el tipo de operación:";
    divCalc.appendChild(label3);

    let input3 = document.createElement("input");
    input3.setAttribute("type", "text");
    input3.setAttribute("id", "operacion-" + i);
    input3.setAttribute("placeholder", "|+|-|/|*|");
    divCalc.appendChild(input3);

    let input4 = document.createElement("input");
    input4.setAttribute("type", "button");
    input4.setAttribute("value", "Calcula!");
    input4.setAttribute("onclick", "calcula("+i+")");
    divCalc.appendChild(input4);
    
    let divResult = document.createElement("div");
    divResult.setAttribute("id", "resultado"+i);
    divCalc.appendChild(divResult);
    contenedor.appendChild(divCalc);
  }
}

function calcula(calc) {
  let numero1 = document.getElementById("numero1-"+calc).value;
  let numero2 = document.getElementById("numero2-" + calc).value;
  let operacion = document.getElementById("operacion-" + calc).value;

  let total = 0;
  switch (operacion) {
    case "+":
      total = Number(numero1) + Number(numero2);
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
