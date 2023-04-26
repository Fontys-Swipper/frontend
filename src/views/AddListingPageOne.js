import React from 'react';
import {View, Text, KeyboardAvoidingView} from 'react-native';
import DropDown from '../components/DropDown';
import InputField from '../components/InputField';
import Btn_solid_regular from '../components/buttons/Btn_solid_regular';
import NavigationBarContainer from '../components/NavigationBarContainer';
import {COLORS} from '../../assets/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import TextHeading from './TextHeading';

const AddListingPageOne = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, position: 'absolute', height:"100%" , width:"100%"}}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.background,
        }}>
       <View>
        <TextHeading text_title='Add Listing'/>
       </View>
        <View style={{marginBottom:33}}>
          <DropDown placehoder="Type" choice={['Dog', 'Cat']} />
        </View>
        <View style={{marginBottom:24}}>
          <DropDown
            search="true"
            searchPlaceholder="search for breed... "
            placehoder="Breed"
            choice={['Golden Retriever', 'BullDog', 'Huskey']}
          />
        </View>
        <View style={{gap: 24, alignItems: 'center'}}>
          <View>
            <InputField text_title="Name" />
          </View>
          <View>
            <InputField text_title="Age" />
          </View>
        </View>
        <View style={{alignSelf:'center'}}>
          <Btn_solid_regular title="Next" 
          />
        </View>
        
      </View>
      {/* <NavigationBarContainer style={{position: 'absolute'}} /> */}
    </SafeAreaView>
  );
};


export default AddListingPageOne;
