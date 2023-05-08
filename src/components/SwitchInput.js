import React from 'react';
import {View, StyleSheet, Switch, Text} from 'react-native';
import { COLORS } from '../../assets/colors'

const SwitchInput = ({text_title="", text_color=COLORS.black, isEnabled, toggleSwitch}) => {
  const [text, setText] = React.useState('');


  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.text.color = text_color]}>{text_title}</Text>
      <Switch
        style={styles.switch}
        trackColor={{false: '#767577', true: COLORS.secondary}}
        thumbColor={isEnabled ? COLORS.primary : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:258,
    height: 55,
    borderBottomWidth:1,
    borderBottomColor:COLORS.primary, 
    // backgroundColor: COLORS.background + '0d',
    margin: 5,
    // marginTop: 20,
    paddingLeft: 15,
    paddingVertical: 10,
    // borderTopEndRadius: 6,
    // borderTopStartRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    // borderWidth: 1,
    // borderColor: COLORS.primary,
    // borderRadius: 4,
  },
  switch: {
    // backgroundColor: COLORS.background,
  },
  text:{
    fontFamily: 'Roboto-Light',
    fontSize: 15,
    color: COLORS.black, 
 },
});

export default SwitchInput;