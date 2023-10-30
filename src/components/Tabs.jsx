import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: { backgroundColor: "whitesmoke" },
        headerStyle: { backgroundColor: "whitesmoke" },
        headerTitleStyle: { color: "black", letterSpacing: 1 },
      }}
    >
      <Tab.Screen
        name="Current"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="droplet"
              size={22}
              color={focused ? "black" : "grey"}
            />
          ),
          headerTitle: "Current Weather",
        }}
      >
        {() => <CurrentWeather weatherData={weather?.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name="Upcoming"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="clock"
              size={22}
              color={focused ? "black" : "grey"}
            />
          ),
          headerTitle: "Upcoming Weather",
        }}
      >
        {() => <UpcomingWeather weatherData={weather?.list} />}
      </Tab.Screen>
      <Tab.Screen
        name="City"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="home" size={22} color={focused ? "black" : "grey"} />
          ),
        }}
      >
        {() => <City weatherData={weather?.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
