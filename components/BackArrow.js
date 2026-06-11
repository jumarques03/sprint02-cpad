import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function BackArrow() {
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.botao} onPress={() => router.back()}>
      <Ionicons name="arrow-back" size={34} color="#081EAD" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});