import React, {useState} from 'react';
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
import Btn_back_arrow from '../components/buttons/Btn_back_arrow';
import {ScrollView} from 'react-native-gesture-handler';

const speciesSize = [
  {key: '1', value: 'Tiny'},
  {key: '2', value: 'Small'},
  {key: '3', value: 'Medium'},
  {key: '4', value: 'Big'},
];
const SpeciesGender = [
  {key: '1', value: 'Male'},
  {key: '2', value: 'Female'},
  {key: '3', value: 'Unknown'},
];

const AddListingPageTwo = ({navigation}) => {
  const [size, setSize] = useState('');
  const [gender, setGender] = useState('');
  return (
    <SafeAreaView
      style={{
        height: '100%',
        width: 'auto',
        flex: 1,
        position: 'relative',
        backgroundColor: COLORS.background,
      }}>
      <View>
        <TopBar style={{position: 'absolute'}} />
        <Btn_back_arrow onPress={() => navigation.navigate('AddListing1')} />
      </View>
      <ScrollView>
        <View
          style={{
            flex: 1,
          }}>
          <View>
            <TextHeading text_title="Add Listing" />
          </View>

          <View style={{marginBottom: 31}}>
            <DropDown
              placehoder="Size"
              choice={speciesSize}
              setSelected={val => setSize(val)}
            />
          </View>
          <View style={{marginBottom: 31}}>
            <DropDown
              placehoder="Gender"
              choice={SpeciesGender}
              setSelected={val => setGender(val)}
            />
          </View>
          <View style={{marginBottom: 28}}>
            <DescriptionBox
              palceholder="Give some information about animal...."
              text_title="Description"
            />
          </View>
          <View style={{alignSelf: 'center'}}>
            <Btn_solid_regular
              title="Next"
              // eslint-disable-next-line no-undef
              onPress={() => navigation.navigate('AddListing3')}
            />
          </View>
        </View>
      </ScrollView>
      {/* <NavigationBarContainer style={{position: 'absolute'}} /> */}
    </SafeAreaView>
  );
};

export default AddListingPageTwo;
