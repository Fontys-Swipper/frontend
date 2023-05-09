import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {COLORS} from '../../assets/colors';
import logo from '../../assets/images/swipper-logo.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import { RemoveUserId } from '../utils/UserApi';

const TopBar = () => {
  const navigation = useNavigation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = screenName => {
    toggleMenu();
    navigation.navigate(screenName);
  };

  const logOutAlert = () =>
    Alert.alert('Logging out', 'Click OK to log out', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => handleLogOut()},
    ]);

  const handleLogOut = async () => {
    RemoveUserId().then(() => {
      navigation.navigate('Start')
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <View style={styles.topBar}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      {isMenuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => handleNavigation('Profile')}>
            <Text style={styles.menuItem}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation('AddListing1')}>
            <Text style={styles.menuItem}>Add Listing</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation('Settings')}>
            <Text style={styles.menuItem}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => logOutAlert()}>
            <Text style={styles.menuItem}>Log Out</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity onPress={toggleMenu}>
        <MaterialCommunityIcons name="menu" size={32} color={COLORS.black} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    height: 54,
    backgroundColor: COLORS.primary,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    elevation: 7,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  logo: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
  },
  menu: {
    backgroundColor: COLORS.white,
    position: 'absolute',
    alignItems: 'center',
    width: 128,
    height: 140,
    top: 54,
    padding: 10,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    elevation: 5,
  },
  menuItem: {
    fontSize: 15,
    paddingVertical: 5,
  },
});

export default TopBar;
