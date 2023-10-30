import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar
} from 'react-native'
import Population from '../components/Population'
import RiseSet from '../components/RiseSet'

const City = () => {
  const { container, imageLayout, cityText, cityName, countryName } = styles

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city.jpg')}
        style={imageLayout}
      >
        <Text style={[cityText, cityName]}>Hamilton</Text>
        <Text style={[cityText, countryName]}>Canada</Text>
        <Population populationSize={'500,000'} />
        <RiseSet riseTime={'7:32'} setTime={'20:55'} />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex: 1
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black'
  },
  cityName: {
    fontSize: 40,
    marginTop: 20
  },
  countryName: {
    fontSize: 22
  }
})

export default City
