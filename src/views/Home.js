import React from "react"; 
import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from "react-native"
import { COLORS } from "../../assets/colors.js"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import TopBar from "../components/TopBar.js";
import { useNavigation } from '@react-navigation/native';

  const HomePage = () => {
    const navigation = useNavigation();

    const handleNavigation = (screenName) => {
      navigation.navigate(screenName);
    };

    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={styles.container}>
              <Image style={styles.first_container} source={require('../../assets/images/malinois-g4dd9f780d_1920.jpg')}/>
                <View style={styles.second_container}>
                    <Text style={styles.text}>Find animals you like</Text>
                    <View style={styles.circle_container}>
                      <TouchableOpacity onPress={() => handleNavigation('Feed')} style={styles.circle}>
                        <Image source={require('../../assets/images/dog-gba5dc7061_1920.jpg')} style={styles.image_circle}/>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleNavigation('Feed')} style={styles.circle}>
                        <Image source={require('../../assets/images/cat-g2ff4963cc_1920.jpg')} style={styles.image_circle}/>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleNavigation('Feed')} style={styles.circle}>
                        <Image source={require('../../assets/images/rabbit.jpg')} style={styles.image_circle}/>
                      </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.third_container}>
                    <Text style={styles.text}>Add your own listing</Text>
                    <View style={styles.circle_container_2}>
                      <TouchableOpacity onPress={() => handleNavigation('AddListing1')} style={styles.circle_button}>
                          <MaterialCommunityIcons name="plus" size={42} color={COLORS.white}/>
                      </TouchableOpacity>
                    </View>
                </View>
          </View>
        </ScrollView>
          <View style={{position: 'absolute', top: 0, left: 0, width: '100%'}}>
            <TopBar/>
          </View>
      </View>     
    );
}

export default HomePage;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.white,
      // height: 810,
      paddingTop: 64,
      paddingBottom: 30
    },
    first_container: {
      height: 159,
      width: 365,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      flex: 1,
      width: '100%',
      height: '100%',
      borderRadius: 4,
    },
    second_container: {
      height: 435, 
      width: 365,
      backgroundColor: '#F6F1DD',
      top: 9,
      borderRadius: 4,
    },
    circle_container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: 25,
      marginTop: 40,
      marginHorizontal: 25
    },
    circle: {
      height: 140,
      width: 140,
      borderRadius: 70,
    },
    image_circle: {
      height: 140,
      width: 140,
      borderRadius: 70,
    },
    third_container: {
      height: 199,
      width: 365,
      backgroundColor: COLORS.secondary,
      top: 18,
      borderRadius: 4
    },
    circle_container_2: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    circle_button: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.primary,
      height: 100,
      width: 100,
      borderRadius: 50
    },
    text: {
      fontFamily: 'RobotoSlab-SemiBold',
      fontSize: 20,
      marginTop: 15,
      textAlign: 'center'
    }
})