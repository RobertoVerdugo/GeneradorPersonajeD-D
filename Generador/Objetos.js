import randomInt from "./Random.js"

export default class Objetos{
    clase = [
        [
            ['Un Gran Hacha','Cualquier arma Marcial CaC'],
            ['Dos Hachas de mano','Cualquier arma Simple'],
            ['Un equipo de explorador y cuatro Jabalinas']
        ],
        [
            ['Una Armadura de Cuero'],
            ['Un Estoque','Una Espada larga','Cualquier arma sencilla'],
            ['Un equipo Diplomatico','Un equipo de actor'],
            ['Una Lira','Cualquier instrumento musical'],
            ['Una daga']
        ],
        [
            ["Una Armadura de Cuero"],
            ['Una Ballesta ligera y 20 virotes','Cualquier arma simple'],
            ['Una bolsa de componentes de conjuros','Un Foco arcano'],
            ['Un equipo de erudito','Un equipo para Dungeons'],
            ['Cualquier arma simple y dos dagas']
        ],
        [
            ['Una Cota de Escamas','Una Armadura de Cuero','Una Cota de Malla'],
            ['Un escudo'],
            ['Una Maza','Un Martillo de Guerra'],
            ['Una Ballesta ligera y 20 virotes','Cualquier arma simple'],
            ['Un equipo de sacerdote','Un equipo de explorador'],
            ['Un símbolo sagrado']
        ],
        [
            ['Una armadura de cuero'],
            ['Un escudo','Cualquier arma simple'],
            ['Una cimitarra','Cualquier arma Simple CaC'],
            ['Un equipo de explorador y un Foco arcano Druídico']
        ],
        [
            ['Una Cota de escamas','Una Armadura de Cuero'],
            ['Dos espadas Cortas','Dos armas simples CaC'],
            ['Un equipo de Explorador','Un equipo para Dungeons'],
            ['Un Arco largo y 20 flechas']
        ],
        [
            ['Una Cota de malla','Una Armadura de cuero y un arco largo con 20 flechas'],
            ['Un arma marcial y un escudo','Dos armas marciales'],
            ['Una Ballesta ligera y 20 virotes','Dos hachas de mano'],
            ['Un equipo de Explorador','Un equipo para Dungeons']
        ],
        [
            ['Una Ballesta ligera y 20 virotes','Cualquier arma simple'],
            ['Una bolsa de componentes de conjuro','Un Foco arcano'],
            ['Un equipo de Explorador','Un equipo para Dungeons'],
            ['Dos dagas']
        ],
        [
            ['Un Bastón','Una Daga'],
            ['Una bolsa de componentes de conjuro','Un Foco arcano'],
            ['Un equipo de Explorador','Un equipo de Erudito'],
            ['Un Libro de conjuros']
        ],
        [
            ['Un Espada corta','Cualquier arma simple'],
            ['Un equipo de Explorador','Un equipo de Dungeon'],
            ['10 Dardos']
        ],
        [
            ['Cota de mallas'],
            ['5 Jabalinas','Cualquier arma simple CaC'],
            ['Un Arma marcial y un escudo','Dos armas Marciales'],
            ['Un equipo de Explorador','Un equipo de Sacerdote'],
            ['Un símbolo sagrado']
        ],
        [
            ['Armadura de cuero'],
            ['Un Estoque','Una espada corta'],
            ['Un Arco pequeño y 20 flechas','Una espada corta'],
            ['Un equipo de Explorador','Un equipo de Dungeons','Un equipo de Ladrón'],
            ['2 dagas y herramientas de ladrón']
        ],
    ] 
    trasfondo = [
        ["Un símbolo sagrado","Libro de oraciones", "5 barritas de incienso", "Vestiduras", "Un conjunto de ropa común"],
        ["Un set de herramientas de artesano (de tu elección)", "Una carta de introducción de tu gremio", "Una muda de ropas de viaje"],
        ["Un instrumento musical (de tu elección)", "El favor de un admirador (una carta de amor, un mechón de pelo o una baratija)", "Un disfraz"],
        ["Un conjunto de ropa fina", "Un kit de disfraz", "Herramientas de estafa de tu elección"],
        ["Una barreta", "Un conjunto de ropa común oscura, Incluyendo una capucha"],
        ["Un rollo de pergamino lleno de notas de tus estudios o plegarias", "Una frazada de invierno", "Una muda de ropa común", "Un kit de herboristería"],
        ["Un bastón", "Una trampa de caza", "Un trofeo de un animal que mataste", "Un conjunto de ropa de viajero"],
        ["Un conjunto de herramientas de artesano (de tu elección)", "Una pala", "Una olla de hierro", "Un conjunto de ropa común"],
        ["Un pequeño cuchillo", "Un mapa de la ciudad en la que creciste", "Un ratón como mascota", "Un símbolo para recordar a tus padres", "Una muda de ropa común"],
        ["Una barra de madera o metal (una clava)", "50 pies de cuerda de seda", "Un amuleto de la suerte", "Una muda de ropa común"],
        ["Una muda de ropas finas", "Un anillo con sello", "Un pergamino con tu genealogía"],
        ["Un tintero", "una pluma", "Un cuchillo pequeño", "Una carta de un colega muerto con una pregunta que aún no ha sido capaz de responder", "Una muda de ropa común"],
        ["Una insignia con tu rango", "Un trofeo tomado de un enemigo caído (una daga, una hoja rota o un trozo de un estandarte)", "Un conjunto de dados de hueso o baraja de cartas", "Una muda de ropa común"]
    ]
    lista = []
    constructor(idClase,idTrasfondo){
        for(let i=0;i<this.clase[idClase].length;i++){
            let choose = randomInt(0,this.clase[idClase][i].length-1)
            this.lista.push(this.clase[idClase][i][choose])
        }
        let final = this.lista.concat(this.trasfondo[idTrasfondo])
        return final
    }

}