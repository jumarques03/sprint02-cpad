import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function StopMonitoringButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <Ionicons name="stop-circle-outline" size={24} color="#EC4040" />
      <Text style={styles.text}>Encerrar Monitoramento</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 58,
    marginHorizontal: 24,
    marginTop: 26,
    borderWidth: 1.5,
    borderColor: "#EC4040",
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#FFFFFF",
  },

  text: {
    color: "#EC4040",
    fontSize: 15,
    fontWeight: "bold",
  },
});