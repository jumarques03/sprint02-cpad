import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { VideoView, useVideoPlayer } from "expo-video";

export default function MonitoringCameraCard({
  video,
  ativo,
  tempo,
}) {

  const player = useVideoPlayer(video, (player) => {
    player.loop = true;
    player.muted = true;

    if (ativo) {
      player.play();
    } else {
      player.pause();
    }
  });

  return (
    <View style={styles.card}>
      <View style={styles.videoContainer}>
        <VideoView
          style={styles.video}
          player={player}
          contentFit="cover"
          nativeControls={false}
        />

        <View
          style={[
            styles.liveBadge,
            ativo ? styles.liveBadgeAtivo : styles.liveBadgeInativo,
          ]}
        >
          <Text style={styles.liveText}>{ativo ? "Ao vivo" : "Offline"}</Text>
        </View>

        <View style={styles.timerBadge}>
          <View style={ativo ? styles.redDot : styles.grayDot} />
          <Text style={styles.timerText}>{tempo}</Text>
        </View>
      </View>

      <View style={styles.infoArea}>
        <Text style={styles.infoTitle}>Visão Computacional</Text>

        <View style={styles.statusRow}>
          <View style={ativo ? styles.greenDot : styles.grayStatusDot} />

          <Text style={styles.statusText}>{ativo ? "Ativa" : "Inativa"}</Text>
        </View>

        <Text style={styles.description}>
          {ativo
            ? `Detectando grama com 91% de confiança.`
            : "O monitoramento ainda não foi iniciado. Ative a visão computacional pela tela inicial."}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 24,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },

  videoContainer: {
    width: "100%",
    height: 320,
    position: "relative",
    backgroundColor: "#E5E7FF",
  },

  video: {
    width: "100%",
    height: "100%",
  },

  liveBadge: {
    position: "absolute",
    top: 14,
    left: 14,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },

  liveBadgeAtivo: {
    backgroundColor: "#00A86B",
  },

  liveBadgeInativo: {
    backgroundColor: "#8A8A8A",
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

  grayDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: "#BDBDBD",
  },

  timerText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
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

  grayStatusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#BDBDBD",
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