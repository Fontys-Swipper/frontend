import { StyleSheet, Text, Pressable, ToastAndroid, View} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


import { COLORS } from '../../../assets/colors'


const Btn_solid_small = ({ onPress, title = 'Small' , icon}) => {

    onPressDefault= () => {
        console.log('Small button pressed')
        if(Platform.OS === 'android'){
            ToastAndroid.show('Small button pressed', ToastAndroid.SHORT)
        }
    }

    return (
        <Pressable style={styles.button} onPress={onPress? onPress: this.onPressDefault}>
            {icon}
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

export default Btn_solid_small

const styles = StyleSheet.create({
    button: ({pressed}) => [{
        opacity: pressed ? 0.8 : 1,
        backgroundColor: pressed ? COLORS.primary + '80' : COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: COLORS.primary,
        width: 100,
        height: 38,
        margin: 10,
        flexDirection: 'row',
    }],
    text: {
        fontFamily: 'Roboto-Regular',
        fontSize: 15,
        color: COLORS.white,
        lineHeight: 24,
        marginHorizontal: 5,
    },
})