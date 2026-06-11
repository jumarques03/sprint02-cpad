import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileHeader({
  name,
  email,
  role,
}) {
  const initial = name?.charAt(0)?.toUpperCase() || "U";

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initial}</Text>
      </View>

      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    marginBottom: 34,
  },

  avatar: {
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: "#081EAD",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: "bold",
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#202020",
    marginBottom: 4,
  },

  email: {
    fontSize: 14,
    color: "#5A5A5A",
    marginBottom: 4,
  },

  role: {
    fontSize: 14,
    color: "#5A5A5A",
  },
});