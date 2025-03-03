import { Button, View, TextInput } from "react-native";
import { useState } from "react";
import styles from "../styles/LocationAdd"
import { auth } from '../firebase/Config';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

export default function AddNewLocation() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()

  const signIn = async() => {
    try {

      await signInWithEmailAndPassword(auth, email, password)
      console.log("Login was successful!")
      navigation.navigate("Locations")

      } catch (err){
          alert("Login wasn't successful.")
      }
  }
  

  return (
      <View style={styles.container}>
      <TextInput 
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
      />
      
      <TextInput 
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
      />


      <Button
          title="Sign In"
          onPress={signIn}
          color="#b36d6f"
      />
      </View>
);
}