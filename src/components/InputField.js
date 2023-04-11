import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import { COLORS } from '../../assets/colors'
const InputField = ({text_title=""}) => {
  const [text, setText] = React.useState('');

  return (
    
    <View style={{}}>
      <Text style={styles.text}> {text_title}</Text>
      <TextInput
        required
        style={styles.input}
        onChangeText={newText=> setText(newText)}
        defaultValue={text}
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    alignSelf:'center',
    justifyContent:'center',
    fontFamily:"Roboto-Regular",
    fontSize: 15,
    height: 43,
    width:258,
    borderBottomWidth:1,
    borderBottomColor:COLORS.primary, 
    
  },
  text:{
    fontFamily:"RobotoSlab-Regular",
    fontSize: 13,
    width:137,
    height:37,
    marginLeft:90,
    fontWeight:"bold",
    textDecorationColor: COLORS.black
 }
});

export default InputField;