import React from 'react';
import {View, Text, KeyboardAvoidingView} from 'react-native';
import DropDown from '../components/DropDown';
import InputField from '../components/InputField';
import Btn_solid_regular from '../components/buttons/Btn_solid_regular';
import NavigationBarContainer from '../components/NavigationBarContainer';
import {COLORS} from '../../assets/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import DescriptionBox from '../components/DescriptionBox';
import TextHeading from './TextHeading';
import TopBar from '../components/TopBar';

const AddListingPageTwo = ({navigation}) => {
  return (
    <SafeAreaView
      style={{height: '100%', width: 'auto', flex: 1, position: 'relative'}}>
      <View>
        <TopBar style={{position: 'absolute'}} />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.background,
        }}>
        <View>
          <TextHeading text_title="Add Listing" />
        </View>

        <View style={{marginBottom: 31}}>
          <DropDown
            placehoder="Size"
            choice={['child', 'young', 'adult', 'old']}
          />
        </View>
        <View style={{marginBottom: 31}}>
          <DropDown
            placehoder="Gender"
            choice={[' male', 'female', 'unknown']}
          />
        </View>
        <View style={{marginBottom: 28}}>
          <DescriptionBox
            palceholder="Give some information about animal...."
            text_title="Description"
          />
        </View>
        <View style={{alignSelf: 'center'}}>
          <Btn_solid_regular title="Next" />
        </View>
      </View>
      {/* <NavigationBarContainer style={{position: 'absolute'}} /> */}
    </SafeAreaView>
  );
};

export default AddListingPageTwo;
