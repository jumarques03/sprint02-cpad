import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ChatInput({ value, onChangeText, onSend }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite sua mensagem..."
        placeholderTextColor="#9B9B9B"
        value={value}
        onChangeText={onChangeText}
      />

      <TouchableOpacity style={styles.sendButton} onPress={onSend}>
        <Ionicons name="send" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    paddingBottom: 20,
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    gap: 12,
  },

    input: {
    flex: 1,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 18,
    borderWidth: 2,
    borderColor: "#E5E7FF",
    },

    sendButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#081EAD",
    justifyContent: "center",
    alignItems: "center",
    },
});