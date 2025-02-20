import { Button, Text, View, TextInput, } from "react-native";
import { AirbnbRating } from 'react-native-ratings';
import styles from "../styles/LocationAdd"
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function AddNewLocation() {
  
  const [text, setText] = useState('')
  const [desc, setDesc] = useState('')
  const [rating, setRating] = useState(5)

  const save = async() => {
    try {
      let UpdateLocations = await AsyncStorage.getItem("InputLocation");
      let ArrayLocations = UpdateLocations ? JSON.parse(UpdateLocations) : [];

      const newLocations = {
        name: text,
        description: desc,
        rating: rating
      }
      
      ArrayLocations.push(newLocations)

      await AsyncStorage.setItem("InputLocation", JSON.stringify(ArrayLocations))
      

      alert("Location saved")

    } catch (err) {

      alert(err)
    }
  }

  return (
    <View>
      <TextInput 
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Name"
      />
      
      <TextInput 
        style={styles.input}
        onChangeText={setDesc}
        value={desc}
        placeholder="Description"
      />

      <AirbnbRating
        count={5}
        defaultRating={5}
        size={40}
        onFinishRating={setRating}
      />

      <Button
        title="Add new location"
        onPress={save}
       />
    </View>
  );
}