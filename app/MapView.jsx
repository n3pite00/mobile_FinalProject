import React from 'react';
import MapView from 'react-native-maps';
import { View } from 'react-native';
import styles from "../styles/Mapstyling";
import * as Location from 'expo-location';
import { useEffect, useState, } from "react";
import { useLocalSearchParams } from 'expo-router';


export default function ShowMap() {
 
  const { name } = useLocalSearchParams()
  const [region, setRegion] = useState(null)
  

  useEffect(() => {
  const AskPermission = async() => {
    try {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log("Geolocation failed.")
        return;
      }
    } catch (err) {
      alert("error")
    }
  }
  AskPermission()
  }, []);

      
  useEffect(() => {
    const getLocationName = async() => {
      try {
        const StringifiedLocation = JSON.stringify({name})
        const GeoCodedLocation = await Location.geocodeAsync(StringifiedLocation)

        const WantedLocation = GeoCodedLocation[0]

        setRegion({
          latitude: WantedLocation.latitude,
          longitude: WantedLocation.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        })
      
      } catch (err) {
        alert("error!")
      }
    }
  
  
    getLocationName();
  }, [name])

 
  return (
    <View style={styles.container}>
      <MapView 
      style={styles.map} 
      region={region}
      >
      </MapView>
    </View>
  );
}