import React from 'react';
import {View, Image, Text, StyleSheet, Pressable} from 'react-native';
import {COLORS} from '../../assets/colors';
import dogimage from '../../assets/images/dog_image.jpg';
import {useNavigation} from '@react-navigation/native';

const Feedcard = ({
  route = 'Route',
  animalObject = animalData,
  image = image,
  name = 'Name',
  price = '€€',
  type = 'Type',
  age = 'Age',
  timeOfAdding = 'Time Of Adding',
}) => {
  const navigation = useNavigation();

  const showAnimalProfile = (screenName, data) => {
    navigation.navigate(screenName, data);
  };

  return (
    <View style={[styles.container]}>
      <Image source={{uri: image}} style={[styles.image]} />
      <View style={{marginTop: 12}}>
        <View style={{flexDirection: 'row'}}>
          <Pressable
            onPress={() =>
              showAnimalProfile('DetailView', {
                animalData: animalObject,
                route: route,
              })
            }>
            <Text
              adjustsFontSizeToFit
              numberOfLines={1}
              style={[styles.nametext]}>
              {name}
            </Text>
          </Pressable>
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={[styles.pricetext]}>
            {price}€
          </Text>
        </View>
        <Text style={[styles.infotext]}>{type}</Text>
        <Text style={[styles.infotext]}>{age}</Text>
        <Text style={{marginTop: 5, alignSelf: 'flex-start'}}>
          {timeOfAdding}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        height: 113,
        width: '90%',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: COLORS.primary,
        flexDirection: "row",
        gap: 20,
        marginVertical: 2,
    },
    image: {
        marginLeft: 20,
        alignSelf: "center",
        // maxHeight: 80,
        // maxWidth: 80,  
        borderRadius: 50,
        height: 80,
        width: 80,  
    },
    nametext: {
        fontFamily: "RobotoSlab-SemiBold",
        fontSize: 20,
        width: 130,
    },
    infotext: {
        fontFamily: "Roboto-Regular"
    },
    pricetext: {
        position: "absolute",
        left: 130,
        fontFamily: "Roboto-Regular", 
        fontSize: 15,
        alignSelf: "center",
        maxWidth: 55,
    },
})

export default Feedcard;
