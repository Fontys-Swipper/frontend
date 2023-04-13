import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View} from 'react-native';
import TextHeading from './TextHeading';
import Btn_solid_small from '../components/buttons/Btn_solid_small';
import Btn_solid_regular from '../components/buttons/Btn_solid_regular';
const AddListingPageThree = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1, position:'absolute', width:'100%'}}>
      <View>
        <View>
          <TextHeading text_title="Add Listing" />
        </View>
        <View style={{}} >
            <Btn_solid_small title="Add Image"/>
        </View>
        <View>
            
        </View>
        <View style={{alignSelf:'center'}}>
            <Btn_solid_regular title='Add'/>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default AddListingPageThree;
