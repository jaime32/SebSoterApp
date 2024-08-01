import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const App = () => {

  const [destination, setDestination] = useState({
      latitude: 34.00347766921802,
      longitude: -118.23645993670415,
    });

  const [origin, setOrigin] = useState({
      latitude: 34.02253150737526, 
      longitude: -118.2846264817476,
    });

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      initialRegion={{
        latitude: 34.02253150737526,
        longitude: -118.2846264817476,
        latitudeDelta: 5,
        longitudeDelta: 1,
      }}
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey="AIzaSyCTPGhxS5EhHtnoDd8PPX8Aw_Bwd0luUPU"
          strokeWidth={4}
          strokeColor="red"
          mode={'TRANSIT'}
        />
       <Marker
          coordinate={origin}
          title="Starting Point"
        />
        <Marker
          coordinate={destination}
          title="Destination Point"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default App;
