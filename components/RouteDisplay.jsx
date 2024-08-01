// // RouteDisplay.js

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { DirectionsRenderer, GoogleMap, withGoogleMap } from 'react-google-maps';
// import { google } from 'google-maps';

// const RouteDisplay = ({ origin, destination }) => {
//   const [directions, setDirections] = useState(null);

//   useEffect(() => {
//     const directionsService = new google.maps.DirectionsService();

//     directionsService.route(
//       {
//         origin: origin,
//         destination: destination,
//         travelMode: google.maps.TravelMode.TRANSIT, // Specify travel mode (TRANSIT for public transport)
//       },
//       (result, status) => {
//         if (status === google.maps.DirectionsStatus.OK) {
//           setDirections(result);
//         } else {
//           console.error(`Error fetching directions: ${status}`);
//         }
//       }
//     );
//   }, [origin, destination]);

//   return (
//     <View style={styles.mapContainer}>
//       {directions && (
//         <GoogleMap
//           defaultZoom={7}
//           defaultCenter={{ lat: origin.lat(), lng: origin.lng() }}
//         >
//           <DirectionsRenderer directions={directions} />
//         </GoogleMap>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   mapContainer: {
//     height: 300,
//     width: '100%',
//   },
// });

// export default withGoogleMap(RouteDisplay);
