import React,{useState,useEffect} from 'react';
import {StyleSheet, View,FlatList} from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { List,ActivityIndicator} from 'react-native-paper';	
import Personaje, {guardarPersonaje,verificarNombre,cargarPersonaje,leerNombres, eliminarPersonaje,cargarDescripcion} from "./Generador/Personaje.js"
import {Hoja,Modal,Prompt,Alerta,Eliminar,Icono} from './Componentes'


const GeneradorScreen = ({ navigation })=> {
	const [personaje,setPersonaje] = useState(new Personaje())
	const [visible,setVisible]= useState(false)
	const [nombre,setNombre]= useState("")
	const [lista,setLista] = useState([])
	const [disable,setDisable] = useState(true)
	useEffect( ()=>{
		let isMounted = true
		leerNombres()
		.then(response=>{ 
			if(isMounted){
				setLista(response)
			}
		})
		return()=>{isMounted = false}
	} ,[lista])
	return (
		<View style={styles.container}>
			<Hoja personaje = {personaje}/>
			<View style = {styles.buttonspace}>
				<Icono nombre = "align-justify" func = {()=> navigation.push("Lista") }/>
				<Icono nombre = "repeat" func = {()=>{setPersonaje(new Personaje()) }}/>
				<Icono nombre = "save" func = {()=>{setVisible(true)}}/> 
			</View>
			<Modal visibility = {visible} close ={()=>{setVisible(false)}}>
					<Prompt 
						ChangeText={(text)=>{
							setNombre(text)
							if(text !== ""){
								setDisable(false)
							}else{
								setDisable(true)
							}
						}} 
						cancelar = {()=>setVisible(false)} 
						onPress={()=>{
							if(verificarNombre(lista,nombre)){
								guardarPersonaje(personaje,nombre)
								setVisible(false) 
								setDisable(true)
							}
							else{
								Alerta()
								setVisible(false) 
							}
						}}
						disabled = {disable}
					/> 
            </Modal>
		</View>
	);
}

const ListaScreen = ({ navigation })=>{
	const [lista,setLista] = useState([])
	const [nombre,setNombre] = useState("")
	const [visible,setVisible] = useState(false)
	const [descipciones,setDescripciones] = useState([])
	const [loading,setLoading] = useState(true)
	useEffect( ()=>{
		let isMounted = true
		leerNombres()
		.then(response=>{ 
			if(isMounted){
				setLista(response) 
			}
		})
		return()=>{isMounted = false}
	} ,[lista])
	useEffect(()=>{
		let isMounted = true
		cargarDescripcion()
		.then(data=>{
			if(isMounted){
				setDescripciones(data)
				setLoading(false)
			}
		})
		return()=>{isMounted = false}
	},[])
	if(loading){
		return (<View style={styles.container}><ActivityIndicator  animating={true} color="#ff943a" size = "large"/></View>)
	}
	return(
		<View style={styles.containerlist}>
			<FlatList 
				data = {lista}
				renderItem = {({item})=> 
					<List.Item
						title = {item}
						description={descipciones[lista.indexOf(item)]}
						left={() => <List.Icon {...{color:"#222"}} icon="file-account" />}
						style={styles.item} 
						onPress = {()=> navigation.navigate("Personaje",{title:item,nombre:item}) } 
						onLongPress = {()=> {
							setNombre(item)
							setVisible(true)
						} }/>
				}
				keyExtractor = {item => String(lista.indexOf(item))}
			/>
			<Modal visibility = {visible} close ={()=>{setVisible(false)}}>
				<Eliminar 
				cancelar = {()=> setVisible(false) } 
				title = "Eliminar"
				onPress = {()=>{
					eliminarPersonaje(nombre)
					setVisible(false)
				}}	
				/>
			</Modal>
		</View>
	)
}

const PersonajeScreen = ({ navigation })=>{
	const [personaje,setPersonaje] = useState(new Personaje())
	const nombre = navigation.getParam("nombre")
	useEffect(()=>{
		cargarPersonaje(nombre)
		.then(response=>{
			setPersonaje(response)
		})
	},[])
	
	return (
		<View>
			<Hoja personaje = {personaje}/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'center',
		backgroundColor:"#ffffff",
	},
	containerlist:{
		flex: 1,
		paddingTop:8,
	},
	buttonspace:{
		flexDirection: 'row',
		position: 'absolute',
		top: 0, 
		left: 25, 
		right: 25, 
		bottom: 20, 
		justifyContent: 'space-between', 
		alignItems: 'flex-end',
	},
	item:{
		padding: 10,
		fontSize: 20,
		borderRadius: 20,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
		backgroundColor:"#fff",
		marginVertical: 4,
		marginHorizontal:8,
	},
});

const AppNavigator = createStackNavigator({
	Generador: {
		screen: GeneradorScreen,
	},
	Lista: {
		screen: ListaScreen,
	},
	Personaje: {
		screen: PersonajeScreen,
	}
}, {initialRouteName: "Generador",
	defaultNavigationOptions:{
		headerStyle: {
			backgroundColor: "#ff943a",
		},
		headerTintColor: '#fff',
	}
})

GeneradorScreen.navigationOptions = {
	title: "Generador",
}
ListaScreen.navigationOptions = {
	title: "Guardados",
}
PersonajeScreen.navigationOptions = ({ navigation })=>{
	return{
		title: navigation.getParam('title','Cargando...'),
	}
}

export default createAppContainer(AppNavigator)