import React,{useRef} from 'react';
import {StyleSheet,View,ScrollView} from 'react-native';  
import {Card,Title,Paragraph,Subheading} from 'react-native-paper'

export default ({personaje})=>{
    const scrollRef = useRef(); 
    const goTop = () => {
        scrollRef.current?.scrollTo({
            y: 0,
        });
    }
    return(
        <ScrollView ref={scrollRef} onContentSizeChange={goTop}>
            <View style={styles.scroll}>
                <Cabecera personaje = {personaje} />
                <Trasfondo personaje = {personaje} />
                <Estadisticas personaje = {personaje} />
                <Tiradas personaje = {personaje} />
                <Marcadores personaje = {personaje} />
                <Objetos personaje = {personaje} />
            </View>
        </ScrollView>
    )
}

const Cabecera = ({personaje})=>{
    return(
        <Card elevation = {10} style={styles.card}>
            <Card.Title title = "Clase y Raza" />
            <Card.Content>
                <View style = {{justifyContent: 'space-evenly', flexDirection: 'row',marginVertical:10,}}>
                    <Subheading style = {styles.cabecera}>{personaje.clase.nombre}</Subheading>
                    <Subheading style = {styles.cabecera}>{personaje.raza.nombre}</Subheading>
                </View>
            </Card.Content>
        </Card>
    )
}

const Estadisticas = ({personaje})=>{
    return(
        <Card elevation = {10} style={styles.card}>
            <View style = {{flexDirection: 'row', }}>
                <Card.Content>
                    <Title>Características</Title>
                    <Paragraph style = {styles.texto}>{CaracteristicastoString(personaje)}</Paragraph>
                </Card.Content>
                <Card.Content>
                    <Title>Habilidades</Title>
                    <Paragraph style = {styles.texto}>{HabilidadestoString(personaje)}</Paragraph>
                </Card.Content>
            </View>
        </Card>
    )
}

const Tiradas = ({personaje})=>{
    return(
        <Card elevation = {10} style={styles.card}>
            <Card.Title title = "Tiradas de Salvación" />
            <Card.Content>
                <Paragraph style = {styles.texto}>{TiradastoString(personaje)}</Paragraph>
            </Card.Content>
        </Card>
    )
}

const Marcadores = ({personaje})=>{
    return(
        <Card elevation = {10} style={styles.card}>
            <Card.Title title = "Marcadores" />
            <Card.Content>
                <Paragraph style = {styles.texto}>{MarcadorestoString(personaje)+BasetoString(personaje)}</Paragraph>
            </Card.Content>
        </Card>
    )
}

const Trasfondo = ({personaje})=>{
    return(
        <Card elevation = {10} style={styles.card}>
            <Card.Title title = {personaje.trasfondo.nombre} />
            <Card.Content>
                <Subheading style={styles.subcabecera}>Rasgo de personalidad</Subheading>
                <Paragraph style={styles.parrafo}>{personaje.trasfondo.rasgo_personalidad}</Paragraph>
                <Subheading style={styles.subcabecera}>Ideales</Subheading>
                <Paragraph style={styles.parrafo}>{personaje.trasfondo.ideal}</Paragraph>
                <Subheading style={styles.subcabecera}>Vínculos</Subheading>
                <Paragraph style={styles.parrafo}>{personaje.trasfondo.vinculo}</Paragraph>
                <Subheading style={styles.subcabecera}>Defectos</Subheading>
                <Paragraph style={styles.parrafo}>{personaje.trasfondo.defecto}</Paragraph>
            </Card.Content>
        </Card>
    )
}

const Objetos = ({personaje})=>{
    return(
        <Card elevation = {10} style={styles.card}>
            <Card.Title title = "Objetos" />
            <Card.Content>
                <Paragraph style = {styles.texto}>{ObjetostoString(personaje)}</Paragraph>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    texto:{
		fontSize:17.5,
		textAlign: 'justify',
		lineHeight:35,
		paddingHorizontal:5,
        color: '#515a5a'
	},
    subcabecera:{
        fontStyle: 'italic',
        fontSize: 16.5,
        fontWeight: 'bold'
    },
    cabecera:{
        fontStyle: 'italic',
        fontSize: 19,
        color : '#c18321',//'#ff841d'
    },
    parrafo:{
        fontSize:16,
		textAlign: 'justify',
		lineHeight:30,
		paddingHorizontal:5,
        color: '#515a5a'
    },
    scroll:{
        backgroundColor: "#fdebd0",
        paddingBottom: 100,
    },
    card:{
        marginTop :15, 
        marginHorizontal:15,
        paddingTop:15,
        borderRadius: 20,
    },

});


function BasetoString(personaje){
    let strPuntosGolpe = "Puntos de golpe: " + personaje.puntos_golpe + "\n"
    let strDadoGolpe = "Dado de golpe: " + personaje.dado_golpe
    return strPuntosGolpe + strDadoGolpe
}

function TiradastoString(personaje){
    return personaje.tiradas_salvacion[0]+ "\n" + personaje.tiradas_salvacion[1]
}

function MarcadorestoString(personaje){
    let str ="Sabiduría pasiva: "+personaje.marcadores.sabiduria_pasiva + "\nClase Armadura: "+ personaje.marcadores.clase_armadura 
    str = str + "\nIniciativa: " + personaje.marcadores.iniciativa + "\nVelocidad: "+ personaje.marcadores.velocidad +"\n"
    return str 
}

function ObjetostoString(personaje){
    let str = ""
    for(let i=0;i<personaje.objetos.length;i++){
        str = str + personaje.objetos[i] + "\n"
    }
    return str
}

function CaracteristicastoString(personaje){
    let str= ""
    let lista = ["Fuerza","Destreza","Constitución","Inteligencia","Sabiduría","Carisma"]
    let caracteristicas = Object.values(personaje.caracteristicas)
    let modificadores = Object.values(personaje.modificadores)
    for(let i =0;i<lista.length;i++){
        str = str + lista[i]+": "+caracteristicas[i]+" "
        if(modificadores[i]>=0){
            str = str + "+ "
        }
        str = str + modificadores[i]+"\n"
    }
    return str
}

function HabilidadestoString(personaje){
    let str = ""
    for(let i=0;i<personaje.habilidades.length;i++){
        str = str + personaje.habilidades[i] + "\n"
    }
    return str
}
