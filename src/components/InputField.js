import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import { COLORS } from '../../assets/colors'
const InputField = () => {
  const [text, setText] = React.useState('');

  return (
    
    <View>
      <TextInput
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
    fontSize: 20,
    height: 40,
    marginTop:1,
    marginLeft: "12%",
    marginRight:'12%',
    borderBottomWidth:1,
    borderBottomColor:COLORS.primary,
    padding: 10, 
    
  },
});

export default InputField;