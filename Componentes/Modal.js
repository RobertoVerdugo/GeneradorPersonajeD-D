import React from 'react';
import { Dialog} from 'react-native-paper';

export default ({visibility,close, children})=>{
    return(
        <Dialog
            visible = {visibility}
            onDismiss = {close}
            style={{padding:10}}
        >
            {children}
        </Dialog>
    )
    
}
