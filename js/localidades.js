// MODULO PARA EL MANEJO DEL MAPA EN EL MICRO SITIO "LOCALIDADES", UTILIZANDO LIBRERIA "LEAFLET"

var map = L.map("map").setView([-40.14538573958882, -62.908983274880484], 8); // Generamos el Mapa

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  // Generamos la vista del Mapa
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// GENERACIÓN DE MARCADORES PARA LAS DISTINTAS CIUDADES DEL PARTIDO

L.marker([-40.79584507667954, -62.98573771152871]) // Generamos un marcador dentro del mapa
  .addTo(map)
  .bindPopup("<b>Carmen de Patagones</b><br>Fundada el 22 de Abril de 1779")
  .openPopup().addEventListener("click", function () {
    const leyenda = document.getElementById("leyenda");
    let texto = `En el sur en el siglo XVIII
    El río salado era el límite entre el territorio efectivamente gobernado por los españoles y el suelo aún en poder de los indígenas. En esa inmensa extensión de tierra todavía sin conquistar, se distinguían dos regiones: la pampa o las pampas, y la PATAGONIA.
    
    La Patagonia, como bien sabemos, comienza aproximadamente en el río Colorado y se dilata hacia el sur. Es una región árida, de mesetas ásperas, sin árboles, de vientos huracanados y clima frío. Su paisaje monótono, gris, huraño, atemorizó en aquella época a los primeros hombres blancos que la conocieron; de allí que la consideraran misteriosa y la creyeran poblada por gigantes y escondiendo en sus desiertos una ciudad encantada.
    
    En ella vivían los "aoniken" (tehuelches) o patagones, indígenas dedicados principalmente a la caza de guanacos y ñandúes.
    
    La pampa, que se extiende desde el río de la Plata y océano Atlántico hasta los Andes y desde el sur de Mendoza, San Luis, Córdoba y Santa Fe hasta el río Colorado, no es una inmensidad, como se cree vulgarmente, monótona y uniforme. Muy por el contrario. La llamada pampa seca, o sea la del oeste, suele ofrecer un paisaje llano de suelo arenoso y tupidos montes de caldén y algarrobo o grandes depresiones con acumulación salina u hondos valles formados por cadenas de enormes médanos. La pampa oriental o húmeda, en cambio, "es una pradera sin bosques enriquecida por arroyos y lagunas a cuyas orillas las gramíneas y las flores silvestres den un vívido color a la llanura y en donde anidan las garzas y otras aves que interrumpen las soledades y el silencio del lugar. Su horizontalidad, hacia el sur, la interrumpen dos grupos de sierras no muy altas "Tandil y la Ventana" al decir de un conocido escritor nacional.
    
    En la pampa o las pampas vivían, además de algunos grupos tehuelches, los mapuches, de origen araucano. Habían llegado a ellas atraídos por la presencia de miles y miles de vacas y caballos que vagaban libremente por la llanura.
    
    Los indios conocían todos los secretos de la pampa; no así el hombre blanco quien de pronto podía caer en un guadal o cangrejal, caminar sin rumbo sin hallar donde beber una gota de agua, caer en manos de un grupo de indígenas ocultos tras una cortina de médanos a ser atacados por un jaguar o ser picados por una víbora de la cruz sin encontrar para su auxilio un solo ser humano en cientos de leguas a la redonda.
    
    Sin embargo, algunos españoles o extranjeros al servicio de España se atrevieron a cruzar o penetrar esas regiones inexploradas.
    
    Algún funcionario con interés militar o político o algún sacerdote buscando la evangelización de los aborígenes. Uno de éstos, el jesuita Falkner, inglés de nacimiento, de regreso a su patria, escribió sus memorias describiendo geografía, naturaleza y pobladores de pampas y Patagonia y, además, haciendo conocer el abandono en que España tenía a esas inmensas y ricas tierras sureñas.
    
    Alarma en la corona española
    En el año 1759 ascendió al trono de España el rey Carlos III.
    
    Dos años después firmaba con el rey de Francia un "pacto" para defenderse del enemigo común de ese entonces: Inglaterra. Esta buscaba extender sus dominios, es decir, incorporarse más territorios. Por lo tanto ponía en peligro los dominios y la soberanía de España y Francia en América.
    
    Enterado Carlos III de la publicación del libro del padre Falkner comprendió de inmediato que debía poner a salvo los extensos territorios sureños que hasta el momento había tenido totalmente abandonados.
    
    Para el mes de mayo del año 1778 se ordenaba el establecimiento de dos fuertes y poblaciones principales en la costa patagónica: un asiento en San Julián y el otro en la zona del río Negro. Y además, otros dos grupos subsidiarios, los que se erigieron en San José (Chubut) y en Deseado. Antes de continuar adelante conviene aclarar que de esos cuatro establecimientos tan solo subsistió el fundador en las costas rionegrinas, o sea Carmen de Patagones, por lo que correspondió a esta población salvar para España primero y para la Patria después todas las soledades australes.
    
    La expedición pobladora
    Poco después de aquella orden del mes de mayo de 1778 se cursaba nota al virrey Vértiz, enterándolo del proyecto de la Corona e instándolo a que se realizaran aquellas fundaciones. Se designaba también jefe de la expedición pobladora a don Juan de la Piedra. Este sería, además, comisario superintendente de San Julián y don Francisco de Viedma, integrante de la expedición, lo sería del fuerte a fundarse en el río Negro.
    
    Llegado Juan de la Piedra a Buenos Aires, comenzó los preparativos para concretar tan importante proyecto. El virrey de Vértiz puso a disposición cuatro embarcaciones bien armadas destinando además para la expedición 4 oficiales de infantería y 100 hombres de tropa, 1 oficial de artillería y 20 hombres de ese cuerpo, 4 capellanes, 2 individuos para atender asuntos administrativos y trámites, 3 lenguaraces, 3 cirujanos, 4 sangradores, y carpinteros, albañiles, herreros, maestros para hacer ladrillos y tejas, panaderos, faroleros, toneleros. Completaban la expedición 4 pilotos de altura, prácticos, marineros, carpinteros de ribera, etc.
    
    Un documento de la época dice que formaban parte de la expedición 232 personas, de las cuales 50 eran desterrados y 16 eran negros presidarios.
    
    Los primeros eran presos condenados a no más de diez años de prisión, gente robusta y capaz de servir en los trabajos de las nuevas poblaciones. Si bien existe otro documento que habla de embarcar a los negros con sus respectivas mujeres e hijos, nada autoriza a pensar que así sucedió efectivamente, por lo que hasta el momento se puede asegurar que en la expedición fundadora no viajaban mujeres.
    
    Otro dato importante es que se llevaban víveres para un año, el tiempo necesario para esperar que la tierra, labrada por las familias que más tarde se enviarían al sur, comenzara a dar sus primeras cosechas.
    
    El 16 de diciembre de 1778 salía del puerto de Montevideo en busca de la Patagonia, la escuadra española. La Corona, por fin, se preparaba para vigilar su patrimonio territorial sureño.
    
    Fundación de San José
    El día de Reyes de 1779, las naves estaban frente a Bahía Sin Fondo o Golfo San Matías. De la Piedra ordenó reconocerlo; pero una corriente marina llevó los veleros hacia un golfo no señalado en ningún mapa de la época. Los españoles lo llamaron San José (en la península Valdés, Chubut).
    
    Los expedicionarios bajaron el día 7 a la playa. Los impresionó la aridez del lugar. Buscaron agua dulce abriendo pozos; de ellos surgió un agua tan salada como la del mar. Felizmente hallaron algunas lagunas y manantiales a pocas leguas donde se comenzó a levantar el fuerte. Caza había en abundancia; gamas, avestruces, guanacos, perdices. Además, mucha sal.
    
    Hondos sinsabores pasaron los expedicionarios en zona tan inhóspita hasta que Juan de la Piedra resolvió postergar la fundación de San Julián, y dejando San José bajo las órdenes de don Francisco de Viedma, regresó a Buenos Aires en marzo de 1779. Esta actitud le valió la suspensión de su empleo, pues la misma fue considerada como un abandono de la misión que la Corona Española le había confiado.
    
    Descubrimiento del Río Negro
    Antes de alejarse de San José, Juan de la Piedra ordenó al piloto Manuel Bruñel y al oficial de infantería Pedro García, el reconocimiento de las extensas costas próximas al fuerte. Llegaron hasta la boca del río Colorado; pero no pudieron entrar en él. También avistaron la boca del río Negro. El enorme oleaje los impresionó vivamente, por lo que no se atrevieron a forzar la barra.
    
    Entonces de la Piedra orden al piloto de la Real Armada, don Basilio Villarino y Bermúdez, la exploración del río Colorado; pero el mencionado piloto, según su libro de navegación, se propuso descubrir el río de los Sauces, pues así, y no río Negro, lo llamaban entonces los españoles.
    
    Villarino se hizo a la vela el 13 de febrero de 1779 y pocos días después, avistaba la boca. El 22 de febrero, por fin, su bergantín de Nuestra Señora del Carmen y Animas, navegaba el río Negro al que los indígenas denominaban CURRU LEUVU (río Negro).
    
    Inmediatamente los indios se acercaron a la nave en son de paz; algunos trajeron obsequios: frutos de chañar. Villarino los regaló con tabaco, aguardiente, tocino y pan. Pero los aborígenes no se cansaban de pedir; el piloto tuvo que darles su pañuelo, la colcha de su lecho, su cortaplumas y hasta sus ligas.
    
    Villarino regresó a San José encontrando a don Francisco de Viedma al frente del fuerte. Ya dijimos que de la Piedra se había ausentado en viaje a Buenos Aires. A aquél, por lo tanto, el piloto informó sobre la grandiosidad del río descubierto, la fertilidad del valle, la benignidad del clima, la abundancia de caza y pesca, de sal y saucerías. Estos datos tan halagüeños hicieron pensar a don Francisco de Viedma que la región explorada era un verdadero paraíso terrenal comparada con el paisaje desolador de San José.
    
    Fundación de Carmen de Patagones
    Francisco de Viedma se preparó pues para fundar el establecimiento para el cual había sido designado superintendente. Dejó San José en manos de su hermano Antonio y partió. Dos naves integraban esta expedición: el bergantín de Villarino y la sumaca San Antonio la Oliveyra con su piloto Bruñel.
    
    El 18 de abril de 1779 entraron al río Negro "con el mejor tiempo y la mayor felicidad que pudiera apetecerse". El 19 navegaron 9 leguas aguas arriba. El día 20 descubrieron algunas tolderías; Viedma y Villarino las visitaron, siendo recibidos cordialmente por los indígenas, quienes los obsequiaron. El día 21 navegaron aguas abajo y lo pasaron sin novedad, al decir de Villarino en su diario de navegación. Es Villarino también el que nos dice que el 22 llegaron muchos indios hasta donde estaban las naves, unos 500 aproximadamente.
    
    Y es en ese mismo día 22 de abril de 1779, cuando a don Francisco de Viedma le pareció haber hallado el lugar ideal para realizar la fundación, a unas seis o siete leguas de la desembocadura y a una cuadra de la margen derecha, en el ángulo que forman el río y el zanjón llamado del Sur.
    
    Viedma, excelente agricultor andaluz, frente al hermoso valle, no dudó en la elección de la margen que debía ser asiento de la futura población: sería la orilla derecha, baja y fértil, fácil de regar y de trabajar.
    
    El 22, al parecer en horas de la mañana, señaló el terreno para levantar fuerte y población y en la tarde se comenzó a abrir el foso, ocupando en esos trabajos hasta la marinería. El día mencionado, pues, es el día de la fundación de CARMEN DE PATAGONES.
    
    Los días 23, 24 y 25 se alistaron las herramientas y se dio comienzo al corte de madera de sauce, árbol que crecía abundante en las orillas del río e islas cercanas. Los indígenas colaboraron conduciendo con sus caballos las maderas a cambio de chucherías, pan y yerba.
    
    De sol a sol trabajaron los españoles. Para el 4 de junio de 1779 ya estaba casi concluido el fuerte hecho de cajonería y palo a pique, panes de tierra y paja.
    
    No obstante había asomado un peligro. Los indios habían comenzado a insolentarse tanto que los hombres que trabajaban debían estar armados. Los caciques, sin embargo, tenían una actitud conciliadora. El cacique Chanel, alias el Negro, bajó del río Colorado para saludar a Viedma y se ofreció para llevar correspondencia desde el fuerte hasta Buenos Aires, no sin antes entregar una carta del virrey de Vértiz al fundador.
    
    Nombre del fuerte y población
    El primer nombre con el que se designó a la fundación no hay dudas de que fue el geográfico o sea el natural para una población aún no bautizada.
    
    El fuerte estaba junto al río Negro, se le llamó pues FUERTE DEL RIO NEGRO. Pero bien pronto se pensó, como era lógico, levantar una capilla y con ello comenzó también la tarea de elegir la Virgen que se pondría en su altar. Dicha Virgen daría origen al nombre bautismal de la fundación.
    
    El 4 de junio de 1779 el propio fundador, don Francisco de Viedma, escribiéndole al virrey de Vértiz, dice: "A ESTE FUERTE  Y POBLACIÓN SE LE DENOMINA DE NUESTRA SEÑORA DEL CARMEN POR HABERLA ELEGIDO DE PATRONA. SÍRVASE VUESTRA EXCELENCIA DAR DISPOSICIÓN PARA QUE SE HAGA UNA EFIGIE DE ESTA SEÑORA Y SE LA REMITA con la mayor BREVEDAD PARA COLOCARLA EN LA CAPILLA".
    
    También se le llamó Patagones, con lo que vemos fueron tres los nombres con los cuales se reconoció al establecimiento; Patagones, por los indígenas pobladores de la región.
    
    La inundación
    Antes de fundar el fuerte, Viedma consultó a los aborígenes sobre las crecientes del río. De la información recogida surgió, a su entender, que las aguas jamás llegarían al paraje elegido, por lo que no previó un solo instante la catástrofe que se le avecindaba.
    
    El 9 de junio de 1779 comenzó a soplar un fuerte viento que embraveció las olas provocadas por la marea. El día 13, a las 23, el agua contenida por el viento sur salió de madre y lo inundó todo. Felizmente el centinela dio la alarma y la gente se salvó en el techo del almacén. Del suceso se salvaron los víveres pues no se habían desembarcado, no así 200 panes y 2 quintales de galletas que estaban en el horno.
    
    Si bien la inundación duró nada más que media hora, Viedma comprendió que el río sería su constante enemigo, por lo que, con dolor, "DETERMINO MUDAR LA POBLACIÓN A LA PARTE NORTE EN CUYA MARGEN SOLAMENTE SE ENCUENTRAN SITIOS DONDE CON SEGURIDAD SE PUEDE ESTAR SIN INUNDACIÓN ALGUNA", y señala el propio fundador: "AUNQUE CARECE DE AQUELLA TAN DILATADA, LLANA Y FERTIL SITUACION DE LA OTRA BANDA".
    
    El traslado
    Viedma encargó al comandante de la tropa, oficial de infantería José Martí, que inspeccionara la banda norte a fin de proceder al traslado de fuerte y población. El día 15 de junio estaba, acompañado por el piloto Manuel Bruñel, el sargento José Michán y un conocedor de la zona llamado José Puche, buscando lugar apropiado para levantar definitivamente el establecimiento.
    
    Ese mismo día 15, en horas de la tarde, se inició el trabajo de echarse abajo las estacadas de la fortificación del sur y el 16 se construyeron balsas de madera; el día 19 se empezó el traslado de los materiales de una orilla a otra. El día 20 ya se estaba en condiciones de iniciar la tarea de levantar el fuerte en la banda norte y tanto se trabajó en él que a principios de agosto "TODA LA GENTE ESTABA CUBIERTA EN RANCHOS PROVISORIOS DE PALO A PIQUE, JUNCOS Y TECHOS DE PAJA".
    
    La soledad y el peligro aconsejaron a Viedma la construcción de un fuerte más sólido aprovechando la piedra hallada en una cantera situada a pocas cuadras del lugar elegido. El ingeniero José Pérez Brito fue el encargado de la obra. Una muralla en cuadro de 66 metros con 80 centímetros de lado por 3,675 metros de alto y 0,835 de ancho limitaba el recinto fortificado.
    
    El almacén para la custodia de los víveres, la capilla, otras dependencias y la hermosa torre atalaya se hicieron también de piedra (arenisca o tosca mora como se llama comúnmente).
    
    La banda sur, al parecer, no fue abandonada totalmente, sino que fue utilizada para resguardo de las caballadas.
    
    Familias Colonizadoras
    España había dispuesto salvar las pampas y la Patagonia de una invasión extranjera; pero no lo haría, sólo con guarniciones militares, sino enviando familias al sur para que levantaran en él su hogar, labraran la tierra, criaran ganado, industrializaran los productos de tan dilatadas regiones.
    
    Se contrataron familias pobres del norte de España, labradoras y artesanas, sencillas, pero trabajadoras, capaces de enseñar a los indígenas su oficio y con su ejemplo inducirlos a la vida sedentaria.
    
    Los primeros colonos llegaron al río Negro el 2 de octubre de 1779. Todas esas familias venían por cuenta del rey. Se les daba pasaje, útiles de labranza, una o dos yuntas de bueyes, semillas, tierras en propiedad, casas habitaciones dignas y un año de manutención. En la práctica, sin embargo, hubo muy poco o nada de esos beneficios.
    
    Las familias tuvieron que abrir cuevas en los barrancos de la costa y refugiar en ellas su hogar; no se les dió tierras en propiedad ni yunta de bueyes. Tuvieron que aprender a arar con caballos.
    
    Esas familias venían de España -dijimos-, de Galicia, de Zamora, de Castilla la Vieja, de Leon. A raíz de la presencia de algunas originarias de la Maragatería (comarca de la provincia de Leon) a los nacidos en Patagones se los llama maragatos. Cabe aclarar aquí que el pueblo maragato es, según algunos investigadores, de raza  árabe; volcado al catolicismo fue perseguido por sus hermanos de sangre y se tuvo que refugiar en las regiones montañosas del norte de España desde donde se incorporó a la corriente inmigratoria hacia la Patagonia.
    
    Como es lógico, con esas familias llegaron a las márgenes rionegrinas las primeras mujeres blancas. Cuenta la historia que "APENAS LOS INDIOS VIERON MUJERES COMENZARON A EXASPERARSE PORQUE DECIAN QUE AHORA CAIAN EN LA CUENTA DE QUE VENIAN A QUITARLES SUS TIERRAS". Y agrega: "Y SIN MAS SALIERON CAMPO AFUERA DANDO ALARIDOS. SE LLEVARON SEIS CABALLOS Y AMENAZARON CON VOLVER EN NUMERO PARA ASALTAR". Felizmente don Francisco de Viedma que conocía ya algunas facetas del carácter de los aborígenes los llenó de regalos, les envió un barril de aguardiente y chucherías y renació la calma.
    
    La presencia de estas familias salvó la Patagonia -ya lo dijimos- para España primero, para la argentinidad después. Por ello acomodar nuestra conducta al ejemplo de tenacidad, de constancia, de responsabilidad, de amor a la tierra que nos legaron, es asegurarnos una formación espiritual digna de nuestros mayores.
    
    Las dos bandas o barrios
    Las familias agricultoras comenzaron de inmediato a labrar las tierras bajas y fácilmente regables próximas al fuerte. Sin lugar a dudas el primer potrero trabajado fue el denominado El Bañado, paraje situado al pie del cerro donde se levantaba la fortaleza.
    
    Pero el lugar era demasiado pequeño para tantos brazos, por lo que los labradores se dedicaron entonces al laboreo de las tierras ubicadas en la margen sur, donde estaba el verdadero valle. Pasaban a la mañana y regresaban al anochecer para ponerse al amparo de los cañones de la fortaleza. Más tarde, perdido el miedo al indígena y levantado el fortín San Javier en 1782 que impedía la entrada de los malones por esa zona, algunas familias comenzaron a asentarse definitivamente en la orilla sur o derecha.
    
    En esa margen se asentaron, además algunas tribus amigas, entre ellas las del famoso cacique Churlaquín, al que Viedma, más de una vez, sentó a su mesa. A fin de satisfacer las nuevas necesidades de los indígenas (tabaco, aguardiente, yerba, azúcar, prendas de vestir, chucherías, etc.) se abrieron también en la banda sur algunas pulperías.
    
    El comercio con los aborígenes en una y otra banda fue muy activo (pieles, cueros, plumas y cerdas por víveres y ropas). Los patagones o tehuelches (aoniken), debido a esta circunstancia, se transformaron en grandes amigos de los españoles y sus protectores frente a las pretensiones de arrasamiento de la población por parte de los araucanos. 
    
    Como vemos, la población fundada por don Francisco de Viedma comenzó a extenderse en ambas márgenes del río, es decir, tenía dos barrios o bandas, como se estilaba decir en aquella época. A esa población con dos barrios o dos bandas, se le llamaba indistintamente Río Negro, El Carmen o Patagones, tal como lo dejamos dicho en paginas anteriores.
    
    En 1856, el comandante militar de Patagones, Coronel Benito Villar, erigió en la banda sur una capillita de palo a pique bajo la advocación de Nuestra Señora de la Merced. De allí que esa margen comenzó a denominarse Mercedes de Patagones (desde 1859) aunque más comúnmente se usaba decir Patagones al sur.
    
    Educación
    El problema educativo estuvo siempre en la preocupación del pueblo maragato.
    
    Un poblador -Juan Gómez de la Pinta- ofició de maestro particular en el siglo XVIII, llevando una vida de extrema pobreza.
    
    En los primeros años del siglo XIX prosiguió las actividades docentes y en el mismo plano doña Francisca Sánchez de Rial.
    
    Existe un documento que habla de una escuela del fuerte en las primeras épocas del mismo; pero nada se ha podido concretar al respecto hasta estos momentos. Solo se sabe a ciencia cierta que si esa escuelita existió, para el año 1820 había cerrado sus puertas, pues en los primeros días de agosto de 1821 el comandante militar de la fortaleza, teniente coronel José Gabriel de Oyuela, fundaba la Escuela de Varones, escuela que llevó él numero uno y que funcionó en el propio fuerte durante años.
    
    A esa escuela concurrió don Bartolomé Mitre, cuya infancia transcurrió en Patagones y cuyo padre era el contador del Fuerte (desde 1822 a 1828).
    
    La primer escuela de mujeres se habilito en 1856, dependiendo de la Sociedad de Beneficencia. La banda sur tuvo su primer escuela de varones ese mismo año.
    
    Los salesianos se incorporaban a la acción educativa del pueblo en 1880 abriendo sus colegios para niñas y varones.
    
    En 1916 un ambicioso proyecto se ponía en marcha: la Primera Escuela Normal Popular de la Patagonia. Si bien cerro sus puertas en 1920 no por ello dejó de dar el primer plantel de maestros sureños ese mismo año.
    
    El más grande de los maestros que educo a la niñez maragata fue don MARIANO ZAMBONINI, que actúo entre los años 1844 y 1868.
    
    Economía
    El trabajo constante y sacrificado de los colonos, a medida que transcurría el tiempo, lleno de oro y verdor las márgenes rionegrinas. El trigo fue cultivado con preferencia a otras especias de granos. Se lo molió en tahonas y así pudo fabricarse el pan con harina maragata. Se plantaron también frutales, especialmente el guindo, el nogal, la higuera, el duraznero, el manzano. Se cultivo la vid y se fabrico el vino. También el guindado.
    
    Se exploto la sal de las salinas vecinas; especialmente de la llamada actualmente La Espuma, a cinco leguas aguas arriba de Patagones. También se exploto la saucería, con cuya madera se construyeron balandras necesarias, según Viedma, para la navegación del río Negro.
    
    La cría de ganado fue otra de las fuentes de enriquecimiento de la zona. Se adquirieron en un principio caballos, vacas y ovejas por trueque con los indígenas. Sin embargo algunos animales entraron a la región por barco, enviados desde el río de La Plata. En 1782 llegaron las primeras ovejas embarcadas desde Buenos Aires, eran 22 animales. Debemos dejar aclarado que la explotación ovina en gran escala solo comienza en la zona después de 1860.
    
    Se criaron cerdos traídos desde el Plata; los jamones de Patagones eran los más codiciados del virreinato. Viedma hizo traer aves de corral.
    
    Los comerciantes maragatos obtuvieron de los aborígenes, a cambio de aguardiente, azúcar, tabaco, yerba, bayeta, abalorios, espejos, etc., los llamados frutos del país, tales como pieles (de guanaco, zorrino, zorro, liebre, gato montes, plumas de avestruz y cueros de vaca, caballo, etc.) que remitían por barco a Buenos Aires y con los que obtenían pingües ganancias.
    
    La bandera argentina en el fuerte de Patagones
    Pese a la importancia del emplazamiento de Carmen de Patagones, la avanzada mas austral de España en nuestro desierto, los virreyes poco a poco fueron desentendiéndose de su vida y sus problemas, por lo que comenzó un largo período de estancamiento para las márgenes rionegrinas, ya que los jefes militares designados para su gobierno fueron, según el historiador José Juan Biedma, "de jerarquía subalterna y escasísima preparación".
    
    Así sorprendió a Patagones la Revolución de Mayo. Dijimos una vez que este hecho paso poco menos que inadvertido para el pueblo Maragato, tal era su lejanía del escenario en el que tuvo lugar; pero cuando llego a su conocimiento solo pudo originar en él sentimientos de rechazo, ya que un movimiento de esa naturaleza constituía para un pueblo como el de Patagones, respetuoso de su origen y amante profundo de sus tradiciones, un acto de indisciplina hacia el rey, hacia sus costumbres, hacia su fe religiosa.
    
    Esta actitud mental y emotiva lo llevo a apoyar la sublevacio0n de tres políticos deportados en la población, quienes pensaron devolver a España las regiones patagónicas gobernadas por un militar patriota desde fines del año 1810.
    
    El 21 de abril de 1812 tres distinguidos españoles prisioneros en Patagones, con la complicidad de la guarnición y el pueblo todo, se apoderaron de la fortaleza, y dejando un comandante militar que respondía a sus aspiraciones, el sargento Domingo Fernández, emprendieron viaje a Montevideo.
    
    Desde ese momento, pues, las márgenes rionegrinas dependieron de la capitanía de puertos de esa ciudad, ya que era un apostadero naval.
    
    A raíz de la victoria de la escuadra de Brown sobre la española en las aguas rioplatenses (17 de mayo de 1814) y la rendición de Montevideo (23 de junio de ese mismo año) Carmen de Patagones pasa nuevamente y para siempre a formar parte de la escuadrilla al mando de Oliver Russell (marino escocés), las tropas nacionales desembarcaban y tomaban la fortaleza en forma pacifica, ya que Fernández comprendió que toda resistencia era inútil.
    
    Así fue como en ese 23 de diciembre, la bandera albiceleste de Belgrano flameaba por primera vez en el mástil del fuerte maragato y los ojos de la población rionegrina conocían por primera vez, también, los colores que lentamente le irían ganando el corazón.
    
    Invasión brasileña a Patagones
    El Carmen de Patagones, asentado a horcajas sobre la gran corriente fluvial rionegrina, vivió largos años en plena soledad. Pero a pesar de ello tuvo momentos de grandes urgencias, de tremendas responsabilidades, tales los vividos en el año 1827 cuando supo enfrentar y vencer una bien organizada expedición brasileña integrada por 613 hombres bajo el mando del capitán de fragata inglés James Shephard.
    
    Desde diciembre de 1825 Argentina se hallaba en guerra con el Imperio del Brasil. El derecho de pertenencia del territorio actualmente uruguayo había provocado el conflicto.
    
    A raíz del bloqueo del puerto de Buenos Aires por la escuadra imperial, al apostadero naval rionegrino se había transformado en el seguro refugio de nuestros corsarios que atacaban valientemente el poderío naval enemigo.
    
    El botín de guerra, los negros esclavos arrancados a los veleros que se dedicaban a tan infame trafico, los prisioneros, todo era desembarcado en Patagones, lo que dio origen a una activación inusitada en la vida maragata de aquel entonces. La riqueza llego a la zona y las familias hasta ese momento de vivir sencillo, aldeano, conocieron el lujo traducido en muebles finisímos, porcelanas, tapices, pianos, sedas, encajes, en fin, todo un mundo de "Las mil y una noches" que trastoco el clima apacible y monótono del ultimo pueblo de la tierra, como alguna vez se le llamo a Carmen de Patagones.
    
    Brasil se sintió herido profundamente en sus intereses por el éxito del ataque de los corsarios a su comercio marítimo y con el fin de arrasar batería y población del punto que había alcanzado a asumir tan importante papel en la guerra, resolvió enviar una poderosa escuadra al río Negro.
    
    El 28 de febrero de 1827 cuatro naves forzaron la barra. Una de ellas varo y se hundió pocos días después. Desde la batería de la boca se hostilizó a la fuerza invasora; pero sin resultado, dado la escasez de municiones. En esta acción los criollos perdieron dos soldados de la infantería negra del coronel Felipe Pereyra y un oficial corsario, el valiente Fiori, "a quien su bravura condujo a una muerte gloriosa".
    
    Durante seis días los imperiales actuaron con demora y desorientación, dando tiempo a Patagones a organizarse y a poner al fuerte en estado de defensa.
    
    El 6 de marzo, a las 21, los brasileños echaron a tierra un grupo explorador a legua y media de la batería de la boca. Luego de un reconocimiento de la zona, el citado grupo se repliega hacia la costa donde permanecía embarcado el grueso de la expedición. Se supone que desde las 23, aproximadamente, los brasileños realizan las tareas de desembarco de una columna de infantería que tendrá  por misión atacar el fuerte de Patagones. Después de las 2 de la madrugada del día 7, dicha columna de infantería emprende la marcha en dirección al Carmen. Al principio mal conducida por su baquiano, se pierde en el monte, mas luego, retomando buen camino, aparece sobre el Cerro de la Caballada al amanecer.
    
    Carmen de Patagones esperaba a pie firme al invasor. En el monte, el subteniente mendocino don SEBASTIAN OLIVERA y sus ochenta milicianos (chacareros, hacendados, artesanos y comerciantes, más los gauchos del baquiano JOSE LUIS MOLINA); en el río, los corsarios Jaime Harris, Soulin y Dautant y sus tripulaciones bajo las ordenes del comandante SANTIAGO JORGE BYNON y en el fuerte las mujeres, los niños y los viejos junto a la infantería negra del coronel Pereyra, dispuestos todos a vender cara la vida y a defender hasta la última gota de sangre el honor de la nación.`;
    leyenda.value = texto;
  });

