import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {COLORS} from '../../assets/colors';
import logo from '../../assets/images/swipper-logo.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

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
    try {
      await AsyncStorage.removeItem('@userId')
      navigation.navigate('Start')
    } catch(e) {
      console.log(e)
      // remove error
    }
  }

  return (
    <View style={styles.topBar}>
      <Text style={styles.logo}>Swipper</Text>
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
  logo: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: COLORS.white,
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: 'Gluten-SemiBold', 
    fontSize: 30, 
    color: '#000000',
  },
});

export default TopBar;
