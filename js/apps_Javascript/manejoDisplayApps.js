//MODULO PARA EL MANEJO DE LAS VISTAS DE LAS APLICACIONES INTERNAS DEL SITIO

//ARM - RRHH
let ingreso = document.getElementById("ingreso"); //Div de Ingreso
let registro = document.getElementById("registro"); //Div de Registro
let olvido = document.getElementById("olvido");

registro.style.display = "none";
olvido.style.display = "none";

function verSeccion(i) {
  //Generamos las vistas en base a un indice
  switch (i) {
    case 0: //Muestra la pantalla de ingreso
      registro.style.display = "block";
      ingreso.style.display = "none";
      olvido.style.display ="none";
      break;
    case 1: //Muestra la pantalla de registro
      registro.style.display = "none";
      olvido.style.display = "none";
      ingreso.style.display = "block";
      break;
    case 2: //Muestra la pantalla de olvido de clave
      olvido.style.display = "block";
      ingreso.style.display = "none";
      break;
  }
}
