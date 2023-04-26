import { Button, StyleSheet, Text, View , Pressable, ToastAndroid, TouchableHighlight} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { COLORS } from '../../../assets/colors'


const Btn_floating_round = ({ onPress, icon}) => {

    onPressDefault= () => {
        console.log('Chat button pressed')
        if(Platform.OS === 'android'){
            ToastAndroid.show('Chat button pressed', ToastAndroid.SHORT)
        }
    }

    return (
        <Pressable style={styles.button} onPress={onPress? onPress: this.onPressDefault}>
            {icon}
        </Pressable>
    )
}

export default Btn_floating_round

const styles = StyleSheet.create({
    button: ({pressed}) => [{
        backgroundColor: pressed ? COLORS.secondary + '90' : COLORS.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 3,
        borderColor: COLORS.primary,
        width: 70,
        height: 70,
        margin: 10,
    }],
})