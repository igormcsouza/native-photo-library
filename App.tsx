import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import PhotoCard from "./components/PhotoCard";

export default function App() {
  const users = ["igormcsouza", "yyx990803"];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {users.map((user) => (
          <PhotoCard key={user} user={user} />
        ))}
      </ScrollView>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
  },
});
