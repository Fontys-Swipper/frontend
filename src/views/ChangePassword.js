import React,{ useState, useEffect } from "react"; 
import {Text, View, ToastAndroid, StyleSheet} from "react-native"
import { COLORS } from "../../assets/colors.js"
import TopBar from '../components/TopBar'
import Icon from 'react-native-vector-icons/MaterialIcons'
import InputField from "../components/InputField.js";
import Btn_solid_regular from "../components/buttons/Btn_solid_regular.js";
import Btn_back_arrow from "../components/buttons/Btn_back_arrow.js";
import { UpdateUser } from "../utils/UserApi.js";


const ChangePassword = ({navigation, route}) => {
    const [userPassword, setUserPassword] = useState('')
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')
    const [passwordIsMatch, setPasswordIsMatch] = useState(true)
    const {user} = route.params


    useEffect(() => {
        if (newPassword === passwordAgain) {
            setPasswordIsMatch(true)
        }
        setUserPassword(user.password)
    },[])

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
            UpdateUser(user.id, {
                id: user.id,
                username: user.username,
                firstname: user.firstname,
                lastname: user.lastname,
                address: user.address,
                password: newPassword,
                email: user.email,
                livingSpace: user.livingSpace,
                description: user.description,
                companyName: user.companyName,
                hasPet: user.hasPet,
                hasGarden: user.hasGarden,
                likedAnimals: user.likedAnimals,
                ownAnimals: user.ownAnimals,
            }).then(result => {
                console.log(result)
            }).catch(error => {
                console.log(error)
            })
            if(Platform.OS === 'android'){
                ToastAndroid.show('Password Changed', ToastAndroid.SHORT)
            }
            setPassword("")
            setNewPassword("")
            setPasswordAgain("")
            setPasswordIsMatch(true)
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
                <View style={{marginTop: 50, alignItems: 'center'}}>
                    <InputField 
                    text_title="Password"
                    onChangeText={text => setPassword(text)}
                    value={password}
                    />
                </View>
                <View style={{marginTop: 60, gap: 20, alignItems: 'center'}}>
                    <InputField 
                    text_title="New Password"
                    onChangeText={text => setNewPassword(text)}
                    value={newPassword}
                    />
                    <InputField 
                    text_title="Repeat"
                    onChangeText={text => setPasswordAgain(text)}
                    value={passwordAgain}
                    icon={!passwordIsMatch &&(
                        <Icon name="error-outline" size={24} color={COLORS.primary}/>
                        )}
                    />
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