import React, {useState, useEffect} from "react"; 
import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from "react-native"
import TopBar from '../components/TopBar'
import { COLORS } from "../../assets/colors";
import TextHeading from './TextHeading';
import Favoritecard from "../components/Favoritecard";

import {favorite_animal } from '../utils/listing';

//Images for dummy data
image1 = require('../../assets/images/akita.jpg');
image2 = require('../../assets/images/dog_image.jpg');

//Dummy data for favorites
const listingData = [
  {
    listing_id: 1,
    animal_image_link: image1,
    animal_name: 'Cinnamon',
  },
  {
    listing_id: 2,
    animal_image_link: image2,
    animal_name: 'Max',
  }
];

const Favorites = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    favorite_animal(7).then(result =>{
      setData(result.data)
      // console.log(data)
    }).catch(error => {
      console.log(error)
    })
  },[])

    return (
        <View>
            <ScrollView contentContainerStyle={[styles.contentContainer]}>
              <Text style={[styles.title]}>My Favorites</Text>
            {/* <View>
              <TextHeading text_title="My Favorites"/>
            </View> */}
              {data.map((item, index) => {
                if(item != null && item.animalImageLink != null){
                  return (
                    <Favoritecard
                      route={'Favorites'}
                      animalObject={item}
                      key={index}
                      image={item.animalImageLink}
                      name={item.animalName}
                    />
                  )
                }                  
              })}
            </ScrollView>
            <View style={{position: 'absolute', top: 0, left: 0, width: '100%'}}>
              <TopBar />
            </View>
        </View>        
    );
}

export default Favorites;

const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 74,
  },
  title: {
    fontFamily: 'Roboto-Regular',
    fontSize: 32,
    padding: 20,
    fontWeight: 'bold',
    textDecorationColor: COLORS.black,
  }
});