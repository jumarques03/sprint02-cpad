// app/(main)/index.js
import { useState, useContext, useRef, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Animated,
  TouchableOpacity
} from "react-native";
import { useRouter, useFocusEffect } from "expo-router";
import { authContext } from "../../context/AuthContext";
import HomeCards from "../../components/HomeCards"; 
import EnableMonitoring from "../../components/EnableMonitoring";
import InfoResume from "../../components/InfoResume";
import { Ionicons } from "@expo/vector-icons"; 

export default function Inicio() {
  const router = useRouter();
  const { usuarios } = useContext(authContext);

  return (
      <View style={styles.container}>
        <View style={styles.backgroundAzul} />
        <View style={styles.backgroundBranco} />

        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.cards}>
              <View style={styles.header}>
                <TouchableOpacity
                  onPress={() => router.push("/(main)/perfil")}
                  activeOpacity={0.7}
                >
                  <Ionicons
                    name="person-circle-outline"
                    size={34}
                    color="#081EAD"
                  />
                </TouchableOpacity>
        
                <Text style={styles.name}>
                  Olá, João
                </Text>
              </View>
              <InfoResume
                  team="EQUIPE ALPHA 6766"
                  serviceOrder="1024"
                  address="Rodovia BR111 KM 121"
                  schedule="09:00 - 16:00"
              />

              <EnableMonitoring onPress={() => router.push("/(main)/monitoramento")} />

              <Text style={styles.sectionTitle}>Monitoramento</Text>

              <View style={styles.cardsContainer}>
                {/* Adicionado link para navegar na stack para o Mapa */}
                <HomeCards
                  title="Mapeamento"
                  description="Falar com o assistente operacional"
                  icon="chatbubble-ellipses-outline"
                  onPress={() => router.push("/(main)/mapa")}
                />
                {/* CORRIGIDO: Modificado de /(tabs)/avisos para /(main)/avisos */}
                <HomeCards
                  title="Avisos"
                  description="Falar com o assistente operacional"
                  icon="chatbubble-ellipses-outline"
                  onPress={() => router.push("/(main)/avisos")}
                />
              </View>

              <Text style={styles.sectionTitle}>Agentes</Text>

              <View style={styles.cardsContainer}>
                <HomeCards
                  title="Dúvidas"
                  description="Falar com o assistente operacional"
                  icon="chatbubble-ellipses-outline"
                  onPress={() => router.push("/(main)/duvidas")}
                />
                <HomeCards
                  title="Cancelamento"
                  description="Falar com o assistente operacional"
                  icon="chatbubble-ellipses-outline"
                  onPress={() => router.push("/(main)/cancelamento")}
                />
              </View>
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
  backgroundAzul: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "45%",
    backgroundColor: "#E5E7FF",
  },
  backgroundBranco: {
    position: "absolute",
    top: "45%",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#FFFFFF",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 60,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#202020",
    marginBottom: 7,
    marginTop: 15,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 10,
  },
  cards: {
    flex: 1,
    justifyContent: "center",
    marginTop: -10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 28,
    gap: 12,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#081EAD",
  },
});