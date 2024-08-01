import { TouchableOpacity, Text, StyleSheet } from "react-native"
import React from 'react'
const CustomButton = ({ title, onPress, buttonStyle, textStyle }) => {
    return (
      <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
      backgroundColor: '#F7B655', // Default button background color
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 16,
      marginVertical: 10,
    },
    text: {
      color: '#fff', // Default text color
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  
  export default CustomButton;