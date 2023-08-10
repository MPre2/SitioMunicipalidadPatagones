// MODULO PARA GENERAR LAS DISTINTAS VISTAS DE LA SECCIÓN ESCUELAS

historia = document.getElementById("education");
escuela = document.getElementById("school");

function tablaEscuelas(nivel) {
  // Función principal para la muestra de los distintos registros del JSON
  escuela.style.display = "block";
  // Llamamos al JSON
  fetch("../assets/Json/escuelas.json")
    .then((response) => response.json())
    .then((escuelas) => mostrarEscuelas(escuelas)) // Invocamos a la función para mostrar las escuelas en display
    .catch((error) => console.log("Archivo no adquirido", error));

  const mostrarEscuelas = (escuelas) => {
    switch (nivel) { // Definimos la dirección del JSON en base al ingreso
      case 0:
        nivel = escuelas.Inicial;
        break;
      case 1:
        nivel = escuelas.Primaria;
        break;
      case 2:
        nivel = escuelas.Media;
        break;
      case 3:
        nivel = escuelas.SecundariaTecnica;
        break;
      case 4:
        nivel = escuelas.Superior;
        break;
      case 5:
        nivel = escuelas.Adultos;
        break;
      case 6:
        nivel = escuelas.Artistica;
        break;
      case 7:
        nivel = escuelas.Especial;
        break;
      case 8:
        nivel = escuelas.Fisica;
        break;
      case 9:
        nivel = escuelas.Psicologia;
        break;
    }

    let html = "";
    for (let i = 0; i < nivel.length; i++) {
      // Recorremos el arreglo y mostramos en pantalla los resultados
      html += `
        <tr>
          <td><h4>${nivel[i].Nombre}</h4></td>
          <td>${nivel[i].Domicilio}</td> -
          <td>${nivel[i].Localidad}</td><br>
          <td>${nivel[i].Telefono}</td><br>
        </tr>
        <br>
        `;
    }

    const contenedor = document.getElementById("school");
    contenedor.setAttribute("class", "card-columns-school");

    //let container = document.getElementById("school"); //Definimos el espacio donde se van a volcar los datos
    contenedor.innerHTML = html; // Volcamos los datos obtenidos
    historia.style.display = "none"; // Bloqueamos la vista al objeto
  };
}

function mostrar() {
  historia.style.display = "block";
  escuela.style.display = "none";
}
