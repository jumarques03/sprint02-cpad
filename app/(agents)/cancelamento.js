import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import ChatHeader from "../../components/ChatHeader";
import AssistantInfo from "../../components/AssistantInfo";
import ChatBubble from "../../components/ChatBubble";
import ChatInput from "../../components/ChatInput";

export default function Cancelamento() {
  const [message, setMessage] = useState("");

  return (
    <View style={styles.container}>

      <ChatHeader title="Cancelamento" />

      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <AssistantInfo
            title="Assistente de Cancelamento"
            description="Reporte impedimentos de roçada e atualize o status da operação."
          />

          <ChatBubble
            type="bot"
            message="Olá! Sou o assistente de cancelamento da EcoTrack. Me informe o motivo do impedimento da operação."
            time="10:30"
          />

          <ChatBubble
            type="user"
            message="A equipe não conseguiu iniciar a roçada no trecho informado."
            time="10:31"
          />

          <ChatBubble
            type="bot"
            message="Entendi. Selecione ou descreva o motivo: chuva, acesso bloqueado, risco operacional, ausência de equipe, problema no veículo ou outro impedimento."
            time="10:31"
          />
        </ScrollView>

        <ChatInput
          value={message}
          onChangeText={setMessage}
          onSend={() => {
            setMessage("");
          }}
        />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    flex: 1,
  },

  scroll: {
    padding: 18,
    paddingBottom: 30,
  },
});