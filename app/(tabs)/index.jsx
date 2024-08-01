import { View, Text, StyleSheet, SafeAreaView, TextInput, } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton';


// import { text } from 'body-parser';
const Reports = () => {
  const onPressCancel =() => {
    alert("Button has been pressed")
  }
  const onPressPost =() => {
    alert("Posted!")
  }
    const [text, onChangeTrain] = useState('Train Line');
    const [number, onChangeTrainSerial] = useState('Train Serial #');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Report a Problem</Text>
      <View style={styles.containerButton}>
        <CustomButton title="Cancel" onPress={onPressCancel}/>
        <CustomButton title="Post" onPress={onPressPost}/>
      </View>
      <View style={styles.containerNotepad}>
        <View style={styles.notepad}></View>
          <View style={styles.containerWrite}>
            <View style={styles.write}></View>
          </View>
          <View style={styles.inputContainer}> 
            <TextInput
              style={styles.input}
              onChangeText={onChangeTrain}
              value={text}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeTrainSerial}
              value={number}
              keyboardType="numeric"
            />
          </View>
      </View>
    </View>

    // <View style={styles.container}>
    //   <Text style={styles.header}> Report a Problem </Text>
    //   <View style={styles.subContainer}>

    //   </View>
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B5669",
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#204E5D',
    // lineHeight: 10, 
    // alignItems: 'center',
  },
  containerButton: {
    flexDirection: "row", 
    justifyContent: "space-between",
    bottom: -630,
  },
  containerNotepad: {
    alignItems: 'center',
  },
  containerWrite:{
    alignItems:'center',
    position: 'absolute',
    marginTop: 50,
  },
  containerTextBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  text: {
    color: "#ED920B",
    textAlign: "top",
    fontSize: 52,
    fontStyle: "normal",
    fontWeight: 400,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    marginTop: 90,
    textAlign: "center",
  },
  text1:{
    textAlign: 'center',
    fontSize: 37,
    backgroundColor: "#207792",
    width: 140,
    height: 72,
    flexShrink: 0,

  },
  notepad: {
    width: 377,
    height: 411,
    backgroundColor: '#398097',
    alignItems: "center",
  },
  write:{
    width: 358,
    height: 146,
    backgroundColor: "#f4fcff",
    alignItems: "center",
  },
  input: {
    height: 47,
    margin: 12,
    borderWidth: 3,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
  }
});
export default Reports;