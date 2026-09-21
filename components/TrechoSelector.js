import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

export default function TrechoSelector({ trechos, trechoSelecionado, onSelecionar }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {trechos.map((trecho) => {
        const ativo = trecho.id === trechoSelecionado;

        return (
          <TouchableOpacity
            key={trecho.id}
            style={[styles.chip, ativo && styles.chipAtivo]}
            onPress={() => onSelecionar(trecho.id)}
          >
            <Text style={[styles.chipTexto, ativo && styles.chipTextoAtivo]}>
              {trecho.nome}
            </Text>
            {trecho.cobertura === "parcial" && (
              <View style={styles.badgeParcial}>
                <Text style={styles.badgeParcialTexto}>parcial</Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    gap: 10,
    paddingBottom: 4,
  },

  chip: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#081EAD",
    backgroundColor: "#FFFFFF",
    marginRight: 4,
  },

  chipAtivo: {
    backgroundColor: "#081EAD",
  },

  chipTexto: {
    color: "#081EAD",
    fontSize: 15,
    fontWeight: "bold",
  },

  chipTextoAtivo: {
    color: "#FFFFFF",
  },

  badgeParcial: {
    marginLeft: 8,
    backgroundColor: "#FFC107",
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },

  badgeParcialTexto: {
    color: "#202020",
    fontSize: 10,
    fontWeight: "bold",
  },
});
