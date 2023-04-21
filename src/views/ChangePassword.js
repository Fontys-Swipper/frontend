import React,{ useState, useEffect } from "react"; 
import {Text, View, ToastAndroid, StyleSheet} from "react-native"
import { COLORS } from "../../assets/colors.js"
import TopBar from '../components/TopBar'
import Icon from 'react-native-vector-icons/MaterialIcons'
import InputField from "../components/InputField.js";
import Btn_solid_regular from "../components/buttons/Btn_solid_regular.js";
import Btn_back_arrow from "../components/buttons/Btn_back_arrow.js";

const userPassword = "123"

const ChangePassword = ({navigation}) => {
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')
    const [passwordIsMatch, setPasswordIsMatch] = useState(true)


    useEffect(() => {
        if (newPassword === passwordAgain) {
            setPasswordIsMatch(true)
        }
        
    })

    const handePasswordChange = () => {
        if (passwordAgain === "" || newPassword === "") {
            if(Platform.OS === 'android'){
                ToastAndroid.show('Field is empty', ToastAndroid.SHORT)
            }
            return
        }
        if (password != userPassword) {
            if(Platform.OS === 'android'){
                ToastAndroid.show('Incorrect Password', ToastAndroid.SHORT)
            }
            setPassword("")
            return
        }
        if (newPassword === passwordAgain) {
            if(Platform.OS === 'android'){
                ToastAndroid.show('Password Changed', ToastAndroid.SHORT)
            }
            setPassword("")
            setNewPassword("")
            setPasswordAgain("")
        }
        else{
            if(Platform.OS === 'android'){
                ToastAndroid.show('Password does not match', ToastAndroid.SHORT)
            }
            setPasswordIsMatch(false)
        }
    }

    return (
        <View>
            <View>
                <TopBar/>
            </View>
            <View style={{flexDirection: "column"}}>
                <Btn_back_arrow onPress={() => navigation.navigate('Settings')}/>               
                <Text style={[styles.heading]}>Change Password</Text>               
                <View style={{marginTop: 50}}>
                    <InputField 
                    text_title="Password"
                    onChangeText={text => setPassword(text)}
                    value={password}
                    />
                </View>
                <View style={{marginTop: 60, gap: 20}}>
                    <InputField 
                    text_title="New Password"
                    onChangeText={text => setNewPassword(text)}
                    value={newPassword}
                    />
                    <InputField 
                    text_title="Repeat"
                    onChangeText={text => setPasswordAgain(text)}
                    value={passwordAgain}
                    />
                    <View style={[styles.icon]}>
                        {!passwordIsMatch &&(
                        <Icon name="error-outline" size={24} color={COLORS.primary}/>
                        )}
                    </View>
                </View>
                <View style={[styles.button]}>
                    <Btn_solid_regular onPress={handePasswordChange} title="Change"/>
                </View>
            </View>
        </View>
    )
}

export default ChangePassword;

const styles = StyleSheet.create({
    heading: {
        marginLeft: 47, 
        marginTop: 25,
        fontFamily: "RobotoSlab-SemiBold", 
        fontSize: 26,
    },
    icon: {
        position: "absolute", 
        left: 330, 
        top: 115,
    },
    button: {
        alignItems: "center", 
        marginTop: 70,
    },
})