import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function MonitoringCameraCard({ image }) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="cover" />

        <View style={styles.liveBadge}>
          <Text style={styles.liveText}>Ao vivo</Text>
        </View>

        <View style={styles.timerBadge}>
          <View style={styles.redDot} />
          <Text style={styles.timerText}>00:32:15</Text>
        </View>

        <View style={styles.detectionBox} />
      </View>

      <View style={styles.infoArea}>
        <Text style={styles.infoTitle}>Visão Computacional</Text>

        <View style={styles.statusRow}>
          <View style={styles.greenDot} />
          <Text style={styles.statusText}>Ativa</Text>
        </View>

        <Text style={styles.description}>
          Detectando grama e condições da via em tempo real.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 24,
    marginTop: 24,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },

  imageContainer: {
    width: "100%",
    height: 320,
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  liveBadge: {
    position: "absolute",
    top: 14,
    left: 14,
    backgroundColor: "#00A86B",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },

  liveText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
  },

  timerBadge: {
    position: "absolute",
    top: 14,
    right: 14,
    backgroundColor: "rgba(0,0,0,0.75)",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  redDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: "#FF3B30",
  },

  timerText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },

  detectionBox: {
    position: "absolute",
    right: 56,
    bottom: 70,
    width: 130,
    height: 90,
    borderWidth: 3,
    borderColor: "#081EAD",
  },

  infoArea: {
    padding: 18,
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#202020",
    marginBottom: 8,
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },

  greenDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#00C853",
  },

  statusText: {
    color: "#202020",
    fontSize: 15,
    fontWeight: "bold",
  },

  description: {
    color: "#4E4E4E",
    fontSize: 14,
    lineHeight: 22,
  },
});