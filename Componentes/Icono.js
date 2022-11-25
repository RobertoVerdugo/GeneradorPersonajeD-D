import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


export default ({nombre, func})=>{
    return(
        <Icon.Button
            name = {nombre}
            onPress = {func}
            size = {20}
            borderRadius = {50}
            iconStyle = { {margin: 11, }}
            backgroundColor = "#ff943a"
        />
    )
}