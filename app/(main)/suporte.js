import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
} from "react-native";

import BackArrow from "../../components/BackArrow";
import SupportContactCard from "../../components/SupportContactCard";

export default function Suporte() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BackArrow />

        <Text style={styles.title}>
          Fale com o Suporte
        </Text>

        <View style={{ width: 44 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.description}>
          Escolha um dos canais abaixo para entrar em contato com a equipe de suporte.
        </Text>

        <SupportContactCard
          icon="call-outline"
          title="Telefone"
          value="0800 123 4567"
          onPress={() =>
            Linking.openURL("tel:08001234567")
          }
        />

        <SupportContactCard
          icon="headset-outline"
          title="SAC"
          value="0800 987 6543"
          onPress={() =>
            Linking.openURL("tel:08009876543")
          }
        />

        <SupportContactCard
          icon="mail-outline"
          title="E-mail"
          value="suporte@motiva.com"
          onPress={() =>
            Linking.openURL(
              "mailto:suporte@motiva.com"
            )
          }
        />

        <SupportContactCard
          icon="logo-whatsapp"
          title="WhatsApp"
          value="(11) 99999-9999"
          onPress={() =>
            Linking.openURL(
              "https://wa.me/5511999999999"
            )
          }
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

  topBar: {
    height: 92,
    paddingHorizontal: 20,
    paddingTop: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E5E7FF",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#081EAD",
  },

  content: {
    padding: 24,
  },

  description: {
    color: "#4E4E4E",
    lineHeight: 22,
    marginBottom: 24,
  },
});