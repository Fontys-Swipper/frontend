import { Button, StyleSheet, Text, View , Pressable, ToastAndroid, TouchableHighlight} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'


import { COLORS } from '../../../assets/colors'


const Btn_like = ({ onPress, }) => {

    onPressDefault= () => {
        console.log('Like button pressed')
        if(Platform.OS === 'android'){
            ToastAndroid.show('Like button pressed', ToastAndroid.SHORT)
        }
    }

    return (
        <Pressable style={styles.button} onPress={onPress? onPress: this.onPressDefault}>
            <Icon name="favorite-border" size={24} color={COLORS.black}/>
        </Pressable>
    )
}

export default Btn_like

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