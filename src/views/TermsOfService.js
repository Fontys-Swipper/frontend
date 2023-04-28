import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TopBar from "../components/TopBar";
import Btn_back_arrow from "../components/buttons/Btn_back_arrow";

const TermsOfService = ({navigation}) => {
    return (
        <View>
            <View>
                <TopBar/>
            </View>
            <Btn_back_arrow onPress={() => navigation.navigate('Settings')}/>
            <Text style={[styles.heading]}>Terms Of Service</Text>           
            <Text style={[styles.text]}>
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

const styles = StyleSheet.create({
    heading: {
        marginLeft: 47, 
        marginTop: 25,
        fontFamily: "RobotoSlab-SemiBold", 
        fontSize: 26,
    },
    text: {
        marginHorizontal: 45, 
        marginTop: 50,
    },
})