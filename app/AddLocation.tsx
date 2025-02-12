import { Button, Text, View, TextInput} from "react-native";
import { Rating } from 'react-native-ratings';
import styles from "../styles/LocationAdd"
import AddLocation from '../components/LocationAdd';


export default function AddNewLocation() {

  


  return (
    <View>
      <TextInput 
        style={styles.input}
        placeholder="Name"
      />
      
      <TextInput 
        style={styles.input}
        placeholder="Description"
      />

      <Rating 
        type="star"
        ratingCount={5}
        imageSize={40}
      />

      <Button
        
        title="Add new location"
       />
    </View>
  );
}
