import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BtnGeneral from "./assets/components/BtnGeneral";
import RoundButton from "./assets/components/roundButton";
import Story from "./assets/components/Story";
import SingIn from "./assets/pages/SingIn";
//import { NativeRouter, Route, Link } from "react-router-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Crezzendo</Text>

      


      


    <SingIn />
   

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

/*
<BtnGeneral
        icon="https://reactnative.dev/img/tiny_logo.png"
        width="140"
        textColor="black"
        btnColor="white"
        textSize="14"
        textBtn="Ingresar con Google"
        function={() => alert("funciona!")}
      />
      <BtnGeneral
        icon="https://reactnative.dev/img/tiny_logo.png"
        width="140"
        textColor="black"
        btnColor="white"
        textSize="14"
        textBtn="Password"
        function={() => alert("funciona!")}
      />

      <RoundButton
        icon="https://reactnative.dev/img/tiny_logo.png"
        btnColor="white"
        function={() => alert("Click en icono")}
      />
      <RoundButton
        icon="https://reactnative.dev/img/tiny_logo.png"
        btnColor="white"
        function={() => alert("Click en icono")}
      />

         //<Story icon="https://reactnative.dev/img/tiny_logo.png" function={() => alert("Open Storie")} />
*/