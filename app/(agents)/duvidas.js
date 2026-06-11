import React, { useState } from "react";
import { View, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import ChatHeader from "../../components/ChatHeader";
import AssistantInfo from "../../components/AssistantInfo";
import ChatBubble from "../../components/ChatBubble";
import ChatInput from "../../components/ChatInput";

export default function Duvidas() {
  const [message, setMessage] = useState("");

  return (
    <View style={styles.container}>
      <ChatHeader title="Dúvidas" />

      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          <AssistantInfo
            title="Assistente Operacional"
            description="Tire dúvidas sobre procedimentos e operações."
          />

          <ChatBubble
            type="bot"
            message="Olá! Sou o assistente virtual da EcoTrack. Como posso te ajudar?"
            time="10:30"
          />

          <ChatBubble
            type="user"
            message="Qual o procedimento para iniciar o monitoramento?"
            time="10:31"
          />

          <ChatBubble
            type="bot"
            message="Para iniciar o monitoramento, basta acessar a opção “Ativar Monitoramento” na tela inicial e seguir as instruções. A câmera do veículo será ativada para iniciar a visão computacional."
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