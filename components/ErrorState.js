import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BorderButton from "./BorderButton";

export default function ErrorState({ message, onRetry }) {
  return (
    <View style={styles.container}>
      <Ionicons name="alert-circle-outline" size={40} color="#FF3B30" />
      <Text style={styles.title}>Falha ao carregar dados do trecho</Text>
      <Text style={styles.message}>{message}</Text>
      <BorderButton title="Tentar novamente" onPress={onRetry} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 32,
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#202020",
    marginTop: 12,
    textAlign: "center",
  },

  message: {
    fontSize: 14,
    color: "#4E4E4E",
    marginTop: 6,
    textAlign: "center",
    lineHeight: 20,
  },

  button: {
    width: 220,
    height: 48,
    marginTop: 18,
  },
});
