// app/(main)/perfil.js

import {React, useContext} from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import BackArrow from "../../components/BackArrow";
import ProfileHeader from "../../components/ProfileHeader";
import ProfileSection from "../../components/ProfileSection";
import ProfileOption from "../../components/ProfileOption";
import LogoutButton from "../../components/LogoutButton";
import { authContext } from "../../context/AuthContext";

export default function Perfil() {
  const router = useRouter();
  const { logoutUsuario } = useContext(authContext);
  
  const handleLogout = async () => {
    await logoutUsuario(); 
    router.replace("/(auth)/start");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        {/* Este componente deve executar router.back() para voltar para a index da Stack */}
        <BackArrow />

        <Text style={styles.pageTitle}>Perfil</Text>

        <View style={styles.placeholder} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <ProfileHeader
          name="João da Silva"
          email="joao.silva@motiva.com"
          role="Operador"
        />

        <ProfileSection title="Minha Conta">
          <ProfileOption
            title="Sobre Mim"
            icon="person-outline"
            onPress={() => router.push("/(main)/sobre-mim")}
          />

          <ProfileOption
            title="Trocar Senha"
            icon="lock-closed-outline"
            onPress={() => router.push("/(main)/trocar-senha")}
            isLast
          />
        </ProfileSection>

        <ProfileSection title="Suporte">
          <ProfileOption
            title="Ajuda"
            icon="help-circle-outline"
            onPress={() => router.push("/(main)/duvidas")}
          />

          <ProfileOption
            title="Fale com o Suporte"
            icon="chatbubble-ellipses-outline"
            onPress={() => router.push("/(main)/suporte")}
            isLast
          />
        </ProfileSection>

        <LogoutButton onPress={handleLogout}/>
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

  pageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#081EAD",
  },

  placeholder: {
    width: 44,
  },

  scrollContainer: {
    padding: 24,
    paddingBottom: 40,
  },
});