import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ChatHeader from "../../components/ChatHeader";
import Warning from "../../components/Warning";

export default function Avisos() {
  return (
    <View style={styles.container}>
      <ChatHeader title="Avisos Gerais" />

      <View style={styles.content}>
        <Text style={styles.subtitle}>
          Fique atento à possíveis avisos para a Equipe
        </Text>

        <Warning message="Nenhum aviso anunciado" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 18,
  },

  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#081EAD",
    textAlign: "center",
    marginBottom: 8,
  },
});