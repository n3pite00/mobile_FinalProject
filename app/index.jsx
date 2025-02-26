import { Text, View, Pressable } from "react-native";
import { Link, router} from 'expo-router';
import styles from '../styles/index'
import { useEffect, useState, useContext } from "react";
import { AirbnbRating } from 'react-native-ratings';
import { db, LOCATIONS_REF } from '../firebase/Config';
import { collection, query, onSnapshot } from 'firebase/firestore'



export default function Locations() {

  
  const [Location, setLocation] = useState([])
  

  const LocationCollection = query(collection(db, LOCATIONS_REF))

  useEffect(() => {
    const getLocationList = async() => {
      try {
        onSnapshot(LocationCollection, querySnapshot => {
          const LocationsList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setLocation(LocationsList)
        })
      } catch (err) {
        alert("error")
    }
  }

  
  getLocationList()
  }, []);

  
  return (
    <View>
      <Link href="./AddLocation" >
          <Pressable >
            <Text>Add New Location</Text>
          </Pressable>
      </Link>

      {Location.map((Locations) => (
      <View style={styles.info}>
        <Text>
          {Locations.name} {"\n"}
          {Locations.description}
        </Text>

        <Link href={{pathname: "./MapView", 
          params: {name: Locations.name}}}>
            <Text>Map Location</Text>
        </Link>
        

        <AirbnbRating
          showRating
          defaultRating={Locations.rating}
          size={40}
          isDisabled
        />
      </View>
      ))} 
    </View>
  );
}