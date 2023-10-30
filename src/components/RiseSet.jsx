import { StyleSheet, View } from 'react-native'
import IconTextRow from './IconTextCol'

const RiseSet = ({ riseTime, setTime }) => {
  const { riseSetWrapper, riseSetText } = styles

  return (
    <View style={riseSetWrapper}>
      <IconTextRow
        iconName={'sunrise'}
        text={riseTime}
        textStyles={riseSetText}
      />
      <IconTextRow
        iconName={'sunset'}
        text={setTime}
        textStyles={riseSetText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  riseSetWrapper: {
    backgroundColor: 'rgba(0,0,0,.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 10,
    width: '90%',
    alignSelf: 'center',
  },
  riseSetText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
  }
})

export default RiseSet
