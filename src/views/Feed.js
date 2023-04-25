import React, {useState} from "react"; 
import {ScrollView, StyleSheet, Text, View, Modal, Dimensions, Keyboard, TouchableWithoutFeedback } from "react-native"
import TopBar from '../components/TopBar'
import Feedcard from "../components/Feedcard";
import { COLORS } from "../../assets/colors";
import Btn_solid_small from "../components/buttons/Btn_solid_small";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';


import DropDown from "../components/DropDown";
import Btn_solid_big from "../components/buttons/Btn_solid_big";
import InputField from "../components/InputField.js";

//Dummy data for species dropdown
const speciesData = [
    {key:'1',value:'Species'},
    {key:'2',value:'Cat'},
    {key:'3',value:'Rabbit'},
    {key:'4',value:'Dog'},
    {key:'5',value:'Mouse'},
    {key:'6',value:'Horse'},
    {key:'7',value:'Giraffe'},
    {key:'8',value:'Goat'},
];

const genderData = [
    {key: '0', value: "Gender"},
    {key: '1', value: 'Male'},
    {key: '2', value: 'Female'}
];

const sortingTypes = [
    {key:'1',value:'Newest'},
    {key:'2',value:'Oldest'},
    {key:'3',value:'Price: Low to high'},
    {key:'4',value:'Price: High to low'},
]

//Imges for dummy data
image1 = require('../../assets/images/akita.jpg')
image2 = require('../../assets/images/dog_image.jpg')
image3 = require('../../assets/images/dog-gba5dc7061_1920.jpg')
image4 = require('../../assets/images/jack-russell-g49275d8de_1920.jpg')
image5 = require('../../assets/images/malinois-g4dd9f780d_1920.jpg')
image6 = require('../../assets/images/labrador-retriever-gb2d619e6b_1920.jpg')
cat = require('../../assets/images/cat-g2ff4963cc_1920.jpg')
rabbit = require('../../assets/images/rabbit.jpg')

//Dummy data for feed
const listingData = [
    {id: 1, species: 'Dog', image: image1, name: 'Bella', price: 50, type: 'Akita', age: 'Young', timeOfAdding: '12/04/2023', gender: 'Female'},
    {id: 2, species: 'Dog', image: image2, name: 'Max', price: 500, type: 'Dog', age: 'Adult', timeOfAdding: '12/04/2023', gender: 'Male'},
    {id: 3, species: 'Dog', image: image3, name: 'Luna', price: 100, type: 'Dog', age: 'Young', timeOfAdding: '24/04/2023', gender: 'Female'},
    {id: 4, species: 'Dog', image: image4, name: 'Charlie', price: 200, type: 'Jack Russell', age: 'Young', timeOfAdding: '23/04/2023', gender: 'Male'},
    {id: 5, species: 'Dog', image: image5, name: 'Lucy', price: 1000, type: 'Malinois', age: 'Old', timeOfAdding: '16/04/2023', gender: 'Female'},
    {id: 6, species: 'Dog', image: image6, name: 'Cooper', price: 750, type: 'Labrador Retriever', age: 'Young', timeOfAdding: '01/04/2023', gender: 'Male'},
    {id: 7, species: 'Dog', image: image1, name: 'Daisy', price: 250, type: 'Akita', age: 'Adult', timeOfAdding: '13/04/2023', gender: 'Female'},
    {id: 8, species: 'Dog', image: image2, name: 'Milo', price: 325, type: 'Dog', age: 'Young', timeOfAdding: '06/04/2023', gender: 'Male'},
    {id: 9, species: 'Dog', image: image5, name: 'Luna', price: 1000, type: 'Malinois', age: 'Young', timeOfAdding: '24/04/2023', gender: 'Female'},
    {id: 10, species: 'Dog', image: image6, name: 'Charlie', price: 2000, type: 'Labrador Retriever', age: 'Young', timeOfAdding: '23/04/2023', gender: 'Male'},
    {id: 11, species: 'Cat', image: cat, name: 'Mia', price: 250, type: 'Cat', age: 'Old', timeOfAdding: '13/04/2023', gender: 'Female'},
    {id: 12, species: 'Cat', image: cat, name: 'Oliver', price: 325, type: 'Cat', age: 'Young', timeOfAdding: '06/04/2023', gender: 'Male'},
    {id: 13, species: 'Cat', image: cat, name: 'Kitty', price: 1000, type: 'Cat', age: 'Young', timeOfAdding: '24/04/2023', gender: 'Female'},
    {id: 14, species: 'Cat', image: cat, name: 'Leo', price: 2000, type: 'Cat', age: 'Adult', timeOfAdding: '23/04/2023', gender: 'Male'},
    {id: 15, species: 'Rabbit', image: rabbit, name: 'Floppy', price: 200, type: 'Rabbit', age: 'Young', timeOfAdding: '23/04/2023', gender: 'Male'},
    {id: 16, species: 'Rabbit', image: rabbit, name: 'Bun Bun', price: 100, type: 'Rabbit', age: 'Young', timeOfAdding: '02/04/2023', gender: 'Female'},
]

