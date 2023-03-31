import React from "react";
import {Image, Text, View, StyleSheet } from "react-native";
import { COLORS } from "../../assets/colors";
import dogimage from "../../assets/images/dog_image.jpg"
import Btn_like from "./buttons/Btn_like";
 
const Matchcard = ({fromtop, fromleft}) => {
    return (
        <View style={[
            styles.container,
            {
                position: "absolute",
                top: fromtop,
                left: fromleft,
            }
        ]}>
            <View style={{flexDirection: "column"}}>
                <Image source={dogimage} style={[styles.image]}/>
                <View style={[styles.row]}>
                    <View style={[styles.textcontainer]}>
                        <View style={{flexDirection: "row", gap: 20}}>
                            <Text adjustsFontSizeToFit numberOfLines={1} 
                                style={[styles.nametext]}>Strawberry
                            </Text>
                            <Text adjustsFontSizeToFit numberOfLines={1} 
                            style={[styles.price]}>50€</Text>
                        </View>
                        <Text style={[styles.infotext]}>Type</Text>
                        <Text style={[styles.infotext]}>Young</Text>
                    </View>
                    <View style={[styles.buttoncontainer]}>
                        <Btn_like/>
                    </View>
                </View>
            </View>
          </View>
    )
}

const styles = StyleSheet.create({
    container: {       
        backgroundColor: COLORS.background,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: COLORS.primary,
        height: 489,
        width: 262,
    },
    image: {
        alignSelf: "center",
        marginTop: 5,
        maxHeight: 400,
        maxWidth: 248
    },
    row: {
        flexDirection: "row",
    },
    textcontainer: {
        flex: 2, 
        marginLeft: 12,
        alignSelf: "center"
    },
    nametext: {
        fontFamily: "RobotoSlab-SemiBold",
        fontSize: 20,
        maxWidth: 140,
    },
    infotext: {
        fontFamily: "Roboto-Medium"
    },
    price: {
        fontFamily: "Roboto-Medium", 
        fontSize: 15,
        alignSelf: "center",
        maxWidth: 50,
    },
    buttoncontainer: {
        flex: 0.7, 
        marginTop: 5,
    }
})

export default Matchcard;

