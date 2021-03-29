import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";


export default function RoundButton(props) {


  const styles = StyleSheet.create({
    btn: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
      maxHeight: 80,
      width: 80,
      borderRadius: 50,
      backgroundColor: props.btnColor,
      cursor: "pointer",
      borderWidth: 1,
      borderColor: "#fff",
      borderBottomWidth: 0,
      shadowColor: "#000",
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 3,
      elevation: 2,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
    },
    img: {
      width: 50,
      height: 50,
      margin: 0,
    },
  });
  
  return (
    <TouchableOpacity style={styles.btn} onPress={props.function}>
      <Image
        style={styles.img}
        source={{
          uri: props.icon,
        }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    maxHeight: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: "white",
    cursor: "pointer",
    borderWidth: 1,
    borderColor: "#fff",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  img: {
    width: 50,
    height: 50,
    margin: 0,
  },
});
