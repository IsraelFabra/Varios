//Eyyyy


let textarea = document.querySelector("textarea");
let estadoMayusculas = 0;
// ------------- cargar teclados ------------------------
let arrayTeclasLetras = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ", "z", "x", "c", "v", "b", "n", "m", ",", "."];
let arrayTeclasAcciones = ["Shift", "Space", "Enter", "Delete"];

function cargarTeclasLetras() {
  let cajaTeclasLetras = document.getElementById("cajaTeclasLetras");
  cajaTeclasLetras.innerHTML = "";
  for (let i = 0; i < arrayTeclasLetras.length; i++) {
    let input = document.createElement("input");
    input.setAttribute("type", "button");
    input.setAttribute("value", arrayTeclasLetras[i]);
    input.setAttribute("onclick", "escribir(this)"); //el this sirve para cada una de las letras
    cajaTeclasLetras.appendChild(input);
    if (i == 9 || i == 19 || i == 28) {
      cajaTeclasLetras.innerHTML += "<br>";
    }
  }
}
cargarTeclasLetras();

function cargarTeclasAcciones() {
  let cajaTeclasAcciones = document.getElementById("cajaTeclasAcciones");
  cajaTeclasAcciones.innerHTML = "";
  for (let i = 0; i < arrayTeclasAcciones.length; i++) {
    let input = document.createElement("input");
    input.setAttribute("type", "button");
    input.setAttribute("value", arrayTeclasAcciones[i]);
    input.setAttribute("onclick", "accion(this)");
    cajaTeclasAcciones.appendChild(input);
  }
}
cargarTeclasAcciones();
// ------------- fin cargar teclados ------------------------

// ------------- teclas Letras ------------------------
function escribir(teclaLetra) {
  textarea.innerHTML += teclaLetra.value;
}
// ------------- fin teclas Letras ------------------------

// ------------- teclas Acciones ------------------------

function accion(teclaAccion) {
  switch (teclaAccion.value) {
    case "Shift":
      ponerTeclasMayusculas();
      break;
    case "Space":
      textarea.innerHTML += " ";
      break;
    case "Enter":
      textarea.innerHTML += "\n";
      break;
    case "Delete":
      textarea.innerHTML = textarea.value.slice(0,-1);
      break;
    default:
      break;
  }
}

// Empezaría  en minúscula => impar, al apretar shift mayúscula => par

function ponerTeclasMayusculas() {
  for (let i = 0; i < arrayTeclasLetras.length; i++) {
    if (estadoMayusculas % 2 == 0) {
      arrayTeclasLetras[i] = arrayTeclasLetras[i].toUpperCase();
    } else {
      arrayTeclasLetras[i] = arrayTeclasLetras[i].toLowerCase();
    }
  }
  estadoMayusculas++;
  cargarTeclasLetras();
}

// ------------- teclas Especiales ------------------------