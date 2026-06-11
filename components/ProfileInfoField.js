import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileInfoField({ label, value }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <Text style={styles.value}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFEF",
  },

  label: {
    fontSize: 14,
    color: "#6A6A6A",
    marginBottom: 6,
  },

  value: {
    fontSize: 18,
    fontWeight: "600",
    color: "#202020",
  },
});