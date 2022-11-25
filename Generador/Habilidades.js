import randomInt from "./Random.js"

export default class Habilidades{
    nombre = [
        'Acrobacias',//0
        'Atletismo',//1
        'Arcano',//2
        'Engañar',//3
        'Historia',//4
        'Interpretación',//5
        'Intimidación',//6
        'Investigación',//7
        'Juego de Manos',//8
        'Medicina',//9
        'Naturaleza',//10
        'Percepción',//11
        'Perspicacia',//12
        'Persuasión',//13
        'Religión',//14
        'Sigilo',//15
        'Supervivencia',//16
        'Manejo de Animales'//17
    ]
    trasfondo = [
        [12,14],
        [12,13],
        [0,5],
        [3,8],
        [3,15],
        [9,14],
        [1,16],
        [17,16],
        [8,15],
        [1,11],
        [4,13],
        [2,4],
        [1,6]
    ]
    clase = [
        [1,6,10,11,16,17],
        [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
        [2,3,4,6,7,10,14],
        [12,4,9,13,14],
        [2,12,9,10,11,14,16,17],
        [1,12,7,17,10,11,15,16],
        [0,1,12,4,6,17,11,16],
        [2,12,3,6,13,14],
        [2,12,4,7,9,14],
        [0,1,12,4,14,15],
        [1,12,6,9,13,14],
        [0,1,12,3,5,6,7,8,11,13,15]
    ]
    competencia=[]
    constructor(idClase,idTrasfondo){
        this.append_habilidadesTrasfondo(idTrasfondo)
        this.append_habilidadesClase(idClase)
        return this.competencia.sort()
    }
    append_habilidadesTrasfondo(id){
        this.competencia.push(this.nombre[this.trasfondo[id][0]])
        this.competencia.push(this.nombre[this.trasfondo[id][1]])
    }
    append_habilidadesClase(id){
        let contador_habilidades = this.contarHabilidades(id)
        let idHabilidad
        while (contador_habilidades>0){
            while (true){
                idHabilidad=randomInt(0,this.clase[id].length-1)
                if (!this.existeHabilidad(this.nombre[this.clase[id][idHabilidad]])){
                    break	
                }
            }
			this.competencia.push(this.nombre[this.clase[id][idHabilidad]])
			contador_habilidades--
        }	
    }
    contarHabilidades(id){
        if(id === 1 || id === 5){
            return 3
        }
        else if(id === 11){
            return 4
        }
        else{
            return 2
        }
    }
    existeHabilidad(habilidad){
        for(let i=0;i<this.competencia.length;i++){
            if(this.competencia[i] === habilidad){
                return true
            }
        }
        return false
    }
}
