import { useState, useContext, useRef, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useRouter} from "expo-router";
import BlueButton from "../../components/BlueButton";
import BorderButton from "../../components/BorderButton";

export default function Start() {
  const router = useRouter();

  return (
    <ImageBackground 
      source={require('../../assets/background.png')} 
      resizeMode="cover"
      style={styles.container}
    >
        <Text style={styles.titulo}>ECOTRACK</Text> 
        <Text style={styles.subtitulo}>Visão autônoma, gestão preditiva</Text>

        <View style={styles.containerBotoes}>
            <BorderButton
            style={styles.botoes}
            title="LOGIN"
            onPress={() => router.push("/(auth)/login")}
            />
            <BlueButton
            style={styles.botoes}
            title="CADASTRAR"
            onPress={() => router.push("/(auth)/register")}
            />
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  },
  titulo: {
    fontSize: 55,
    fontWeight: "bold",
    color: "#081EAD",
    textAlign: "center",
    marginBottom: 8,
    fontFamily: 'Black Ops One',
    letterSpacing: 5,
  },
  subtitulo: {
    fontSize: 20,
    color: "#081EAD",
    textAlign: "center",
    marginBottom: 40,
    fontFamily: 'Black Ops One',
  },
containerBotoes: {
  flexDirection: "row",
  justifyContent: "space-between",
  width: "80%",

}, 
botoes: {
  width: "48%",
}
});