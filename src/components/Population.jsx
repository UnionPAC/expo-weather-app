import { Text, StyleSheet, View } from 'react-native'
import { Feather } from "@expo/vector-icons";

const Population = ({ populationSize }) => {
  const { populationWrapper, populationText } = styles

  return (
    <View style={[populationWrapper]}>
      <Feather name="user" size={50} />
      <Text style={populationText}>{populationSize}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  populationWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  populationText: {
    fontSize: 24,
    marginLeft: 8,
    marginTop: 5,
    fontWeight: 'bold'
  }
})

export default Population
