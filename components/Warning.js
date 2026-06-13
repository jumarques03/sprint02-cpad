import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function Warnings({ message }) {
  return (
  <View style={styles.container}>
    <Text style={styles.texto}>Nenhum aviso anunciado</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // centro vertical
    alignItems: "center",     // centro horizontal
  },
  texto: {
    color: "#bbbbbb"
  }
});