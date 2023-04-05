import React from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import {COLORS} from '../../assets/colors';
import {View} from 'react-native';
const DropDown = ({choice = [], placehoder = ''}) => {
  const [selected, setSelected] = React.useState('');

  return (
    <View>
      <SelectList
        placeholder={placehoder}
        search={false}
        dropdownStyles={{
          alignSelf: 'flex-end',
          width: '30%',
          backgroundColor: COLORS.backgroundColor,
          borderColor: COLORS.primary,
          borderWidth: 0,
          marginRight: '14%',
        }}
        dropdownItemStyles={{
          padding: 3,
          borderBottomColor: COLORS.primary,
        }}
        dropdownTextStyles={{
          textAlign: 'center',
          borderBottomWidth: 0.5,
          borderColor: COLORS.primary,
          paddingBottom: 5,
        }}
        boxStyles={{
          borderColor: COLORS.primary,
          marginLeft: '12%',
          marginRight: '12%',
          borderWidth: 0,
          borderBottomWidth: 1,
          borderRadius: 0,
        }}
        placehoderStyle={{
          fontFamily: 'RobotoSlab-Regular',
          fontSize: 13,
          marginLeft: '15%',
          fontWeight: 'bold',
          textDecorationColor: COLORS.black,
        }}
        setSelected={val => setSelected(val)}
        data={choice}
        save={choice}
      />
    </View>
  );
};

export default DropDown;
