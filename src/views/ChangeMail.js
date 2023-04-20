import React, { useEffect, useState } from "react"; 
import {Text, View, Pressable, ToastAndroid} from "react-native"
import { COLORS } from "../../assets/colors.js"
import TopBar from '../components/TopBar'
import Icon from 'react-native-vector-icons/MaterialIcons'
import InputField from "../components/InputField.js";
import Btn_solid_regular from "../components/buttons/Btn_solid_regular.js";

const ChangeMail = ({navigation}) => {
    const [newMail, setNewMail] = useState('')
    const [mailAgain, setMailAgain] = useState('')
    const [emailIsMatch, setEmailIsMatch] = useState(true)

    useEffect(() => {
        if (newMail === mailAgain) {
            setEmailIsMatch(true)
        }
        
    })

    const handleMailChange = () => {
        if (newMail === mailAgain) {
            // API call
            if(Platform.OS === 'android'){
                ToastAndroid.show('Email Changed', ToastAndroid.SHORT)
            }
            setNewMail("")
            setMailAgain("")
        }
        else{
            if(Platform.OS === 'android'){
                setEmailIsMatch(false)
                ToastAndroid.show('Email does not match', ToastAndroid.SHORT)
            }
        }
    }   


    return (
        <View>
            <View>
                <TopBar/>
            </View>
            <View style={{flexDirection: "column"}}>
                <Pressable style={{marginLeft: 17, marginTop: 15}} onPress={() => navigation.navigate('Settings')}>
                        <Icon name="arrow-back" size={24} color={COLORS.black}/>
                </Pressable>   
                <View style={{marginLeft: 47, marginTop: 25}}>
                    <Text style={{fontFamily: "RobotoSlab-SemiBold", fontSize: 26}}>Change Email</Text>
                </View>
                <Text style={{marginLeft: 70, marginTop: 50}}>
                    Current Email: email@gmail.com
                </Text>
                <View style={{marginTop: 50, gap: 20}}>
                <InputField 
                text_title="New Email"
                onChangeText={text => setNewMail(text)}
                value={newMail}
                />
                
                    <InputField 
                    text_title="Repeat"
                    onChangeText={text => setMailAgain(text)}
                    value={mailAgain}
                    />
                    
                    <View style={{position: "absolute" , left: 330, top: 115}}>
                    {!emailIsMatch && (
                    <Icon name="error-outline" size={24} color={COLORS.primary}></Icon>
                    )}
                    </View>
                    
                
                </View>
                <View style={{alignItems: "center", marginTop: 70}}>
                    <Btn_solid_regular onPress={handleMailChange} title="Change"/>
                </View>
            </View>
        </View>
    )
}


export default ChangeMail;