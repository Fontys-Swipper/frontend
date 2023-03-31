import { Button, StyleSheet, Text, View , Pressable, ToastAndroid} from 'react-native'
import React from 'react'

import { COLORS } from '../../../assets/colors'

const Btn_solid_big = ({ onPress, title = 'Big' }) => {

    onPressDefault= () => {
        console.log('Big button pressed')
        if(Platform.OS === 'android'){
            ToastAndroid.show('Big button pressed', ToastAndroid.SHORT)
        }
    }

    return (
        <Pressable style={styles.button} onPress={onPress? onPress: this.onPressDefault}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

export default Btn_solid_big

const styles = StyleSheet.create({
    button: ({pressed}) => [{
        backgroundColor: pressed ? COLORS.primary + '80' : COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: COLORS.primary,
        width: 240,
        height: 48,
        margin: 10,
    }],
    text: {
        fontFamily: 'Roboto-Regular',
        color: COLORS.white,
        fontSize: 20,
        lineHeight: 24,
    }
})