L.marker([-39.914063647089854, -62.625465917629185]) // Generamos un marcador dentro del mapa
  .addTo(map)
  .bindPopup("<b>Villalonga</b><br>Fundada el 29 de Mayo de 1929")
  .openPopup().addEventListener("click", function () {
    const leyenda = document.getElementById("leyenda");
    let texto = `A cinco kilómetros de la actual localidad de Villalonga existió un asentamiento poblacional, como una etapa de avance de la civilización. En 1885 funcionaba allí una oficina de telégrafo y se denomina al lugar "Los Pozos". En 1913 se amplio el recorrido ferroviario desde Pedro Luro hasta Stroeder, incluyendo la estación de Villalonga ubicada entre Igarzabal y Emilio Lamarca.

    Desde la habilitación de la estación del ferrocarril, se fue produciendo paulatinamente un desplazamiento de quienes habían construido en "Los Pozos" su vivienda.
    
    Se formó un grupo de ranchos y modestas viviendas, aparecieron los primeros comercios (almacenes de ramos generales), el servicio telegráfico se brinda desde la estación ferroviaria y en 1927 se habilitó la estafeta postal, siendo su primer encargado, don José Umisky.
    
    La señora Francisca Urquijo Sexe presentó un proyecto de fundación de un pueblo en torno a la estación de Villalonga, que fue elevado a Geodesia y el Ministerio de Obras Públicas lo aprobó.El 29 de Mayo de 1929 se concretó la primera venta de lotes, solares y quintas, iniciándose formalmente dicha localidad.
    
    Los pobladores están vinculados directamente a la actividad rural, y fue muy dura la lucha contra diversos inconvenientes, especialmente en el bajo promedio de precipitaciones. Esta circunstancia motivó la formación de una "Comisión Proriego", que inició las gestiones tendientes a concretar un plan de riego aprovechando las aguas del río Colorado. Los estudios fueron aprobados oficialmente en el año 1949.
    
    El mejoramiento urbano, la creación de entidades propiciando manifestaciones comunitarias y la habilitación de servicios, fueron marcando el progreso. Entre algunas realizaciones se destacan, Cooperativa Agrícola de Villalonga Limitada (1949), sucursal del Banco de la Provincia (1853), Asociación Agrícola Ganadera (1956), Delegación de CORFO (1963), Planta de Silos y Frigorífico "Calquin" (1968), Sociedad de Bomberos Voluntarios (1983).
    
    Denominación
    Epónimo que recuerda a don José A. Villalonga, quien fue funcionario de la empresa Ferrocarril Oeste y del Ministerio de Obras Públicas, y fundador de la empresa de transportes que también lleva su nombre.`;
    leyenda.value = texto;
  });

