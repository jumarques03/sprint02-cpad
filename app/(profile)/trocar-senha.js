import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

import BackArrow from "../../components/BackArrow";
import { CustomInput } from "../../components/Input";
import BlueButton from "../../components/BlueButton";

export default function TrocarSenha() {
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackArrow />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>
          Trocar Senha
        </Text>

        <CustomInput
          placeholder="Senha atual"
          value={senhaAtual}
          onChangeText={setSenhaAtual}
        />

        <CustomInput
          placeholder="Nova senha"
          value={novaSenha}
          onChangeText={setNovaSenha}
        />

        <CustomInput
          placeholder="Confirmar nova senha"
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />

        <View style={styles.buttonContainer}>
          <BlueButton
            title="ATUALIZAR"
            onPress={() => {}}
          />
        </View>
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
    paddingHorizontal: 20,
    paddingTop: 42,
    marginBottom: 20,
  },

  content: {
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 36,
    color: "#081EAD",
    fontWeight: "600",
    marginBottom: 30,
  },

  buttonContainer: {
    marginTop: 24,
  },
});