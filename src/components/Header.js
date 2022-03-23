import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Crypto Price Checker</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    alignItems: "center",
  },
});
