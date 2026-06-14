import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";

import MonitoringCameraCard from "../../components/MonitoringCameraCard";
import StopMonitoringButton from "../../components/StopMonitoringButton";
import Header from "../../components/Header";
import { useMockData } from "../../context/MockDataContext";

export default function Monitoramento() {
  const router = useRouter();
  const { monitoring, encerrarMonitoramento } = useMockData();

  return (
    <View style={styles.container}>
      <Header title="Monitoramento Ativo" />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <MonitoringCameraCard
          video={require("../../assets/mockVisaoComputacional.mp4")}
          ativo={monitoring.ativo}
          tempo={monitoring.tempoMonitoramento}
        />

        <StopMonitoringButton
          onPress={() => {
            encerrarMonitoramento();
            router.back();
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scroll: {
    paddingBottom: 40,
  },
});