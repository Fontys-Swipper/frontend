import React from 'react';
import {View, SafeAreaView} from 'react-native';
import TextHeading from './TextHeading';
import SelectImage from '../components/SelectImage';
import Btn_solid_regular from '../components/buttons/Btn_solid_regular';

import {useState} from 'react';
import TopBar from '../components/TopBar';
import NavigationBarContainer from '../components/NavigationBarContainer';
import DescriptionBox from '../components/DescriptionBox';
const AddListingPageThree = ({navigation}) => {
  const [selectedImages, setSelectedImages] = useState([]);

  return (
    <SafeAreaView style={{flex: 1, position: 'absolute', width: '100%'}}>
      <View>
        <TopBar />
      </View>
      <View>
        <TextHeading text_title="Add Listing" />
        <DescriptionBox />
        <SelectImage
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
        />
      </View>

      {/* eslint-disable-line react-native/no-inline-styles */}
      <View style={{alignSelf: 'center'}}>
        <Btn_solid_regular title="Add" />
      </View>
    </SafeAreaView>
  );
};

export default AddListingPageThree;
