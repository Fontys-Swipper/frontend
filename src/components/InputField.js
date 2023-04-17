import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import { COLORS } from '../../assets/colors'

const InputField = ({text_title="", text_color=COLORS.black, onChangeText, defaultValue = '', value }) => {
  const [text, setText] = React.useState('');


  return (
    <View style={{}}>
      <Text style={[styles.text, styles.text.color = text_color]}> {text_title}</Text>
      <TextInput
        required
        style={styles.input}
        color={text_color}
        value={value}
        onChangeText={onChangeText}
        defaultValue= {defaultValue}
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    alignSelf:'center',
    justifyContent:'center',
    fontFamily:"Roboto-Light",
    fontSize: 15,
    height: 43,
    width:258,
    borderBottomWidth:1,
    borderBottomColor:COLORS.primary, 
  },
  text:{
    fontFamily:"Roboto-Light",
    fontSize: 15,
    width:137,
    marginLeft:80,
    color: COLORS.black, 
 }
});

export default InputField;