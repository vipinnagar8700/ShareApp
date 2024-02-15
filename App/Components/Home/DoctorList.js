import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'

import { AntDesign } from '@expo/vector-icons';


const DoctorList = () => {
  return (
    <View style={{ backgroundColor: Colors.MAIN, marginTop: 15, paddingVertical: 20, padding: 10 }}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-start', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}><AntDesign name="star" size={18} color="green" /></Text>
        <Text style={{ fontSize: 18, fontFamily: 'appfont-medium', marginLeft: 10 }}>Doctors you have consulted</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-start', alignItems: 'center', marginTop: 10 }}>
        <Image source={require('../../../assets/images/user.jpg')} style={{ width: 45, height: 45, borderRadius: 99 }} />
        <View>
          <Text style={{ fontSize: 16, fontFamily: 'appfont-light', marginLeft: 10 }}>Dr. Vipin Nagar</Text>
          <Text style={{ fontSize: 13, fontFamily: 'appfont-light', marginLeft: 10 }}>Dentist</Text>

        </View>
      </View>
    </View>
  )
}

export default DoctorList

const styles = StyleSheet.create({})