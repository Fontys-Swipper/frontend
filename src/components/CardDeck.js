import React from "react"
import { StyleSheet, Text, View, Image, PanResponder, Animated, Dimensions, Pressable} from 'react-native';
import { COLORS } from "../../assets/colors";
import Btn_like from "./buttons/Btn_like";
import Icon from 'react-native-vector-icons/MaterialIcons'
import {get_all_listings} from "../utils/listing";

const screen_widht = Dimensions.get("window").width
const screen_height = Dimensions.get("window").height

export default class AnimalCards extends React.Component {

    constructor(props){
        super(props)
        
        this.position = new Animated.ValueXY()
        
        this.state = {
            currentIndex: 0,
            currentItem: 0,
            animals: [],
            pos: this.position.x,
            isLoading: true,
        } 
        
        props.postitionX(this.state.pos)

        this.showAnimalProfile = () => {
            console.log("Showing "+this.state.animals[this.state.currentIndex].name+"'s profile")
        }

        this.addToFavorites = (name) => {
            console.log(name+ " added to favorites")
        }  

        this.rotate = this.position.x.interpolate({
            inputRange:[-screen_widht / 2, 0, screen_widht / 2],
            outputRange:["-5deg", "0deg","5deg"],
            extrapolate: "clamp"
        })

        this.rotateAndTranslate = {
            transform: [{
                rotate: this.rotate   
            },
            {
                translateX: this.position.x
            }
        ],
            ...this.position.getTranslateTransform()
        }

        this.likingOpacity = this.position.x.interpolate({
            inputRange:[-screen_widht / 2, 0, screen_widht / 2, screen_widht],
            outputRange:[0, 0, 1, 0],
            extrapolate: "clamp"
        })

        // Card1 animations
        this.nextCardPositionX = this.position.x.interpolate({
            inputRange:[-screen_widht / 2, 0, screen_widht / 2],
            outputRange:[0, -13, 0],
            extrapolate: "clamp"
        })
        this.nextCardPositionY = this.position.x.interpolate({
            inputRange:[-screen_widht / 2, 0, screen_widht / 2],
            outputRange:[0, -10, 0],
            extrapolate: "clamp"
        })
        //=================

        // Card2 animations
        this.card2Opacity = this.position.x.interpolate({
            inputRange:[-screen_widht / 2, 0, screen_widht / 2],
            outputRange:[1, 0.6, 1],
            extrapolate: "clamp"
        })
        this.card2PositionX = this.position.x.interpolate({
            inputRange:[-screen_widht / 2, 0, screen_widht / 2],
            outputRange:[-13, -26, -13],
            extrapolate: "clamp"
        })
        this.card2PositionY = this.position.x.interpolate({
            inputRange:[-screen_widht / 2, 0, screen_widht / 2],
            outputRange:[-10, -20, -10],
            extrapolate: "clamp"
        })
        //=================

        // Card3 animations
        this.card3Opacity = this.position.x.interpolate({
            inputRange:[-screen_widht / 2, 0, screen_widht / 2],
            outputRange:[0.6, 0, 0.6],
            extrapolate: "clamp"
        })
        this.card3PositionX = this.position.x.interpolate({
            inputRange:[-screen_widht / 2, 0, screen_widht / 2],
            outputRange:[-26, -10, -26],
            extrapolate: "clamp"
        })
        this.card3PositionY = this.position.x.interpolate({
            inputRange:[-screen_widht / 2, 0, screen_widht / 2],
            outputRange:[-20, -10, -20],
            extrapolate: "clamp"
        })
        //=================

        this.PanResponder = PanResponder.create({
            onStartShouldSetPanResponder:(event, gestureState) => true,
            onPanResponderMove:(event, gestureState) => {
                this.position.setValue({x: gestureState.dx, y: gestureState.dy})
            },
            onPanResponderRelease:(event, gestureState) => {
                if (gestureState.dx > 120) {   

                    for (let index = 0; index < this.state.animals.length; index++) {
                        const card = this.state.animals[index];
                            if (card.id === this.state.currentItem) {
                                this.addToFavorites(card.animalName)
                            }
                    }
                    
                    Animated.spring(this.position, {
                        toValue: {x: screen_widht + 100, y: gestureState.dy},
                        useNativeDriver: true
                    }).start(() => {
                        this.setState({ currentIndex: this.state.currentIndex + 1}, () => {
                            this.position.setValue({x: 0, y: 0})
                        })
                    })
                }
                else if (gestureState.dx < -120) {  
                    let items = this.state.animals                  
                    
                    for (let index = 0; index < this.state.animals.length; index++) {
                        const card = this.state.animals[index];
                        if (card.id === this.state.currentItem) {
                            let updatedAnimals = [...items, card]
                            this.setState({animals: updatedAnimals})
                        }
                    }
                                    
                    Animated.spring(this.position, {
                        toValue: {x: -screen_widht - 100, y: gestureState.dy},
                        useNativeDriver: true
                    }).start(() => {
                        this.setState({ currentIndex: this.state.currentIndex + 1}, () => {
                            this.position.setValue({x: 0, y: 0})
                        })
                    })
                }
                else {
                    Animated.spring(this.position, {
                        toValue: { x: 0, y: 0},
                        friction: 4,
                        useNativeDriver: true
                    }).start()
                }
            }
        })
    }

