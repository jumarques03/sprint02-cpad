import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
} from "react-native";

import BackArrow from "../../components/BackArrow";
import ProfileAvatar from "../../components/ProfileAvatar";
import ProfileInfoField from "../../components/ProfileInfoField";

export default function SobreMim() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackArrow />

        <Text style={styles.title}>
          Sobre Mim
        </Text>

        <View style={{ width: 44 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ProfileAvatar
          name="João da Silva"
          onEdit={() => {}}
        />

        <ProfileInfoField
          label="Nome"
          value="João da Silva"
        />

        <ProfileInfoField
          label="E-mail"
          value="joao.silva@ecotrack.com"
        />

        <ProfileInfoField
          label="Função"
          value="Operador"
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

  header: {
    height: 92,
    paddingHorizontal: 20,
    paddingTop: 42,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "#E5E7FF",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#081EAD",
  },

  content: {
    padding: 24,
    paddingBottom: 40,
  },
});