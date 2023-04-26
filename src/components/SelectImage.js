import React, {useState} from 'react';
import {View, Image, Button, TouchableOpacity, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
      {/* eslint-disable-line react-native/no-inline-styles */}
      <Button
        title="Select Images"
        onPress={handleSelectImages}
        style={{position: 'absolute'}}
      />
    </View>
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
    backgroundColor: 'red',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SelectImage;
