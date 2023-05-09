import { Button, StyleSheet, Text, View , Pressable, ToastAndroid} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { COLORS } from '../../../assets/colors'

const Btn_menu_underline = ({ onPress, title = 'Menu underline', icon = 'arrow-forward'}) => {

    onPressDefault= () => {
        console.log('Underline button pressed')
        if(Platform.OS === 'android'){
            ToastAndroid.show('Underline button pressed', ToastAndroid.SHORT)
        }
    }

    return (
        <Pressable style={styles.button} onPress={onPress? onPress: this.onPressDefault}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                <Text style={styles.text}>{title}</Text>
                <Icon name={icon} size={24} color={COLORS.black}/>
            </View>
        </Pressable>
    )
}

export default Btn_menu_underline

const styles = StyleSheet.create({
    button: ({pressed}) => [{
        backgroundColor: pressed ? COLORS.primary + '30' : null,
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderColor: COLORS.primary,
        paddingHorizontal: 10,
        paddingVertical: 8,
        width: "80%",
        height: 48,
        margin: 10,
    }],
    text: {
        fontFamily: 'Roboto-Medium',
        color: COLORS.black,
        fontSize: 15,
        lineHeight: 24,
    }
})