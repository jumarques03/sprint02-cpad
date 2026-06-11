import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function ProfileAvatar({
  name,
  onEdit,
}) {
  const initial = name?.charAt(0)?.toUpperCase() || "U";

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {initial}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.editButton}
        onPress={onEdit}
      >
        <Ionicons
          name="camera"
          size={18}
          color="#FFFFFF"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    marginBottom: 40,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,

    backgroundColor: "#081EAD",

    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 48,
    fontWeight: "bold",
  },

  editButton: {
    width: 38,
    height: 38,

    borderRadius: 19,

    backgroundColor: "#081EAD",

    position: "absolute",

    bottom: 0,
    right: 0,

    justifyContent: "center",
    alignItems: "center",
  },
});