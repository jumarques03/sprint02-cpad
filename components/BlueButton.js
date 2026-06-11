import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function BlueButton({ title, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.botao, style]} onPress={onPress}>
      <Text style={styles.botaoTexto}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    width: "100%",
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#081EAD",
    borderRadius: 12,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoTexto: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});