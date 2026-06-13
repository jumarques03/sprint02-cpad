import React from "react";
import { Image, StyleSheet } from "react-native";

export default function MapImage({ source }) {
  return (
    <Image
      source={source}
      style={styles.image}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
});