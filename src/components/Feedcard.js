import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { COLORS } from "../../assets/colors";
import dogimage from "../../assets/images/dog_image.jpg"

const Feedcard = () => {
    return (
        <View style={[styles.container]}>
            <Image source={dogimage} style={[styles.image]}/>
            <View style={{marginTop: 12}}>
                <View style={{flexDirection: "row"}}>
                    <Text adjustsFontSizeToFit numberOfLines={1} 
                    style={[styles.nametext]}>Strawberry</Text>
                    <Text style={[styles.pricetext]}>50$</Text>
                </View>
                <Text style={[styles.infotext]}>Type</Text>
                <Text style={{marginTop: 15}}>31.3.2023</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        height: 113,
        width: 308,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: COLORS.primary,
        flexDirection: "row",
        gap: 20,
    },
    image: {
        marginLeft: 20,
        alignSelf: "center",
        maxHeight: 80,
        maxWidth: 80,  
        borderRadius: 50,
    },
    nametext: {
        fontFamily: "RobotoSlab-SemiBold",
        fontSize: 20,
        width: 135,
    },
    infotext: {
        fontFamily: "Roboto-Regular"
    },
    pricetext: {
        position: "absolute",
        left: 135,
        fontFamily: "Roboto-Regular", 
        fontSize: 15,
        alignSelf: "center",
    },
})

export default Feedcard;