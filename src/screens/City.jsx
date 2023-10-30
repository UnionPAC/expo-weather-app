import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from "react-native";
import Population from "../components/Population";
import RiseSet from "../components/RiseSet";
import { format } from "date-fns";

const City = ({ weatherData }) => {
  const { container, imageLayout, cityText, cityName, countryName } = styles;

  const { name, country, population, sunrise, sunset } = weatherData;

  // Format the time in 'h:mm:ss a' format
  const formattedSunrise = format(new Date(sunrise), "h:mm a");
  const formattedSunset = format(new Date(sunset), "h:mm a");

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/city.jpg")}
        style={imageLayout}
      >
        <Text style={[cityText, cityName]}>{name}</Text>
        <Text style={[cityText, countryName]}>{country}</Text>
        <Population
          populationSize={`Population: ${population.toLocaleString()}`}
        />
        <RiseSet riseTime={formattedSunrise} setTime={formattedSunset} />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "black",
  },
  cityName: {
    fontSize: 40,
    marginTop: 20,
  },
  countryName: {
    fontSize: 22,
  },
});

export default City;
