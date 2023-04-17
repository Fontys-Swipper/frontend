import React, { Component } from 'react';
import Carousel, { getInputRangeFromIndexes } from 'react-native-snap-carousel';
import { Text, View, StyleSheet, Image, Dimensions, Alert} from 'react-native';
import { COLORS } from "../../assets/colors";
import Btn_like from "./buttons/Btn_like";


export default class Cardcarousel extends Component {

    constructor(props){
        super();
        this.state = {
          errors: [],
          // Mock data
          carouselItems: [
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
        ],
        }
    }


    _scrollInterpolator (index, carouselProps) {
        const range = [1, 0, -1, -2, -3];
        const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
        const outputRange = range;

        return { inputRange, outputRange };
    }


    _stackAnimatedStyles (index, animatedValue, carouselProps, cardOffset) {
        const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
        const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';
    
        const card1Scale = 1;
        const card2Scale = 1;
    
        cardOffset = !cardOffset && cardOffset !== 0 ? 18 : cardOffset;
    
        const getTranslateFromScale = (cardIndex, scale) => {
            const centerFactor = 1 / scale * cardIndex;
            const centeredPosition = -Math.round(sizeRef * centerFactor);
            const edgeAlignment = Math.round((sizeRef - (sizeRef * scale)) / 2);
            const offset = Math.round(cardOffset * Math.abs(cardIndex) / scale);
    
            return centeredPosition - edgeAlignment - offset;
        };
    
        const opacityOutputRange = carouselProps.inactiveSlideOpacity === 1 ? [1, 1, 1, 0] : [1, 0.75, 0.5, 0];
    
        return {
            opacity: animatedValue.interpolate({
                inputRange: [-3, -2, -1, 0],
                outputRange: opacityOutputRange.reverse(),
                extrapolate: 'clamp'
            }),
            transform: [{
                scale: animatedValue.interpolate({
                    inputRange: [-2, -1, 0, 1],
                    outputRange: [card2Scale, card1Scale, 1, card1Scale],
                    extrapolate: 'clamp'
                })
            }, {
                [translateProp]: animatedValue.interpolate({
                    inputRange: [-3, -2, -1, 0, 1],
                    outputRange: [
                        getTranslateFromScale(-3, card2Scale),
                        getTranslateFromScale(-2, card2Scale),
                        getTranslateFromScale(-1, card1Scale),
                        0,
                        sizeRef * 0.5
                    ],
                    extrapolate: 'clamp'
                })
            }]
        }
    }


    _renderItem = ({item, index}) => {
        return (
            <View style={[
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
                                var array = [...this.state.carouselItems]
                                array.splice(index, 1)
                                this.setState({carouselItems: array})
                                this.carousel.snapToItem(index - 1, false)                                
                            }}/>
                        </View>
                    </View>
                </View>
              </View>
        )
    }

    render () {
        return (
            <Carousel
                ref={ref => this.carousel = ref}
                renderItem={this._renderItem.bind(this)}                
                layout={"stack"}
                data={this.state.carouselItems}
                itemWidth={308}
                sliderWidth={Dimensions.get('screen').width}
                scrollInterpolator={this._scrollInterpolator}
                slideInterpolatedStyle={this._animatedStyles}
                decelerationRate={0.20}
                onLayout={() =>
                {
                    this.carousel.snapToItem(this.state.carouselItems.length, false)
                }}
            />
        );
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