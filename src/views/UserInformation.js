import React, { useEffect, useState } from "react";
import { View, Pressable, Text, ToastAndroid } from "react-native";
import TopBar from "../components/TopBar";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { COLORS } from "../../assets/colors.js"
import InputField from "../components/InputField";
import Btn_outline_big from "../components/buttons/Btn_outline_big";

// User mockdata
const UserInfo = [
    {
        uname: "user123",
        fname: "Etunimi",
        lname: "Sukunimi",
        address: "Address 12"
    }
]

const UserInformation = ({navigation}) => {
    const [username, setUsername] = useState(UserInfo[0].uname)
    const [firstname, setFirstname] = useState(UserInfo[0].fname)
    const [lastname, setLastname] = useState(UserInfo[0].lname)
    const [address, setAddress] = useState(UserInfo[0].address)
    const [changes, SetChanges] = useState(false)



    const handleSave = () => {
        if (username === "" || firstname === "" || lastname === "" || address === "") {
            if(Platform.OS === 'android'){
                ToastAndroid.show('Field is empty', ToastAndroid.SHORT)
            }
            return
        }
        // API call
        UserInfo[0].uname = username
        UserInfo[0].fname = firstname
        UserInfo[0].lname = lastname
        UserInfo[0].address = address
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
                    <View style={{position: "absolute", right: 70 ,top: -5}}>
                        <Icon name="edit" size={24}/>
                    </View>
                    <InputField 
                    text_title="Fistname" 
                    onChangeText={text => setFirstname(text) + SetChanges(true)} 
                    value={firstname}/>
                    <View style={{position: "absolute", right: 70 ,top: 75}}>
                        <Icon name="edit" size={24}/>
                    </View>
                    <InputField 
                    text_title="Lasname" 
                    onChangeText={text => setLastname(text) + SetChanges(true)}
                    value={lastname}/>
                    <View style={{position: "absolute", right: 70 ,top: 160}}>
                        <Icon name="edit" size={24}/>
                    </View>
                    <InputField 
                    text_title="Address" 
                    onChangeText={text => setAddress(text) + SetChanges(true)} 
                    value={address}/>
                    <View style={{position: "absolute", right: 70 ,top: 245}}>
                        <Icon name="edit" size={24}/>
                    </View>
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