import React, {useState} from 'react';
import {AsyncStorage} from 'react-native';
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
import {ScrollView, Alert} from 'react-native-gesture-handler';
import DescriptionBox from '../components/DescriptionBox';
import SelectImage from '../components/SelectImage';
import {add_listing} from '../utils/listing';

const animal_gender = [
  {key: '1', value: 'Male'},
  {key: '2', value: 'Female'},
];

const animal_Size = [
  {key: '1', value: 'Tiny'},
  {key: '2', value: 'small'},
  {key: '3', value: 'Medium'},
  {key: '4', value: 'Big'},
];

const AddListingPageOne = ({navigation}) => {
  // eslint-disable-next-line no-undef
  const [view, setView] = useState(1);
  const [animalSpecies, setAnimalSpecies] = useState('');
  const [animalBreed, setAnimalBreed] = useState('');
  const [animalName, setAnimalname] = useState('');
  const [age, setAge] = useState();
  const [isMale, setIsmale] = useState(true);
  const [animalSize, setAnimalsize] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [animalImageLink, setAnimalImageLink] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState();
  const [warnning, setWarning] = useState('');

  const handlePostRequest = () => {
    // eslint-disable-next-line no-undef
    const newlisting = {
      animalSpecies: animalSpecies,
      animalBreed: animalBreed,
      animalName: animalName,
      age: age,
      isMale: true,
      animalSize: animalSize,
      animalImageLink: animalImageLink,
      address: address,
      description: description,
      price: price,
    };
    function validateData() {
      for (const x in newlisting) {
        // console.log(newlisting[x])
        if (!newlisting[x]) {
          throw new Error('Please fill all the fields');
          // console.log(x)
        }
      }
    }
    //add listing
    try {
      validateData();
      setWarning('');
      add_listing(newlisting)
        .then(result => {
          navigation.navigate('NavigationBar');
        })
        .catch(error => {
          console.log(error);
        });
      console.log('Succefully Added');
    } catch (error) {
      setWarning(error.message);
      console.log(error);
    }
  };
  if (view == 1) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          position: 'absolute',
          height: '100%',
          width: '100%',
          justifyContent: 'space-around',
          backgroundColor: COLORS.white,
        }}>
        <TopBar style={{position: 'absolute'}} />
        <Btn_back_arrow onPress={() => navigation.navigate('Home')} />
        <ScrollView>
          <View
            style={{
              flex: 1,
            }}>
            <View>
              <TextHeading text_title="Add Listing" />
            </View>
            <View style={{marginBottom: 24, alignSelf: 'center'}}>
              <InputField
                text_title="Type"
                onChangeText={newText => setAnimalSpecies(newText)}
                value={animalSpecies}
              />
            </View>
            <View style={{marginBottom: 24, alignSelf: 'center'}}>
              <InputField
                text_title="Breed"
                onChangeText={newText => setAnimalBreed(newText)}
                value={animalBreed}
              />
            </View>
            <View style={{marginBottom: 28, alignSelf: 'center'}}>
              <InputField
                text_title="Name"
                onChangeText={newText => setAnimalname(newText)}
                value={animalName}
              />
            </View>
            <View style={{marginBottom: 28, alignSelf: 'center'}}>
              <InputField
                text_title="Age"
                onChangeText={newText => setAge(newText)}
                value={age}
                keyboardtype="numeric"
              />
            </View>
            <View style={{alignSelf: 'center'}}>
              <Btn_solid_regular
                title="Next"
                // eslint-disable-next-line no-undef
                onPress={() => setView(2)}
              />
            </View>
          </View>
        </ScrollView>
        {/* <NavigationBarContainer style={{position: 'absolute'}} /> */}
      </SafeAreaView>
    );
  } else if (view == 2) {
    //Second view of Addlisting
    return (
      <SafeAreaView
        style={{
          height: '100%',
          width: 'auto',
          flex: 1,
          position: 'relative',
          backgroundColor: COLORS.white,
        }}>
        <View>
          <TopBar style={{position: 'absolute'}} />
          <Btn_back_arrow onPress={() => setView(1)} />
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
              {/* <DropDown
                placehoder={animal_Size ? animal_Size : 'Size'}
                // choice={animal_Size}
                setSelected={val => setAnimalsize(val)}
                // value={animalSize} */}
              {/* /> */}
              <DropDown
                backgroundColor={COLORS.background}
                placehoder={animalSize ? animalSize : 'Animal size'}
                choice={animal_Size}
                setSelected={val => setAnimalsize(val)}
              />
            </View>
            <View style={{marginBottom: 31}}>
              <DropDown
                backgroundColor={COLORS.background}
                placehoder={isMale ? 'Male' : 'Female'}
                choice={animal_gender}
                setSelected={val => {
                  if (val == 'Male') {
                    setIsmale(true);
                  } else {
                    setIsmale(false);
                  }
                }}
              />
            </View>
            <View style={{marginBottom: 28, alignSelf: 'center'}}>
              <InputField
                text_title="Price"
                onChangeText={newtext => setPrice(newtext)}
                value={price}
                keyboardtype="numeric"
              />
            </View>
            <View style={{marginBottom: 28, alignSelf: 'center'}}>
              <InputField
                text_title="Image Link"
                value={animalImageLink}
                onChangeText={newtext => setAnimalImageLink(newtext)}
              />
            </View>

            <View style={{alignSelf: 'center'}}>
              <Btn_solid_regular
                title="Next"
                // eslint-disable-next-line no-undef
                onPress={() => setView(3)}
              />
            </View>
          </View>
        </ScrollView>
        {/* <NavigationBarContainer style={{position: 'absolute'}} /> */}
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          position: 'absolute',
          height: '100%',
          width: '100%',
          justifyContent: 'space-around',
          backgroundColor: COLORS.white,
        }}>
        <View style={{flex: 1}}>
          <TopBar style={{position: 'absolute'}} />
          <Btn_back_arrow onPress={() => setView(2)} />

          <View>
            <TextHeading text_title="Add Listing" />
            <View style={{marginBottom: 28, alignSelf: 'center'}}>
              <InputField
                text_title="Address"
                onChangeText={newText => setAddress(newText)}
                value={address}
              />
            </View>
            {/* <SelectImage
              selectedImages={selectedImages}
              setSelectedImages={setSelectedImages}
            /> */}
          </View>

          <View style={{marginBottom: 28}}>
            <DescriptionBox
              palceholder="Give some information about animal...."
              text_title="Description"
              onChangeText={newText => setDescription(newText)}
              value={description}
            />
          </View>
          <View
            style={{alignSelf: 'center', marginTop: 600, position: 'absolute'}}>
            <Btn_solid_regular title="Add" onPress={handlePostRequest} />
          </View>
        </View>
        {/* <NavigationBarContainer style={{ position: 'absolute' }} /> */}
      </SafeAreaView>
    );
  }
};

export default AddListingPageOne;
