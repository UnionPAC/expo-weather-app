import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

const App = () => {
  const [loading, error, weather] = useGetWeather();
  const { container } = styles;

  return (
    <NavigationContainer>
      {loading && (
        <View style={container}>
          <ActivityIndicator size={"large"} />
        </View>
      )}
      {weather && weather.list && <Tabs weather={weather} />}
      {error && <ErrorItem />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
