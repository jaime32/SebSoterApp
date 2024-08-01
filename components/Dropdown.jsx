import React, { useState } from 'react';
  import { StyleSheet } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';

  const data = [
    { label: 'A Line', value: '1' },
    { label: 'B Line', value: '2' },
    { label: 'C Line', value: '3' },
    { label: 'D Line', value: '4' },
    { label: 'E Line', value: '5' },
    { label: 'K Line', value: '6' },
  ];

  const DropdownComponent = () => {
    const [value, setValue] = useState(null);

    return (
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Lines"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="white" name="Safety" size={20} />
        )}
      />
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    dropdown: {
      margin: 16,
      height: 50,
      borderBottomColor: "white",
      borderBottomWidth: 0.5,
    },
    icon: {
      marginRight: 5,
    //   backgroundColor:'white'
    },
    placeholderStyle: {
      fontSize: 16,
      color:"white"
    },
    selectedTextStyle: {
      fontSize: 16,
      color:'white'
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16
    },
  });
