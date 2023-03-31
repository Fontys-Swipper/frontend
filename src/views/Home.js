import React from "react"; 
import {Text, View, ToastAndroid, Button} from "react-native"

import Btn_solid_big from "../components/buttons/Btn_solid_big";
import Btn_solid_regular from "../components/buttons/Btn_solid_regular";
import Btn_solid_small from "../components/buttons/Btn_solid_small";
import { COLORS } from "../../assets/colors.js"
import Btn_outline_big from "../components/buttons/Btn_outline_big";
import Btn_outline_regular from "../components/buttons/Btn_outline_regular";
import Btn_outline_small from "../components/buttons/Btn_outline_small";
import Btn_menu_underline from "../components/buttons/Btn_menu_underline";
import Btn_like from "../components/buttons/Btn_like";
import Btn_chat from "../components/buttons/Btn_chat";

const Home = ({navigation}) => {

    onPressHome = () => {
        console.log('Button pressed from home')
        if(Platform.OS === 'android'){
            ToastAndroid.show('Button pressed from home', ToastAndroid.SHORT)
        }
    }

    return (
        <View style={{alignItems: 'center', justifyContent: "center",height: '100%', backgroundColor: COLORS.background}}>
            {/* <Text>
                This is home screen
            </Text> */}
            <Btn_solid_big />
            <Btn_outline_big />
            <Btn_solid_regular />
            <Btn_outline_regular/>
            <Btn_solid_small />
            <Btn_outline_small />
            <Btn_menu_underline onPress={onPressHome}/>
            <Btn_like />
            <Btn_chat />
        </View>        
    );
}

export default Home;