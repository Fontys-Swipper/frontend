import { Button, StyleSheet, Text, View , Pressable, ToastAndroid, TouchableHighlight} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { COLORS } from '../../../assets/colors'


const Btn_chat = ({ onPress, }) => {

    onPressDefault= () => {
        console.log('Chat button pressed')
        if(Platform.OS === 'android'){
            ToastAndroid.show('Chat button pressed', ToastAndroid.SHORT)
        }
    }

    return (
        <Pressable style={styles.button} onPress={onPress? onPress: this.onPressDefault}>
            <Icon name="chat" size={24} color={COLORS.black}/>
        </Pressable>
    )
}

export default Btn_chat

const styles = StyleSheet.create({
    button: ({pressed}) => [{
        backgroundColor: pressed ? COLORS.primary + '30' : null,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: COLORS.primary,
        width: 40,
        height: 40,
        margin: 10,
    }],
})