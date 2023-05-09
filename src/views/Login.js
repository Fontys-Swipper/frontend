import React, { useState } from "react"; 
import {Text, View, StyleSheet, Button, ImageBackground} from "react-native"
import {Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { COLORS } from "../../assets/colors.js"
import InputField from "../components/InputField.js";
import LoginTopBar from "../components/LoginTopBar.js";
import Btn_solid_regular from "../components/buttons/Btn_solid_regular.js";
import { AuthenticateUser, StoreUserId } from "../utils/UserApi.js";

const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const authenticateUser = () => {
        user = {
            email: email,
            password: password
        }
        AuthenticateUser(user).then(result => {
            userId = result.data
            if(result.data != 0)
            {
                StoreUserId(userId).catch(error => {
                    console.log(error)
                })
                navigation.navigate('NavigationBar')                
            }else (
                console.log('Wrong email or password')
            )
        }).catch(error => {
            console.log(error)
        });
    }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={{uri:'https://cdn.pixabay.com/photo/2020/02/29/18/59/rabbit-4890861_1280.jpg'}}>
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
                        <Btn_solid_regular title="Login" onPress={() => authenticateUser()}/>
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

