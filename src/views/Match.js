import React,{useState} from "react"; 
import {StyleSheet, View, Animated, Dimensions} from "react-native"
import TopBar from '../components/TopBar'
import { SafeAreaView } from "react-native-safe-area-context";
import AnimalCards from "../components/CardDeck";
import { COLORS } from "../../assets/colors";
import LinearGradient from "react-native-linear-gradient";
import {useNavigation} from '@react-navigation/native';

const screen_widht = Dimensions.get("window").width

const Match = () => {
    const navigation = useNavigation();
    const [postitionX, setPositionX] = useState(new Animated.Value(0))

    const updatePosition = (pos) => {
        setPositionX(pos)
    }

    const leftBorderOpacity = postitionX.interpolate({
        inputRange:[-screen_widht / 2, 0, screen_widht / 2, screen_widht],
        outputRange:[0, 0, 1, 0],
        extrapolate: "clamp"
    })

    const rightBorderOpacity = postitionX.interpolate({
        inputRange:[-screen_widht,-screen_widht / 2, 0, screen_widht / 2],
        outputRange:[0, 1, 0, 0],
        extrapolate: "clamp"
    })

    return (
        <SafeAreaView>   
            <View style={[styles.container]}>
                <AnimalCards postitionX={updatePosition} navigation={navigation} />
            </View>
            <Animated.View 
                style={[styles.leftBorder, {opacity: leftBorderOpacity}]}>
                <LinearGradient 
                    colors={['rgba(255,255,255,0)', COLORS.secondary2]}
                    style={{
                        width: "100%",
                        height: "100%",                 
                    }}
                    start={{x: 0, y:0.5}}
                    end={{x: 1, y:0.5}}
                />
            </Animated.View>
            <View>
                <TopBar/>
            </View>  
            <Animated.View 
                style={[styles.rightBorder, {opacity: rightBorderOpacity}]}>
                <LinearGradient 
                    colors={['rgba(219,219,219,1)' ,'rgba(255,255,255,0)']}
                    style={{
                        width: "100%",
                        height: "100%",                 
                    }}
                    start={{x: 0.2, y:0.5}}
                    end={{x: 1, y:0.5}}
                />
            </Animated.View>           
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
    },
    leftBorder: {
        width: screen_widht/5, 
        height: "100%", 
        position: "absolute",
        right: 0, 
        top: 54, 
    },
    rightBorder: {
        width: screen_widht/5, 
        height: "100%", 
        alignSelf: "flex-start", 
    },
})