    getAnimals() {
        get_all_listings().then(result => {
            this.setState({animals: result.data})
            this.setState({isLoading: false})
        }).catch(error => {
            console.log(error)
        })
    }

    componentDidMount() {
        this.getAnimals()
    }



    renderAnimal = () => {
        if (this.state.isLoading === false) {
        return this.state.animals.map((item, i) => {
            if (i < this.state.currentIndex) {
                return null
            }
            else if (i === this.state.currentIndex) { 
            this.state.currentItem = item.id
            return (
                <Animated.View key={i}
                {...this.PanResponder.panHandlers}
                style={[
                    this.rotateAndTranslate,
                    styles.container,
                ]}>
                    <Animated.View 
                    style={[styles.favoriteIcon, {opacity: this.likingOpacity}]}>
                        <Icon name="favorite" size={100} color={COLORS.background2}></Icon>
                    </Animated.View>
                    <View style={{flexDirection: "column"}}>
                        {item.animalImageLink !== "" ? <Image style={[styles.image]} source={{uri: item.animalImageLink}}/> : null}
                        <View style={[styles.row]}>
                            <View style={[styles.textcontainer]}>
                                <View style={{flexDirection: "row", gap: 20}}>
                                    <Pressable onPress={this.showAnimalProfile}>
                                    <Text adjustsFontSizeToFit numberOfLines={1} 
                                        style={[styles.nametext]}>{item.animalName}
                                    </Text>
                                    </Pressable>
                                    <Text adjustsFontSizeToFit numberOfLines={1} 
                                    style={[styles.price]}>{item.price+"€"}</Text>
                                </View>
                                <Text style={[styles.infotext]}>{item.animalSpecies}</Text>
                                <Text style={[styles.infotext]}>{item.age+" Years old"}</Text>
                            </View>
                            <View style={[styles.buttoncontainer]}>
                                <Btn_like onPress={() => {   
                                    this.addToFavorites(item.animalName) 
                                    Animated.spring(this.position, {
                                        toValue: {x: screen_widht + 100, y: 0},
                                        useNativeDriver: true
                                    }).start(() => {
                                        this.setState({ currentIndex: this.state.currentIndex + 1}, () => {
                                            this.position.setValue({x: 0, y: 0})
                                        })
                                    })               
                                }}/>
                            </View>
                        </View>
                    </View>
                </Animated.View>
              )
            }
            else if (i === this.state.currentIndex + 1){
                return(
                    <Animated.View key={i}
                    style={[
                        {transform: [{translateX: this.nextCardPositionX},
                        {translateY: this.nextCardPositionY}]},
                        styles.container,
                    ]}>
                        <View style={{flexDirection: "column"}}>
                        {item.animalImageLink !== "" ? <Image style={[styles.image]} source={{uri: item.animalImageLink}}/> : null} 
                           <View style={[styles.row]}>
                                <View style={[styles.textcontainer]}>
                                    <View style={{flexDirection: "row", gap: 20}}>
                                        <Text adjustsFontSizeToFit numberOfLines={1} 
                                            style={[styles.nametext]}>{item.animalName}
                                        </Text>
                                        <Text adjustsFontSizeToFit numberOfLines={1} 
                                        style={[styles.price]}>{item.price+"€"}</Text>
                                    </View>
                                    <Text style={[styles.infotext]}>{item.animalSpecies}</Text>
                                    <Text style={[styles.infotext]}>{item.age+" Years old"}</Text>
                                </View>
                                <View style={[styles.buttoncontainer]}>
                                    <Btn_like onPress={() => {                                
                                    }}/>
                                </View>
                            </View>
                        </View>
                    </Animated.View>
                )
            }
            else if (i === this.state.currentIndex + 2){
                return(
                    <Animated.View key={i}
                    style={[
                        {opacity: this.card2Opacity},
                        {transform: [{translateX: this.card2PositionX},
                        {translateY: this.card2PositionY}]},
                        styles.container,
                    ]}>
                        <View style={{flexDirection: "column"}}>
                        {item.animalImageLink !== "" ? <Image style={[styles.image]} source={{uri: item.animalImageLink}}/> : null}                            
                        <View style={[styles.row]}>
                                <View style={[styles.textcontainer]}>
                                    <View style={{flexDirection: "row", gap: 20}}>
                                        <Text adjustsFontSizeToFit numberOfLines={1} 
                                            style={[styles.nametext]}>{item.animalName}
                                        </Text>
                                        <Text adjustsFontSizeToFit numberOfLines={1} 
                                        style={[styles.price]}>{item.price+"€"}</Text>
                                    </View>
                                    <Text style={[styles.infotext]}>{item.animalSpecies}</Text>
                                    <Text style={[styles.infotext]}>{item.age+" Years old"}</Text>
                                </View>
                                <View style={[styles.buttoncontainer]}>
                                    <Btn_like onPress={() => {                                
                                    }}/>
                                </View>
                            </View>
                        </View>
                    </Animated.View>
                )
            }
            else if (i === this.state.currentIndex + 3){
                return(
                    <Animated.View key={i}
                    style={[
                        {opacity: this.card3Opacity},
                        {transform: [{translateX: this.card3PositionX},
                        {translateY: this.card3PositionY}]},
                        styles.container,
                    ]}>
                        <View style={{flexDirection: "column"}}>
                        {item.animalImageLink !== "" ? <Image style={[styles.image]} source={{uri: item.animalImageLink}}/> : null}
                            <View style={[styles.row]}>
                                <View style={[styles.textcontainer]}>
                                    <View style={{flexDirection: "row", gap: 20}}>
                                        <Text adjustsFontSizeToFit numberOfLines={1} 
                                            style={[styles.nametext]}>{item.animalName}
                                        </Text>
                                        <Text adjustsFontSizeToFit numberOfLines={1} 
                                        style={[styles.price]}>{item.price}</Text>
                                    </View>
                                    <Text style={[styles.infotext]}>{item.animalSpecies}</Text>
                                    <Text style={[styles.infotext]}>{item.age}</Text>
                                </View>
                                <View style={[styles.buttoncontainer]}>
                                    <Btn_like onPress={() => {                                
                                    }}/>
                                </View>
                            </View>
                        </View>
                    </Animated.View>
                )
            }
        }).reverse()
    }
    }

    render(){
        const renderanimal = this.renderAnimal()
    return (      
        <>
        {this.state.isLoading ? (<Text>Loading...</Text>):(renderanimal)}      
        </>   
    )
}
}


const styles = StyleSheet.create({
    container: {       
        backgroundColor: COLORS.background,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: COLORS.primary,
        height: "63%",
        width: "66.5%",
        position: "absolute",
        marginTop: screen_height/5.5,
    },
    image: {
        alignSelf: "center",
        marginTop: 5,
        width: "98%",
        height: "85%",
        // maxHeight: 400,
        // maxWidth: 248
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
    },
    favoriteIcon: {
        position: "absolute", 
        zIndex: 10, 
        top: 170, 
        right: 70, 
    },
})