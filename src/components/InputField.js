import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import { COLORS } from '../../assets/colors'
const InputField = ({text_title=""}) => {
  const [text, setText] = React.useState('');

  return (
    
    <View>
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

    fontFamily:"Roboto-Regular",
    fontSize: 15,
    height: 40,
    marginTop:1,
    marginLeft: "12%",
    marginRight:'12%',
    borderBottomWidth:1,
    borderBottomColor:COLORS.primary,
    padding: 10, 
    
  },
  text:{
    fontFamily:"RobotoSlab-Regular",
    fontSize: 13,
    marginLeft:"15%",
    fontWeight:"bold",
    textDecorationColor: COLORS.black
 }
});

export default InputField;