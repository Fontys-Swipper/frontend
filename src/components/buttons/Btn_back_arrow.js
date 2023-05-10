import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../../assets/colors';
import {Pressable, ToastAndroid} from 'react-native';

const Btn_back_arrow = ({onPress}) => {
  onPressDefault = () => {
    console.log('Back button pressed');
    if (Platform.OS === 'android') {
      ToastAndroid.show('Back button pressed', ToastAndroid.SHORT);
    }
  };

  return (
    <Pressable
      style={{marginLeft: 17, marginTop: 15}}
      onPress={onPress ? onPress : this.onPressDefault}>
      <Icon name="arrow-back" size={24} color={COLORS.black} />
    </Pressable>
  );
};

export default Btn_back_arrow;