L.marker([-40.18301969124652, -62.621369149030876]) // Generamos un marcador dentro del mapa
  .addTo(map)
  .bindPopup("<b>Stroeder</b><br>Fundada el 11 de Noviembre de 1913")
  .openPopup().addEventListener("click", function () {
    const leyenda = document.getElementById("leyenda");
    let texto = `Hugo Stroeder, Germano de buena cepa, visionario o aventurero, supo desde muy joven de la existencia de la Argentina y entre los años 1870 y 1880 se instala en la Capital Federal como uno de los negocios más rentables de aquellas épocas: La Colonización.

    Así instalado en la calle Lavalle, su compañía adquirió enormes proporciones.
    
    Con oficinas también en Donado 81 de Bahía Blanca don Hugo Stroeder fue organizando su actividad.
    
    En 1911 adquirió 15.263 hectáreas a Eloísa Eborral de Mulhall y Tomás Mulhall, quienes un año antes se habían adjudicado 29.815 hectáreas de la dirección de Geodesia Bonaerense.
    
    En ese lote setenta y siete está ubicada la localidad, según la historia legal del asentamiento acerca de los primeros datos concretos.
    
    Jorge Meller, administrador de Stroeder, tuvo a su cargo el loteo y las ventas de la tierras a precio promocional (dos pesos la cuota, oferta que superaba la competencia a los Mulhall, quieres vendían a 8 pesos).
    
    En la memoria popular y en el Registro Catastral aparece el nombre "Los Frutales".
    
    En el lugar se establece una incipiente colonia, allá por 1905, es decir, mucho antes de la llegada de la vía férrea.
    
    Sin embargo, las tierras dejan de ser fiscales recién en 1910, cuando pasan a pertenecer a los potentados Mulhall.
    
    Esto aclara la explicación de la existencia de un establecimiento escolar - La Escuela N° 9 - desde 1908, a la que asistían cuarenta alumnos.
    
    La Escuela fue fundada en el paso nivel Norte y Alberto Balcanera fue el primer Director, quien también llega al mismo momento a Tres Bonetes a enseñar.
    
    En el mes de mayo de 1912 llegaron barcos (de madera, de 12 a 15 metros aproximadamente) al Puerto, o sea "Colonia Tres Bonetes" (su nombre se debe a que cuando los colonos se aproximaban al lugar se divisaba a larga distancia, tres lomas de arena que se asemejaban a bonetes), varias familias de inmigrantes que al llegar al canal más profundo desembarcaban a unos 400 metros de la orilla del mar.
    
    En el Puerto había un muelle, que tenía una vía, donde pasaba un carro (zorrita) que trasladaba las bolsas de trigo, lana y pescado en los barcos, que se dirigían a White.
    
    En dicho lugar se construyeron unas 9 casas, que pertenecían a pescadores como: Conti, Esteban Coria, Atilio Copa, Espadaro, Pepe José Manzano Averzano, Digiorgio, Dinello, y otros.
    
    Había un almacén cuyo dueño era Villango.
    
    Entre 1920 y 1923 funcionaba la escuela en una casa en la granja de Pisso, que luego se trasladó al puerto, siendo su primer maestro el Señor Nicolás Francisco Velasco.
    
    Las familias que vivían en el Puerto se dedicaban a la pesca, comercializaban trasladándola al Puerto de White.
    
    Esta colonia con los años comenzó a decaer con la llegada del tren.
    
    En Tres Bonetes se instalan varios colonos formando una comunidad que contaba con Destacamento Policial, Escuela, tres almacenes de ramos generales y una zanja que servía de freno a las invasiones indígenas.
    
    Los pioneros que eligieron estas tierras no tenían ni idea del sitio en el que se radicarían sus familiares.
    
    Pero como ocurrió con todas las colonizaciones, "alguien tenía que venir..."
    
    Los colonos al llegar se encontraron que aquí todo era monte y las herramientas de la época eran hacha, pico, pala y arado de dos rejas... Con estos elementos aquellos hombres y mujeres limpiaron gran parte de esos montes, para eso hizo falta valentía y tenacidad; el poco dinero que traían se terminó antes de que las tierras estuvieran listas para la siembra.
    
    En el año 1913 sembraron 3.200 hectáreas y en 1929 fueron 50.000 Has. sembradas.
    
    Los colonos arribaron por barco a Patagones, en autos alquilados o por el servicio de Galera de los hermanos Marcos y Nicolás Mora que unían Fortín Mercedes con Carmen de Patagones, utilizando dos carruajes con seis mulas cada uno y tres caballos de andar, por cualquier contratiempo.
    
    Las postas eran Fortín Viejo, Querencia y Jarillas.
    
    El asentamiento en el lote setenta y siete toma el nombre de colonia Los Pozos, Emporio, Villa Stroeder "La California Argentina y luego Stroeder.
    
    En 1916, la Provincia aprueba los planos del loteo a Stroeder, pero plantea la necesidad de un replanteo. Esos mismos planos son desacreditados en 1928 y recién vuelven a ser aprobados, luego de reformas realizadas por el agrimensor Roberto Escarrá, el 4 de Agosto de 1936.
    
    Desde el 2 de Noviembre de 1911 arribaron los trenes de Bahía Blanca a Stroeder, pero el martes 11de Noviembre de 1913 llega en un tren enarbolado con bastones de fiesta don Hugo Stroeder, hecho que marca el comienzo de la localidad.
    
    Stroeder no es la formación de una población diagramada y consensuada, es el producto de varias causas económicas.
    
    En 1921 cuando deja de ser Punta de Rieles, los puertos de Patagones y Tres Bonetes comienzan a paralizarse.`;
    leyenda.value = texto;
  });

