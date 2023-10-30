import React from 'react'
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'

const DATA = [
  {
    dt_txt: '2022-08-30 16:00:01',
    main: {
      temp_min: 6.34,
      temp_max: 8.24
    },
    weather: [
      {
        main: 'Rain'
      }
    ]
  },
  {
    dt_txt: '2022-08-30 16:00:02',
    main: {
      temp_min: 6.34,
      temp_max: 8.24
    },
    weather: [
      {
        main: 'Rain'
      }
    ]
  },
  {
    dt_txt: '2022-08-30 16:00:03',
    main: {
      temp_min: 6.34,
      temp_max: 8.24
    },
    weather: [
      {
        main: 'Rain'
      }
    ]
  }
]

const UpcomingWeather = () => {
  const { container, image } = styles

  const renderItem = ({ item }) => {
    const { dt_txt, main, weather } = item
    return (
      <ListItem
        condition={weather[0].main}
        dt_txt={dt_txt}
        min={main.temp_min}
        max={main.temp_max}
      />
    )
  }

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/upcoming-weather-bg.jpg')}
        // Photo by <a href="https://unsplash.com/@enginakyurt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">engin akyurt</a> on <a href="https://unsplash.com/photos/white-clouds-and-blue-sky-during-daytime-HBh8cFTfAPE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        style={image}
      >
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'cornflowerblue'
  },
  image: {
    flex: 1
  }
})

export default UpcomingWeather
