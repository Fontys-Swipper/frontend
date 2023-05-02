import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import {COLORS} from '../../assets/colors';

const InputField = ({
  text_title = '',
  text_color = COLORS.black,
  onChangeText,
  defaultValue,
  value,
  icon, 
  multiline = false, 
  numberOfLines
}) => {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={[styles.text, (styles.text.color = text_color)]}>
        {text_title}
      </Text>
      <View style={styles.innerContainer({multiline})}>
        <TextInput
          required
          style={styles.input}
          color={text_color}
          value={value}
          onChangeText={onChangeText}
          defaultValue={defaultValue}
          multiline = {multiline}
          numberOfLines={4}
          textAlignVertical={multiline? 'top': 'center'}
        />
        {/* If no icon is given the margins are 0 so whole space is available for text input*/}
        <View
          style={[
            styles.iconContainer,
            icon
              ? (styles.iconContainer.marginHorizontal = 5)
              : (styles.iconContainer.marginHorizontal = 0),
          ]}>
          {icon}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 258,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary,
    margin: 5,
    paddingBottom: 5,
    borderTopEndRadius: 6,
    borderTopStartRadius: 6,

  },
  input: {
    fontFamily: 'Roboto-Light',
    fontSize: 15,
    padding: 0,
    flex: 1,
    height: '100%',
  },
  innerContainer: ({multiline}) => [{
    height: multiline? 58: 35,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertival: 10,
  }],
  iconContainer: {
    marginHorizontal: 6,
    alignItems: 'center',
  },
  text: {
    width: 258,
    fontFamily: 'Roboto-Light',
    fontSize: 15,
    paddingLeft: 15,
    marginBottom: 5,
    color: COLORS.black,
  },
});

export default InputField;
