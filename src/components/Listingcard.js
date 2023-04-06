import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { COLORS } from "../../assets/colors";
import dogimage from "../../assets/images/dog_image.jpg"

const Listingcard = () => {
    return (
        <View style={[styles.container]}>
            <Image source={dogimage} style={[styles.image]}/>         
            <Text adjustsFontSizeToFit numberOfLines={1} 
            style={[styles.nametext]}>Strawberry</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        height: 67,
        width: 308,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: COLORS.primary,
        flexDirection: "row",
        gap: 45,
    },
    image: {
        alignSelf: "center",
        marginLeft: 20,
        maxHeight: 50,
        maxWidth: 50,  
        borderRadius: 50,
    },
    nametext: {
        fontFamily: "RobotoSlab-SemiBold",
        fontSize: 20,
        alignSelf: "center",
        width: 180,
    },
})

export default Listingcard;