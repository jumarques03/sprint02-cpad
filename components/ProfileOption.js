import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileOption({
  title,
  icon,
  onPress,
  isLast,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.option,
        !isLast && styles.borderBottom,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Ionicons name={icon} size={24} color="#081EAD" />

      <Text style={styles.title}>{title}</Text>

      <Ionicons name="chevron-forward" size={24} color="#081EAD" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  option: {
    height: 62,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    backgroundColor: "#FFFFFF",
  },

  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFEF",
  },

  title: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    fontWeight: "600",
    color: "#202020",
  },
});