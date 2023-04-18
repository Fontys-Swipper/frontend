import React from "react"; 
import {Text, View} from "react-native"
import TopBar from '../components/TopBar'
import Cardcarousel from "../components/CardCarousel";

const Match = ({navigation}) => {
    return (
        <View>
            <View>
                <TopBar/>
            </View>
            <View style={{marginLeft: 30, marginTop: 70}}>
                <Cardcarousel/>
            </View>
        </View>        
    );
}

export default Match;