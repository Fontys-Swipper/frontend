import React from "react"; 
import {Text, View, StyleSheet, ImageBackground} from "react-native"
import TopBar from '../components/TopBar'
import {Dimensions} from 'react-native'
import { COLORS } from "../../assets/colors.js"

const Chat = ({navigation}) => {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={{uri: 'https://cdn.pixabay.com/photo/2020/02/29/18/59/rabbit-4890861_1280.jpg'}}>
          <View style={styles.innerContainer}>
              <Text style={styles.text}>Work in progress!</Text>
              <Text style={styles.textPara}>We are working hard to offer you more features in our next update :D</Text>
          </View>
        </ImageBackground>
          <View style={{position: 'absolute', top: 0, left: 0, width: '100%'}}>
            <TopBar />
          </View>    
      </View>       
    );
}

export default Chat;

const styles = StyleSheet.create({
  inputContainer: {
      marginBottom: 20,
  },
  container: {
      flex: 1,
  },
  backgroundImage: {
      flex: 1,
      position: 'absolute',
      left: 0,
      top: 0,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
  },
  innerContainer: {
      flex: 1,
      backgroundColor: COLORS.black + 'b3',
      // justifyContent: "space-between",
      alignItems: 'center'
  },
  text: {
      fontFamily: 'Gluten-SemiBold',
      fontSize: 34,
      color: COLORS.background,
      marginTop: 200,
  },
  textPara: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    color: COLORS.background,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  }
})