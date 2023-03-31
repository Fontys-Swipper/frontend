import React from "react";
import {Image, Text, View, StyleSheet } from "react-native";
import { COLORS } from "../../assets/colors";
import dogimage from "../../assets/images/dog_image.jpg"

// var dogimage = this.props.active 
// ? require("../../assets/images/dog_image.jpg")
// : require("")

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
                        <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.nametext]}>Strawberry</Text>
                        <Text style={[styles.infotext]}>Other info</Text>
                    </View>
                    <View style={{flex: 0.5, alignSelf: "center"}}>
                        <Text style={{}}>Like</Text>
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
        marginTop: 15  
    },
    textcontainer: {
        flex: 2, 
        marginLeft: 12
    },
    nametext: {
        fontFamily: "RobotoSlab-SemiBold",
        fontSize: 20
    },
    infotext: {
        fontFamily: "Roboto-Medium"
    },

})

export default Matchcard;

