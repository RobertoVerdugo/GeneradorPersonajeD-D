import randomInt from "./Random.js"

export default class Trasfondos{
    lista =[
        {
            nombre:"Acólito",
            rasgo_personalidad:[
                "Idolatro a un héroe en particular de mi fe, y hago referencia constantemente a las vivencias y el ejemplo de esa persona.",
                "Puedo encontrar un objetivo común hasta con los enemigos más feroces, empatizar con ellos y trabajar siempre hacia la paz.",
                "Veo presagios en cualquier acontecimiento y acción. Los dioses tratan de hablar con nosotros, sólo tenemos que escuchar",
                "Nada puede hacer tambalear mi actitud optimista.",
                "Cito (o incorrectamente cito) los textos sagrados y proverbios en casi cualquier situación.",
                "Soy tolerante (o intolerante) hacia otras religiones y respeto (o condeno) la adoración de otros dioses.",
                "He disfrutado de la buena comida, bebida y la alta sociedad entre la élite de mi templo. Me incomoda la vida ruda.",
                "He pasado tanto tiempo en el templo que tengo poca experiencia práctica en el trato con personas del mundo exterior."
            ],
            ideal:[
                "Tradición. Las antiguas tradiciones de culto y sacrificio deben ser preservadas y defendidas. (Legal)",
                "Caridad. Yo siempre trato de ayudar a los necesitados, sin impor-tar el coste personal. (Bueno)",
                "Cambio. Debemos ayudar para que se logren los cambios que los dioses maquilan constantemente para el mundo. (Caótico)",
                "Poder. Espero llegar algún día a la cima de la jerarquía religiosa de mi fe. (Legal)",
                "Fe. Confío en que mi deidad guiará mis acciones. Tengo fe en que si trabajo duro, las cosas irán bien. (Legal)",
                "Aspiración. Trato de probarme a mí mismo ser merecedor de los favores de mi dios, comparando mis acciones con sus enseñanzas. (Cualquiera)"
            ],
            vinculo:[
                "Daría mi vida para recuperar una antigua reliquia de mi fe que se perdió hace mucho tiempo.",
                "Algún día me vengaré de la corrupta jerarquía del templo que me tachó de hereje.",
                "Le debo mi vida al sacerdote que me acogió cuando mis padres murieron.",
                "Todo lo que hago es para la gente común.",
                "Haré cualquier cosa para proteger el templo donde serví.",
                "Busco preservar un texto sagrado que mis enemigos consideran herético y tratan de destruir."
            ],
            defecto:[
                "Juzgo a otros con dureza, y a mí mismo aún más severamente.",
                "Pongo demasiada confianza en quienes ejercen el poder dentro de la jerarquía de mi templo.",
                "Mi piedad a veces me lleva a confiar ciegamente en los que profesan la fe en mi Dios.",
                "Soy inflexible en mi pensamiento.",
                "Soy desconfiado con los extraños y espero lo peor de ellos.",
                "Una vez que tengo un objetivo, me obsesiono con él en detrimento de todo lo demás en mi vida."
            ],
        },
        {
            nombre:"Artesano Gremial",
            rasgo_personalidad:[
                "Creo que cualquier cosa que valga la pena hacerse, vale la pena hacerlo bien. No puedo evitarlo —Soy un perfeccionista.",
                "Soy un engreído que mira con desprecio a aquellos que no pueden apreciar el arte.",
                "Siempre quiero saber cómo funcionan las cosas y qué mueve a la gente.",
                "Conozco cientos de ingeniosos aforismos y tengo un proverbio para cada ocasión.",
                "Soy grosero con la gente que no tiene mi compromiso por el trabajo duro y las reglas justas.",
                "Me gusta hablar largo y tendido sobre mi profesión.",
                "No me separo con facilidad de mi dinero y regatearé para conseguir el mejor trato posible.",
                "Soy bien conocido por mi trabajo, y quiero asegurarme de que todo el mundo lo aprecia. Siempre me sorprende cuando alguien no ha oído hablar de mí."
            ],
            ideal:[
                "Comunidad. Es el deber de todas las personas civilizadas reforzar los vínculos de la comunidad y la seguridad de la civilización. (Legal)",
                "Generosidad. Mis talentos me fueron dados para que pudiera usarlos para beneficiar al mundo. (Bueno)",
                "Libertad. Cada uno debería ser libre de perseguir su propio estilo de vida (Caótico)",
                "Avaricia. Sólo estoy en esto por el dinero (Maligno)",
                "Gente. Estoy comprometido con la gente que me importa, no con un ideal (Neutral)",
                "Aspiración. Trabajo duro para ser el mejor en mi oficio. (Cualquiera)"
            ],
            vinculo:[
                "El taller donde aprendí mi oficio es el lugar más importante en el mundo para mí.",
                "Creé una gran obra para alguien, y después lo encontré indigno de recibirla. Todavía busco a alguien que sea digno.",
                "Le debo mucho a mi gremio por convertirme en la persona que ahora soy.",
                "Busco riquezas para asegurarme el amor de alguien.",
                "Algún día, volveré a mi gremio y probaré que soy el más grande artesano.",
                "Me vengaré de las malvadas fuerzas que destruyeron mi lugar de trabajo y arruinaron mi estilo de vida."
            ],
            defecto:[
                "Haré cualquier cosa para poner mis manos sobre algo raro o valioso.",
                "Rápidamente asumo que la gente trata de engañarme.",
                "Nadie debe saber que una vez robé de las arcas del gremio.",
                "Nunca estoy satisfecho con lo que tengo —siempre quiero más.",
                "Mataría para adquirir un título de nobleza.",
                "Estoy horriblemente celoso de cualquiera que pueda eclipsar mi trabajo manual. Donde quiera que vaya, estoy rodeado por rivales."
            ],
        },
        {
            nombre:"Artista",
            rasgo_personalidad:[
                "Conozco una historia relevante para casi todas las situaciones.",
                "Cada vez que vengo a un lugar nuevo, colecciono rumores locales y difundo chismes.",
                "Soy un romántico empedernido, siempre en busca de “ese alguien especial”.",
                "Nadie permanece enfadado conmigo o a mi alrededor durante mucho tiempo, ya que puedo disipar cualquier cantidad de tensión.",
                "Me encanta un buen insulto, incluso uno dirigido a mí.",
                "Mi carácter se amarga si no soy el centro de atención.",
                "Sólo me conformo con la perfección.",
                "Puedo cambiar mi estado de ánimo o mi manera de pensar tan rápido como le cambio la tonalidad en una canción."
            ],
            ideal:[
                "Belleza. Cuando actúo, hago del mundo algo mejor de lo que era. (Bueno)",
                "Tradición. Las historias, leyendas y canciones del pasado nunca deberían ser olvidadas, porque nos enseñan quiénes somos. (Legal)",
                "Creatividad. El mundo está necesitado de ideas nuevas y acciones audaces. (Caótico)",
                "Codicia. Sólo estoy en esto por el dinero y la fama. (Malvado)",
                "Personas. Me gusta ver las sonrisas en las caras de las personas cuando actúo. Eso es todo lo que importa. (Neutral)",
                "Honestidad. El arte debe reflejar el alma; debe salir de dentro y revelar lo que realmente somos. (Cualquiera)"
            ],
            vinculo:[
                "Mi instrumento es mi posesión más preciada y me recuerda a alguien que amo.",
                "Alguien robó mi preciado instrumento, y algún día lo recuperaré.",
                "Quiero ser famoso, cueste lo que cueste.",
                "Idolatro a un héroe de los viejos cuentos y mido mis actos conforme a los suyos.",
                "Haré cualquier cosa para demostrarle mi superioridad a mi odiado rival.",
                "Haría cualquier cosa por los demás miembros de mi antiguo grupo de teatro."
            ],
            defecto:[
                "Haré cualquier cosa para obtener fama y renombre.",
                "Me pierdo por una cara bonita.",
                "Un escándalo me impide volver a mi hogar. Este tipo de problemas parecen perseguirme.",
                "Una vez ridiculicé a un noble que todavía quiere mi cabeza. Fue un error que probablemente vuelva a repetir.",
                "Tengo problemas para mantener mis verdaderos sentimientos ocultos. Mi afilada lengua me suele meter en líos.",
                "A pesar de mis esfuerzos, para mis amigos no soy una persona de fiar."
            ],
        },
        {
            nombre:"Charlatán",
            rasgo_personalidad:[
                "Me enamoro con facilidad y siempre estoy persiguiendo alguien.",
                "Tengo una broma para cada ocasión, en especial en ocasiones en las que el humor es inapropiado.",
                "La adulación es mi truco preferido para conseguir lo que quiero.",
                "Soy un jugador nato que no puede resistirse a arriesgarse por una potencial recompensa.",
                "Miento sobre casi todo, incluso cuando no hay una buena razón para hacerlo.",
                "El sarcasmo y los insultos son mis armas predilectas.",
                "Llevo encima varios símbolos sagrados e invoco a cualquier deidad que pueda resultarme útil en el momento.",
                "Me meto en el bolsillo cualquier cosa que parezca que pueda tener algún valor."
            ],
            ideal:[
                "Independencia. Soy un espíritu libre, nadie me dice lo que he de hacer. (Caótico)",
                "Equidad. Nunca estafo a gente que no se pueda permitir el lujo de perder unas cuantas monedas. (Legal)",
                "Caridad. Distribuyo el dinero que adquiero a la gente que realmente lo necesita. (Bueno)",
                "Creatividad. Nunca utilizo la misma estafa dos veces. (Caótico)",
                "Amistad. Los bienes materiales van y vienen. Los vínculos de la amistad duran para siempre. (Bueno)",
                "Aspiración. Estoy decidido a hacer algo de mí mismo. (Cualquiera)"
            ],
            vinculo:[
                "He esquilmado a la persona equivocada y debo asegurarme que este individuo nunca se cruce conmigo o con las personas que me importan.",
                "Le debo todo a mi mentor, una persona horrible que probable-mente esté pudriéndose en alguna cárcel.",
                "En algún lugar por ahí, tengo un hijo que no me conoce. Estoy haciendo un mundo mejor para él o ella.",
                "Provengo de una familia noble, y un día reclamaré mis tierras y el título que me robaron.",
                "Una persona poderosa mató a alguien a quien amaba. Alguno de estos días tendré mi venganza.",
                "Estafé y arruiné a una persona que no lo merecía. He tratado de expiar mis malas acciones, pero nunca pude perdonármelo."
            ],
            defecto:[
                "No puedo resistirme a una cara bonita.",
                "Siempre estoy endeudado. Gasto mis mal adquiridas ganancias en lujos decadentes más rápido de lo que las obtengo.",
                "Estoy convencido de que nadie me puede engañar del modo en que yo engaño a los demás.",
                "Soy demasiado codicioso para mi propia seguridad. No puedo resistir a arriesgarme si hay dinero involucrado.",
                "No puedo resistirme a estafar a la gente que es más poderosa que yo.",
                "Odio admitirlo y me odiaré a mí mismo por ello, pero voy a correr y conservar mi propio pellejo si las cosas se ponen difíciles."
            ],
        },
        {
            nombre:"Criminal",
            rasgo_personalidad:[
                "Siempre tengo un plan sobre qué hacer cuando las cosas van mal.",
                "Siempre estoy tranquilo, no importa cuál sea la situación. Nunca levanto la voz o dejo que mis emociones me controlen.",
                "La primera cosa que hago en un lugar nuevo es tomar nota de las ubicaciones de todo lo valioso, o dónde podrían estar ocultas dichas cosas.",
                "Prefiero hacer un nuevo amigo que un nuevo enemigo.",
                "Soy increíblemente lento en fiarme de alguien. Aquellos que parecen los más justos a menudo tienen más que ocultar.",
                "No presto atención a los riesgos de una situación. Nunca me digan las posibilidades de tener o no éxito.",
                "La mejor manera de que llegue a hacer algo es decirme que no puedo hacerlo.",
                "Golpeo al menor insulto."
            ],
            ideal:[
				"Honor. No robo a otros de mi grupo. (Legal)",
                "Libertad. Las cadenas están hechas para romperse, así como aquellos que las forjan. (Caótico)",
                "Caridad. Robo a los ricos para poder ayudar a las personas necesitadas. (Bueno)",
                "Codicia. Haré todo lo necesario para convertirme en alguien rico. (malvado)",
                "Personas. Soy leal a mis amigos, no a los ideales, y si por mi fuera, el resto del mundo puede ir a hacerse un viaje por la laguna Estigia. (Neutral)",
                "Redención. Hay una chispa de bondad en todos. (Bueno)"
            ],
            vinculo:[
                "Estoy tratando de saldar una vieja deuda que le debo a un generoso benefactor.",
                "Mis mal obtenidas ganancias son para mantener a mi familia.",
                "Algo importante me fue substraído y mi objetivo es robarlo de nuevo.",
                "Seré el ladrón más grande que jamás haya existido.",
                "Soy culpable de un terrible crimen. Espero que pueda redimirme por ello.",
                "Alguien que amaba murió a causa de un error que cometí. Nunca volverá a suceder."
            ],
            defecto:[
                "Cuando veo algo valioso, no puedo pensar en nada más que en la forma de robarlo.",
                "Cuando me enfrento a una elección entre el dinero y mis amigos, por lo general elijo el dinero.",
                "Si hay un plan, lo olvidaré. Si no lo olvido, lo ignoraré.",
                "Tengo un “algo” que revela cuándo estoy mintiendo.",
                "Cuando las cosas se ponen feas, doy la vuelta y corro.",
                "Una persona inocente está en la cárcel por un crimen que cometí. Y no me arrepiento de ello."
            ],
        },
        {
            nombre:"Ermitaño",
            rasgo_personalidad:[
                "Estuve aislado por tanto tiempo que raramente hablo, prefiriendo los gestos y algún gruñido ocasional.",
                "Estoy absolutamente calmado, incluso ante el desastre.",
                "El líder de mi comunidad tenía algo sabio que decir sobre todos los temas, y estoy deseoso de compartir su sabiduría.",
                "Siento tremenda empatía por todos los que sufren.",
                "No soy consciente de la etiqueta y las expectativas sociales.",
                "Conecto todo lo que me ocurre con un gran plan cósmico.",
                "A menudo me pierdo en mis propios pensamientos, sin ser consciente de mi entorno.",
                "Trabajo en una gran teoría filosófica y amo compartir mis ideas."
            ],
            ideal:[
                "Bien Mayor. Mis dones están destinados a ser compartidos con todos, no a ser usados para mi propio beneficio. (Bueno)",
                "Lógica. Las emociones no deben nublar nuestro sentido de lo que es correcto y verdadero, o nuestro razonamiento lógico. (Legal)",
                "Libre Pensamiento. La investigación y la curiosidad son los pilares del progreso. (Caótico)",
                "Poder. La soledad y la contemplación son caminos para el poder místico o mágico. (Maligno)",
                "Vive y Deja Vivir. Inmiscuirse en los asuntos de otros sólo genera problemas. (Neutral)",
                "Auto-Conocimiento. Si te conoces a ti mismo, no hay nada más que conocer. (Cualquiera)"
            ],
            vinculo:[
                "Nada es más importante que los demás miembros de mi orden o asociación ermitaña.",
                "Me recluí para ocultarme de aquellos que aun me deben estar dando caza. Algún día deberé confrontarlos.",
                "Aun busco la iluminación que perseguía durante mi reclusión, y aun me elude.",
                "Entré en reclusión por que amaba a alguien a quien no podía tener.",
                "Si aquello que descubrí saliera a la luz, traería la ruina al mundo.",
                "Mi aislamiento me ha dado una gran comprensión sobre un gran mal que solo yo puedo destruir."
            ],
            defecto:[
                "Ahora que he regresado al mundo, disfruto sus deleites quizás demasiado.",
                "Tengo pensamientos obscuros y sanguinarios que mi aislamiento y meditación no pudieron remediar.",
                "Soy dogmático en cuanto a mis pensamientos y filosofía.",
                "Permito que mi necesidad por ganar discusiones se anteponga a la amistad y la armonía.",
                "Podría arriesgar mucho para descubrir un poco de conocimiento perdido.",
                "Me gusta guardar secretos y no los compartiría con nadie."
            ],
        },
        {
            nombre:"Forastero",
            rasgo_personalidad:[
                "Me impulsa una pasión por los viajes que me condujo muy lejos de mi hogar.",
                "Cuido a mis amigos como si fueran una camada de cachorros recién nacidos.",
                "Una vez corrí veinticinco millas sin parar para advertir a mi clan que una horda de orcos se aproximaba. Lo haría de nuevo si tuviera que hacerlo.",
                "Tengo una lección para cada situación, extraída a partir de la observación de la naturaleza.",
                "No tengo muy buena opinión de la gente adinerada o de buenos modales. El dinero y los modales no te salvarán de un oso-lechuza hambriento.",
                "Siempre estoy cogiendo cosas, toqueteándolas con aire ausente y, a veces, rompiéndolas.",
                "Me siento mucho más cómodo con los animales que con las personas.",
                "Fui, de hecho, criado por los lobos."
            ],
            ideal:[
                "Cambio. La vida es como las estaciones del año, en constante cambio, y debemos cambiar con ella. (Caótico)",
                "Bien Mayor. Es responsabilidad de cada persona procurar la máxima felicidad para la totalidad de la tribu. (Bueno)",
                "Honor. Si me deshonro a mí mismo, deshonro a todo mi clan. (Legal)",
                "Poder. Los más fuertes están destinados a gobernar. (Maligno)",
                "Naturaleza. El mundo natural es más importante que todas las creaciones de la civilización. (Neutral)",
                "Gloria. Debo ganar gloria en batalla, para mí y para mi clan. (Cualquiera)"
            ],
            vinculo:[
                "Mi familia, clan o tribu es lo más importante en mi vida, incluso cuando están lejos de mí.",
                "Una agresión contra las tierras vírgenes de mi hogar es una agresión contra mi persona.",
                "Arrojaré mi terrible ira sobre los criminales que destruyeron mi patria.",
                "Soy el último de mi tribu y a mí me corresponde asegurar que sus nombres se conviertan en leyenda.",
                "Sufro unas espantosas visiones de un desastre que se avecina y haré cualquier cosa para evitarlo.",
                "Es mi deber de proporcionar descendencia a mi tribu para su perpetuación."
            ],
            defecto:[
                "Soy demasiado aficionado a la cerveza, el vino y otras bebidas embriagantes.",
                "No hay lugar para la precaución cuando se vive al máximo.",
                "Recuerdo todos los insultos que he recibido y albergo un resentimiento silencioso hacia toda persona que alguna vez me ha ofendido.",
                "Tardo mucho en confiar en los miembros de otras razas, tribus y sociedades.",
                "La violencia es mi respuesta a casi cualquier desafío.",
                "No esperes que salve a los que no se puede salvarse sí mismos. Es la manera en la que la naturaleza hace que el fuerte prospere y que el débil perezca."	
            ],
        },
        {
            nombre:"Héroe del Pueblo",
            rasgo_personalidad:[
                "Juzgo a la gente por sus acciones, no sus palabras.",
                "Si alguien está en problemas, siempre estoy dispuesto a prestar ayuda.",
                "Cuando me propongo algo, lo persigo sin importarme lo que se interponga en mi camino.",
                "Tengo un fuerte sentido del juego limpio y siempre trato de encontrar la solución más equitativa a las discusiones.",
                "Tengo confianza en mis propias capacidades y haré lo que pueda para inspirar confianza en los demás.",
                "Pensar es para otros. Yo prefiero la acción.",
                "Hago mal uso de palabras largas en un intento de parecer más inteligente.",
                "Me aburro fácilmente. ¿Cuándo voy a seguir adelante con mi destino?"
            ],
            ideal:[
                "Respeto. Las personas merecen ser tratadas con dignidad y respeto. (Bueno)",
                "Equidad. Nadie debe tener un trato preferencial ante la ley y nadie está por encima de la ley. (Legal)",
                "Libertad. A los tiranos no se les debe permitir oprimir al pueblo. (Caótico)",
                "Poder. Si me hago fuerte, podré tomar lo que quiero, lo que yo merezco. (Maligno)",
                "Sinceridad. No hay nada bueno en pretender ser algo que no soy. (Neutral)",
                "Destino. Nada ni nadie me puede desviar de mi más alta vocación. (Cualquiera)"
            ],
            vinculo:[
                "Tengo una familia, pero no tengo ni idea de dónde están. Un día, espero volver a verlos.",
                "He trabajado la tierra, yo amo la tierra, y la protegeré.",
                "Un orgulloso noble una vez me dio una terrible paliza, y voy a vengarme de cualquier bravucón que me encuentre.",
                "Mis herramientas son símbolos de mi vida pasada, y los llevo por lo que nunca voy a olvidar mis raíces.",
                "Protejo a quienes no pueden protegerse a sí mismos.",
                "Me gustaría que mi novia de la infancia hubiera venido conmigo a perseguir mi destino."
            ],
            defecto:[
                "El tirano que gobierna mi tierra no se detendrá ante nada con tal de verme muerto.",
                "Estoy convencido de la importancia de mi destino, y ciego frente a mis carencias y el riesgo de fracasar.",
                "Las personas que me conocieron cuando era joven conocen mi vergonzoso secreto, así que nunca puedo volver a casa de nuevo.",
                "Tengo una debilidad por los vicios de la ciudad, especialmente por la bebida en grandes cantidades.",
                "En secreto, creo que las cosas estarían mejor si yo fuera un tirano con su señorío.",
                "Tengo problemas para confiar en mis aliados."
            ],
        },
        {
            nombre:"Huérfano",
            rasgo_personalidad:[
                "Escondo trozos de comida y baratijas en mis bolsillos.",
                "Hago un montón de preguntas.",
                "Me gusta escabullirme en pequeños huecos donde nadie puede alcanzarme.",
                "Duermo con mi espalda contra un árbol o un muro, con todas mis cosas envueltas en un paquete entre mis brazos.",
                "Como como un cerdo y tengo malos modales.",
                "Pienso que todos los que son amables conmigo esconden un propósito maligno.",
                "No me gusta bañarme.",
                "Digo francamente lo que otros insinúan o esconden."
            ],
            ideal:[
                "Respeto. Todo el mundo, sin importar su riqueza, merece res-peto. (Bueno)",
                "Comunidad. Tenemos que cuidarnos el uno al otro, porque nadie más lo hará. (Legal)",
                "Cambio. Los que están abajo ascienden y los poderosos que están arriba son derribados. El cambio es la naturaleza de las cosas. (Caótico)",
                "Retribución. Los ricos necesitan que les muestren cómo son la vida y la muerte en las cloacas. (Malvado)",
                "Gente. Ayudo a quienes me ayudan –eso es lo que nos mantiene vivos. (Neutral)",
                "Aspiración. Voy a probar que merezco una vida mejor. (Cualquiera)"
            ],
            vinculo:[
                "Mi pueblo o ciudad es mi hogar, y lucharé para defenderlo.",
                "Mantengo un orfanato para evitar que otros soporten lo que yo tuve que soportar.",
                "Le debo mi vida a otro huérfano que me enseñó a vivir en las calles.",
                "Tengo una deuda que nunca podré pagar con alguien que me tuvo lástima.",
                "Escapé de mi vida de pobreza robándole a alguien importante, y me buscan por eso.",
                "Nadie tendría que soportar una vida tan dura como la mía."
            ],
            defecto:[
                "Si me veo superado en número, correré por mi vida.",
                "Un oro me parece un montón de dinero, y haré casi cualquier cosa por más de eso.",
                "Nunca confiaré totalmente en nadie más que en mí mismo.",
                "Preferiría matar a alguien mientras duerme a enfrentarme en un combate justo.",
                "Si yo necesito algo más que lo que lo necesita su dueño, no es un robo.",
                "La gente que no puede cuidarse de sí misma obtiene lo que merece."
            ],
        },
        {
            nombre:"Marinero",
            rasgo_personalidad:[
                "Mis amigos saben que pueden confiar en mí, sin importar la ocasión.",
                "Trabajo duro para poder divertirme cuando el trabajo esté hecho.",
                "Disfruto viajar a nuevos puertos y hacer nuevos amigos junto a jarras de cerveza.",
                "Deformo la verdad por el bien de una buena historia.",
                "Para mí, una pelea de taberna es una buena manera de conocer una nueva ciudad.",
                "Nunca dejo pasar a un apostador amistoso.",
                "Mi habla es tan desagradable como el cuello de un otyugh.",
                "Me gusta el trabajo bien hecho. Sobre todo si puedo convencer a otro de que lo haga."
            ],
            ideal:[
                "Respeto. Lo que mantiene una nave funcionando es el respeto mutuo entre capitán y tripulación. (Bueno)",
                "Equidad. Todos trabajamos, así que todos compartimos la recompensa. (Legal)",
                "Libertad. El mar es libertad —la libertad de ir a cualquier lado y hacer cualquier cosa. (Caótico)",
                "Autoridad. Soy un predador, y los demás barcos en el mar, mi presa. (Maligno)",
                "Gente. Estoy comprometido con mi tripulación, no con un ideal. (Neutral)",
                "Aspiración. Algún día, tendré mi propio barco y forjaré mi propio destino. (Cualquiera)"
            ],
            vinculo:[
                "Soy leal primero a mi capitán. Todo lo demás está en segundo plano.",
                "El barco es lo más importante —las tripulaciones y los capitanes van y vienen.",
                "Siempre recordaré mi primer barco.",
                "En un puerto tengo un amante cuyos ojos casi le roban mi corazón al mar.",
                "Me estafaron mi justa parte de las ganancias, y quiero cobrar mi deuda.",
                "Despiadados piratas asesinaron a mi tripulación y mi capitán, hundieron mi barco y me abandonaron a mi suerte. La venganza será mía."
            ],
            defecto:[
                "Seguiré las órdenes, incluso si creo que son equivocadas.",
                "Diré cualquier cosa para evitar tener que trabajar de más.",
                "Una vez que alguien cuestiona mi coraje, nunca me retracto, sin importar lo peligrosa de la situación.",
                "Una vez que comienzo a beber, es muy difícil que pare.",
                "No puedo evitar guardarme monedas sueltas y otras baratijas que encuentro.",
                "Mi orgullo probablemente me llevará a la destrucción."
            ],
        },
        {
            nombre:"Noble",
            rasgo_personalidad:[
                "Mi elocuente adulación hace sentir a mi interlocutor la persona más importante y maravillosa del mundo.",
                "La gente común me quiere por mi amabilidad y generosidad.",
                "Nadie que mire mi regia postura puede dudar que esté por encima de las sucias masas.",
                "Hago grandes esfuerzos para lucir siempre lo mejor posible y seguir las últimas modas.",
                "No me gusta ensuciarme las manos, y no seré atrapado jamás en alojamientos inadecuados.",
                "A pesar de mi noble cuna, no me coloco por encima del resto de la gente. Todos tenemos la misma sangre.",
                "Mi favor, una vez perdido, es para siempre.",
                "Si me haces daño, te aplastaré, arruinaré tu nombre y salaré a tus campos."
            ],
            ideal:[
                "Respeto. Se me debe respeto debido a mi posición, pero toda la gente sin importar su posición social, debe ser tratada con dignidad. (Bueno)",
                "Responsabilidad. Es mi deber respetar a la autoridad de aquellos por encima de mí, así como los que están por debajo de mí deben respetarme. (Legal)",
                "Independencia. Debo probar que puedo encargarme de mí mismo, sin la protección de mi familia (Caótico)",
                "Poder. Si obtengo más poder, nadie podrá decirme qué hacer. (Maligno)",
                "Familia. La sangre fluye más espesa que el agua. (Cualquiera)",
                "Obligación noble. Es mi deber proteger y cuidar a aquellos por debajo de mí. (Bueno)"
            ],
            vinculo:[
                "Afrontaré cualquier reto con tal de conseguir la aprobación de mi familia.",
                "La alianza de mi Casa con otra familia noble debe ser mantenida a cualquier precio.",
                "Nadie es más importante que los otros miembros de mi familia.",
                "Estoy enamorado/a de un heredero (o heredera) de una familia que es despreciada por la mía.",
                "Mi lealtad a la corona es inquebrantable.",
                "La gente común debe verme como un héroe de la gente."
            ],
            defecto:[
                "Secretamente pienso que todo el mundo está por debajo de mi",
                "Escondo un secreto verdaderamente escandaloso que podría arruinar a mi familia para siempre",
                "Muy a menudo escucho velados insultos y amenazas en cada palabra que me dirigen y me enfado con rapidez",
                "Tengo un insaciable apetito por los placeres carnales.",
                "Es un hecho que el mundo gira a mi alrededor",
                "Debido a mis palabras y acciones, suelo traer la vergüenza a mi familia."
            ],
        },
        {
            nombre:"Sabio",
            rasgo_personalidad:[
                "Uso polisílabos para dar la impresión de gran erudición.",
                "He leído todos los libros de las mayores bibliotecas del mundo, o me gusta presumir que lo he hecho.",
                "Estoy acostumbrado a ayudar a aquellos que no son tan inteligentes como yo, y explico pacientemente una y otra vez cualquier cosa.",
                "No hay nada que me guste más que un buen misterio.",
                "Estoy dispuesto a escuchar todas las partes de una discusión antes de formarme un juicio propio.",
                "Yo... hablo… lentamente... cuando hablo... para idiotas,... que... casi... todos... lo son... comparándose... conmigo.",
                "Me siento horriblemente, horriblemente incómodo en situaciones sociales.",
                "Estoy convencido de que la gente siempre está tratando de robar mis secretos."
            ],
            ideal:[
                "Conocimiento. El camino hacia el poder y la autosuperación es a través del conocimiento. (Neutral)",
                "Belleza. Lo que es bello nos lleva más allá de sí mismo hacia lo que es verdadero. (Bueno)",
                "Lógica. Las emociones no deben nublar nuestro pensamiento lógico. (Legal)",
                "Sin límites. Nada debe estorbar la posibilidad infinita inherente a toda existencia. (Caótico)",
                "Poder. El conocimiento es el camino hacia el poder y la dominación. (Maligno)",
                "Autosuperación. La meta de una vida de estudio es la mejora de uno mismo. (Cualquiera)"
            ],
            vinculo:[
                "Es mi deber de proteger a mis alumnos.",
                "Tengo un texto antiguo que guarda terribles secretos que no deben caer en manos equivocadas.",
                "Trabajo para preservar una biblioteca, universidad, scriptorium, o monasterio.",
                "El trabajo de mi vida es una serie de tomos relacionados con un campo específico del conocimiento.",
                "He estado buscando toda mi vida la respuesta a una pregunta determinada.",
                "He vendido mi alma por el conocimiento. Espero hacer grandes hazañas y ganarla de nuevo."
            ],
            defecto:[
                "Me distraigo con facilidad por promesas de información.",
                "La mayoría de las personas gritan y corren cuando ven a un demonio. Yo me detengo y tomo notas sobre su anatomía.",
                "Desenterrar un antiguo misterio bien vale el precio de una civilización.",
                "Paso por alto soluciones obvias a favor de las complicadas.",
                "Hablo sin detenerme a pensar mis palabras, invariablemente insultando a los demás.",
                "No puedo guardar un secreto para salvar mi vida, o la de cualquier otro."
            ],
        },
        {
            nombre:"Soldado",
            rasgo_personalidad:[
                "Siempre soy educado y respetuoso.",
                "Los recuerdos de la guerra me persiguen. No puedo sacar las imágenes violentas de mi cabeza.",
                "He perdido muchos amigos, y tardo mucho en hacer nuevos.",
                "Estoy lleno de cuentos inspiradores y con moraleja de mi experiencia militar relevantes para casi todas las situación es de combate.",
                "Puedo sostener la mirada a un perro infernal sin pestañear.",
                "Disfruto siendo fuerte y me gusta romper cosas.",
                "Tengo un vulgar sentido del humor.",
                "Me enfrento a los problemas de frente. Una solución simple y directa es el mejor camino hacia el éxito."
            ],
            ideal:[
                "Bien mayor. Nuestro destino es dar nuestra vida en defensa de los demás. (Bueno)",
                "Responsabilidad. Hago lo que debo y obedezco a la autoridad justa. (Legal)",
                "Independencia. Cuando las personas siguen las órdenes ciegamente, abrazan una especie de tiranía. (Caótica)",
                "Poder. En la vida como en la guerra, los más fuertes ganan. (Malvado)",
                "Vive y deja vivir. No vale la pena matar o ir a la guerra por los ideales. (Neutral)",
                "Nación. Mi ciudad, mi nación o mi gente son todo lo que importa. (Cualquiera)"
            ],
            vinculo:[
                "Aún daría mi vida por las personas con las que serví.",
                "Alguien me salvó la vida en el campo de batalla. Hasta la fecha, nunca dejaré atrás a un amigo.",
                "Mi honor es mi vida.",
                "Nunca olvidaré la derrota aplastante que sufrió mi compañía o a los enemigos que la causaron.",
                "Los que luchan junto a mí son por los que vale la pena morir",
                "Yo lucho por los que no pueden luchar por sí mismos."
            ],
            defecto:[
                "El monstruoso enemigo que nos enfrentamos en batalla todavía me deja temblando de miedo.",
                "Tengo poco respeto por cualquiera que no sea un guerrero probado en batalla.",
                "Cometí un error terrible en batalla que costó muchas vidas y haría cualquier cosa para mantener ese error en secreto.",
                "Mi odio hacia mis enemigos es ciego e irracional.",
                "Yo obedezco la ley, aunque la ley genere miseria.",
                "Preferiría comerme mi armadura antes que admitir mis errores."
            ],
        }
    ]
    trasfondo = {
        id:0,
        nombre:"",
        rasgo_personalidad:"",
        ideal:"",
        vinculo:"",
        defecto:"",
    }
    constructor(){
        let idTrasfondo = randomInt(0,12)
        let idRasgo = randomInt(0,7)
        let idIdeal = randomInt(0,5)
        let idVinculo = randomInt(0,5)
        let idDefecto = randomInt(0,5)
        this.trasfondo.id = idTrasfondo
        this.trasfondo.nombre = this.lista[idTrasfondo].nombre
        this.trasfondo.rasgo_personalidad = this.lista[idTrasfondo].rasgo_personalidad[idRasgo]
        this.trasfondo.ideal = this.lista[idTrasfondo].ideal[idIdeal]
        this.trasfondo.vinculo = this.lista[idTrasfondo].vinculo[idVinculo]
        this.trasfondo.defecto = this.lista[idTrasfondo].defecto[idDefecto]
        return this.trasfondo
    }
}