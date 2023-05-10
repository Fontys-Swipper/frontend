import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import TopBar from '../components/TopBar';
import Feedcard from '../components/Feedcard';
import {COLORS} from '../../assets/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import DropDown from '../components/DropDown';
import Btn_solid_big from '../components/buttons/Btn_solid_big';
import InputField from '../components/InputField.js';
import Btn_floating_round from '../components/buttons/Btn_floating_round';
import { get_all_listings } from '../utils/listing';

//Dummy data for species dropdown
const speciesData = [
  {key: '1', value: 'Species'},
  {key: '2', value: 'Cat'},
  {key: '3', value: 'Rabbit'},
  {key: '4', value: 'Dog'},
  {key: '5', value: 'Mouse'},
  {key: '6', value: 'Horse'},
  {key: '7', value: 'Giraffe'},
  {key: '8', value: 'Goat'},
];

const genderData = [
  {key: '0', value: 'Gender'},
  {key: '1', value: 'Male'},
  {key: '2', value: 'Female'},
];

const sortingTypes = [
  {key: '1', value: 'Newest'},
  {key: '2', value: 'Oldest'},
  {key: '3', value: 'Price: Low to high'},
  {key: '4', value: 'Price: High to low'},
];

//Imges for dummy data
image1 = "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*";
image2 = require('../../assets/images/dog_image.jpg');
image3 = require('../../assets/images/dog-gba5dc7061_1920.jpg');
image4 = require('../../assets/images/jack-russell-g49275d8de_1920.jpg');
image5 = require('../../assets/images/malinois-g4dd9f780d_1920.jpg');
image6 = require('../../assets/images/labrador-retriever-gb2d619e6b_1920.jpg');
cat = require('../../assets/images/cat-g2ff4963cc_1920.jpg');
rabbit = require('../../assets/images/rabbit.jpg');

//Dummy data for feed
const listingData = [
  {
    listing_id: 1,
    animal_species: 'Dog',
    animal_image_link: image1,
    animal_name: 'Bella',
    price: 50,
    type: 'Akita',
    age: 'Young',
    timeOfAdding: '12/04/2023',
    gender: 'Female',
  },
  {
    listing_id: 2,
    animal_species: 'Dog',
    animal_image_link: image2,
    animal_name: 'Max',
    price: 500,
    type: 'Dog',
    age: 'Adult',
    timeOfAdding: '12/04/2023',
    gender: 'Male',
  },
  {
    listing_id: 3,
    animal_species: 'Dog',
    animal_image_link: image3,
    animal_name: 'Luna',
    price: 100,
    type: 'Dog',
    age: 'Young',
    timeOfAdding: '24/04/2023',
    gender: 'Female',
  },
  {
    listing_id: 4,
    animal_species: 'Dog',
    animal_image_link: image4,
    animal_name: 'Charlie',
    price: 200,
    type: 'Jack Russell',
    age: 'Young',
    timeOfAdding: '23/04/2023',
    gender: 'Male',
  },
  {
    listing_id: 5,
    animal_species: 'Dog',
    animal_image_link: image5,
    animal_name: 'Lucy',
    price: 1000,
    type: 'Malinois',
    age: 'Old',
    timeOfAdding: '16/04/2023',
    gender: 'Female',
  },
  {
    listing_id: 6,
    animal_species: 'Dog',
    animal_image_link: image6,
    animal_name: 'Cooper',
    price: 750,
    type: 'Labrador Retriever',
    age: 'Young',
    timeOfAdding: '01/04/2023',
    gender: 'Male',
  },
  {
    listing_id: 7,
    animal_species: 'Dog',
    animal_image_link: image1,
    animal_name: 'Daisy',
    price: 250,
    type: 'Akita',
    age: 'Adult',
    timeOfAdding: '13/04/2023',
    gender: 'Female',
  },
  {
    listing_id: 8,
    animal_species: 'Dog',
    animal_image_link: image2,
    animal_name: 'Milo',
    price: 325,
    type: 'Dog',
    age: 'Young',
    timeOfAdding: '06/04/2023',
    gender: 'Male',
  },
  {
    listing_id: 9,
    animal_species: 'Dog',
    animal_image_link: image5,
    animal_name: 'Luna',
    price: 1000,
    type: 'Malinois',
    age: 'Young',
    timeOfAdding: '24/04/2023',
    gender: 'Female',
  },
  {
    listing_id: 10,
    animal_species: 'Dog',
    animal_image_link: image6,
    animal_name: 'Charlie',
    price: 2000,
    type: 'Labrador Retriever',
    age: 'Young',
    timeOfAdding: '23/04/2023',
    gender: 'Male',
  },
  {
    listing_id: 11,
    animal_species: 'Cat',
    animal_image_link: cat,
    animal_name: 'Mia',
    price: 250,
    type: 'Cat',
    age: 'Old',
    timeOfAdding: '13/04/2023',
    gender: 'Female',
  },
  {
    listing_id: 12,
    animal_species: 'Cat',
    animal_image_link: cat,
    animal_name: 'Oliver',
    price: 325,
    type: 'Cat',
    age: 'Young',
    timeOfAdding: '06/04/2023',
    gender: 'Male',
  },
  {
    listing_id: 13,
    animal_species: 'Cat',
    animal_image_link: cat,
    animal_name: 'Kitty',
    price: 1000,
    type: 'Cat',
    age: 'Young',
    timeOfAdding: '24/04/2023',
    gender: 'Female',
  },
  {
    listing_id: 14,
    animal_species: 'Cat',
    animal_image_link: cat,
    animal_name: 'Leo',
    price: 2000,
    type: 'Cat',
    age: 'Adult',
    timeOfAdding: '23/04/2023',
    gender: 'Male',
  },
  {
    listing_id: 15,
    animal_species: 'Rabbit',
    animal_image_link: rabbit,
    animal_name: 'Floppy',
    price: 200,
    type: 'Rabbit',
    age: 'Young',
    timeOfAdding: '23/04/2023',
    gender: 'Male',
  },
  {
    listing_id: 16,
    animal_species: 'Rabbit',
    animal_image_link: rabbit,
    animal_name: 'Bun Bun',
    price: 100,
    type: 'Rabbit',
    age: 'Young',
    timeOfAdding: '02/04/2023',
    gender: 'Female',
  },
];

