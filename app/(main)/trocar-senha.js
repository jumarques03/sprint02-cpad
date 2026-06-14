import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform
} from "react-native";

import BackArrow from "../../components/BackArrow";
import { CustomInput } from "../../components/Input";
import BlueButton from "../../components/BlueButton";
import { authContext } from "../../context/AuthContext";

export default function TrocarSenha() {
  const { atualizarSenhaUsuario } = useContext(authContext);

  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erros, setErros] = useState({});
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const validar = () => {
    const novosErros = {};

    if (!senhaAtual) {
      novosErros.senhaAtual = "Campo obrigatório";
    }

    if (!novaSenha) {
      novosErros.novaSenha = "Campo obrigatório";
    } else if (novaSenha.length < 6) {
      novosErros.novaSenha = "A nova senha deve ter no mínimo 6 caracteres";
    }

    if (!confirmarSenha) {
      novosErros.confirmarSenha = "Campo obrigatório";
    } else if (novaSenha !== confirmarSenha) {
      novosErros.confirmarSenha = "As senhas não coincidem";
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleAtualizarSenha = async () => {
    if (!validar()) return;

    const resultado = await atualizarSenhaUsuario(senhaAtual, novaSenha);

    if (!resultado.sucesso) {
      setErros({ senhaAtual: resultado.mensagem });
      return;
    }

    Alert.alert("Sucesso", resultado.mensagem);

    setSenhaAtual("");
    setNovaSenha("");
    setConfirmarSenha("");
    setErros({});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackArrow />
      </View>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Trocar Senha</Text>

          <CustomInput
              label="Senha atual:"
              placeholder="Insira sua senha atual"
              value={senhaAtual}
              onChangeText={(text) => {
              setSenhaAtual(text);
              setErros({});
              }}
              secureTextEntry={!senhaVisivel}
              isPassword={true}
              senhaVisivel={senhaVisivel}
              setSenhaVisivel={setSenhaVisivel}
              erro={erros.senha}
          /> 

          <CustomInput
              label="Nova senha:"
              placeholder="Insira sua nova senha"
              value={novaSenha}
              onChangeText={(text) => {
              setNovaSenha(text);
              setErros({});
              }}
              secureTextEntry={!senhaVisivel}
              isPassword={true}
              senhaVisivel={senhaVisivel}
              setSenhaVisivel={setSenhaVisivel}
              erro={erros.senha}
          /> 

          <CustomInput
              label="Confirmar nova senha:"
              placeholder="Confirme sua nova senha"
              value={confirmarSenha}
              onChangeText={(text) => {
              setConfirmarSenha(text);
              setErros({});
              }}
              secureTextEntry={!senhaVisivel}
              isPassword={true}
              senhaVisivel={senhaVisivel}
              setSenhaVisivel={setSenhaVisivel}
              erro={erros.senha}
          /> 

          <View style={styles.buttonContainer}>
            <BlueButton
              title="ATUALIZAR"
              onPress={handleAtualizarSenha}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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