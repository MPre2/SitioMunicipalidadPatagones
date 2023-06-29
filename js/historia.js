//MODULO PARA EL MANEJO DE LOS ELEMENTOS EN EL MICRO SITE DE "HISTORIA"

var historia = document.getElementById('historia');
var periodos = document.getElementById('periodosHistoricos');
var sitios = document.getElementById('sitiosHistoricos');
var museos = document.getElementById('museos');

periodos.style.display = "none";
sitios.style.display = "none";

function verPeriodo() {
    periodos.style.display = "block";
    historia.style.display = "none";
    sitios.style.display ="none"
}

function verSitios() { // Función donde se implementarían las distintas acciones para el muestreo de los sitios dependiendo del indice que se ingrese
    periodos.style.display = "none";
    historia.style.display = "none";
    sitios.style.display ="block"
}
