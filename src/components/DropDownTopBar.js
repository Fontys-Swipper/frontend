import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from "../../assets/colors";
import { Dropdown } from 'react-native-element-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

  const data = [
    { label: 'Profile', value: '1' },
    { label: 'Add listing', value: '2' },
    { label: 'Settings', value: '3' },
  ];

  const DropdownComponent = () => {
    const [value, setValue] = useState(null);

    return (
    <View style={styles.container}>
        <Dropdown
            style={styles.dropdown}
            // placeholderStyle={styles.placeholderStyle}
            // selectedTextStyle={styles.selectedTextStyle}
            // iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            value={value}
            onChange={item => {
            setValue(item.value);
            }}
            renderRightIcon={() => (
            <MaterialCommunityIcons style={styles.icon} color={COLORS.black} name="menu" size={27} />
            )}
        />
    </View>
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    container: {
        width: 128,
        height: 121,
    },
    dropdown: {
      marginLeft: 16,
      height: 50,
    //   borderBottomColor: 'gray',
    //   borderBottomWidth: 0.5,
    },
    // icon: {
    //   marginRight: 5,
    // },
    // placeholderStyle: {
    //   fontSize: 16,
    // },
    // selectedTextStyle: {
    //   fontSize: 16,
    // },
    // iconStyle: {
    //   width: 20,
    //   height: 20,
    // },
    // inputSearchStyle: {
    //   height: 40,
    //   fontSize: 16,
    // },
  });