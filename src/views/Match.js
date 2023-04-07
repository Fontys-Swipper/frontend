import React from "react"; 
import {Text, View} from "react-native"
import Cardcarousel from "../components/CardCarousel";

const Match = ({navigation}) => {
    return (
        <View style={{marginLeft: 30, marginTop: 70}}>
            <Cardcarousel/>
        </View>        
    );
}

export default Match;