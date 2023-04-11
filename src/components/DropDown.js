import React from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import {COLORS} from '../../assets/colors';
import {View} from 'react-native';
const DropDown = ({choice = [], placehoder = '' ,searchPlaceholder='' , search=''}) => {
  const [selected, setSelected] = React.useState('');

  return (
    <View>
      <SelectList
        placeholder={placehoder}
        searchPlaceholder={searchPlaceholder}
        search={search}
        dropdownStyles={{
          backgroundColor: COLORS.white,
          borderColor: COLORS.primary,
          borderWidth: 0,
          marginRight: '16%',
          marginLeft:'16%'
        
        }}
        dropdownItemStyles={{
          padding: 10,
          
          borderBottomColor: COLORS.primary,
        }}
        dropdownTextStyles={{
          fontWeight:'700',
          textAlign: 'center',
          borderColor: COLORS.primary,
          paddingBottom: 5,
        }}
        boxStyles={{
          borderColor: COLORS.primary,
          width:258,
          height:43,
          alignSelf:'center',
          borderWidth: 0,
          borderBottomWidth: 1,
          borderRadius: 0,
        }}
        setSelected={val => setSelected(val)}
        data={choice}
        save={choice}
        maxHeight={200}
      />
    </View>
  );
};

export default DropDown;
