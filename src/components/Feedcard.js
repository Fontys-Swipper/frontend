import React from "react";
import { View, Image, Text } from "react-native";
import { COLORS } from "../../assets/colors";
import dogimage from "../../assets/images/dog_image.jpg"


const Feedcard = () => {
    return (
        <View style={{
            backgroundColor: COLORS.background,
            height: 113,
            width: 308,
            borderRadius: 5,
            borderWidth: 2,
            borderColor: COLORS.primary,
            flexDirection: "row",
            gap: 20,
        }}>
                <Image source={dogimage}
                    style={{
                        marginLeft: 20,
                        marginTop: 16.5,
                        maxHeight: 80,
                        maxWidth: 80,  
                        borderRadius: 50,                  
                }}/>
                <View style={{marginTop: 16.5}}>
                    <Text style={{
                        fontFamily: "RobotoSlab-SemiBold",
                        fontSize: 20,
                    }}>Name</Text>
                    <Text style={{
                        fontFamily: "Roboto-Regular"
                    }}>Type</Text>
                </View>
        </View>
    )
}

export default Feedcard;