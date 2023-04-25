import React from "react"
import { StyleSheet, Text, View, Image, PanResponder, Animated, Dimensions, Pressable} from 'react-native';
import { COLORS } from "../../assets/colors";
import Btn_like from "./buttons/Btn_like";
import Icon from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from "react-native-linear-gradient";

const screen_widht = Dimensions.get("window").width
const screen_height = Dimensions.get("window").height

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
      image: require("../../assets/images/akita.jpg"),
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


export default class AnimalCards extends React.Component {

    constructor(){
        super()
        
        this.position = new Animated.ValueXY()
        
        this.state = {
            currentIndex: 0,
            animals: []
        } 

        this.showAnimalProfile = () => {
            console.log("Showing "+cards[this.state.currentIndex].name+"'s profile")
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

        this.leftSwipeOpacity = this.position.x.interpolate({
            inputRange:[-screen_widht,-screen_widht / 2, 0, screen_widht / 2],
            outputRange:[0, 1, 0, 0],
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
                    this.addToFavorites(cards[this.state.currentIndex].name)
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
                    let currentitem = cards[this.state.currentIndex]
                    let updatedAnimals = [...items, currentitem]
                    this.setState({animals: updatedAnimals})
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

    componentDidMount() {
        this.setState({animals: cards})
    }



    renderAnimal = () => {
        return this.state.animals.map((item, i) => {
            if (i < this.state.currentIndex) {
                return null
            }
            else if (i == this.state.currentIndex) {         
            return (
                <Animated.View key={i}
                {...this.PanResponder.panHandlers}
                style={[
                    this.rotateAndTranslate,
                    styles.container,
                ]}>
                    <Animated.View 
                    style={{position: "absolute", zIndex: 1000, top: 170, right: 70, opacity: this.likingOpacity}}>
                        <Icon name="favorite" size={100} color={"#FF3333"}></Icon>
                    </Animated.View>
                    <View style={{flexDirection: "column"}}>
                        <Image source={item.image} style={[styles.image]}/>
                        <View style={[styles.row]}>
                            <View style={[styles.textcontainer]}>
                                <View style={{flexDirection: "row", gap: 20}}>
                                    <Pressable onPress={this.showAnimalProfile}>
                                    <Text adjustsFontSizeToFit numberOfLines={1} 
                                        style={[styles.nametext]}>{item.name}
                                    </Text>
                                    </Pressable>
                                    <Text adjustsFontSizeToFit numberOfLines={1} 
                                    style={[styles.price]}>{item.price}</Text>
                                </View>
                                <Text style={[styles.infotext]}>{item.type}</Text>
                                <Text style={[styles.infotext]}>{item.age}</Text>
                            </View>
                            <View style={[styles.buttoncontainer]}>
                                <Btn_like onPress={() => {   
                                    this.addToFavorites(item.name) 
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
            else if (i == this.state.currentIndex + 1){
                return(
                    <Animated.View key={i}
                    style={[
                        {transform: [{translateX: this.nextCardPositionX},
                        {translateY: this.nextCardPositionY}]},
                        styles.container,
                    ]}>
                        <View style={{flexDirection: "column"}}>
                                <Image source={item.image} style={[styles.image]}/>
                            <View style={[styles.row]}>
                                <View style={[styles.textcontainer]}>
                                    <View style={{flexDirection: "row", gap: 20}}>
                                        <Text adjustsFontSizeToFit numberOfLines={1} 
                                            style={[styles.nametext]}>{item.name}
                                        </Text>
                                        <Text adjustsFontSizeToFit numberOfLines={1} 
                                        style={[styles.price]}>{item.price}</Text>
                                    </View>
                                    <Text style={[styles.infotext]}>{item.type}</Text>
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
            else if (i == this.state.currentIndex + 2){
                return(
                    <Animated.View key={i}
                    style={[
                        {opacity: this.card2Opacity},
                        {transform: [{translateX: this.card2PositionX},
                        {translateY: this.card2PositionY}]},
                        styles.container,
                    ]}>
                        <View style={{flexDirection: "column"}}>
                            <Image source={item.image} style={[styles.image]}/>
                            <View style={[styles.row]}>
                                <View style={[styles.textcontainer]}>
                                    <View style={{flexDirection: "row", gap: 20}}>
                                        <Text adjustsFontSizeToFit numberOfLines={1} 
                                            style={[styles.nametext]}>{item.name}
                                        </Text>
                                        <Text adjustsFontSizeToFit numberOfLines={1} 
                                        style={[styles.price]}>{item.price}</Text>
                                    </View>
                                    <Text style={[styles.infotext]}>{item.type}</Text>
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
            else if (i == this.state.currentIndex + 3){
                return(
                    <Animated.View key={i}
                    style={[
                        {opacity: this.card3Opacity},
                        {transform: [{translateX: this.card3PositionX},
                        {translateY: this.card3PositionY}]},
                        styles.container,
                    ]}>
                        <View style={{flexDirection: "column"}}>
                            <Image source={item.image} style={[styles.image]}/>
                            <View style={[styles.row]}>
                                <View style={[styles.textcontainer]}>
                                    <View style={{flexDirection: "row", gap: 20}}>
                                        <Text adjustsFontSizeToFit numberOfLines={1} 
                                            style={[styles.nametext]}>{item.name}
                                        </Text>
                                        <Text adjustsFontSizeToFit numberOfLines={1} 
                                        style={[styles.price]}>{item.price}</Text>
                                    </View>
                                    <Text style={[styles.infotext]}>{item.type}</Text>
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

    render(){
    return (      
        <>
        {this.renderAnimal()}       
        <Animated.View 
        style={{width: screen_widht/4, height: "100%", left: -150, opacity: this.leftSwipeOpacity}}>
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
        <Animated.View 
        style={{width: screen_widht/4, height: "100%", position: "absolute" ,right: 0, opacity: this.likingOpacity}}>
            <LinearGradient 
                colors={['rgba(255,255,255,0)', 'rgba(103,255,98,0.9)']}
                style={{
                    width: "100%",
                    height: "100%",                 
                }}
                start={{x: 0, y:0.5}}
                end={{x: 1, y:0.5}}
            />
        </Animated.View>
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
        height: 489,
        width: 262,
        position: "absolute",
        marginTop: screen_height/5.5,
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