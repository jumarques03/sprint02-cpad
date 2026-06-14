import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import Header from "../../components/Header";
import AssistantInfo from "../../components/AssistantInfo";
import ChatBubble from "../../components/ChatBubble";
import ChatInput from "../../components/ChatInput";

import { useMockData } from "../../context/MockDataContext";

export default function Cancelamento() {
  const [message, setMessage] = useState("");

  const { chats, enviarMensagemChat } = useMockData();

  return (
    <View style={styles.container}>
      <Header title="Cancelamento" />

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

          {chats.cancelamento.map((msg) => (
            <ChatBubble
              key={msg.id}
              type={msg.type}
              message={msg.message}
              time={msg.time}
            />
          ))}
        </ScrollView>

        <ChatInput
          value={message}
          onChangeText={setMessage}
          onSend={() => {
            enviarMensagemChat("cancelamento", message);
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