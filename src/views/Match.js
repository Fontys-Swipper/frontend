import React from "react"; 
import {StyleSheet, Text, View} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import AnimalCards from "../components/CardDeck";

const Match = ({navigation}) => {
    return (
        <SafeAreaView>
        <View style={[styles.container]}>
            <AnimalCards/>
        </View>       
        </SafeAreaView> 
    );
}

export default Match;


const styles = StyleSheet.create({
    container: {
        flex:1,
        width:"100%",
        height: "100%",
        alignItems: 'center',
    }
})