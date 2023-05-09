import React, {useEffect, useState} from "react";
import { View, Text, ToastAndroid, StyleSheet } from "react-native";
import TopBar from "../components/TopBar";
import Icon from 'react-native-vector-icons/MaterialIcons'
import InputField from "../components/InputField";
import Btn_outline_big from "../components/buttons/Btn_outline_big";
import Btn_back_arrow from "../components/buttons/Btn_back_arrow";
import { UpdateUser } from "../utils/UserApi";

const UserInformation = ({navigation, route}) => {
    const [username, setUsername] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [address, setAddress] = useState('')
    const [changes, SetChanges] = useState(false)
    const {user} = route.params

    useEffect(() => {
        setUsername(user.username)
        setFirstname(user.firstname)
        setLastname(user.lastname)
        setAddress(user.address)
    },[])

    const handleSave = () => {
        if (username === "" || firstname === "" || lastname === "" || address === "") {
            if(Platform.OS === 'android'){
                ToastAndroid.show('Field is empty', ToastAndroid.SHORT)
            }
            return
        }
        UpdateUser(user.id, {
            id: user.id,
            username: username,
            firstname: firstname,
            lastname: lastname,
            address: address,
            password: user.password,
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