//MODULO PARA EL MANEJO DE LOS ELEMENTOS EN EL MICRO SITE DE "HISTORIA"

var historia = document.getElementById("historia"); // Seccion Historia
var periodos = document.getElementById("periodosHistoricos"); // Seccion Periodos Historicos
var sitios = document.getElementById("sitiosHistoricos"); // Seccion Sitios de interes
var museos = document.getElementById("museos"); // Seccion Museos
let pocoHistoria = document.getElementById("unPocoDeHistoria"); // Seccion "Un Poco de Historia..."
let perHistoricos = document.getElementById("periodos"); // Textarea de la seccion de peridoos historicos

periodos.style.display = "none";
sitios.style.display = "none";
pocoHistoria.style.display = "none";

function verPeriodo() {
  periodos.style.display = "block";
  historia.style.display = "none";
  sitios.style.display = "none";
}

perHistoricos.addEventListener("click", function () {
  // Generamos el valor del Textarea dentro de la sección Periodos Historicos y la mostramos
  periodos.style.display = "block";
  historia.style.display = "none";
  sitios.style.display = "none";
  const descripcion = document.getElementById("leyendaPeriodosHistoricos");
  let texto = `Primer período histórico: 1779-1820
    Único Pueblo en la Patagonia defendiendo el dominio Español.
    
    Partido de Patagones
    El 22 de abril de 1779 don Francisco de Viedma y Narváez fundó el Fuerte y Población Nuestra Señora del Carmen, con el objeto de afianzar la soberanía hispana sobre los territorios patagónicos.
    
    El acuerdo entre el virrey Vértiz y el cacique Chanel, que posibilitó la fundación del establecimiento, no autorizaba a los hispano - criollos el tránsito terrestre más allá de su estrecho territorio, y la comunicación con Buenos Aires sólo se podía realizar por vía marítima, situación que perduró hasta 1879.
    
    Pese a su aislamiento, la aldea jamás sufrió un malón indígena gracias a la progresiva armonía de intereses con las tribus patagónicas y surpampeanas. La economía local se basaba en una agricultura y ganadería que sólo proveían al consumo de la aldea, por lo que sus habitantes vivían con extrema sencillez y frugalidad.
    
    A las severas dificultades que el medio imponía a los pobladores se sumaron luego de 1810, otras de índole política y económica, originadas en la pérdida de significación geopolítica del establecimiento y en la adopción de políticas liberales por parte del gobierno. Esto abrió una crisis que puso a Patagones al borde de su desaparición.
    
    En abril de 1812, una revuelta organizada por presos realistas reintegró a Patagones a la Corona española, pero el 13 de diciembre de 1814 el Fuerte del Carmen fue recuperado por las fuerzas de la Patria.
    
    Argentina
    En 1776, España creaba el Virreinato del Río de la Plata, que comprendía el territorio que actualmente ocupan Argentina, Uruguay, Paraguay, Bolivia, sur del Brasil y una franja en la costa tropical de Chile. El nuevo virreinato tenía por finalidad proteger las tierras del sur del continente americano, amenazadas por las ambiciones expansionistas de ingleses y portugueses.
    
    El levantamiento del cacique Túpac Amaru que inició en 1780 contra la dominación española en los territorios del Perú es considerado por muchos el precursor del posterior movimiento independentista latinoamericano, fue ejecutado en Cuzco en 1781.
    
    En los años 1806 y 1807 españoles y criollos hicieron como única causa la defensa de las colonias contra la fuerza inglesa, a pesar de su antagonismo. Don Santiago Liniers y Don Martín de Alzaga fueron las dos figuras que se destacaron en la defensa.
    
    El Proceso de independencia iniciado en 1810, culminó con la declaración de la independencia, que se concretó en forma solemne el 9 de Julio de 1816, en Tucumán.
    
    El cruce de los Andes se realizó en Enero de 1817 y la batalla de Chacabuco el 12 de Febrero de 1817, posibilitó la liberación de Chile.
    
    El mundo
    Se proclamó la independencia de las trece colonias británicas de América del Norte por el Congreso Continental el 4 de julio de 1776.
    
    El conflicto entablado en territorio español contra la invasión francesa, perteneciente a una de las fases conocidas como Guerras Napoleónicas abarcó el período que abarca entre el 2 de mayo de 1808 y el 4 de mayo de 1814, en que el rey Fernando VII retomó el gobierno absoluto.
    
    Durante el siglo XVIII comienza la Revolución Industrial.
    
    El colonialismo de la Europa moderna comenzó en el siglo XV. Desde 1415 hasta 1800 aproximadamente Europa occidental, encabezada por España y Portugal, se expandieron por las Indias orientales y América; casi desde 1800 hasta la II Guerra Mundial, Gran Bretaña tomó la iniciativa en la expansión de Europa hacia Asia, Africa y el Pacífico.
    
    En la música se destacaron Wolfgang Amadeus Mozart, (1756-1791), compositor austríaco; y Ludwig van Beethoven, (1770-1827), compositor alemán.
    
    Segundo período histórico: 1820-1855
    Único Pueblo en la Patagonia defendiendo la Soberanía Argentina.
    
    Partido de Patagones
    El auge de los saladeros rioplatenses y del sur de Brasil permitió hacia 1820 que Patagones superara la crisis iniciada en 1810, al convertirse en importante proveedora de sal. Esta vinculación abrió además mercados regulares para su trigo, cueros, carne salada y los productos provenientes de la economía indígena. Precisamente, la nueva articulación incrementó sensiblemente los vínculos económicos y políticos con las tribus de la región.
    
    Al mismo tiempo, el gobierno provincial demostrando un nuevo interés por los destinos de la aldea, procuró el reordenamiento institucional del establecimiento: designó un comandante enérgico y eficiente, se eligieron por primera vez un Juez de Paz y un representante maragato a la Legislatura bonaerense, se crearon la primera escuela pública y el servicio de correos.
    
    En 1827, el directorio del que luego sería el Banco de la Provincia de Buenos Aires designó comisionado en Patagones a Ambrosio Mitre (padre de Bartolomé Mitre).
    
    En ese año, la guerra con el Brasil tuvo en El Carmen a un heroico protagonista al repeler una invasión imperial.
    
    Para entonces, los agudos conflictos inter e intraétnicos habían quebrado la armonía alcanzada con las tribus de la región y con ello, la creciente prosperidad económica. La aldea ingresó así en un estancamiento que solo superaría cuando se estableciera en la región un nuevo liderazgo aborigen con el cual pactar condiciones de seguridad para la producción de agro maragato.
    
    Argentina
    En 1820 se imponen las autonomías provinciales, La Patagonia quedó bajo la jurisdicción de la Provincia de Buenos Aires.
    
    El 1 de Enero de 1826 Argentina aceptó la declaración de guerra hecha por Brasil, el estallido bélico se produjo a raíz de la disputa del territorio Uruguayo entre ambas naciones. En 1827 los brasileños fueron derrotados y a través de la mediación británica Uruguay obtuvo la independencia.
    
    El 27 de Agosto de 1828 fue elegido Manuel Dorrego, gobernador de la Provincia de Buenos Aires, se iniciaron nuevas negociaciones de paz con Brasil.
    
    En la década que va de 1826 a 1836 la armada británica realizó tres campañas de reconocimiento de las costas patagónicas. El resultado de esa labor se plasmó, en parte, en los estudios del célebre Darwin, participante de una de las campañas.
    
    Año 1833, campaña de Rosas al Desierto.
    
    En Mayo de 1853, La Nación Argentina, aprueba su constitución adoptando el sistema de gobierno, representativa republicana y federal.
    
    El mundo
    El último virrey del Perú gobernó entre los años 1821 a 1824, asistiendo a la desintegración del Ejército realista, en la batalla de Ayacucho.
    
    En 1843 el gobierno Chileno dispuso la fundación de Fuerte Bulnes, denominación que en 1849 fue cambiado por Punta Arenas.
    
    En 1853 se prohibió la importación de esclavos africanos en Brasil.
    
    Tercer período histórico: 1855-1880
    Único parlamento en la Patagonia.
    
    Primeros Años del Municipio de Patagones.
    
    Partido de Patagones
    El tratado de paz firmado entre Yanquetruz III y el gobernador de Buenos Aires Pastor Obligado produjo profundas transformaciones en la frontera de Patagones y abrió una nueva etapa en su desenvolvimiento económico y social. Este acuerdo permitió una notable expansión de las explotaciones agropecuarias río arriba, que quedaban ahora a relativo resguardo de los malones.
    
    Las fundaciones de Guardia Mitre, en 1862 y del Fortín Conesa en 1869, además del asentamiento de "tribus amigas" en las márgenes del Negro y en el paso de Valcheta, brindaron mayor seguridad a las sociedades blanca e indígena asentadas en la región. La expansión de los establecimientos agropecuarios se tradujo en una notable prosperidad para El Carmen, proceso que se consolidó con la colonización italiana en Cubanea y tuvo como correlato una apreciable expansión urbana.
    
    El mejoramiento de la relación entre blancos e indios permitió que éstos se conchabaran en las faenas rurales, integrándose a la vida de la aldea y enajenando buena parte de sus tierras y sufriendo sensibles modificaciones en su identidad cultural.
    
    A finales de este período se produjo la incorporación efectiva de las pampas y la Patagonia a la soberanía nacional, materializada en la cruel contienda conocida como "Conquista del Desierto" entre 1879 y 1885.
    
    La creación de la Gobernación de la Patagonia en 1878 restó a Patagones su Banda Sur, sector de la aldea que comenzó a ser conocido también como Mercedes desde fines de la década de 1860, que se convirtió en la capital de la Gobernación con el nombre de Viedma.
    
    En el año 1880 se construye el llamado muelle nacional.
    
    Argentina
    En 1862 se dicta el Código de Comercio, en 1865 fue presentado el Código Penal que fue aprobado en 1886 y en 1871 el Código Civil.
    
    En 1869 es fundado el diario "La Prensa" por José C. Paz; y en 1870 "la Nación" por Bartolomé Mitre.
    
    En 1872 José Hernández publicó su obra: El gaucho Martín Fierro.
    
    En 1867 se propaga una epidemia de Cólera; y en 1871 una de Fiebre Amarilla.
    
    El mundo
    Guerra Civil estadounidense, conflicto militar que tuvo lugar desde 1861 hasta 1865 entre los Estados Unidos de América (la Unión) y once estados sureños secesionistas organizados como los Estados Confederados de América (la Confederación Sudista).
    
    En 1864 se funda en Londres la Primera Internacional Socialista, asociación que pretende establecer la unión de todos los obreros del mundo y se fija como último fin la conquista del poder político por el proletariado.
    
    En 1879, La Guerra del Pacífico entre Chile con Perú y Bolivia, Argentina se mantuvo neutral.
    
    Las teorías marxistas fueron adoptadas por mayoría; así, a finales del siglo XIX, el marxismo se había convertido en la ideología de casi todos los partidos que defendían la emancipación de la clase trabajadora. En 1879 fue fundado el Partido Socialista Obrero Español.
    
    Cuarto período histórico: 1880-1910
    Primeros Años del Territorio Nacional del Río Negro. <br> Disminución Política del Municipio de Patagones.
    
    Partido de Patagones
    Este fue el período donde Carmen de Patagones vivió su etapa más dinámica. La colonización de los valles y meseta rionegrinos, convirtieron a nuestra ciudad en un formidable núcleo comercial y de servicios, ya que su puerto vinculó a los nuevos territorios con Bahía Blanca, Buenos Aires y Europa.
    
    Este auge económico atrajo a prósperos comerciantes porteños y extranjeros, como asimismo a contingentes de artesanos y de trabajadores rurales y urbanos.
    
    En poco más de una década se triplicó la planta urbana de Carmen de Patagones, se crearon varias escuelas, un hospital regional y se proveyeron otros importantes servicios públicos.
    
    Los nuevos migrantes contribuyeron también a enriquecer la vida política local, de tal modo que a las tradicionales expresiones hasta entonces nucleadas en el Partido Autonomista Nacional (P.A.N), se sumaron la naciente UCR y, desde otra perspectiva, la acción de la masonería.
    
    A partir de 1885, se comenzó la explotación de La Salina de Piedra.
    
    En 1896 se dividió la propiedad de Juana E. de Pradere en tres fracciones: La Providencia, Los Alamos y San Francisco.
    
    En 1886, la provincia de Buenos Aires fijó los límites definitivos del Partido de Patagones: al Norte con el río Colorado, al Este con el Océano Atlántico, al Sur con el río Negro y al Oeste con el meridiano 5º.
    
    El sojuzgamiento de las tribus aborígenes permitió la ocupación de las tierras del norte del Partido de Patagones, y la consolidación de las estancias aledañas a la Bahía San Blas.
    
    Argentina
    El primer documento fue la ley nacional 1029 del 21 de Septiembre de 1880, cuyo primer artículo declaró capital de la república a la ciudad de Buenos Aires, dentro de los límites que entonces tenía.
    
    La fundación de la ciudad de La Plata, como nueva capital bonaerense, se celebró el 19 de noviembre de 1882.
    
    En 1884, la ley 1420 establecía: educación común, obligatoria, gratuita y laica.
    
    En 1884 se dictó la Ley Orgánica de los Territorio Nacionales, que organizó las tierras incorporadas, solucionando problemas de jurisdicción entre provincias.
    
    En 1898 posible guerra con Chile por territorios al sur del paralelo 42º y en la Puna de Atacama.
    
    El ministro de guerra Richieri, convocó a la primera conscripción obligaroria "colimba", que se realizó en la localidad de Pigue.
    
    La Argentina tiene presencia permanente en la Antártida desde 1904. Es una de las principales naciones firmantes del Tratado Antártico, que congela los reclamos de soberanía.
    
    El mundo
    Entre 1880 y 1914 se llevó a cabo la colonización de África (excepto Etiopía) y de diversas regiones de Asia y del Pacífico; hacia 1914 la red colonial mundial se había cerrado en torno al planeta.
    
    Se desató la Primera Guerra Mundial, que duró desde 1914 a 1918.
    
    Quinto período histórico: 1910-1960
    Decaimiento de la Actividad Portuaria. Provincialización de Río Negro.
    
    Partido de Patagones
    La prosperidad de que disfrutaba Carmen de Patagones desde la década de 1880 comenzó a detenerse a principios del siglo XX debido al tendido del ferrocarril desde Bahía Blanca al Neuquén y, especialmente desde 1910, por la apertura del puerto de San Antonio. La primera de esas obras restó a Patagones buena parte de sus mercados valletanos, mientras que la segunda hizo lo propio con los de meseta rionegrina.
    
    Las alternativas económicas que se intentaron para superar el ya agotado ciclo de Patagones como importante núcleo comercial y de servicios fracasaron, dando lugar a un estancamiento sólo morigerado por la colonización de las tierras del Partido de Patagones, la que trajo migrantes nacionales y europeos, entre los que se destacaron por su número los alemanes del Volga.
    
    Este proceso fue sustentado por el ferrocarril desde Bahía Blanca, originando la creación de centros urbanos como Cardenal Cagliero, José B. Casás, Stroeder, Villalonga y Pradere.
    
    El 6 de octubre de 1908, el proyecto para formar San Blas es aprobado por la provincia, si bien el decreto lleva fecha 15 de octubre de 1908.
    
    Desde el 2 de Noviembre de 1911 arribaron los trenes de Bahía Blanca a Stroeder, pero el martes 11 de Noviembre de 1913 llega en un tren enarbolado con bastones de fiesta don Hugo Stroeder, hecho que marca el comienzo de la localidad, aunque dicha colonia existía desde 1905.
    
    En Mayo de 1912 llegaron barcos al Puerto, o sea "Colonia Tres Bonetes" (su nombre se debe a que cuando los colonos se aproximaban  al lugar se divisaba a larga distancia, tres lomas de arena que se asemejaban a bonetes), con varias familias de inmigrantes. Esta colonia con los años comenzó a decaer con la llegada del tren.
    
    El 16 agosto de 1913 se solicitó la fundación de Pradere. El proyecto de Fernando Segovia fue aprobado el 15 de Octubre de 1913.
    
    La salina de Piedra, comprada en 1920 por la Compañía Salinera Anglo Argentina, adquirió un gran dinamismo con la llegada en 1922 del ferrocarril a la actual localidad de Cardenal Cagliero. La distancia que separaba la empresa de todo poblado hizo imprescindible el tendido de una línea telefónica privada hasta Patagones, esta línea funcionó desde 1936 hasta 1965.
    
    El 29 de Mayo de 1929, el Poder Ejecutivo Provincial resuelve aprobar el proyecto de fundación de Villalonga.
    
    En lo concerniente a la actividad portuaria, la alicaída navegación marítima se cerró en 1943, en tanto que la fluvial lo hizo en 1950.
    
    La provincialización del Territorio Nacional del Río Negro en el año 1955 hizo que Viedma, su capital, iniciara un despegue que, con el correr de los años revirtió a su favor la hegemonía que hasta entonces ejercía Carmen de Patagones.
    
    El desarrollo de la administración pública viedmense, la sistematización de las obras del IDEVI y el auge de la agricultura en Patagones dinamizaron la región, convirtiéndola en receptora de trabajadores de distintos puntos del país. Especial relevancia numérica adquirieron los provenientes de la "Línea Sur" rionegrina, mayoritariamente de ascendencia mapuche.
    
    Argentina
    En 1912, Roque Saenz Peña promulgó una ley por la cual el voto debería ser secreto y obligatorio para la población masculina.
    
    Durante los gobiernos de Alvear e Yrigoyen, Argentina se vio beneficiada por la actitud neutral que el país mantuvo durante la I Guerra Mundial, por lo que se convirtió en una de las naciones más ricas del mundo.
    
    La crisis económica mundial que estalló en 1929 tuvo serias repercusiones en Argentina. El desempleo y otras dificultades provocaron una profunda inquietud social y política.
    
    En 1930 después de una segunda presidencia de Yrigoyen, los conservadores -apoyados por el Ejército dirigido por Uriburu- dieron un golpe militar que interrumpió, por primera vez desde 1853, la continuidad constitucional.
    
    El 21 de Julio de 1942, el P.E. decreta la transferencia de las tierras fiscales de Patagones al Instituto Autárquico de Colonización.
    
    Al estallar la II Guerra Mundial, Ortiz proclamó la neutralidad de Argentina, aunque posteriormente colaboró estrechamente con las demás repúblicas americanas en asuntos propios de la defensa del hemisferio.
    
    El mundo
    Como resultado de la Revolución Rusa de Noviembre de 1917 en el territorio del antiguo Imperio Ruso, se funda la Unión Soviéticas en Diciembre de 1922.
    
    Se desató la Segunda Guerra Mundial, que comenzó en 1939 y concluyó en 1945. En los últimos momentos de la lucha se emplearon dos armas radicalmente nuevas: los cohetes de largo alcance y la bomba atómica.
    
    Sexto período histórico: 1960-1986
    Proyecto de Traslado de la Capital Nacional a Viedma Patagones.
    
    Partido de Patagones
    En la década de 1960 se construyeron los colegios secundarios San José y María Auxiliadora.
    
    Se construyeron los edificios de las escuelas 14 y 21 y los jardines de infantes 901, 904 y 905.
    
    Se construyó el Centro Cívico, la terminal de ómnibus, el barrio Bicentenario, el tanque elevado, la planta depuradora, la primera etapa del sistema cloacal y la red de gas.
    
    Se pavimentó la ruta Nacional Nº 3.
    
    En la década de 1970, se construyeron los puentes de Hormigón sobre los ríos Colorado y Negro, completando la red vial nacional, sobre la ruta Nº 3.
    
    Se construyeron los primeros planes de electrificación rural por medio de cooperativas eléctricas del partido.`;
  descripcion.value = texto;
});

function verSitios() {
  // Función donde se implementarían las distintas acciones para el muestreo de los sitios dependiendo del indice que se ingrese
  periodos.style.display = "none";
  historia.style.display = "none";
  pocoHistoria.style.display = "none";
  sitios.style.display = "block";
}

function verHistoria() {
  // Función donde se implementarían las distintas acciones para el muestreo del contenido de la seccion "Un Poco de Historia..." dependiendo del indice que se ingrese
  periodos.style.display = "none";
  sitios.style.display = "none";
  pocoHistoria.style.display = "block";
  historia.style.display = "none";
}
