import React from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import RowText from "../components/RowText";
import { Feather } from "@expo/vector-icons";

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temp,
    feelsLikeTemp,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles;
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} />
        <Text style={temp}>6</Text>
        <Text style={feelsLikeTemp}>Feels like 5</Text>
        <RowText
          textOne={"High: 8"}
          textOneStyles={highLow}
          textTwo={"Low: 6"}
          textTwoStyles={highLow}
          containerStyles={highLowWrapper}
        />
      </View>
      <RowText
        textOne={"It's sunny"}
        textOneStyles={description}
        textTwo={"Perfect t-shirt weather!"}
        textTwoStyles={message}
        containerStyles={bodyWrapper}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textBlack: {
    color: "black",
  },
  temp: {
    fontSize: 48,
  },
  feelsLikeTemp: {
    fontSize: 28,
  },
  highLowWrapper: {
    flexDirection: "row",
    gap: 10,
  },
  highLow: {
    fontSize: 20,
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignContent: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});

export default CurrentWeather;
