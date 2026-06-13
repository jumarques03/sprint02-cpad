import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function SupportContactCard({
  icon,
  title,
  value,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={styles.left}>
        <Ionicons
          name={icon}
          size={28}
          color="#081EAD"
        />

        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {title}
          </Text>

          <Text style={styles.value}>
            {value}
          </Text>
        </View>
      </View>

      <Ionicons
        name="chevron-forward"
        size={24}
        color="#081EAD"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,

    borderWidth: 1,
    borderColor: "#E5E5E5",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  textContainer: {
    marginLeft: 14,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#202020",
  },

  value: {
    marginTop: 4,
    color: "#6A6A6A",
    fontSize: 14,
  },
});