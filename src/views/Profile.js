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
import {useState, useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import Btn_back_arrow from '../components/buttons/Btn_back_arrow.js';
import Feedcard from '../components/Feedcard';
import {GetUser, GetUserId} from '../utils/UserApi.js';
import {get_listing_byowner} from '../utils/listing.js';

const Profile = ({route}) => {
  const [listings, setListings] = useState([]);
  const [userInfo, setUserInfo] = useState();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    get_listing_byowner(route.params.id)
      .then(response => {
        setListings(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    GetUser(route.params.id)
      .then(response => {
        setUserInfo(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setisLoading(false);
      });
  }, []);

  const navigation = useNavigation();

  const handleNavigation = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <View>
      <ScrollView style={{marginTop: 54}}>
        <Btn_back_arrow onPress={() => navigation.navigate(route.params.currentRoute)} />
        {isLoading ? (
          <Text style={styles.userInfoTitle}>Retrieving Data ... </Text>
        ) : (
          <View>
            <Text style={styles.userInfoTitle}>
              {userInfo.firstname} {userInfo.lastname}
            </Text>
            <Text style={styles.userInfo}>{userInfo.description}</Text>
            <Text style={styles.userInfo}>City: {userInfo.address}</Text>
            <Text style={styles.userInfo}>
              Living space: {userInfo.livingSpace}
            </Text>
            {userInfo.hasPet ? (
              <Text style={styles.userInfo}>Has a pet: yes</Text>
            ) : (
              <Text style={styles.userInfo}>Has a pet: no</Text>
            )}
            {userInfo.hasGarden ? (
              <Text style={styles.userInfo}>Has a garden: yes</Text>
            ) : (
              <Text style={styles.userInfo}>Has a garden: no</Text>
            )}
            <Text style={styles.userInfoTitle}>Own listings:</Text>
          </View>
        )}
        {listings.length > 0 &&
          listings.map(item => (
            <View
              style={styles.userListings}
              onPress={() => handleNavigation('Profile')}>
              <Feedcard
                route={'Profile'}
                animalObject={item}
                key={item.id}
                image={item.animalImageLink}
                name={item.animalName}
                price={item.price}
                timeOfAdding={item.listingDate.substring(0, 10)}
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
      <View style={{position: 'absolute', top: 0, left: 0, width: '100%'}}>
        <TopBar />
      </View>
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
    alignItems: "center",
    marginTop: 10,
    marginEnd: 20,
    width: "100%"
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
