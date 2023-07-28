import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const OrderScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "coloum",
        alignItems: "center",
      }}
    >
      <AntDesign name="gift" size={60} color="#db8b09" />
      <Text
        style={{
          marginTop: 15,
          fontSize: 19,
          fontWeight: "600",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Your order has been placed!
      </Text>
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
