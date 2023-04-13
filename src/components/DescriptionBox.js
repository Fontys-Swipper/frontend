import React from'react';
import { TextInput, View, Text } from 'react-native';
import { COLORS } from '../../assets/colors';
const DescriptionBox =({palceholder="placeholder", text_title=""})=> {
    const [text, setText] = React.useState('');
    return(
     <View>
        <Text style={{
                fontFamily:"RobotoSlab-Regular",
                fontSize:15,
                width:136,
                height:46,
                marginLeft:57,
                fontWeight:"bold",
                textDecorationColor: COLORS.black
        }}> {text_title}</Text>
        <TextInput 
         palceholder={palceholder}
         multiline={true}
         numberOfLines={10}
         textAlignVertical='top'
         style={{
            fontFamily:"Roboto-Regular",
            fontSize: 18,
            height: 150,
            marginTop:1,
           
            marginLeft: "10%",
            marginRight:'10%',
            borderWidth:1,
            borderColor:COLORS.black,
            padding: 10, 
            maxWidth:"80%",
            maxHeight:150
        }}
        onChangeText={newText=> setText(newText)}
        defaultValue={text}
        maxLength={200}
         />
    </View>
    );
};
export default DescriptionBox;