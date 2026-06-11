// app/(tabs)/mapa.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Mapa() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela do Mapa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  texto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#081EAD",
  },
});