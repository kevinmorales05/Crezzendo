import React from "react";
import BtnGeneral from "../components/BtnGeneral";
import { StyleSheet, Text, View, Image, LogBox, TextInput } from "react-native";
import logo from "../img/logo.png";

export default function SingIn() {
  let styles = StyleSheet.create({
    text: {
      color: "white",
      textAlign: "center",
      alignSelf: "center",
      margin: "10px",
      fontSize: 30,
    },
    textSmall: {
      color: "white",
      textAlign: "center",
      alignSelf: "center",
      margin: "10px",
      fontSize: 16,
    },
    input: {
      backgroundColor: "white",
      color: "black",
      margin: "10px",
      fontSize: 16,
      padding: 10,
      borderRadius:10,
    },
    img: {
        width: 130,
        height: 130,
        marginBottom: 15,
        alignSelf: "center",
    }
  });
  return (
    <div style={{ display: "flex", flexDirection: "column", alignSelf: 'center' }}>
      <Image
        style={styles.img}
        source={require("../img/logo.png")}
      />
      <Text style={styles.text}>Sing in</Text>
      <TextInput
        style={styles.input}
        //onChangeText={onChangeText}
        //value={name}
        placeholder="Nombre"
      />
      <TextInput
        style={styles.input}
        //onChangeText={onChangeText}
        //value={password}
        placeholder="Password"
      />
      <BtnGeneral
        btnColor="#2874A6"
        function={() => alert("Ingresar con correo Electrónico")}
        textBtn="Ingresar"
        icon="https://reactnative.dev/img/tiny_logo.png"
        color="white"
      />
      <BtnGeneral
        btnColor="#2874A6"
        function={() => alert("Ingresar con Google")}
        textBtn="Ingresar con Google"
        icon="https://reactnative.dev/img/tiny_logo.png"
        color="white"
      />
      <Text style={styles.text}>Crear Cuenta</Text>

      <Text style={styles.textSmall}>Olvidó su contraseña</Text>
    </div>
  );
}
