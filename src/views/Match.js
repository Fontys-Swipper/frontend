import React,{useState,useEffect} from "react"; 
import {StyleSheet, View,} from "react-native"
import TopBar from '../components/TopBar'
import { SafeAreaView } from "react-native-safe-area-context";
import AnimalCards from "../components/CardDeck";


const Match = ({navigation}) => {

    return (
        <SafeAreaView>   
            <View style={[styles.container]}>
                <AnimalCards/>
            </View>
            <View>
                <TopBar/>
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
        position: "absolute",
        top: 0,
        left: 0,
    }
})