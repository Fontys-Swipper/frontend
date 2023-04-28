import React from 'react';

import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import {COLORS} from '../../assets/colors.js';
import Btn_arrow_left from '../components/buttons/Btn_arrow_left';
import Btn_chat from '../components/buttons/Btn_chat';
import Btn_like from '../components/buttons/Btn_like';

// animalData = the passed JSON which includes all the necesary informations for display
// route = object including a namestring of the view that navigated to this one,
//         used for the back button navigation.
const DetailView = ({navigation, animalData, route}) => {
  const dummyData = {
    name: 'Medor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla inodio lacinia, ornare ipsum ac, blandit tortor. Sed dapibus variuspurus. In quis fringilla magna. Interdum et malesuada fames acante ipsum primis in faucibus. Aliquam vel ligula et ex posuerevenenatis vitae rutrum risus. Proin dignissim posuere lectus, nonlobortis tortor blandit ut. Duis dictum mollis mauris, necvestibulum arcu facilisis vel. Sed ipsum lacus, tempus eget velitet, porttitor tincidunt nunc. Donec et mauris ut quam fringillaultrices at feugiat felis. Praesent ac pellentesque diam. Nullavitae tortor condimentum, feugiat justo sed, viverra dui. Etiameros dolor, malesuada id varius in, malesuada quis libero. Nullamaliquam mi nec ligula condimentum, non consequat eros interdum.',
    images: ['jack-russell-g49275d8de_1920.jpg', 'another-image.jpg'],
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.backButtonContainer}>
          <Btn_arrow_left /*onPress={() => navigation.navigate(route.params)}*/
          />
        </View>
        <View style={styles.floatingIcons}>
          <View>
            <Btn_like />
            <Btn_chat />
          </View>
        </View>
        <ImageBackground
          style={styles.image}
          source={require('../../assets/images/jack-russell-g49275d8de_1920.jpg')}
        />
        <View style={styles.infoCard}>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{dummyData.name}</Text>
            <Text style={styles.description}>{dummyData.description}</Text>
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
    left: 10,
    zIndex: 2,
  },
  textContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  infoCard: {
    width: '100%',
    minHeight: 500,
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
  },
});

export default DetailView;
