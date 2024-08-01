import React, { useState } from 'react';
  import { FlatList, StyleSheet } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';

  const data = [
    { label: 'North Hollywood', value: '1' },
  ];
 

  const DropdownComponent = () => {
    const [value, setValue] = useState(null);

    return (
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        // inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        // search
        // maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="B Line"
        // searchPlaceholder="Search..."
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