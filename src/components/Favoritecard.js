import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { COLORS } from "../../assets/colors";
import dogimage from "../../assets/images/dog_image.jpg"

const Favoritecard = ({image = dogimage, name = 'Name'}) => {
    return (
        <View style={[styles.container]}>
            <Image source={image} style={[styles.image]}/>
            <View style={{marginTop: 12}}>
                <View style={{flexDirection: "row"}}>
                    <Text adjustsFontSizeToFit numberOfLines={1} 
                    style={[styles.nametext]}>{name}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        height: 67,
        width: '90%',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: COLORS.primary,
        flexDirection: "row",
        gap: 40,
        marginVertical: 8,
    },
    image: {
        marginLeft: 20,
        alignSelf: "center",
        maxHeight: 50,
        maxWidth: 50,  
        borderRadius: 25,
    },
    nametext: {
        fontFamily: "RobotoSlab-SemiBold",
        fontSize: 20,
        width: 130,
        top: 5
    },
})

export default Favoritecard;