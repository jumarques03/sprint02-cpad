import React, { useState } from "react";
import { View, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import Header from "../../components/Header";
import AssistantInfo from "../../components/AssistantInfo";
import ChatBubble from "../../components/ChatBubble";
import ChatInput from "../../components/ChatInput";
import { useMockData } from "../../context/MockDataContext";

export default function Duvidas() {
  const [message, setMessage] = useState("");

  const { chats, enviarMensagemChat } = useMockData();

  return (
    <View style={styles.container}>
      <Header title="Dúvidas" />

      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          <AssistantInfo
            title="Assistente Operacional"
            description="Tire dúvidas sobre procedimentos e operações."
          />

          {chats.duvidas.map((msg) => (
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
            enviarMensagemChat("duvidas", message);
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