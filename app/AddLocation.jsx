import { Button, View, TextInput, } from "react-native";
import { AirbnbRating } from 'react-native-ratings';
import styles from "../styles/LocationAdd"
import { useState } from 'react';
import { addDoc, collection } from "firebase/firestore";
import { db, LOCATIONS_REF } from '../firebase/Config';


export default function AddNewLocation() {
  
  const [text, setText] = useState('')
  const [desc, setDesc] = useState('')
  const [rating, setRating] = useState(5)

  const LocationCollection = collection(db, LOCATIONS_REF)

  const save = async() => {
    try {
      await addDoc(LocationCollection, 
        {name:  text, 
        description: desc,
        rating: rating})

      alert("Location saved")

    } catch (err) {

      alert(err)
    }
  }

  return (
    <View style={styles.container}>
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
        color="#b36d6f"
       />
    </View>
  );
}