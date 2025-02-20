import { Text, View, Pressable } from "react-native";
import { Link } from 'expo-router';
import styles from '../styles/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { AirbnbRating } from 'react-native-ratings';




export default function Locations() {

  const [Location, setLocation] = useState([])

  const load = async() => {
    try {
      let WantedLocation = await AsyncStorage.getItem("InputLocation")

      if (WantedLocation !== null) {
        setLocation(JSON.parse(WantedLocation))
      } else {
        setLocation([])
      }

    } catch (err) {

      alert(err)
    }

  }

  useEffect(() => {
    load()
  }, [])

  return (
    <View>
      <Link href="./AddLocation" >
          <Pressable >
            <Text>Add New Location</Text>
          </Pressable>
      </Link>


      {Location.map((Location, index) =>
      <View key={index}>
        <Text style={styles.info}>{Location.name} {"\n"}
          {Location.description}
          </Text>

        <AirbnbRating
          showRating
          defaultRating={parseFloat(Location.rating)}
          size={40}
          isDisabled
        />
      </View>
      )}
      <Link href="./MapView" >
          <Pressable >
            <Text>Map Location</Text>
          </Pressable>
      </Link>
      
    </View>
  );
}