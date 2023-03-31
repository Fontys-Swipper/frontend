import { Button, StyleSheet, Text, View , Pressable, ToastAndroid, TouchableHighlight} from 'react-native'
import React from 'react'

import { COLORS } from '../../../assets/colors'


const Btn_solid_regular = ({ onPress, title = 'Regular' }) => {

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

export default Btn_solid_regular

const styles = StyleSheet.create({
    button: ({pressed}) => [{
        backgroundColor: pressed ? COLORS.primary + '80' : COLORS.primary,
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
        color: COLORS.white,
        lineHeight: 24,
    }
})