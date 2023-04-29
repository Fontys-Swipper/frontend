import React from 'react';
import {View, SafeAreaView} from 'react-native';
import TextHeading from './TextHeading';
import SelectImage from '../components/SelectImage';
import Btn_solid_regular from '../components/buttons/Btn_solid_regular';
import Btn_back_arrow from '../components/buttons/Btn_back_arrow';

import {useState} from 'react';
import TopBar from '../components/TopBar';
import NavigationBarContainer from '../components/NavigationBarContainer';
import DescriptionBox from '../components/DescriptionBox';
import {COLORS} from '../../assets/colors';
import Btn_solid_small from '../components/buttons/Btn_solid_small';
const AddListingPageThree = ({navigation}) => {
  const [selectedImages, setSelectedImages] = useState([]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        position: 'absolute',
        height: '100%',
        width: '100%',
        justifyContent: 'space-around',
        backgroundColor: COLORS.background,
      }}>
      <View style={{flex: 1}}>
        <TopBar style={{position: 'absolute'}} />
        <Btn_back_arrow onPress={() => navigation.navigate('AddListing2')} />

        <View>
          <TextHeading text_title="Add Listing" />
          <SelectImage
            selectedImages={selectedImages}
            setSelectedImages={setSelectedImages}
          />
        </View>
        {/* eslint-disable-line react-native/no-inline-styles */}
        <View
          style={{alignSelf: 'center', marginTop: 600, position: 'absolute'}}>
          <Btn_solid_regular title="Add" />
        </View>
      </View>
      {/* <NavigationBarContainer style={{position: 'absolute'}} /> */}
    </SafeAreaView>
  );
};

export default AddListingPageThree;
