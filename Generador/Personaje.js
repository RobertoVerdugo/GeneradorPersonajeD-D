import Habilidades from "./Habilidades.js"
import Objetos from "./Objetos.js"
import randomInt from "./Random.js"
import Trasfondos from "./Trasfondos.js"
import * as FileSystem from 'expo-file-system';

export default class Personaje{
    clase={
        nombre: "",
        id: 0,
    }
    raza={
        nombre: "",
        id: 0,
    }
    caracteristicas = {
        fuerza: 0,
        destreza: 0,
        constitucion: 0,
        inteligencia: 0,
        sabiduria: 0,
        carisma: 0,
    }
    modificadores = {
        fuerza: 0,
        destreza: 0,
        constitucion: 0,
        inteligencia: 0,
        sabiduria: 0,
        carisma: 0,
    }
    marcadores = {
        sabiduria_pasiva: 10,
        iniciativa: 0,
        velocidad: 0,
        clase_armadura: 0,
    }
    trasfondo;
    dado_golpe;
    puntos_golpe= 0;
    piezas_oro;
    tiradas_salvacion=[];
    objetos;
    habilidades;
    constructor() {
        this.trasfondo = new Trasfondos()
        this.iniciarClase()
        this.objetos = new Objetos(this.clase.id,this.trasfondo.id);
        this.iniciarCaracteristicas()
        this.iniciarRaza()
        this.iniciarModificadores()
        this.iniciarPuntos_golpe()
        this.iniciarMarcadores()
        this.iniciarArmadura()
        this.habilidades = new Habilidades(this.clase.id,this.trasfondo.id);
    }
    iniciarClase(){
        const clases = ["Bárbaro","Bardo","Brujo","Clérigo","Druida","Explorador","Guerrero","Hechicero","Mago","Monje","Paladín","Pícaro"]
        this.clase.id = randomInt(0,clases.length-1)
        this.clase.nombre = clases[this.clase.id]
        if(this.clase.id === 0 || this.clase.id === 5 || this.clase.id === 6 || this.clase.id === 9){
            this.tiradas_salvacion.push("Fuerza")
        }
        if(this.clase.id === 1 || this.clase.id === 5 || this.clase.id === 9 || this.clase.id === 11){
            this.tiradas_salvacion.push("Destreza")
        }
        if(this.clase.id === 2 || this.clase.id === 3 || this.clase.id === 4 || this.clase.id === 8 || this.clase.id === 10){
            this.tiradas_salvacion.push("Sabiduría")
        }
        if(this.clase.id === 4 || this.clase.id === 8 || this.clase.id === 11){
            this.tiradas_salvacion.push("Inteligencia")
        }
        if(this.clase.id === 0 || this.clase.id === 6 || this.clase.id === 7){
            this.tiradas_salvacion.push("Constitucion")
        }
        if(this.clase.id === 1 || this.clase.id === 2 || this.clase.id === 3 || this.clase.id === 7 || this.clase.id === 10){
            this.tiradas_salvacion.push("Carisma")
        }
        if(this.clase.id === 0){
            this.dado_golpe="1d12"
        }
        else if(this.clase.id === 8 || this.clase.id === 9 ){
            this.dado_golpe="1d6"
        }
        else if(this.clase.id === 5 || this.clase.id === 6 || this.clase.id === 10){
            this.dado_golpe="1d10"
        }
        else{
            this.dado_golpe="1d8"
        }
    }
    iniciarCaracteristicas(){
        this.caracteristicas.fuerza = this.tirarCaracteristica()
        this.caracteristicas.destreza = this.tirarCaracteristica()
        this.caracteristicas.constitucion = this.tirarCaracteristica()
        this.caracteristicas.inteligencia = this.tirarCaracteristica()
        this.caracteristicas.sabiduria = this.tirarCaracteristica()
        this.caracteristicas.carisma = this.tirarCaracteristica()
    }
    tirarCaracteristica(){
        let valor=[]
        for(let i=0;i<4;i++){
            valor.push(randomInt(1,6))
        }
        valor.sort()
        return(valor[1]+valor[2]+valor[3])
    }
    iniciarRaza(){
        const razas = ["Enano de las Colinas","Enano de las Montañas","Alto Elfo","Elfo del Bosque","Elfo Oscuro","Mediano Piesligeros","Mediano Fornido","Humano","Dracónido","Gnomo del Bosque","Gnomo de la Roca","Semi Elfo","Semi Orco","Tiflin"]
        this.raza.id = randomInt(0,razas.length-1)
        this.raza.nombre = razas[this.raza.id]
        if (this.raza.id === 1 || this.raza.id === 7 ||this.raza.id === 8 ||this.raza.id === 12){
            this.caracteristicas.fuerza+=2
            if(this.raza.id === 7){
                this.caracteristicas.fuerza--
            }
        }
        if(this.raza.id === 2 || this.raza.id === 3 || this.raza.id === 4 || this.raza.id === 5 || this.raza.id ===6 || this.raza.id === 7 || this.raza.id === 9 || this.raza.id === 11){
            this.caracteristicas.destreza+=2
            if(this.raza.id === 7 || this.raza.id === 9){
                this.caracteristicas.destreza--
            }
        }
        if(this.raza.id === 0 || this.raza.id === 1 || this.raza.id === 6 || this.raza.id === 7 || this.raza.id ===10 || this.raza.id === 12){
            this.caracteristicas.constitucion++
            if(this.raza.id === 0 || this.raza.id === 1){
                this.caracteristicas.constitucion++
            }
        }
        if(this.raza.id === 2 || this.raza.id === 9 || this.raza.id === 10 || this.raza.id === 7 || this.raza.id ===13){
            this.caracteristicas.inteligencia++
            if(this.raza.id === 9 || this.raza.id === 10){
                this.caracteristicas.inteligencia++
            }
        }
        if (this.raza.id === 0 || this.raza.id === 3 ||this.raza.id === 7){
            this.caracteristicas.sabiduria++
        }
        if(this.raza.id === 11 || this.raza.id === 4 || this.raza.id === 5 || this.raza.id === 7 || this.raza.id === 8 || this.raza.id === 13){
            this.caracteristicas.carisma++
            if(this.raza.id === 11 || this.raza.id === 13){
                this.caracteristicas.carisma++
            }
        }
    }
    iniciarModificadores(){
        this.modificadores.fuerza = this.calcularModificador(this.caracteristicas.fuerza)
        this.modificadores.destreza = this.calcularModificador(this.caracteristicas.destreza)
        this.modificadores.constitucion = this.calcularModificador(this.caracteristicas.constitucion)
        this.modificadores.inteligencia = this.calcularModificador(this.caracteristicas.inteligencia)
        this.modificadores.sabiduria = this.calcularModificador(this.caracteristicas.sabiduria)
        this.modificadores.carisma = this.calcularModificador(this.caracteristicas.carisma)
    }
    calcularModificador(caracteristica){
        let mod=-4
        for(let i=3;i<caracteristica;i=i+2){
            mod = mod + 1
        }
        return mod
    }
    iniciarPuntos_golpe(){
        if (this.dado_golpe==='1d6'){
            this.puntos_golpe = this.modificadores.constitucion +6
        }
        if (this.dado_golpe==='1d8'){
            this.puntos_golpe = this.modificadores.constitucion + 8
        }
        if (this.dado_golpe==='1d10'){
            this.puntos_golpe = this.modificadores.constitucion + 10
        }	
        if (this.dado_golpe==='1d12'){
            this.puntos_golpe = this.modificadores.constitucion + 12
        }
        if (this.raza.id === 1){
            this.puntos_golpe++
        }
    }
    iniciarMarcadores(){
        this.marcadores.sabiduria_pasiva = 10 + this.modificadores.sabiduria
        this.marcadores.iniciativa = this.modificadores.destreza
        if(this.raza.id === 0 || this.raza.id === 1 || this.raza.id === 5 || this.raza.id === 6 || this.raza.id === 9 || this.raza.id === 10){
            this.marcadores.velocidad = 25
        }
        else if(this.raza.id === 3){
            this.marcadores.velocidad = 35
        }
        else{
            this.marcadores.velocidad = 30
        }
        if(this.trasfondo.id <5){
            this.piezas_oro=15
        }
        else if(this.trasfondo.id === 5){
            this.piezas_oro=5
        }else if(this.trasfondo.id === 10){
            this.piezas_oro=25
        }
        else{
            this.piezas_oro=10
        }
    }
    iniciarArmadura(){
        if(this.objetos[0].toLocaleLowerCase().includes("armadura de cuero")){
            this.marcadores.clase_armadura = 11 + this.modificadores.destreza
        }
        else if(this.objetos[0].toLocaleLowerCase().includes("cota de escamas")){
            this.marcadores.clase_armadura = 14 + this.modificadores.destreza
            if(this.marcadores.clase_armadura>16){
                this.marcadores.clase_armadura=16
            }
        }
        else if(this.objetos[0].toLocaleLowerCase().includes("cota de malla")){
            this.marcadores.clase_armadura=16
        }
        else if(this.clase.id === 9){
            this.marcadores.clase_armadura = 10 + this.modificadores.destreza + this.modificadores.sabiduria
        }
        else{
            this.marcadores.clase_armadura = 10 + this.modificadores.destreza
            if(this.marcadores.clase_armadura>12){
                this.marcadores.clase_armadura=12
            }
        }
        if(this.objetos[1].toLocaleLowerCase().includes("escudo")){
            this.marcadores.clase_armadura+=2
        }
    }
}


