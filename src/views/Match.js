import React,{useState,useEffect} from "react"; 
import {StyleSheet, View,} from "react-native"
import TopBar from '../components/TopBar'
import { SafeAreaView } from "react-native-safe-area-context";
import AnimalCards from "../components/CardDeck";


const Match = ({navigation}) => {

    return (
        <SafeAreaView>
            <View>
                <TopBar/>
            </View>
            <View style={[styles.container]}>
                <AnimalCards/>
            </View>
        </SafeAreaView> 
    );
}

export default Match;


const styles = StyleSheet.create({
    container: {
        width:"100%",
        height: "100%",
        alignItems: 'center',
    }
})