import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileSection({ title, children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.card}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 28,
  },

  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#202020",
    marginBottom: 12,
  },

  card: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
  },
});