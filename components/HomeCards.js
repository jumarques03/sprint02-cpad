import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function HomeCards({ title, description, icon, iconFamily = "Ionicons", onPress }) {
  const IconComponent = iconFamily === "Feather" ? Feather : Ionicons;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <IconComponent name={icon} size={20} color="#0B2A2A" />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    minHeight: 80,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 16,
    padding: 18,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
  },

  textContainer: {
    flex: 1,
  },

  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#202020",
    marginBottom: 10,
    padding: 2
  },

  description: {
    fontSize: 13.5,
    color: "#4E4E4E",
    lineHeight: 22,
    fontWeight: "600",
  },
});