import React from "react";
import { View, Text, Pressable } from "react-native";
import TopBar from "../components/TopBar";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { COLORS } from "../../assets/colors.js"

const TermsOfService = ({navigation}) => {


    return (
        <View>
            <View>
                <TopBar/>
            </View>
            <Pressable style={{marginLeft: 17, marginTop: 15}} onPress={() => navigation.navigate('Settings')}>
                    <Icon name="arrow-back" size={24} color={COLORS.black}/>
            </Pressable>
            <View style={{marginLeft: 47, marginTop: 25}}>
                    <Text style={{fontFamily: "RobotoSlab-SemiBold", fontSize: 26}}>Terms Of Service</Text>
            </View>
            <Text style={{marginHorizontal: 45, marginTop: 50}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Maecenas convallis fermentum nibh a porttitor. 
            Ut imperdiet vel ante quis sollicitudin. 
            Cras vestibulum neque sit amet tempor mattis. 
            Maecenas in lobortis elit, vel vestibulum ex. 
            Nunc sit amet est auctor felis pretium pretium. 
            Morbi vel convallis nisi, sed aliquam lectus. 
            Vivamus eleifend molestie dapibus. Proin rutrum auctor diam, 
            nec venenatis turpis mollis in
            </Text>
        </View>
    )
}

export default TermsOfService;