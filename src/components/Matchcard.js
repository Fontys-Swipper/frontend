import React from "react";
import {Image, Text, View } from "react-native";
import { COLORS } from "../../assets/colors";
import dogimage from "../../assets/images/dog_image.jpg"

// var dogimage = this.props.active 
// ? require("../../assets/images/dog_image.jpg")
// : require("")

const Matchcard = ({fromtop, fromleft}) => {
    return (
        <View style={{
            position: "absolute",
            top: fromtop,
            left: fromleft,
            backgroundColor: COLORS.background,
            borderRadius: 5,
            borderWidth: 3,
            borderColor: COLORS.primary,
            height: 489,
            width: 262,
          }}>
            <View style={{
                flexDirection: "column",
            }}>
                <Image source={dogimage}
                    style={{
                        alignSelf: "center",
                        marginTop: 5,
                        maxHeight: 400,
                        maxWidth: 248
                    }} 
                />
                <View style={{
                    flexDirection: "row",
                    marginTop: 15
                }}>
                    <View style={{flex: 2, marginLeft: 12}}>
                        <Text style={{
                            fontFamily: "RobotoSlab-SemiBold",
                            fontSize: 20
                            }}>Name</Text>
                        <Text style={{
                            fontFamily: "Roboto-Medium"
                        }}>Other info</Text>
                    </View>
                    <View style={{flex: 0.5}}>
                        <Text>Like</Text>
                    </View>
                </View>
            </View>
          </View>
    )
}

export default Matchcard;