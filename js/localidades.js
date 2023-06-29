// MODULO PARA EL MANEJO DEL MAPA EN EL MICRO SITIO "LOCALIDADES"

var map = L.map("map").setView([-40.112, -63.188], 8); // Generamos el Mapa

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  // Generamos la vista del Mapa
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

L.marker([-40.79584507667954, -62.98573771152871]) // Generamos un marcador dentro del mapa
  .addTo(map)
  .bindPopup("Carmen de Patagones")
  .openPopup();

L.marker([-39.914063647089854, -62.625465917629185]) // Generamos un marcador dentro del mapa
  .addTo(map)
  .bindPopup("Villalonga")
  .openPopup();

L.marker([-40.18301969124652, -62.621369149030876]) // Generamos un marcador dentro del mapa
  .addTo(map)
  .bindPopup("Stroeder")
  .openPopup();

L.marker([-40.650969261445454, -62.75426216456412]) // Generamos un marcador dentro del mapa
  .addTo(map)
  .bindPopup("Cardenal Cagliero")
  .openPopup();

L.marker([-39.599759584586195, -62.65158757096641]) // Generamos un marcador dentro del mapa
  .addTo(map)
  .bindPopup("Juan A. Pradere")
  .openPopup();
-40.5618, -62.2334;

L.marker([-40.5584423470003, -62.235608597636634]) // Generamos un marcador dentro del mapa
  .addTo(map)
  .bindPopup("Bahia San Blas")
  .openPopup();

L.marker([-40.4340907845137, -62.54466151818412]) // Generamos un marcador dentro del mapa
  .addTo(map)
  .bindPopup("Jose B. Casas")
  .openPopup();

L.marker([-40.43229049516822, -62.42437113772076]) // Generamos un marcador dentro del mapa
  .addTo(map)
  .bindPopup("Los Pocitos")
  .openPopup();
