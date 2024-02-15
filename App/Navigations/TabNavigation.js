import { View, Text } from 'react-native'
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import Appointment from '../Screens/Appointment';
import Profile from '../Screens/Profile';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';

const Tab  = createBottomTabNavigator()

const TabNavigation = () => {
  return (
   <Tab.Navigator  screenOptions={{
    headerShown:false
   }}  
    tabBarOptions={{
      style: {
        borderTopLeftRadius: 20, // Radius for top-left corner
        borderTopRightRadius: 20, // Radius for top-right corner
      },
      tabStyle: {
        backgroundColor: '#ffffff', // Background color of the tab bar
      },
      labelStyle: {
        fontFamily: 'appfont-bold',
        fontSize: 14,
      },
      activeTintColor: '#2C3273',
      inactiveTintColor: '#7E7E7E',
   
  }}
   >
    <Tab.Screen name='Home'  component={HomeNavigation} options={{tabBarIcon:({color,size})=>(
        <Ionicons name="ios-home" size={24}   color="#2C3273" style={{fontFamily: "appfont-bold"}} />
    )}}/>
    <Tab.Screen name='SingleHospitalPage'  component={HomeNavigation} options={{tabBarIcon:({color,size})=>(
        <Ionicons name="ios-home" size={24}   color="#2C3273" style={{fontFamily: "appfont-bold"}} />
    )}}/>
    <Tab.Screen name='MainHome'  component={HomeNavigation} options={{tabBarIcon:({color,size})=>(
        <Ionicons name="ios-home" size={24}   color="#2C3273" style={{fontFamily: "appfont-bold"}} />
    )}}/>
    <Tab.Screen name='AllProducts'  component={HomeNavigation} options={{tabBarIcon:({color,size})=>(
        <Ionicons name="ios-home" size={24}   color="#2C3273" style={{fontFamily: "appfont-bold"}} />
    )}}/>
    
   

    <Tab.Screen name='Profile' component={Profile} options={{tabBarIcon:({color,size})=>(
        <FontAwesome name="user" size={24} color="#2C3273" style={{fontFamily: "appfont-bold"}} />
    )}}/>

    </Tab.Navigator>
  )
}

export default TabNavigation