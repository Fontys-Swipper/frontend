import { SafeAreaView } from 'react-native-safe-area-context';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {PanGestureHandler, PanGestureHandlerGestureEvent} from 'react-native-gesture-handler';
import { COLORS } from "../../assets/colors";
import Btn_like from "./buttons/Btn_like";
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const cards = [
    {
        name:"Daisy",
        type: "Border Terrier",
        age: "Young",
        price: "100€",
        image: require("../../assets/images/dog-gba5dc7061_1920.jpg"),
    },
    {
      name:"Luna",
      type: "Boxer",
      age: "Old",
      price: "50€",
      image: require("../../assets/images/akita-g893e7ab22_1920.jpg"),
  },
  {
      name:"Cooper",
      type: "American Bulldog",
      age: "Old",
      price: "500€",
      image: require("../../assets/images/labrador-retriever-gb2d619e6b_1920.jpg"),
  },
  {
      name:"Milo",
      type: "Spaniel",
      age: "Young",
      price: "150€",
      image: require("../../assets/images/dog_image.jpg"),
  },
  {
      name:"Lucy",
      type: "Terrier",
      age: "Young",
      price: "200€",
      image: require("../../assets/images/malinois-g4dd9f780d_1920.jpg"),
  },
  {
      name:"Bella",
      type: "Alaskan Husky",
      age: "Old",
      price: "250€",
      image: require("../../assets/images/jack-russell-g49275d8de_1920.jpg"),
  },
  ]


const CardDeck = () => {
    const [card, setCard] = useState(cards[0])
    const translateX = useSharedValue(0)
    // const translateY = new Animated.Value(0)

    // const handlePan = Animated.event(
    //     [{nativeEvent:{translationX:translateX,translationY:translateY}}],{useNativeDriver:true}
    // )

    const panGestureEvent = useAnimatedGestureHandler({
      onStart: (event, context) => {
        context.translateX = translateX.value
      },
      onActive: (event, context) => {
        translateX.value = event.translationX + context.translateX
      },  
    })

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value
                }
            ]
        }
    })

    return(
        <PanGestureHandler onGestureEvent={panGestureEvent}>
            <Animated.View style={[
                styles.container,
                rStyle
            ]}>
                <View style={{flexDirection: "column"}}>
                    <Image source={card.image} style={[styles.image]}/>
                    <View style={[styles.row]}>
                        <View style={[styles.textcontainer]}>
                            <View style={{flexDirection: "row", gap: 20}}>
                                <Text adjustsFontSizeToFit numberOfLines={1} 
                                    style={[styles.nametext]}>{card.name}
                                </Text>
                                <Text adjustsFontSizeToFit numberOfLines={1} 
                                style={[styles.price]}>{card.price}</Text>
                            </View>
                            <Text style={[styles.infotext]}>{card.type}</Text>
                            <Text style={[styles.infotext]}>{card.age}</Text>
                        </View>
                        <View style={[styles.buttoncontainer]}>
                            <Btn_like onPress={() => {                                
                            }}/>
                        </View>
                    </View>
                </View>
              </Animated.View>
        </PanGestureHandler>
    )
}


export default CardDeck;



const styles = StyleSheet.create({
    container: {       
        backgroundColor: COLORS.background,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: COLORS.primary,
        height: 489,
        width: 262,
    },
    image: {
        alignSelf: "center",
        marginTop: 5,
        maxHeight: 400,
        maxWidth: 248
    },
    row: {
        flexDirection: "row",
    },
    textcontainer: {
        flex: 2, 
        marginLeft: 12,
        alignSelf: "center"
    },
    nametext: {
        fontFamily: "RobotoSlab-SemiBold",
        fontSize: 20,
        maxWidth: 140,
    },
    infotext: {
        fontFamily: "Roboto-Medium"
    },
    price: {
        fontFamily: "Roboto-Medium", 
        fontSize: 15,
        alignSelf: "center",
        maxWidth: 50,
    },
    buttoncontainer: {
        flex: 0.7, 
        marginTop: 5,
    }
})

