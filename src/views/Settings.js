import React from "react"; 
import {Text, View, ToastAndroid, Pressable} from "react-native"
import { COLORS } from "../../assets/colors.js"
import TopBar from '../components/TopBar'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Btn_menu_underline from "../components/buttons/Btn_menu_underline.js";

const Settings = ({navigation}) => {

    return (
        <View>
            <View>
                <TopBar/>
            </View>
            <View style={{flexDirection: "column"}}>
                <Pressable style={{marginLeft: 17, marginTop: 15}} onPress={() => navigation.navigate('Home')}>
                    <Icon name="arrow-back" size={24} color={COLORS.black}/>
                </Pressable>
                <View style={{marginLeft: 47, marginTop: 25}}>
                    <Text style={{fontFamily: "RobotoSlab-SemiBold", fontSize: 26}}>Settings</Text>
                </View>
                <View style={{alignItems: "center", marginTop: 50}}>
                    <Btn_menu_underline title="Setting" icon="edit"/>
                    <Btn_menu_underline title="E-mail" icon="edit"/>
                    <Btn_menu_underline title="Password" icon="edit"/>
                    <Btn_menu_underline onPress={() => navigation.navigate('UserInfo')} title="User Information"/>
                    <Btn_menu_underline onPress={() => navigation.navigate('TermsOfService')} title="Terms of Service"/>
                </View>
            </View>
        </View>      
    );
}

export default Settings;