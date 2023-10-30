import { View, Text, StyleSheet } from 'react-native'
import { Feather } from "@expo/vector-icons";

const IconTextRow = ({ iconName, text, textStyles }) => {
  const { wrapper } = styles
  return (
    <View style={wrapper}>
      <Feather name={iconName} size={40} style={{ marginBottom: 8, color: 'white' }} />
      <Text style={textStyles}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    alignItems: 'center'
  }
})

export default IconTextRow
