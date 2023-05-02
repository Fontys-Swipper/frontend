import React, { useState } from "react"; 
import {Text, View, StyleSheet, Button, ImageBackground} from "react-native"
import {Dimensions} from 'react-native';

import { COLORS } from "../../assets/colors.js"
import InputField from "../components/InputField.js";
import LoginTopBar from "../components/LoginTopBar.js";
import Btn_solid_regular from "../components/buttons/Btn_solid_regular.js";

const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../../assets/images/rabbit.jpg')}>
                <View style={styles.innerContainer}>
                    <LoginTopBar text="Login" onPress={() => navigation.navigate('Start')}/>
                    <View>
                        <View style={styles.inputContainer}>
                            <InputField text_title="Email" text_color={COLORS.white} onChangeText={newText => setEmail(newText)} value={email}/>
                        </View>
                        <View style={styles.inputContainer}>
                            <InputField text_title="Password" text_color={COLORS.white} onChangeText={newText => setPassword(newText)} value={password}/>
                        </View>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <Btn_solid_regular title="Login" onPress={() => navigation.navigate('NavigationBar')}/>
                        {/* <Btn_outline_big onPress={() => navigation.navigate('Start')} title="Back"/> */}
                    </View>
                </View>
            </ImageBackground>     
        </View>
        
    );
}

export default Login;

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 20,
    },
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    innerContainer: {
        flex: 1,
        backgroundColor: COLORS.black + 'b3',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    buttonsContainer: {
        alignItems: "center",
        marginBottom: 100,
    },
    text: {
        fontFamily: 'Gluten-SemiBold',
        fontSize: 34,
        color: COLORS.background,
        marginTop: 50,
    }

})

