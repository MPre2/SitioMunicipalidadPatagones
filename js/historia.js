//MODULO PARA EL MANEJO DE LOS ELEMENTOS EN EL MICRO SITE DE "HISTORIA"

var historia = document.getElementById('historia');
var periodos = document.getElementById('periodosHistoricos');
var sitios = document.getElementById('sitiosHistoricos');
var museos = document.getElementById('museos');

periodos.style.display = "none";

function verPeriodo() {
    periodos.style.display = "block";
    historia.style.display = "none"
}