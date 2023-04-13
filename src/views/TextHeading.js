import React from "react";
import { Text } from "react-native";
import { COLORS } from "../../assets/colors";
const TextHeading=({text_title=""})=>{
    return(
        <Text
          style={{
            fontFamily: 'Roboto-Regular',
            fontSize: 32,
            marginLeft: 35,
            padding: 20,
            fontWeight: 'bold',
            textDecorationColor: COLORS.black,
          }}>
          {text_title}
      
        </Text> 
    );
};
export default TextHeading;