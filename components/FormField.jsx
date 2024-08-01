import { View, Text, TextInput } from 'react-native'
import React from 'react'

const FormField = ({ title, value, placeholder, handleChangeText }) => {
  return (
    <View>
      <Text>{title}</Text>
      <View>
        <TextInput
            value={value}
            placeholder="What would you like to report?"
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
        />
      </View>
    </View>
  )
}

export default FormField
