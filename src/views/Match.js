import React from "react"; 
import {Text, View} from "react-native"
import Cardcarousel from "../components/CardCarousel";
import CardDeck from "../components/CardDeck";
import { SafeAreaView } from "react-native-safe-area-context";


const Match = ({navigation}) => {
    return (
        <SafeAreaView>
        <View style={{    flex:1,
            width:"100%",
            alignItems: 'center',
            }}>
            {/* <Cardcarousel/> */}
            <CardDeck/>
        </View>       
        </SafeAreaView> 
    );
}

export default Match;