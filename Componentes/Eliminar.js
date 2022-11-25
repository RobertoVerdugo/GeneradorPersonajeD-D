import React from 'react';
import {View} from 'react-native';
import { Dialog,Button,Paragraph} from 'react-native-paper';

export default ({cancelar, ...rest})=>{
    return(
        <View>
            <Dialog.Title style={{paddingTop:5}}>
                <Paragraph style={{fontSize:17}}>Se eliminará el Personaje.</Paragraph>
            </Dialog.Title>
            <Dialog.Actions>
                <Button color = '#ff943a' onPress = {cancelar}>Cancelar</Button>
                <Button color = '#ff943a' {...rest}>Eliminar</Button>
            </Dialog.Actions>
            
        </View>
    )
}
