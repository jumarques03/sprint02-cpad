import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import MapHeader from "../../components/MapHeader";
import InfoResume from "../../components/InfoResume";
import MapImage from "../../components/MapImage";
import IAResumeBox from "../../components/IAResumeBox";
import ChatHeader from "../../components/Header";

export default function Mapa() {
  return (
    <View style={styles.container}>
      <ChatHeader title="Mapeamento"/>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.infoPadding}>
          <InfoResume
            userName="João"
            team="EQUIPE ALPHA 6766"
            serviceOrder="1024"
            address="Rodovia BR111 KM 121"
            schedule="09:00 - 16:00"
          />
        </View>
        <MapImage source={require("../../assets/mapa.png")} />

        <IAResumeBox
          text="Equipe Gama 7367 precisa ter atenção para os trechos 1 e 2 do Km 138, pois apresenta cerca de 25 cm em somente uma faixa de especificação, apesar de demonstrar maior parte verde."
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