export async function guardarPersonaje(Personaje,nombre){
    //FileSystem.deleteAsync(FileSystem.documentDirectory + "Guardados")
    leerDirectorio()
    guardarNombre(nombre)
    let filename = FileSystem.documentDirectory + "Guardados/"+nombre+".txt";
    await FileSystem.writeAsStringAsync(filename, JSON.stringify(Personaje));
}

async function leerDirectorio(){
    let directorio = FileSystem.documentDirectory + "Guardados"
    try{
        await FileSystem.readDirectoryAsync(directorio)
    }catch(e){
        await FileSystem.makeDirectoryAsync(directorio)
        console.log("Directorio Guardados creado")
    }
}

async function guardarNombre(nombre){
    let filename = FileSystem.documentDirectory +"Guardados/nombres.txt";
    try{
        var file = await FileSystem.readAsStringAsync(filename);
        file = file + nombre +"\n"
        await FileSystem.writeAsStringAsync(filename, file);
    }catch (e) {
        await FileSystem.writeAsStringAsync(filename, nombre +"\n");
        console.log("Archivo nombres creado")
    }

}

export async function cargarPersonaje(nombre){
    let filename = FileSystem.documentDirectory +"Guardados/"+nombre+".txt";
    var personaje = await FileSystem.readAsStringAsync(filename)
    return JSON.parse(personaje)
}

