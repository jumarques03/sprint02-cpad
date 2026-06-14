// components/Warning.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Warning({ title, message, date, hour }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.message}>{message}</Text>

      <View style={styles.dateContainer}>
        {date ? <Text style={styles.dateText}>{date}</Text> : null}

        {hour ? <Text style={styles.dateText}> - {hour}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },

  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#081EAD",
    marginBottom: 6,
  },

  message: {
    fontSize: 14,
    color: "#4E4E4E",
    lineHeight: 22,
    marginBottom: 10,
  },

  dateContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  dateText: {
    fontSize: 12,
    color: "#9A9A9A",
  },
});