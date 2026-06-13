import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";

import MonitoringCameraCard from "../../components/MonitoringCameraCard";
import StopMonitoringButton from "../../components/StopMonitoringButton";
import Header from "../../components/Header";

export default function Monitoramento() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Header title="Monitoramento Ativo" />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <MonitoringCameraCard
          image={require("../../assets/monitoramento.png")}
        />

        <StopMonitoringButton
          onPress={() => router.back()}
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