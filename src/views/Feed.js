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

import DropDown from '../components/DropDown';
import Btn_solid_big from '../components/buttons/Btn_solid_big';
import InputField from '../components/InputField.js';
import Btn_floating_round from '../components/buttons/Btn_floating_round';
import { get_listings_forUser } from '../utils/listing';
import { GetUserId } from '../utils/UserApi';

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


const Feed = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [species, setSpecies] = useState('Species');
  const [gender, setGender] = useState('Gender');
  const [location, setLocation] = useState('');
  const [sorting, setSorting] = useState('');
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    GetUserId().then(result => {
      get_listings_forUser(result).then(result =>{
        setData(result.data)
        setAllData(result.data)
      }).catch(error => {
        console.log(error)
      })
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
          filteredData.sort((a, b) => (a.listingDate < b.listingDate ? 1 : -1));
          break;
        case 'Oldest':
          filteredData.sort((a, b) => (a.listingDate > b.listingDate ? 1 : -1));
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
            route={'Feed'}
            animalObject={item}
            key={item.id}
            image={item.animalImageLink}
            name={item.animalName}
            price={item.price}
            type={item.animalSpecies}
            age={item.age + ' Years old'}
            timeOfAdding={item.listingDate.substring(0, 10)}
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
            <ScrollView contentContainerStyle={styles.modalScrollView}>
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
                    animal_name="search"
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
    backgroundColor: COLORS.white,
  },
  centeredView: {
    //Center modal window and dim background
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.black + '99',
  },
  contentContainer: {
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 74,
    backgroundColor: COLORS.white,
  },
  modalScrollView: {},
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
    backgroundColor: COLORS.background,
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
});
