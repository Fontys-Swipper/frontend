import React from 'react';
import {Text, View, ScrollView, ToastAndroid, Button} from 'react-native';
import {COLORS} from '../../assets/colors.js';
import TopBar from '../components/TopBar.js';

import Btn_back_arrow from '../components/buttons/Btn_back_arrow.js';

import image1 from '../../assets/images/cat-g2ff4963cc_1920.jpg';
import image2 from '../../assets/images/malinois-g4dd9f780d_1920.jpg';
import image3 from '../../assets/images/dog_image.jpg';

const dummy = [
  {
    listing_id: 1,
    animal_species: 'Cat',
    animal_image_link: image1,
    animal_name: 'Mr Twinkles',
    price: 250,
    timeOfAdding: '01/01/2023',
  },
  {
    listing_id: 2,
    animal_species: 'Dog',
    animal_image_link: image2,
    animal_name: 'Medor',
    price: 300,
    timeOfAdding: '12/04/2023',
  },
  {
    listing_id: 3,
    animal_species: 'Dog',
    animal_image_link: image3,
    animal_name: 'Markus',
    price: 200,
    timeOfAdding: '24/04/2023',
  },
];

const Profile = ({navigation}) => {
  const [listings, setListings] = useState([]);

  setListings(dummy);

  return (
    <View>
      <ScrollView>
        <TopBar />
        <Btn_back_arrow />
        <Text>Max Mustermann</Text>
        <Text>City</Text>
        <Text>Living Space</Text>
        <Text>Description</Text>
        <Text>Has Pet (yes or no)</Text>
        <Text>Has Garden (yes or no)</Text>
        <Text>Own listings</Text>
        {listings.map(item => (
          <Feedcard
            key={item.listing_id}
            image={item.animal_image_link}
            name={item.animal_name}
            price={item.price}
            timeOfAdding={item.timeOfAdding}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Profile;
