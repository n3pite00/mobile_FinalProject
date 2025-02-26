import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    info: {
      padding: 5,
      borderWidth: 1,
      margin: 10,
      backgroundColor: "white"
    },

    PressableButton: {
        backgroundColor: "#b36d6f",
        padding: 15,
        margin: 20,
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
    },

    ButtonText: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },

    header: {
      fontSize: 32,
      padding: 10,
    },

    description: {
      paddingLeft: 10,
      
    }
})

export default styles;