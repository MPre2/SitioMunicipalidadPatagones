//MODULO PARA EL MANEJO DEL DISPLAY EN TODO EL SITIO - IMPLEMENTAR POR SECTORES

//Area Gobierno ARM
arm_higiene = document.getElementById("inspeccionHigiene");
arm_home = document.getElementById("homeARM");

arm_higiene.style.display = "none";

function verSeccion() {
  arm_home.style.display = "none";
  arm_higiene.style.display = "block"
}
