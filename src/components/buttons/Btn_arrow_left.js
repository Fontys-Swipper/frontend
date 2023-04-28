import {
  Button,
  StyleSheet,
  Text,
  View,
  Pressable,
  ToastAndroid,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {COLORS} from '../../../assets/colors';

const Btn_arrow_left = ({onPress}) => {
  onPressDefault = () => {
    console.log('Back button pressed');
    if (Platform.OS === 'android') {
      ToastAndroid.show('Back button pressed', ToastAndroid.SHORT);
    }
  };

  return (
    <Pressable
      style={styles.button}
      onPress={onPress ? onPress : this.onPressDefault}>
      <Icon name="arrow-back" size={28} color={COLORS.black} />
    </Pressable>
  );
};

export default Btn_arrow_left;

const styles = StyleSheet.create({
  button: ({pressed}) => [
    {
      backgroundColor: pressed ? COLORS.primary + '20' : null,
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      margin: 10,
    },
  ],
});
