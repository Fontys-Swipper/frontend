import { Button, StyleSheet, Text, View , Pressable, ToastAndroid, TouchableHighlight} from 'react-native'
import React from 'react'

import { COLORS } from '../../../assets/colors'


const Btn_outline_regular = ({ onPress, title = 'Regular outline' }) => {

    onPressDefault= () => {
        console.log('Regular button pressed')
        if(Platform.OS === 'android'){
            ToastAndroid.show('Regular button pressed', ToastAndroid.SHORT)
        }
    }

    return (
        <Pressable style={styles.button} onPress={onPress? onPress: this.onPressDefault}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

export default Btn_outline_regular

const styles = StyleSheet.create({
    button: ({pressed}) => [{
        backgroundColor: pressed ? COLORS.primary + '30' : null,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: COLORS.primary,
        width: 180,
        height: 48,
        margin: 10,
    }],
    text: {
        fontFamily: 'Roboto-Regular',
        fontSize: 20,
        color: COLORS.primary,
        lineHeight: 24,
    }
})