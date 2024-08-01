import { View, Image, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const Post = () => {
  return (
    <View style={styles.container}>
           <View style={styles.header}>
                <Image
                        source={require('../assets/images/patrick.png')}
                        style={styles.patrick}
                    />
                    <View>
                        <Text style={{color: 'white'}}>
                            6/30/24  2 hours ago
                        </Text>
                        <Text style={{color: 'white', fontWeight: "600"}}>
                            2.5 miles away
                        </Text>
                    </View>
                <View style={styles.container1}>
                        <Text style={styles.text}>C Line</Text>
                </View>
           </View>
        <View style={{flex: 2}}>
            <ScrollView>
                <Text style={styles.text2}> C Line train broke down for the next couple hours, just to let you guys know.  </Text>
            </ScrollView>
        </View>
        <View style={{flex: 0.6}}>
            <View style={styles.bottomContainer}>
            <Text style={styles.text1}> Leave a reply</Text>
            <Image
                source={require('../assets/images/Shield.png')}
                style={styles.shield}
             />    
            
            </View>
        </View>   
     </View>
  )
}

export default Post

const styles = StyleSheet.create ({
    container: {
        display: 'flex',
        height: 200,
        width: 370,
        marginBottom: 10,
        borderRadius: 30,
        padding: 20,
        marginTop: 10,
        backgroundColor: '#2D9ABC',
        
    },
    header: {
        flexDirection: "row",
        // color: 'white',
    },
    patrick:{
        // resizeMode:'contain',
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    text2: {
        color:'white'
    },
    text1: {
        color:'white',
    },
    container1: {
        backgroundColor: 'black',
        marginLeft: 65,
        borderRadius: 5,  
        height: 30,
        width: 98,
        
        // marginTop: -15,                                                                    
    },
    text: {
        color: '#2DAE4A',
        fontSize: 24,
        textAlign: 'center',
        // fontWeight: 700,
    
    },

    shield: {
        resizeMode:'contain',
        marginLeft: 290,
        marginTop: -37,


    },
    bottomContainer: {
        // marginTop: -2,
        fontSize: 20,
        alignItems: 'center',
        // backgroundColor: 'black',
        
    }
})