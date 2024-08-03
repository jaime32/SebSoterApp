import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton';
import FormField from '../../components/FormField';
import { router, useRouter } from 'expo-router';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onSignInPress = () => {
    router.push('(tabs)')
  }

  return (
    <View>
      <Text style={styles.text}>Sign In</Text>
      <FormField
        title="Email"
        value={form.email}
        placeholder="Enter your email"
        handleChangeText={(value) => setForm({ ...form, email: value})}
      />
      {/* <FormField
        title="Password"
        value={form.password}
        placeholder={(value) => setForm ({...form, password: value})}
        secureTextEntry
      /> */}
      <CustomButton title="Sign In" onPress={onSignInPress}/>
    </View>
  )
}
export default SignIn

const styles=StyleSheet.create ({
  text: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 40,
  }
})