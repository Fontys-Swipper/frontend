import React, { useState } from "react";
import { View, Pressable, Text, ToastAndroid } from "react-native";
import TopBar from "../components/TopBar";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { COLORS } from "../../assets/colors.js"
import InputField from "../components/InputField";
import Btn_outline_big from "../components/buttons/Btn_outline_big";

const UserInformation = ({navigation}) => {
    const [username, setUsername] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [address, setAddress] = useState('')
    const [changes, SetChanges] = useState(false)

    const handleSave = () => {
        SetChanges(false)
        if(Platform.OS === 'android'){
            ToastAndroid.show('Saved user information', ToastAndroid.SHORT)
        }
    }

    return (
        <View>
            <View>
                <TopBar/>
            </View>
            <View>
                <Pressable style={{marginLeft: 17, marginTop: 15}} onPress={() => navigation.navigate('Settings')}>
                    <Icon name="arrow-back" size={24} color={COLORS.black}/>
                </Pressable>
                <View style={{marginLeft: 47, marginTop: 25}}>
                    <Text style={{fontFamily: "RobotoSlab-SemiBold", fontSize: 26}}>User Information</Text>
                </View>
                <View style={{marginTop: 50, gap: 20}}>
                    <InputField 
                    text_title="Username" 
                    defaultValue="" 
                    onChangeText={text => setUsername(text) + SetChanges(true)}
                    value={username}/>
                    <InputField 
                    text_title="Fistname" 
                    defaultValue=""
                    onChangeText={text => setFirstname(text) + SetChanges(true)} 
                    value={firstname}/>
                    <InputField 
                    text_title="Lasname" 
                    defaultValue="" 
                    onChangeText={text => setLastname(text) + SetChanges(true)}
                    value={lastname}/>
                    <InputField 
                    text_title="Address" 
                    defaultValue=""
                    onChangeText={text => setAddress(text) + SetChanges(true)} 
                    value={address}/>
                </View>
                {changes && (
                <View style={{alignItems: "center", marginTop: 70}}>
                    <Btn_outline_big onPress={handleSave} title="Save Changes"/>
                </View>
                )}
            </View>
        </View>
    )
}



export default UserInformation;