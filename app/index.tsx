import { Text, View, Pressable } from "react-native";
import { Link } from 'expo-router';
import styles from '../styles/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { AirbnbRating } from 'react-native-ratings';




export default function Locations() {

  const [LoadedText, setLoadedText] = useState('')
  const [LoadedDesc, setLoadedDesc] = useState('')
  const [LoadedRating, setLoadedRating] = useState('')

  const load = async() => {
    try {
      let NewText = await AsyncStorage.getItem("InputText")
      let NewDesc = await AsyncStorage.getItem("InputDesc")
      let NewRating = await AsyncStorage.getItem("InputRating")

      if (NewText !== null) {
        setLoadedText(NewText)
      } 

      if (NewDesc !== null) {
        setLoadedDesc(NewDesc)
      } 

      if (NewRating !== null) {
        setLoadedRating(NewRating)
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
        
      <Text style={styles.info}>{LoadedText} {"\n"}
        {LoadedDesc}
        </Text>

      <AirbnbRating
        showRating
        defaultRating={parseFloat(LoadedRating)}
        size={40}
        isDisabled
      />
      
    </View>
  );
}