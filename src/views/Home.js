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
              <Image style={styles.first_container} source={{uri:'https://cdn.pixabay.com/photo/2018/04/18/21/36/malinois-3331687_1280.jpg'}}/>
                <View style={styles.second_container}>
                    <Text style={styles.text}>Find animals you like</Text>
                    <View style={styles.circle_container}>
                      <TouchableOpacity onPress={() => handleNavigation('Feed')} style={styles.circle}>
                        <Image source={{uri:'https://cdn.pixabay.com/photo/2020/10/27/19/46/dog-5691733_1280.jpg'}} style={styles.image_circle}/>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleNavigation('Feed')} style={styles.circle}>
                        <Image source={{uri:'https://cdn.pixabay.com/photo/2020/09/17/13/59/cat-5579221_1280.jpg'}} style={styles.image_circle}/>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleNavigation('Feed')} style={styles.circle}>
                        <Image source={{uri:'https://cdn.pixabay.com/photo/2020/02/29/18/59/rabbit-4890861_1280.jpg'}} style={styles.image_circle}/>
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
              <TopBar />
            </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.white,
      // height: 810,
      paddingTop: 95,
      paddingBottom: 126
    },
    first_container: {
      marginTop: 70,
      height: /*159*/ '25%',
      width: '93%',
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
      height: '67%' /*435*/, 
      width: '93%',
      backgroundColor: '#F6F1DD',
      top: 9,
      borderRadius: 4,
    },
    circle_container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: 14,
      marginTop: 40,
      marginHorizontal: 20
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
      height: /*199*/ '30%',
      width: '93%',
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
