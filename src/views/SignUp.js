import React, { useState }  from "react"; 
import {Text, View, StyleSheet, Button, ImageBackground} from "react-native"
import {Dimensions} from 'react-native';

import { COLORS } from "../../assets/colors.js"
import Btn_solid_big from "../components/buttons/Btn_solid_big.js";
import Btn_outline_big from "../components/buttons/Btn_outline_big.js";
import InputField from "../components/InputField.js";

const SignUp = ({navigation}) => {
    const [view, setView] = useState(0)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')


    if(view == 0){ // First view of sign up
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../../assets/images/malinois-g4dd9f780d_1920.jpg')}>
                    <View style={styles.innerContainer}>
                        <View style={{width: '100%', marginBottom: 20, height: 150, backgroundColor: COLORS.primary, alignItems: "center"}}>
                            <Text style={styles.text}>Header here</Text>
                        </View>
                        <View> 
                            <View style={styles.inputContainer}>
                                <InputField text_title="Username" text_color={COLORS.white} onChangeText={newText => setUsername(newText)} value={username} />
                            </View>
                            <View style={styles.inputContainer}>
                                <InputField text_title="Email" text_color={COLORS.white} onChangeText={newText => setEmail(newText)} value={email} />
                            </View>
                            <View style={styles.inputContainer}>
                                <InputField text_title="Password" text_color={COLORS.white} onChangeText={newText => setPassword(newText)} value={password} />
                            </View>
                            <View style={styles.inputContainer}>
                                <InputField text_title="Password again" text_color={COLORS.white}/>
                            </View>
                        </View>
                        <View style={styles.buttonsContainer}>
                            <Btn_solid_big onPress={() => setView(1)} title="Next"/>
                            <Btn_outline_big onPress={() => navigation.navigate('Start')} title="Back"/>
                        </View>
                    </View>
                </ImageBackground>     
            </View> 
        );
    }else { //Second view of sign up
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../../assets/images/cat-g2ff4963cc_1920.jpg')}>
                    <View style={styles.innerContainer}>
                        <View style={{width: '100%', marginBottom: 20, height: 150, backgroundColor: COLORS.primary, alignItems: "center"}}>
                            <Text style={styles.text}>Header here</Text>
                        </View>
                        <View>
                            <View style={styles.inputContainer}>
                                <InputField text_title="First name" text_color={COLORS.white} onChangeText={newText => setFirstName(newText)} value={firstName} />
                            </View>
                            <View style={styles.inputContainer}>
                                <InputField text_title="Last name" text_color={COLORS.white} onChangeText={newText => setLastName(newText)} value={lastName} />
                            </View>
                            <View style={styles.inputContainer}>
                                <InputField text_title="Address" text_color={COLORS.white} onChangeText={newText => setAddress(newText)} value={address}  />
                            </View>
                            
                        </View>
                        <View style={styles.buttonsContainer}>
                            <Btn_solid_big onPress={() => navigation.navigate('Home')} title="Login"/>
                            <Btn_outline_big onPress={()=> setView(0)} title="Back"/>
                        </View>
                    </View>
                </ImageBackground>     
            </View> 
        );
    }
}

export default SignUp;

const styles = StyleSheet.create({
    inputContainer: {
        //backgroundColor: COLORS.white + '70',
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
        backgroundColor: COLORS.black + 90,
        justifyContent: "space-between",
    },
    buttonsContainer: {
        alignItems: "center",
        marginBottom: 80,
    },
    text: {
        fontFamily: 'Gluten-SemiBold',
        fontSize: 34,
        color: COLORS.background,
        marginTop: 50,
    }

})

