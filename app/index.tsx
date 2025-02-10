import { Text, View, Pressable } from "react-native";
import { Link } from 'expo-router';
import styles from '../styles/index'



export default function Index() {
  return (
    <View>
        <Link href="./AddLocation" >
          <Pressable style={styles.PressableButton}>
            <Text>Add New Location</Text>
          </Pressable>
        </Link>
        
      <Text style={styles.info}>Oulu</Text>
    </View>
  );
}
