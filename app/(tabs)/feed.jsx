import { View, Text, StyleSheet, ScrollView, } from 'react-native'
import Post from '../../components/Post'
import React, {useState} from 'react'
import Dropdown from '../../components/Dropdown'




const Feed = () => {
  return (
        <View style={styles.containerPost}>
            <Text style={styles.label}></Text>
          <Dropdown>
          </Dropdown>
        <ScrollView>
        <Post></Post>
        </ScrollView>
        </View>

  )
}

export default Feed

const styles = StyleSheet.create({    
    containerPost: {
    flex: 1,
    // marginTop: 10,
    // alignItems: 'center',
    backgroundColor: "#1E1E1E",
    }
})