import React from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import RowText from "../components/RowText";
import { weatherType } from "../utils/weatherType";
import { Feather } from "@expo/vector-icons";

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feelsLikeTemp,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles;

  const {
    main: { temp, feels_like, temp_min, temp_max },
    weather,
  } = weatherData;

  const weatherCondition = weather[0]?.main;
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name={weatherType[weatherCondition].icon} size={100} />
        <Text style={tempStyles}>{temp.toFixed()}°</Text>
        <Text
          style={feelsLikeTemp}
        >{`Feels like ${feels_like.toFixed()}°`}</Text>
        <RowText
          textOne={`High: ${temp_max.toFixed()}°`}
          textOneStyles={highLow}
          textTwo={`Low: ${temp_min.toFixed()}°`}
          textTwoStyles={highLow}
          containerStyles={highLowWrapper}
        />
      </View>
      <RowText
        textOne={weather[0]?.description}
        textOneStyles={description}
        textTwo={weatherType[weatherCondition].message}
        textTwoStyles={message}
        containerStyles={bodyWrapper}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tempStyles: {
    fontSize: 48,
    marginBottom: 4,
  },
  feelsLikeTemp: {
    fontSize: 24,
    marginBottom: 12,
  },
  highLowWrapper: {
    flexDirection: "row",
    gap: 10,
  },
  highLow: {
    fontSize: 18,
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignContent: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
    borderLeftWidth: 3,
    marginLeft: 10,
  },
  description: {
    fontSize: 32,
  },
  message: {
    fontSize: 16,
    fontStyle: "italic",
  },
});

export default CurrentWeather;
