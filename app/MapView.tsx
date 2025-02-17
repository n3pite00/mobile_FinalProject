import React from 'react';
import MapView from 'react-native-maps';
import { View } from 'react-native';
import styles from "../styles/Mapstyling"

export default function ShowMap() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

