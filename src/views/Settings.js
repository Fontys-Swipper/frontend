import React from "react"; 
import {Text, View, StyleSheet} from "react-native"
import TopBar from '../components/TopBar'
import Btn_menu_underline from "../components/buttons/Btn_menu_underline.js";
import Btn_back_arrow from "../components/buttons/Btn_back_arrow.js";

const Settings = ({navigation}) => {

    return (
        <View>
            <View>
                <TopBar/>
            </View>
            <View style={{flexDirection: "column"}}>
                <Btn_back_arrow onPress={() => navigation.navigate('Home')}/>               
                <Text style={[styles.heading]}>Settings</Text>               
                <View style={[styles.buttonlist]}>
                    <Btn_menu_underline onPress={() => navigation.navigate('ChangeMail')} title="E-mail" icon="edit"/>
                    <Btn_menu_underline onPress={() => navigation.navigate('ChangePassword')} title="Password" icon="edit"/>
                    <Btn_menu_underline onPress={() => navigation.navigate('UserInfo')} title="User Information"/>
                    <Btn_menu_underline onPress={() => navigation.navigate('TermsOfService')} title="Terms of Service"/>
                </View>
            </View>
        </View>      
    );
}

export default Settings;

const styles = StyleSheet.create({
    heading: {
        marginLeft: 47, 
        marginTop: 25,
        fontFamily: "RobotoSlab-SemiBold", 
        fontSize: 26,
    },
    buttonlist: {
        alignItems: "center", 
        marginTop: 50,
    },
})