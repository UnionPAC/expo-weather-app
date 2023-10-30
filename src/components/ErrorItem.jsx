import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const ErrorItem = () => {
  const {container, errorMessage} = styles;
  return (
    <View style={container}>
      <Text style={errorMessage}>Oops something went wrong!</Text>
      <Feather name="frown" size={60} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    justifyContent: "center",
    alignItems: "center",
  },
  errorMessage: {
    color: "black",
    fontSize: 20,
    marginHorizontal: 10,
    marginBottom: 12,
    textAlign: "center",
  },
});

export default ErrorItem;
