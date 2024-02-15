import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './App/Screens/Login'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from './App/Navigations/TabNavigation'
import { useFonts } from 'expo-font';
import HomeNavigation from './App/Navigations/HomeNavigation'

const App = () => {
  const [fontsLoaded] = useFonts({
    'appfont-semi': require('./assets/fonts/Outfit-Black.ttf'),
    'appfont-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'appfont-extraBold': require('./assets/fonts/Outfit-ExtraBold.ttf'),
    'appfont-extraLight': require('./assets/fonts/Outfit-ExtraLight.ttf'),
    'appfont-light': require('./assets/fonts/Outfit-Light.ttf'),
    'appfont-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'appfont': require('./assets/fonts/Outfit-Regular.ttf'),
    'appfont-semiBold': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'appfont-thin': require('./assets/fonts/Outfit-Thin.ttf'),
  });
  if (!fontsLoaded) {
    return null
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})