import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function EnableMonitoring({ onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Ativar Monitoramento</Text>
        <Text style={styles.description}>
          Iniciar visão computacional pela câmera do veículo
        </Text>
      </View>

      <View style={styles.iconCircle}>
        <Feather name="video" size={25} color="#081EAD" />
      </View>

      <Ionicons name="arrow-forward" size={25} color="#FFFFFF" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    minHeight: 100,
    backgroundColor: "#081EAD",
    borderRadius: 18,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  textContainer: {
    flex: 1,
    marginRight: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 14,
  },

  description: {
    fontSize: 16,
    color: "#FFFFFF",
    lineHeight: 24,
    fontWeight: "600",
  },

  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 41,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
});