import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../../assets/colors.js';
import TopBar from '../components/TopBar.js';
import {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import Btn_back_arrow from '../components/buttons/Btn_back_arrow.js';
import Feedcard from '../components/Feedcard';

import image1 from '../../assets/images/cat-g2ff4963cc_1920.jpg';
import image2 from '../../assets/images/malinois-g4dd9f780d_1920.jpg';
import image3 from '../../assets/images/dog_image.jpg';

const dummy = [
  {
    listing_id: 1,
    animal_species: 'Cat',
    animal_image_link: image1,
    animal_name: 'Mr Twinkles',
    price: 250,
    timeOfAdding: '01/01/2023',
  },
  {
    listing_id: 2,
    animal_species: 'Dog',
    animal_image_link: image2,
    animal_name: 'Medor',
    price: 300,
    timeOfAdding: '12/04/2023',
  },
  {
    listing_id: 3,
    animal_species: 'Dog',
    animal_image_link: image3,
    animal_name: 'Markus',
    price: 200,
    timeOfAdding: '24/04/2023',
  },
];

dummyUser = {
  name: 'Max Mustermann',
  city: 'Oulu',
  livingSpace: 'Super big',
  description:
    'I am the default user template for this App. I love animals and everything animal related. Right now I live in a huge apartment with a garden and have two bunnies. I am always ready to tak in animals in need and help wherever I can.',
  hasPet: 'Yes',
  hasGarden: 'Yes',
};

const Profile = () => {
  const [listings, setListings] = useState(dummy);
  const [userInfo, setUserInfo] = useState(dummyUser);

  const navigation = useNavigation();

  const handleNavigation = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <View>
      <ScrollView>
        <TopBar />
        <Btn_back_arrow />
        <Text style={styles.userInfoTitle}>{userInfo.name}</Text>
        <Text style={styles.userInfo}>{userInfo.description}</Text>
        <Text style={styles.userInfo}>City: {userInfo.city}</Text>
        <Text style={styles.userInfo}>
          Living space: {userInfo.livingSpace}
        </Text>
        <Text style={styles.userInfo}>Has a pet: {userInfo.hasPet}</Text>
        <Text style={styles.userInfo}>Has a garden: {userInfo.hasGarden}</Text>
        <Text style={styles.userInfoTitle}>Own listings:</Text>
        {listings.map(item => (
          <View style={styles.userListings}>
            <Feedcard
              key={item.listing_id}
              image={item.animal_image_link}
              name={item.animal_name}
              price={item.price}
              timeOfAdding={item.timeOfAdding}
            />
          </View>
        ))}
        <View style={styles.circle_container}>
          <TouchableOpacity
            onPress={() => handleNavigation('AddListing1')}
            style={styles.circle_button}>
            <MaterialCommunityIcons
              name="plus"
              size={42}
              color={COLORS.white}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  userInfoTitle: {
    fontFamily: 'RobotoSlab-SemiBold',
    fontSize: 26,
    fontWeight: 600,
    marginTop: 20,
    marginLeft: 30,
    marginBottom: 10,
  },
  userInfo: {
    fontFamily: 'Roboto-Regular',
    fontWeight: 300,
    fontSize: 15,
    marginTop: 15,
    marginLeft: 30,
  },
  userListings: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    marginEnd: 20,
  },
  circle_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  circle_button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    height: 100,
    width: 100,
    borderRadius: 50,
  },

  separator: {
    marginTop: 40,
  },
});
