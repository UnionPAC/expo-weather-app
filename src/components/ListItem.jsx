import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utils/weatherType";
import { format, parseISO } from "date-fns";

const ListItem = ({ dt_txt, min, max, condition }) => {
  const { item, temp, date, dateTextWrapper } = styles;

  const dt = parseISO(dt_txt);
  const formattedDate = format(dt, "EEE, MMM. d");
  const formattedTime = format(dt, "H:mm a");

  return (
    <View style={item}>
      <Feather name={weatherType[condition].icon} size={50} color="white" />
      <View style={dateTextWrapper}>
        <Text style={[date, {fontWeight: 'bold'}]}>{formattedDate}</Text>
        <Text style={date}>{formattedTime}</Text>
      </View>

      <Text style={temp}>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 12,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderColor: 'rgba(0,0,0,0.5)',
    borderRadius: 14,
    borderWidth: 3
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  date: {
    color: "white",
    fontSize: 15,
  },
  dateTextWrapper: {
    flexDirection: "column",
  },
});

export default ListItem;
