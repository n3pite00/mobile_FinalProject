import { Text, View, Pressable } from "react-native";
import { Link } from 'expo-router';
import styles from '../styles/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";


export default function Locations() {

  const [LoadedText, setLoadedText] = useState('')
  const [LoadedDesc, setLoadedDesc] = useState('')

  const load = async() => {
    try {
      let NewText = await AsyncStorage.getItem("InputText")
      let NewDesc = await AsyncStorage.getItem("InputDesc")

      if (NewText !== null) {
        setLoadedText(NewText)
      } 

      if (NewDesc !== null) {
        setLoadedDesc(NewDesc)
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

        
        
      <Text style={styles.info}>{LoadedText}</Text>
      <Text style={styles.info}>{LoadedDesc}</Text>
    </View>
  );
}