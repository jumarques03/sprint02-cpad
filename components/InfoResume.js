import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function InfoResume({
  userName,
  team,
  serviceOrder,
  address,
  schedule,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Ionicons
          name="person-circle-outline"
          size={30}
          color="#081EAD"
        />

        <Text style={styles.name}>
          Olá, {userName}
        </Text>
      </View>

      <Text style={styles.infoEquipe}>
        Você faz parte da{" "}
        <Text style={styles.highlight}>
          {team}
        </Text>
      </Text>

      <Text style={styles.info}>
        Hoje:{" "}
        <Text style={styles.highlight}>
          Ordem de Serviço #{serviceOrder}
        </Text>
      </Text>

      <Text style={styles.info}>
        Endereço:{" "}
        <Text style={styles.highlight}>
          {address}
        </Text>
      </Text>

      <Text style={styles.info}>
        Horário:{" "}
        <Text style={styles.highlight}>
          {schedule}
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    padding: 7,
    marginBottom: 10
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 28,
    gap: 12,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#081EAD",
  },

  info: {
    fontSize: 16,
    color: "#081EAD",
    marginBottom: 5,
  },
  infoEquipe: {
    fontSize: 16,
    color: "#081EAD",
    marginBottom: 18,
    lineHeight: 30,
  },
  highlight: {
    fontWeight: "bold",
    color: "#081EAD",
  },
});