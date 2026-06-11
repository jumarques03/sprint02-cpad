import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function Warnings({ message }) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: "center",
    backgroundColor: "#081EAD",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 18,
    marginTop: 16,
  },

  text: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "500",
  },
});