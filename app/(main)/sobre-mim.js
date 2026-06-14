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

import { useMockData } from "../../context/MockDataContext";

export default function SobreMim() {
  const { user } = useMockData();

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
          name={user.nomeCompleto}
          photo={user.photo}
          onEdit={() => {}}
        />

        <ProfileInfoField
          label="Nome"
          value={user.nomeCompleto}
        />

        <ProfileInfoField
          label="E-mail"
          value={user.email}
        />

        <ProfileInfoField
          label="Função"
          value={user.role}
        />

        <ProfileInfoField
          label="Equipe"
          value={user.equipe}
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