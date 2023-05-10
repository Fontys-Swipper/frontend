import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from 'react-native';

import {COLORS} from '../../assets/colors.js';
import Btn_chat from '../components/buttons/Btn_chat';
import Btn_like from '../components/buttons/Btn_like';
import Btn_back_arrow from '../components/buttons/Btn_back_arrow.js';
import {GetUserId} from '../utils/UserApi.js';

// animalData = the passed JSON which includes all the necesary informations for display
// route = object including a namestring of the view that navigated to this one,
//         used for the back button navigation.
const DetailView = ({navigation, animalData, route}) => {
  const [userID, setUserID] = useState();

  useEffect(() => {
    GetUserId().then(response => {
      setUserID(response);
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.backButtonContainer}>
          {/* <Btn_back_arrow
            onPress={() => navigation.navigate(route.params.route)}
          /> */}
          <Pressable
            style={styles.backArrow}
            onPress={() => navigation.navigate(route.params.route)}>
            <Icon name="arrow-back" size={24} color={COLORS.black} />
          </Pressable>
        </View>
        <View style={styles.floatingIcons}>
          <View>
            <Btn_like userID={userID} listingID={route.params.animalData.id} />
            <Btn_chat onPress={() => navigation.navigate('Chat')} />
          </View>
        </View>
        <ImageBackground
          style={styles.image}
          source={{uri: route.params.animalData.animalImageLink}}
        />
        <View style={styles.infoCard}>
          <View style={styles.textContainer}>
            <Text style={styles.name}>
              {route.params.animalData.animalName}
            </Text>
            <Text style={styles.description}>
              Type: {route.params.animalData.animalSpecies}
            </Text>
            <Text style={styles.description}>
              Breed: {route.params.animalData.animalBreed}
            </Text>
            <Text style={styles.description}>
              Age: {route.params.animalData.age}
            </Text>
            <Text style={styles.description}>
              Size: {route.params.animalData.animalSize}
            </Text>
            {route.params.animalData.isMale ? (
              <Text style={styles.description}>Gender: Male</Text>
            ) : (
              <Text style={styles.description}>Gender: Female</Text>
            )}
            <Text style={styles.description}>
              Price: {route.params.animalData.price}€
            </Text>
            <Text style={styles.description}>
              {route.params.animalData.description}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  image: {
    height: 500,
    width: '100%',
    position: 'absolute',
  },
  floatingIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 2,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 2,
    marginLeft: 17, marginTop: 15
  },
  textContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  infoCard: {
    width: '100%',
    minHeight: 300,
    marginTop: 450,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    backgroundColor: COLORS.background,
  },
  name: {
    alignSelf: 'center',
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 20,
    fontFamily: 'RobotoSlab-SemiBold',
    color: '#000000',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    fontWeight: 300,
    marginBottom: 5,
  },
  backArrow: {
    backgroundColor: COLORS.secondary + 90,
    width: 40,
    height: 40,
    borderColor: COLORS.primary,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});

export default DetailView;
