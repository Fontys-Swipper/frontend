import React, { useEffect, useState } from "react"; 
import {Text, View, ToastAndroid, StyleSheet} from "react-native"
import { COLORS } from "../../assets/colors.js"
import TopBar from '../components/TopBar'
import Icon from 'react-native-vector-icons/MaterialIcons'
import InputField from "../components/InputField.js";
import Btn_solid_regular from "../components/buttons/Btn_solid_regular.js";
import Btn_back_arrow from "../components/buttons/Btn_back_arrow.js";
import { UpdateUser } from "../utils/UserApi.js";

const ChangeMail = ({navigation, route}) => {
    const [currentEmail, setCurrentEmail] = useState('')
    const [newMail, setNewMail] = useState('')
    const [mailAgain, setMailAgain] = useState('')
    const [emailIsMatch, setEmailIsMatch] = useState(true)
    const {user} = route.params


    useEffect(() => {   
        setCurrentEmail(user.email)
    },[])

    const handleMailChange = () => {
        if (newMail === "" || mailAgain === "") {
            if(Platform.OS === 'android'){           
                ToastAndroid.show('Field is empty', ToastAndroid.SHORT)
            }
            return
        }
        if (newMail != mailAgain) {
            setEmailIsMatch(false)
            if(Platform.OS === 'android'){           
                ToastAndroid.show('Email does not match', ToastAndroid.SHORT)
            }
            return
        }
        // API call
        UpdateUser(user.id, {
            id: user.id,
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            address: user.address,
            password: user.password,
            email: newMail,
            livingSpace: user.livingSpace,
            description: user.description,
            companyName: user.companyName,
            hasPet: user.hasPet,
            hasGarden: user.hasGarden,
            likedAnimals: user.likedAnimals,
            ownAnimals: user.ownAnimals,
        }).then(result => {
            console.log(result)
            setCurrentEmail(newMail)
        }).catch(error => {
            console.log(error)
        })
        if(Platform.OS === 'android'){
            ToastAndroid.show('Email Changed', ToastAndroid.SHORT)
        }
        setNewMail("")
        setMailAgain("")
        setEmailIsMatch(true)
    }   


    return (
        <View>
            <View>
                <TopBar/>
            </View>
            <View style={{flexDirection: "column"}}>
                <Btn_back_arrow onPress={() => navigation.navigate('Settings')}/>              
                <Text style={[styles.heading]}>Change Email</Text>              
                <Text style={[styles.currentEmail]}>
                    Current Email: {currentEmail}
                </Text>
                <View style={[styles.inputfields]}>
                <InputField 
                text_title="New Email"
                onChangeText={text => setNewMail(text)}
                value={newMail}
                />
                
                <InputField 
                text_title="Repeat"
                onChangeText={text => setMailAgain(text)}
                value={mailAgain}
                icon={!emailIsMatch && (
                    <Icon name="error-outline" size={24} color={COLORS.primary}></Icon>
                    )}
                />
                </View>
                <View style={[styles.button]}>
                    <Btn_solid_regular onPress={handleMailChange} title="Change"/>
                </View>
            </View>
        </View>
    )
}


export default ChangeMail;


const styles = StyleSheet.create({
    heading: {
        marginLeft: 47, 
        marginTop: 25,
        fontFamily: "RobotoSlab-SemiBold", 
        fontSize: 26,
    },
    currentEmail: {
        marginLeft: 70, 
        marginTop: 50,
    },
    inputfields: {
        marginTop: 50, 
        gap: 20,
        alignItems: 'center'
    },
    icon: {
        position: "absolute", 
        left: 330, 
        top: 145,
    },
    button: {
        alignItems: "center", 
        marginTop: 70,
    },
})