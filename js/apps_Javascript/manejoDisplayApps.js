//MODULO PARA EL MANEJO DE LAS VISTAS DE LAS APLICACIONES INTERNAS DEL SITIO

//ARM
let ingreso = document.getElementById("ingreso"); //Div de Ingreso
let registro = document.getElementById("registro"); //Div de Registro

registro.style.display = "none";

function verSeccion(i) {
  //Generamos las vistas en base a un indice
  switch (i) {
    case 0: //Muestra la pantalla de ingreso
      registro.style.display = "block";
      ingreso.style.display = "none";
      break;
    case 1: //Muestra la pantalla de registro
      registro.style.display = "none";
      ingreso.style.display = "block";
      break;
  }
}