L.marker([-40.650969261445454, -62.75426216456412]) // Generamos un marcador dentro del mapa
  .addTo(map)
  .bindPopup("<b>Cardenal Cagliero</b><br>Fundada el 16 de Diciembre de 1949")
  .openPopup().addEventListener("click", function () {
    const leyenda = document.getElementById("leyenda");
    let texto = `Cardenal Cagliero tiene la peculiaridad de haber sido creada por un acto deliberado del estado provincial a través de un decreto del gobernador.

    Esa decisión se enmarcó en la trascendente política de desarrollo agropecuario de la administración del gobernador Domingo Mercante, quien resolvió la cuestión de las tierras fiscales de nuestro  distrito en un racional proyecto de colonización realizado en la perspectiva de contar con regadío y bajo el apotegma del general perón de "dar la tierra a quien la trabaja".
    
    El  decreto de creación de un nuevo centro de población en el lote 132 del partido de Patagones con el nombre de Cardenal Cagliero fue sancionado por el gobernador Mercante el día 16 de diciembre de 1949 por ello en esta fecha conmemoramos el aniversario de su creación.`;
    leyenda.value = texto;
  });

L.marker([-39.599759584586195, -62.65158757096641]) // Generamos un marcador dentro del mapa
  .addTo(map)
  .bindPopup("<b>Juan A. Pradere</b><br>Fundada el 05 de Diciembre de 1913")
  .openPopup().addEventListener("click", function () {
    const leyenda = document.getElementById("leyenda");
    let texto = `La Localidad de Juan A. Pradere fue fundada el 5 de diciembre del año 1913 y su nombre se debe al reconocimiento oficial y comunitario a Don Juan Pradere, donante de las tierras que utilizó el Ferrocarril del Sud para construir la estación en el lugar. Está ubicada a unos 128 Km., de Carmen de Patagones.

    El ferrocarril
    Se originó en el año 1906 para unir las ciudades de Bahía Blanca y Carmen de Patagones. El planeamiento se hizo en 1908, su construcción comenzó en el año 1910 en la Estación Bordeau. Desde allí comenzaron a realizarse varios kilómetros de vías férreas, creándose en agosto de 1912 las estaciones ferroviarias de: Aguará, Ombucta, Teniente Origones, Mayor Buratovich, Hilario Ascasubi y Pedro Luro. Luego las vías que unen Pedro Luro - Stroeder en 1914, pero en 1915 se abrieron 2 escalones intermedios: Juan A. Pradere e Igarzábal. En el año 1922 pudo completarse el ramal Bahía Blanca – Patagones con sus correspondientes estaciones. Por muchos años hubo trenes locales, casi todos los días cubriendo ese trayecto.
    
    La Sociedad Pradere Hermanos, dona 182 Has. al Ferrocarril Sud para la construcción de una estación.
    
    El 16 de agosto de 1913, Doña Juana Estevarena de Pradere pide permiso para fundar un pueblo en su campo y ubicarlo alrededor de la estación ferroviaria que está en el km. 112,100 del ramal Bahía Blanca – Patagones, a 78 metros de altitud sobre el nivel del mar.
    
    La señora propone el nombre de “Juan A. Pradere” en memoria de su esposo, que fue uno de los pioneros de la industria agropecuaria que está en la región del Río Colorado desde 1879.
    
    Se establece como fecha de fundación el 5 de diciembre de 1913 por ser el día en que el Poder Ejecutivo resuelve denominar “Juan A. Pradere” a la estación ferroviaria.`;
    leyenda.value = texto;
  });

