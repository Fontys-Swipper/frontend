import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import TextHeading from './TextHeading';
import Btn_solid_small from '../components/buttons/Btn_solid_small';
import Btn_solid_regular from '../components/buttons/Btn_solid_regular';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useState} from 'react';
import {COLORS} from '../../assets/colors';
const AddListingPageThree = ({navigation}) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleSelectImages = () => {
    ImagePicker.openPicker({
      maxFiles: 3,
      width: 300,
      height: 400,
      cropping: false,
      multiple: true,
    })
      .then(images => {
        const imagePaths = images.map(image => image.path);
        setSelectedImages(prevSelectedImages => [
          ...prevSelectedImages,
          ...imagePaths,
        ]);
      })
      .catch(err => console.log(err));
  };

  const handleRemoveImage = index => {
    const newImages = [...selectedImages];
    newImages.splice(index, 1);
    setSelectedImages(newImages);
  };
  return (
    <SafeAreaView style={{flex: 1, position: 'absolute', width: '100%'}}>
      <View>
        <TextHeading text_title="Add Listing" />
      </View>

      <View style={{}}>
        <Btn_solid_small
          title="Add Image"
          onPress={handleSelectImages}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            position: 'absolute',
          }}
        />
      </View>
      <View style={styles.container}>
        {selectedImages.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={{uri: image}} style={styles.image} />
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => handleRemoveImage(index)}>
              <Icon name="close" size={24} color="white" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={{alignSelf: 'center'}}>
        <Btn_solid_regular title="Add" />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 120,
  },
  removeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    borderRadius: 15,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default AddListingPageThree;
