import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function BorderButton({ title, onPress, style }) {
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
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#081EAD",
    borderWidth: 2
  },
  botaoTexto: {
    color: "#081EAD",
    fontSize: 18,
    fontWeight: "bold",
  },
});