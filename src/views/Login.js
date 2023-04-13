import React from "react"; 
import {Text, View, StyleSheet, Button, ImageBackground} from "react-native"

import { COLORS } from "../../assets/colors.js"
import Btn_solid_big from "../components/buttons/Btn_solid_big.js";
import Btn_outline_big from "../components/buttons/Btn_outline_big.js";



const Login = ({navigation}) => {

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../../assets/images/rabbit.jpg')}>
                <View style={styles.innerContainer}>
                    <View style={{width: '100%', height: 150, backgroundColor: COLORS.primary, alignItems: "center"}}>
                        <Text style={styles.text}>Header here</Text>
                    </View>
                    <Text style={styles.text}>username input</Text>
                    <Text style={styles.text}>password input</Text>
                    <View style={styles.buttonsContainer}>
                        <Btn_solid_big title="Login"/>
                        <Btn_outline_big  title="Sign up"/>
                    </View>
                </View>
            </ImageBackground>     
        </View>
        
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        backgroundColor: COLORS.black + '70',
        alignItems: "center",
        justifyContent: "space-between"
    },
    buttonsContainer: {
        marginBottom: 100,
    },
    text: {
        fontFamily: 'Gluten-SemiBold',
        fontSize: 34,
        color: COLORS.background,
        marginTop: 50,
    }

})

