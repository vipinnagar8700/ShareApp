import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Labtests = () => {



  const navigation = useNavigation()



  const Categorieslist = [
    {
      id: "1",
      name: "Diabetes tests",
      title: "Starting from ₹ 100",
      image: require('../../../assets/images/a.webp')
    },
    {
      id: "2",
      name: "Tests for fever",
      title: "Starting from ₹ 100",
      image: require('../../../assets/images/b.webp')
    },
  ]


  const Categorieslista = [
    {
      id: "1",
      name: "Diabetes tests",
      title: "Starting from ₹ 100",
      image: require('../../../assets/images/c.webp')
    },
    {
      id: "2",
      name: "Tests for fever",
      title: "Starting from ₹ 100",
      image: require('../../../assets/images/d.webp')
    },
  ]
  const Categorieslistb = [
    {
      id: "1",
      name: "Diabetes tests",
      title: "Starting from ₹ 100",
      image: require('../../../assets/images/a.webp')
    },
    {
      id: "2",
      name: "Tests for fever",
      title: "Starting from ₹ 100",
      image: require('../../../assets/images/b.webp')
    },
  ]

  return (
    <View style={{ marginTop: 15, padding: 10 }}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}>Popular health checkup and screening tests</Text>

      </View>
      <FlatList style={{ marginTop: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}
        data={Categorieslist}
        renderItem={({ item, index }) => (
          <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <View style={{ backgroundColor: Colors.MAIN, padding: 2, borderRadius: 20 }}>
              <Image
                source={item.image}
                style={{ width: 155, height: 150, borderRadius: 20 }}  // Adjust the width and height as needed
              />

            </View>
            <View style={{ padding: 3 }}>

              <Text style={{ fontFamily: "appfont-medium", fontSize: 18 }}>{item.name}</Text>
              <Text style={{ fontFamily: "appfont-light", fontSize: 13, overflow: 'hidden',color:"green" }}>{item.title}</Text>
            </View>
          </View>
        )}
      />
        <FlatList style={{ marginTop: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}
        data={Categorieslista}
        renderItem={({ item, index }) => (
          <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <View style={{ backgroundColor: Colors.MAIN, padding: 2, borderRadius: 20 }}>
              <Image
                source={item.image}
                style={{ width: 155, height: 150, borderRadius: 20 }}  // Adjust the width and height as needed
              />

            </View>
            <View style={{ padding: 3 }}>

              <Text style={{ fontFamily: "appfont-medium", fontSize: 18 }}>{item.name}</Text>
              <Text style={{ fontFamily: "appfont-light", fontSize: 13, overflow: 'hidden',color:"green" }}>{item.title}</Text>
            </View>
          </View>
        )}
      />
        <FlatList style={{ marginTop: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}
        data={Categorieslistb}
        renderItem={({ item, index }) => (
          <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <View style={{ backgroundColor: Colors.MAIN, padding: 2, borderRadius: 20 }}>
              <Image
                source={item.image}
                style={{ width: 155, height: 150, borderRadius: 20 }}  // Adjust the width and height as needed
              />

            </View>
            <View style={{ padding: 3 }}>

              <Text style={{ fontFamily: "appfont-medium", fontSize: 18 }}>{item.name}</Text>
              <Text style={{ fontFamily: "appfont-light", fontSize: 13, overflow: 'hidden',color:"green" }}>{item.title}</Text>
            </View>
          </View>
        )}
      />
      
      
    </View>
  )
}

export default Labtests

