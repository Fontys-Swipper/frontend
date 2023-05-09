import React from "react"; 
import {Text, View, StyleSheet, ImageBackground, Button} from "react-native"

import { COLORS } from "../../assets/colors.js"
import Btn_solid_big from "../components/buttons/Btn_solid_big.js";
import Btn_outline_big from "../components/buttons/Btn_outline_big.js";



const Start = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={{uri: 'https://cdn.pixabay.com/photo/2021/01/30/15/14/akita-5964180_1280.jpg'}}>
                <View style={styles.innerContainer}>
                    <Text style={styles.text}>Swipper</Text>
                    <View style={styles.buttonsContainer}>
                        <Btn_solid_big onPress={() => navigation.navigate('Login')} title="Login"/>
                        <Btn_outline_big onPress={() => navigation.navigate('SignUp')}  title="Sign up"/>
                        <Btn_outline_big onPress={() => navigation.navigate('NavigationBar')}  title="Skip to Home"/>

                    </View>
                </View>
            </ImageBackground>     
        </View>
        
    );
}

export default Start;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        backgroundColor: COLORS.black + 'a6',
        alignItems: "center",
        justifyContent: "space-between",
    },
    buttonsContainer: {
        marginBottom: 100,
    },
    text: {
        fontFamily: 'Gluten-SemiBold',
        fontSize: 34,
        color: COLORS.white,
        marginTop: 50,
    }

})

