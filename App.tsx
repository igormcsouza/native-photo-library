import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
  Button,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import PhotoCard from "./components/PhotoCard";

export default function App() {
  const [newUser, setNewUser] = useState("");

  const users = [
    "igormcsouza",
    "yyx990803",
    "fabpot",
    "andrew",
    "taylorotwell",
    "egoist",
  ];

  const handlePressing = () => {
    users.push(newUser);
    setNewUser("");
  };

  useEffect(() => {}, [users]);

  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style="auto" />
      <Text
        style={{
          fontSize: 32,
          fontWeight: "bold",
          paddingLeft: 10,
          paddingBottom: 5,
        }}
      >
        Native Photo Library
      </Text>
      <ScrollView>
        <View
          style={{ flexDirection: "row", justifyContent: "center", margin: 10 }}
        >
          <TextInput
            style={{ backgroundColor: "#fff", width: "50%", borderRadius: 6 }}
            placeholder="add new github account"
            onChangeText={(text) => setNewUser(text)}
          />
          <View style={{ paddingLeft: 5 }}>
            <Button title="ok" onPress={() => handlePressing()} />
          </View>
        </View>
        {users.map((user) => (
          <PhotoCard key={user} user={user} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
