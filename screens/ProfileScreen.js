import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

const ProfileScreen = () => {
  const user = auth.currentUser;
  const navigation = useNavigation();
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <FontAwesome5 name="user-alt" size={50} color="#09dba0" />
      <Pressable style={{ marginVertical: 10, alignItems: "center" }}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>WELCOME ! </Text>
        <Text>{user.email}</Text>
      </Pressable>

      <Pressable onPress={signOutUser}>
        <Text
          style={{
            borderRadius: 4,
            borderWidth: 0.8,
            marginVertical: 15,
            textAlign: "center",
            padding: 5,
            fontSize: 15,
            backgroundColor: "#f70c0c",
            borderColor: "white",
          }}
        >
          Sign Out
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