export async function eliminarPersonaje(nombre){
    let filename = FileSystem.documentDirectory + "Guardados/"+nombre+".txt";
    await FileSystem.deleteAsync(filename)
    filename = FileSystem.documentDirectory + "Guardados/nombres.txt"
    var file = await FileSystem.readAsStringAsync(filename);
    file = file.split('\n')
    file.pop()
    file.splice(file.indexOf(nombre),1)
    let str=""
    for(let i=0;i<file.length;i++){
        str = str + file[i] +"\n"
    }
    await FileSystem.writeAsStringAsync(filename, str);
}

export async function leerNombres(){
    leerDirectorio()
    let filename = FileSystem.documentDirectory +"Guardados/nombres.txt";
    try{
        var file = await FileSystem.readAsStringAsync(filename)
        file = file.split('\n')
        file.pop()
        
    }catch(e){
        await FileSystem.writeAsStringAsync(filename, "");
        console.log("Archivo nombres creado")
    }
    return file 
}

export async function cargarDescripcion(){
    let nombres = await leerNombres()
    let lista = []
    for(let i=0; i<nombres.length;i++){
        let str = ""
        try{
        await cargarPersonaje(nombres[i])
        .then(personaje=>{
            str = str + personaje.clase.nombre + "\n" + personaje.raza.nombre  
            lista.push(str)
        })}
        catch(e){
        }
    }
    return lista;
}

export function verificarNombre(arreglo,nombre){
    if (nombre.includes("/") || nombre.includes('\\') || nombre.includes(":") || nombre.includes("?") || nombre.includes(' " ') || nombre.includes("<") || nombre.includes(">") || nombre.includes("|")){
        return false
    }

    for(let i=0;i<arreglo.length;i++){
        if(nombre===arreglo[i]){
            return false
        }
    }
    return true
    
}
