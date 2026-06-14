import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function IAResumeBox({ text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Análise Operacional</Text>

      <Text style={styles.label}>Recomendação EcoTrackAI:</Text>

      <View style={styles.box}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 20,
  },

  sectionTitle: {
    color: "#081EAD",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 14,
  },

  label: {
    color: "#081EAD",
    fontSize: 15,
    marginBottom: 10,
  },

  box: {
    borderWidth: 1.5,
    borderColor: "#081EAD",
    borderRadius: 16,
    padding: 18,
  },

  text: {
    color: "#081EAD",
    fontSize: 15,
    lineHeight: 22,
  },
});