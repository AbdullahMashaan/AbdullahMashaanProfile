import React from "react";
import { View, StyleSheet } from "react-native";
import Profile from "./src/components/Profile";

export default function App() {
  return (
    <View style={styles.container}>
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00796b", // teal background
  },
});
