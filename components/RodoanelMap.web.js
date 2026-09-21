import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { STATUS_INFO } from "../utils/vegetationStatus";

export default function RodoanelMap({ trechos, trechoSelecionado, onSelecionarPonto }) {
  const chavesTrechos =
    trechoSelecionado === "todos" ? Object.keys(trechos) : [trechoSelecionado];

  const pontosVisiveis = chavesTrechos.flatMap((chave) => trechos[chave].pontos);

  return (
    <View style={styles.container}>
      <Text style={styles.aviso}>
        O mapa interativo utiliza recursos nativos e é melhor visualizado no app mobile
        (Expo Go). Nesta versão web, veja a lista de pontos abaixo.
      </Text>

      {pontosVisiveis.map((ponto) => {
        const info = STATUS_INFO[ponto.status];

        return (
          <TouchableOpacity
            key={ponto.id}
            style={styles.linha}
            onPress={() => onSelecionarPonto(ponto)}
          >
            <View style={[styles.dot, { backgroundColor: info.color }]} />
            <Text style={styles.km}>Km {ponto.km}</Text>
            <Text style={styles.status}>{info.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },

  aviso: {
    fontSize: 13,
    color: "#4E4E4E",
    marginBottom: 12,
    lineHeight: 18,
  },

  linha: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },

  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },

  km: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#202020",
    width: 80,
  },

  status: {
    fontSize: 14,
    color: "#4E4E4E",
  },
});
