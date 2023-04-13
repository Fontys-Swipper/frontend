import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { COLORS } from "../../assets/colors";
import logo from "../../assets/images/swipper-logo.png";
import DropdownComponent from "./DropDownTopBar";

const TopBar = () => {
    return (
        <View style={[styles.container, styles.elevation]}>
            <Image source={logo} style={[styles.image]}/>
            <DropdownComponent />        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        height: 54,
        flexDirection: "row",
    },
    elevation: {
        elevation: 20,
        shadowColor: COLORS.black,
    },
    image: {
        alignSelf: "center",
        marginLeft: 20, 
    }
})

export default TopBar;