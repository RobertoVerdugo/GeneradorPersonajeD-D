import React from 'react';
import {View} from 'react-native';
import { Dialog,Button,TextInput} from 'react-native-paper';

export default ({ChangeText,cancelar, ...rest})=>{
    return(
        <View>
            <Dialog.Title>Añadir Personaje</Dialog.Title>
            <Dialog.Content>
                <TextInput
                    style = {{backgroundColor: "#fff",}}
                    placeholder = "Nombre del personaje" 
                    onChangeText= {ChangeText}
                    keyboardType = 'visible-password'
                    autoFocus = {true}
                    underlineColor= '#ff943a'
                    theme={{ colors: {primary: '#ff943a'} }}
                />
            </Dialog.Content>
            
            <Dialog.Actions>
                <Button color = '#ff943a' onPress = {cancelar} >Cancelar</Button> 
                <Button color= '#ff943a'{...rest} >Guardar</Button>
            </Dialog.Actions>
        </View>
    )
}


