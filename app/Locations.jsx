import { Button, ScrollView, Text, View } from "react-native";
import styles from '../styles/index'
import { useEffect, useState } from "react";
import { AirbnbRating } from 'react-native-ratings';
import { db, LOCATIONS_REF, auth } from '../firebase/Config';
import { collection, query, onSnapshot, where } from 'firebase/firestore'
import { useNavigation } from "@react-navigation/native";



export default function Locations() {

  
  const [Location, setLocation] = useState([])
  const Navigation = useNavigation()
  const user = auth.currentUser;
  const uid = user.uid
  

  const LocationCollection = query(collection(db, LOCATIONS_REF), 
  where("userID", "==", uid))

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
    <ScrollView>
      <Button title="Add new Location" 
      onPress={() => Navigation.navigate("AddLocation")} 
      color="#b36d6f" />

      {Location.map((Locations) => (
      <View style={styles.info}>

        <Text 
          style={styles.header}>
          {Locations.name}
        </Text>

        <Text 
          style={styles.description}>
          {Locations.description}
        </Text>

        <AirbnbRating
          showRating
          defaultRating={Locations.rating}
          reviewSize={30}
          size={30}
          isDisabled
        />

        <Button
          title="Map Location"
          onPress={() => Navigation.navigate("MapView", {
            name: Locations.name
          })} 
          color="#b36d6f"
        />
      </View>
      ))} 
    </ScrollView>
  );
}


