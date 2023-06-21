// MODULO PARA GENERAR LAS DISTINTAS VISTAS DE LA SECCION ESCUELAS

historia = document.getElementById("education");
escuela = document.getElementById("school");

const data = fetch("../assets/Json/escuelas.json")
  .then((response) => {
    return response.json();
  })
  //.then((jsondata) => console.log(jsondata));

