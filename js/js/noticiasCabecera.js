/*MÉTODO XMLHttpRequest para consumo de API REST*/
const request = new XMLHttpRequest();

// Llamamos al API Rest y abrimos la conexión
request.open("GET", "https://api.jikan.moe/v4/anime", true);

// Cargamos la API
request.onload = function () {
  // Verificamos que la API no se encuentre fuera de servicio
  if (request.status >= 200 && request.status < 400) {
    const data = JSON.parse(this.response);

    const contenedor = document.getElementById("contenedor");
    contenedor.setAttribute("class", "card-columns");

    //Con el .ForEach traemos todos los registros del Json
    //Implementar en la sección interna de noticias
    //data.forEach => {

    //Con el .some traemos solo una cierta cantidad de registros determinados por el desarrollador
    data.data.some(function (id, index) {
      // Creamos una tarjeta
      const tarjeta = document.createElement("div");
      tarjeta.setAttribute("class", "card");

      // Creamos la cabecera
      const cabeceraTarjeta = document.createElement("div");
      cabeceraTarjeta.setAttribute("class", "card-header");

      // Creamos el cuerpo de la tarjeta
      const cuerpoTarjeta = document.createElement("div");
      cuerpoTarjeta.setAttribute("class", "card-body");

      // Creamos el encabezado y le asignamos el título de la Noticia
      const titulo = document.createElement("h5");
      titulo.setAttribute("class", "card-title");
      titulo.textContent = id.title;

      //Creamos la imagen de la tarjeta
      const imagenTarjeta = document.createElement("img");
      imagenTarjeta.setAttribute("class", "card-img-top");
      imagenTarjeta.src = id.images.jpg.image_url;

      // Creamos el párrafo y le asignamos la descripción de la Noticia
      id.descripcion = id.synopsis.substring(0, 250);

      const descripcion = document.createElement("p");
      descripcion.setAttribute("class", "card-text");
      descripcion.textContent = `${id.descripcion}...`;

      // Agregamos la tarjeta
      contenedor.appendChild(tarjeta);

      // Agregamos la cabecera, el cuerpo y la imagen de la tarjeta
      tarjeta.appendChild(imagenTarjeta);
      tarjeta.appendChild(cabeceraTarjeta);
      tarjeta.appendChild(cuerpoTarjeta);

      // Agregamos el título a la cabecera
      cabeceraTarjeta.appendChild(titulo);

      // Agregamos la descripción al cuerpo
      cuerpoTarjeta.appendChild(descripcion);

      console.log(window.location.pathname);
    
      return index === 5;
    });
  } else {
    //Generamos una advertencia en caso de que no retorne valor alguno desde el API
    const contenedor = document.getElementById("contenedor");
    const mensajeError = document.createElement("div");

    mensajeError.setAttribute("class", "alert alert-danger");
    mensajeError.textContent = `Ha ocurrido un error (${request.status}). Sector en mantenimiento. Disculpe las molestias`;

    contenedor.appendChild(mensajeError);
  }
};

request.send();
