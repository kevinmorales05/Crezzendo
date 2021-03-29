import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";

import React from "react";

export default function BtnGeneral(props) {

  const styles = StyleSheet.create({
    btn: {
      flex: 1,
      display: "flex",
      flexWrap: "wrap",
      flexDirection:"column",
      backgroundColor: props.btnColor ,
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
      maxHeight: 70,
      width: 250,
      borderRadius: 10,
      cursor: "pointer",
      borderWidth: 1,
      borderColor: "#ddd",
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
    text: {
      color: props.color,
      fontSize: 16,
      padding: 15,
      margin: 0,
      position: "relative",
      right: 5,
      textAlign: "left",
    },
    img: {
      width: 35,
      height: 35,
      alignContent: 'center',
      alignSelf: "center",
      
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
      <Text style={styles.text}>{props.textBtn}</Text>
    </TouchableOpacity>
  );
}


