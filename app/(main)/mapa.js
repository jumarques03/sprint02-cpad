import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import MapHeader from "../../components/MapHeader";
import InfoResume from "../../components/InfoResume";
import MapImage from "../../components/MapImage";
import IAResumeBox from "../../components/IAResumeBox";
import ChatHeader from "../../components/Header";
import { useMockData } from "../../context/MockDataContext";

export default function Mapa() {
    const {user} = useMockData();

  return (
    <View style={styles.container}>
      <ChatHeader title="Mapeamento"/>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.infoPadding}>
            <InfoResume
              team={user.equipe}
              serviceOrder={user.ordemServico}
              address={user.endereco}
              schedule={user.horario}
            />
        </View>
        <MapImage source={require("../../assets/mapa.png")} />

        <IAResumeBox
          text="Foram identificados pontos de atenção entre os km 113 e 116, além do trecho entre os km 120 e 121. Nessas regiões, a vegetação apresenta níveis próximos ou acima do limite recomendado. Recomenda-se priorizar a inspeção e a manutenção desses pontos antes de avançar para os demais segmentos da rota."
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

  topArea: {
    backgroundColor: "#E5E7FF",
  },

  scrollContainer: {
    paddingBottom: 40,
  },
  infoPadding: {
    paddingLeft: 24
  }
});