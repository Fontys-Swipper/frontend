import { Button, StyleSheet, Text, View , Pressable, ToastAndroid, TouchableHighlight} from 'react-native'
import React from 'react'

import { COLORS } from '../../../assets/colors'


const Btn_outline_small = ({ onPress, title = 'Small outline' }) => {

    onPressDefault= () => {
        console.log('Small button pressed')
        if(Platform.OS === 'android'){
            ToastAndroid.show('Small button pressed', ToastAndroid.SHORT)
        }
    }

    return (
        <Pressable style={styles.button} onPress={onPress? onPress: this.onPressDefault}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

export default Btn_outline_small

const styles = StyleSheet.create({
    button: ({pressed}) => [{
        backgroundColor: pressed ? COLORS.primary + '30' : null,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: COLORS.primary,
        width: 100,
        height: 38,
        margin: 10,
    }],
    text: {
        fontFamily: 'Roboto-Regular',
        fontSize: 15,
        color: COLORS.primary,
        lineHeight: 24,
    }
})