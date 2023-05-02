import React, {useState} from 'react';
import {View, Image, Button, TouchableOpacity, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Btn_solid_small from './buttons/Btn_solid_small';

const SelectImage = ({selectedImages, setSelectedImages}) => {
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

      <Btn_solid_small
        title="Choose"
        onPress={handleSelectImages}
        style={{position: 'absolute'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // alignContent: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  imageContainer: {
    // justifyContent: 'space-between',
    position: 'relative',
    maxHeight: 200,
    padding: 2,
  },
  image: {
    height: 120,
    width: 120,
    padding: 20,
  },
  removeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'red',
    borderRadius: 15,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SelectImage;
