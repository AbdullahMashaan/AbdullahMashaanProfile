import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Profile = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require("../../assets/AbdullahMashaan.png")}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Abdullah Alenezi</Text>
      <Text style={styles.location}>Kuwait</Text>
      <View style={styles.container}>
        <View style={styles.stat}>
          <Text style={styles.value}>10K</Text>
          <Text style={styles.label}>Followers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.value}>10K</Text>
          <Text style={styles.label}>Likes</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.value}>1K</Text>
          <Text style={styles.label}>Photos</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    elevation: 5,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: "gray",
    marginBottom: 16,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  stat: {
    alignItems: "center",
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  label: {
    fontSize: 12,
    color: "gray ",
  },
});

export default Profile;
