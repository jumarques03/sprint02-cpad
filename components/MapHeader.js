import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BackArrow from "./BackArrow";

export default function MapHeader({ title }) {
  return (
    <View style={styles.header}>
      <BackArrow />

      <Text style={styles.title}>{title}</Text>

      <View style={{ width: 44 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#E5E7FF",
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#081EAD",
  },
});