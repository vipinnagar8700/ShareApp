import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home';
import HospitalDoctorList from '../Screens/HospitalDoctorList';
import SingleHospital from '../Screens/SingleHospital';
import SingleDoctor from '../Screens/SingleDoctor';
import Login from '../Screens/Login';
import SplashScreen from '../Screens/SplashScreen';
import MainHome from '../Screens/MainHome';
import Register from '../Screens/Register';
import BookAppointment from '../Components/BookAppointment';
import Pharmacy from '../Components/Medicine/Pharmacy';
import AllProducts from '../Components/Medicine/AllProducts';
import SingleProduct from '../Components/Medicine/SingleProduct';
import Cart from '../Components/Medicine/Cart';
import Profile from '../Components/Profile/Profile';
import Appointment from '../Components/Appointment/Appointment';
import Interest from '../Screens/Interest';

const Stack = createStackNavigator();

const HomeNavigation = () => {
  
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
       {/* <Stack.Screen name="SingleDoctorPage" component={SingleDoctor} /> */}
    {/* <Stack.Screen name='Splash' component={SplashScreen} options={{ tabBarVisible: false }} />  */}
    <Stack.Screen name="Home" component={Home} options={{ tabBarVisible: true }} />
      {/* <Stack.Screen name='Register' component={Register} /> */}
      {/* <Stack.Screen name='Interest' component={Interest} /> 
      {/* 
     
      <Stack.Screen name="SingleHospitalPage" component={SingleHospital} />
     
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name='MainHome' component={MainHome} />
      
      <Stack.Screen name='AllProducts' component={AllProducts} />
      <Stack.Screen name='SingleProduct' component={SingleProduct} />
      <Stack.Screen name='Cart' component={Cart} />  */}
  {/* <Stack.Screen name="Profile" component={Profile} /> */}
  
    </Stack.Navigator>
  )
}

export default HomeNavigation

const styles = StyleSheet.create({})