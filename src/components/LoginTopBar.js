import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ToastAndroid, TouchableHighlight } from 'react-native';
import { COLORS } from "../../assets/colors";
import logo from "../../assets/images/swipper-logo.png";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'



const LoginTopBar = ({text = 'Text here', onPress}) => {
  const navigation = useNavigation();

    onPressDefault= () => {
        console.log('Back button pressed')
        if(Platform.OS === 'android'){
            ToastAndroid.show('Back button pressed', ToastAndroid.SHORT)
        }
    }

  return (
    <View style={styles.container}>
        <Text style={styles.logo}>Swipper</Text>
        <View style={styles.innerContainer}>
            <TouchableHighlight style={{borderRadius: 4}} onPress={onPress? onPress : this.onPressDefault} activeOpacity={1} underlayColor={COLORS.white + '40'}>
                <Icon name="arrow-back" size={24} color={'#000000'}/>
            </TouchableHighlight>
            <Text style={styles.text}>{text}</Text>
        </View>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: '100%',
    backgroundColor: COLORS.primary,
    // alignItems: 'flex-start',
    justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'row',
    padding: 35,
    elevation: 10,
    gap: 20,
    
  },
  innerContainer: {
    flexDirection: 'row',
    gap: 10,
    // alignItems: 'center',
    // backgroundColor: COLORS.black,
  },
  logo: {
    // flex: 1,
    // alignItems: 'center',
    // backgroundColor: COLORS.white,
    // alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: 'Gluten-SemiBold', 
    fontSize: 30, 
    color: '#000000'
  },
  text: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    // backgroundColor: COLORS.white,
    flex: 1,
    color: '#000000',
    // justifyContent: 'center',
    // alignSelf: 'auto'
  },
});

export default LoginTopBar;