L.marker([-40.5584423470003, -62.235608597636634]) // Generamos un marcador dentro del mapa
  .addTo(map)
  .bindPopup("<b>Bahia San Blas</b><br>Fundada el 18 de Octubre de 1821.")
  .openPopup().addEventListener("click", function () {
    const leyenda = document.getElementById("leyenda");
    let texto = `Completar Descripcion`;
    leyenda.value = texto;
  });

L.marker([-40.4340907845137, -62.54466151818412]) // Generamos un marcador dentro del mapa
  .addTo(map)
  .bindPopup("Jose B. Casas")
  .openPopup().addEventListener("click", function () {
    const leyenda = document.getElementById("leyenda");
    let texto = `Completar Descripcion`;
    leyenda.value = texto;
  });

L.marker([-40.43229049516822, -62.42437113772076]) // Generamos un marcador dentro del mapa
  .addTo(map)
  .bindPopup("<b>Balneario - Los Pocitos</b><br>Fundado el 23 de Abril de 1959")
  .addEventListener("click", function () {
    const leyenda = document.getElementById("leyenda");
    let texto = `Mediante ordenanza Nº 519 promulgada por decreto municipal Nº 2027 del 23 de septiembre de 2009, se instituye el día 23 de abril de 1959 como fecha fundacional de la villa balnearia Los Pocitos.

    La fecha fundacional y conforme invaluable material aportado por el Museo Regional "Emma Nozzi" del Banco de la provincia de Buenos Aires y conforme postura del Director de dicho museo, la fecha fundacional se tomaría el día de presentación del plano de subdivisión de la parcela 867 A, en la oficina de geodesia en la ciudad de La Plata.
    
    Una vez aprobada la mensura de dichos planos, se dio lugar a la cantidad de 313 lotes y recién de ahí en más se pudo iniciar el proceso de venta.
    
    Los Pocitos es un paraje que comenzó a ser conocido como tal por lo menos en la década de 1930, ubicado sobre la costa del mar a 80 km. de Carmen de Patagones, cabecera del Partido de Patagones.
    
    Su origen obedeció al hecho de que los vecinos de dichas localidades y su adyacencia rural tenían allí su playa más cercana, precisamente en la tosca costera, unos cinco pozos de alrededor de doscientos litros de capacidad, dieron nombre al lugar.
    
    La villa marítima fue creciendo, llegaron los adelantos con infraestructura diferente. Juncos y limo, sumado a la ostra, la villa marítima Los Pocitos se convirtió en punto de naturaleza y tranquilidad, para el turismo.`;
    leyenda.value = texto;
  })
  .openPopup("false");
