import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ChatHeader({ title }) {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={28} color="#202020" />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <Ionicons name="ellipsis-vertical" size={24} color="#202020" />
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
    height: 90,
    paddingHorizontal: 20,
    paddingTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E5E7FF",
    },

    title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#081EAD",
    },
});