const Feed = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [species, setSpecies] = useState('Species');
  const [gender, setGender] = useState('Gender');
  const [location, setLocation] = useState('');
  const [sorting, setSorting] = useState('');
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);
  const tabBarHeight = useBottomTabBarHeight();

  useEffect(() => {
    get_all_listings().then(result =>{
      setData(result.data)
      setAllData(result.data)
    }).catch(error => {
      console.log(error)
    })
  },[])

  //Filtering and sorting the feed according to users selections
  const filterAndSortData = () => {
    let filteredData = allData;
    if (species != 'Species') {
      filteredData = filteredData.filter(item => {
        return item.animalSpecies === species;
      });
    }
    if (gender != 'Gender') {
      filteredData = filteredData.filter(item => {
        return item.gender === gender;
      });
    }
    if (sorting) {
      switch (sorting) {
        case 'Newest':
          filteredData.sort((a, b) =>
            a.listingDate < b.listingDate ? 1 : -1,
          );
          break;
        case 'Oldest':
          filteredData.sort((a, b) =>
            a.listingDate > b.listingDate ? 1 : -1,
          );
          break;
        case 'Price: Low to high':
          filteredData.sort((a, b) => (a.price > b.price ? 1 : -1));
          break;
        case 'Price: High to low':
          filteredData.sort((a, b) => (a.price < b.price ? 1 : -1));
          break;
      }
    }
    setData(filteredData);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={[styles.contentContainer]}>
        {/* Map data to feedcards */}
        {data.map(item => (
          <Feedcard
            key={item.id}
            image={item.animalImageLink}
            name={item.animalName}
            price={item.price}
            type={item.animalSpecies}
            age={item.age+" Years old"}
            timeOfAdding={item.listingDate.substring(0,10)}
          />
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Btn_floating_round
          onPress={() => setModalVisible(true)}
          icon={<Icon name="tune" size={24} color={COLORS.black} />}
        />
      </View>

      <View style={{position: 'absolute', top: 0, left: 0, width: '100%'}}>
        <TopBar />
      </View>

      {/* Modal view for filtering options */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView style={{width:'100%'}} contentContainerStyle={styles.modalScrollView}>
              <DropDown
                placehoder={sorting ? sorting : 'Sort'}
                choice={sortingTypes}
                setSelected={val => setSorting(val)}
              />
              <DropDown
                placehoder={species != 'Species' ? species : 'Species'}
                choice={speciesData}
                setSelected={val => setSpecies(val)}
              />
              <DropDown
                placehoder={gender != 'Gender' ? gender : 'Gender'}
                choice={genderData}
                setSelected={val => setGender(val)}
              />
              <InputField
                text_title="Location"
                value={location}
                onChangeText={newText => setLocation(newText)}
                icon={
                  <MaterialIcons
                    name="search"
                    size={20}
                    color={COLORS.black}
                  />
                }
              />
            </ScrollView>
            <Btn_solid_big
              title="show"
              onPress={() => {
                filterAndSortData(), setModalVisible(!modalVisible);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    centeredView: { //Center modal window and dim background
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.black + '99'
    },
    contentContainer: {
        alignItems: 'center',
        paddingBottom: 10, 
        paddingTop: 74,
        backgroundColor: COLORS.white,
    },
    modalScrollView:{
      alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 10,
        alignSelf: 'flex-start',
        marginLeft: 33,
        position: 'absolute',
        bottom: 0,
        right: 15,
    },
    modalView: {
        margin: 10,
        paddingVertical: 10,
        width: 300,
        height: '80%',
        backgroundColor: COLORS.white,
        borderRadius: 4,
        borderColor: COLORS.primary,
        borderWidth: 2,
        alignItems: 'center',
        shadowColor: '#000',
        gap: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
})
