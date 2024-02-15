import { StyleSheet, Text, View, Dimensions, FlatList, Image } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'
import { AntDesign } from '@expo/vector-icons';

const OffersBanner = () => {
  const sliderList = [
    {
      id: 1,
      name: 'slider1',
      imageUrl: require('../../../assets/images/k.jpg')

    },
    {
      id: 2,
      name: 'slider2',
      imageUrl: require('../../../assets/images/l.jpg')
    }
    ,
    {
      id: 3,
      name: 'slider3',
      imageUrl: require('../../../assets/images/m.jpg')
    }
    ,
    {
      id: 4,
      name: 'slider4',
      imageUrl: require('../../../assets/images/k.jpg')
    }
  ]



  return (
    <View style={{
      marginTop: 25,
      paddingBottom: 25, paddingTop: 25, backgroundColor: Colors.PRIMARY
    }}>

      <View style={{ padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-start', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}><AntDesign name="star" size={18} color="white" /></Text>
        <Text style={{ fontSize: 18, fontFamily: 'appfont-medium', color: 'white', marginLeft: 5 }}>Safe and Secure surgeries</Text>
      </View>
      <FlatList data={sliderList} horizontal={true} showsHorizontalScrollIndicator={false} renderItem={({ item }) => (
        <Image source={ item.imageUrl } resizeMode="cover" style={{ width: Dimensions.get('screen').width * 0.7, height: 170, borderRadius: 10, margin: 2, backgroundColor:Colors.MAIN}} />
      )} />
    </View>
  )
}

export default OffersBanner

const styles = StyleSheet.create({})