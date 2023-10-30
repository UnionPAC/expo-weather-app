import { View, Text } from 'react-native'

const RowText = ({
  textOne,
  textTwo,
  containerStyles,
  textOneStyles,
  textTwoStyles
}) => {
  return (
    <View style={containerStyles}>
      <Text style={textOneStyles}>{textOne}</Text>
      <Text style={textTwoStyles}>{textTwo}</Text>
    </View>
  )
}

export default RowText