const Feed = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [species, setSpecies] = useState('Species')
    const [gender, setGender] = useState('Gender')
    const [location, setLocation] = useState('')
    const [sorting, setSorting] = useState('')
    const [data, setData] = useState(listingData)
    const tabBarHeight = useBottomTabBarHeight();
    
    //Filtering and sorting the feed according to users selections
    const filterAndSortData = () => {
        let filteredData = listingData
        if(species != 'Species'){
            filteredData = filteredData.filter((item) => {
                return item.species === species
            })
        }
        if(gender != 'Gender'){
            filteredData = filteredData.filter((item) => {
                return item.gender === gender
            })
        }
        if(sorting){
            switch(sorting){
                case'Newest':
                    filteredData.sort((a, b) => (a.timeOfAdding < b.timeOfAdding) ? 1 : -1)
                    break;
                case'Oldest':
                    filteredData.sort((a, b) => (a.timeOfAdding > b.timeOfAdding) ? 1 : -1)
                    break;
                case'Price: Low to high':
                    filteredData.sort((a, b) => (a.price > b.price) ? 1 : -1)
                    break;
                case'Price: High to low':
                    filteredData.sort((a, b) => (a.price < b.price) ? 1 : -1)
                    break;
            }
        }
        setData(filteredData)
    }

    return (
        <View style={styles.container}>
            <View>
                <TopBar/>
            </View>
            <ScrollView contentContainerStyle={[styles.contentContainer, styles.contentContainer.paddingBottom = tabBarHeight]}>
                <View style={styles.buttonContainer}>
                    <Btn_solid_small title="Filter" onPress={() => setModalVisible(true)} icon={<Icon name='tune' size={15} color={COLORS.white}/>}/>
                    <Btn_solid_small title='Sort' icon={<Icon name='sort-alphabetical-variant' size={15} color={COLORS.white}/>}/>
                </View>

                {/* Map data to feedcards */}
                {data.map((item) => 
                    <Feedcard key={item.id} image={item.image} name={item.name} price={item.price} type={item.type} age={item.age} timeOfAdding={item.timeOfAdding}/>
                )}

            </ScrollView>

            {/* Modal view for filtering options */}
            <Modal 
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView} >
                            <ScrollView contentContainerStyle={styles.modalScrollView} >
                                <DropDown placehoder={sorting? sorting : 'Sort'} choice={sortingTypes} setSelected={(val) => setSorting(val)}/>
                                <DropDown placehoder={species != 'Species'? species : 'Species'} choice={speciesData} setSelected={(val) => setSpecies(val)}/>
                                <DropDown placehoder={gender != 'Gender'? gender : 'Gender'} choice={genderData} setSelected={(val) => setGender(val)}/>
                                <InputField text_title="Location" value={location} onChangeText={newText => setLocation(newText)} icon={<MaterialIcons name='search' size={20} color={COLORS.black}/>}/>
                            </ScrollView>
                            <Btn_solid_big title='show' onPress={() => {filterAndSortData(), setModalVisible(!modalVisible)}}/>
                        </View>
                    </View>
            </Modal>
        </View>        
    );
}

export default Feed;

const styles = StyleSheet.create({
    container: {
        
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
        paddingBottom: 0, //Padding is set dynamically to tab bar height
    },
    modalScrollView:{

    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 10,
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
})
