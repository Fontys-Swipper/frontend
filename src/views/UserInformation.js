import React, {useState} from "react";
import { View, Text, ToastAndroid, StyleSheet } from "react-native";
import TopBar from "../components/TopBar";
import Icon from 'react-native-vector-icons/MaterialIcons'
import InputField from "../components/InputField";
import Btn_outline_big from "../components/buttons/Btn_outline_big";
import Btn_back_arrow from "../components/buttons/Btn_back_arrow";

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
                <Btn_back_arrow onPress={() => navigation.navigate('Settings')}/>              
                <Text style={[styles.heading]}>User Information</Text>               
                <View style={[styles.inputfiels]}>
                    <InputField 
                    text_title="Username" 
                    defaultValue=""
                    onChangeText={text => setUsername(text) + SetChanges(true)}
                    value={username}
                    icon={<Icon name="edit" size={24}/>}
                    />
                    <InputField 
                    text_title="Fistname" 
                    onChangeText={text => setFirstname(text) + SetChanges(true)} 
                    value={firstname}
                    icon={<Icon name="edit" size={24}/>}
                    />
                    <InputField 
                    text_title="Lasname" 
                    onChangeText={text => setLastname(text) + SetChanges(true)}
                    value={lastname}
                    icon={<Icon name="edit" size={24}/>}
                    />
                    <InputField 
                    text_title="Address" 
                    onChangeText={text => setAddress(text) + SetChanges(true)} 
                    value={address}
                    icon={<Icon name="edit" size={24}/>}
                    />
                </View>
                {changes && (
                <View style={[styles.button]}>
                    <Btn_outline_big onPress={handleSave} title="Save Changes"/>
                </View>
                )}
            </View>
        </View>
    )
}



export default UserInformation;

const styles = StyleSheet.create({
    heading: {
        marginLeft: 47, 
        marginTop: 25,
        fontFamily: "RobotoSlab-SemiBold", 
        fontSize: 26,
    },
    inputfiels: {
        marginTop: 50, 
        gap: 20,
        alignItems: "center",
    },
    button: {
        alignItems: "center", 
        marginTop: 70,
    },
})