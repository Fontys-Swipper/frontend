import React, {useState} from 'react';
import {View, Text, KeyboardAvoidingView} from 'react-native';
import DropDown from '../components/DropDown';
import InputField from '../components/InputField';
import Btn_solid_regular from '../components/buttons/Btn_solid_regular';
import NavigationBarContainer from '../components/NavigationBarContainer';
import {COLORS} from '../../assets/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import TextHeading from './TextHeading';
import TopBar from '../components/TopBar';
import Btn_back_arrow from '../components/buttons/Btn_back_arrow';

const speciesData = [
  {key: '2', value: 'Dog'},
  {key: '3', value: 'Cat'},
];
const kindsData = [
  {key: '2', value: 'Golden Retriever'},
  {key: '2', value: 'Huskey'},
  {key: '2', value: 'Labrador'},
  {key: '2', value: 'Bulldog'},
  {key: '3', value: ' British Shorthair'},
  {key: '3', value: 'Maine coon'},
  {key: '3', value: 'Tiger'},
  {key: '3', value: 'Lion'},
  {key: '3', value: 'Golden Retriever'},
  {key: '3', value: 'Huskey'},
  {key: '2', value: 'Labrador'},
  {key: '2', value: 'Bulldog'},
];
const AddListingPageOne = ({navigation}) => {
  // eslint-disable-next-line no-undef
  const [species, setSpecies] = useState('');
  const [kind, setKinds] = useState('');

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
      <TopBar style={{position: 'absolute'}} />
      <Btn_back_arrow onPress={() => navigation.navigate('Home')} />
      <View
        style={{
          flex: 1,
        }}>
        <View>
          <TextHeading text_title="Add Listing" />
        </View>
        <View style={{marginBottom: 33}}>
          <DropDown
            placehoder="Type"
            choice={speciesData}
            setSelected={val => {
              setSpecies(val);
            }}
          />
        </View>
        <View style={{marginBottom: 24}}>
          <DropDown
            search="true"
            searchPlaceholder="search for breed... "
            placehoder="Breed"
            choice={kindsData.filter(breed => breed.key === species)}
            setSelected={val => setKinds(val)}
          />
        </View>
        <View style={{marginBottom: 24, alignSelf: 'center'}}>
          <InputField text_title="Name" />
        </View>
        <View style={{marginBottom: 28, alignSelf: 'center'}}>
          <InputField text_title="Age" />
        </View>
        <View style={{alignSelf: 'center'}}>
          <Btn_solid_regular
            title="Next"
            // eslint-disable-next-line no-undef
            onPress={() => navigation.navigate('AddListing2')}
          />
        </View>
      </View>
      {/* <NavigationBarContainer style={{position: 'absolute'}} /> */}
    </SafeAreaView>
  );
};

export default AddListingPageOne;
