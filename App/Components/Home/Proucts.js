import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const proucts = () => {



  const navigation = useNavigation()


  const AllProducts = () => {
    // Add your registration logic here
    navigation.navigate('AllProducts'); // R
  };

  const Categorieslist = [
    {
      id: "1",
      name: "Hair Care",
      image: require('../../../assets/images/product9.jpg')
    },
    {
      id: "2",
      name: "Skin Care",
      image: require('../../../assets/images/product10.jpg')
    },
    {
      id: "3",
      name: "Baby Care",
      image: require('../../../assets/images/product10.jpg')
    },
  ]
  const Categorieslista = [
    {
      id: "1",
      name: "Hair Care",
      image: require('../../../assets/images/product12.jpg')
    },
    {
      id: "2",
      name: "Skin Care",
      image: require('../../../assets/images/product13.jpg')
    },
    {
      id: "3",
      name: "Baby Care",
      image: require('../../../assets/images/product14.jpg')
    },
  ]

  const Categorieslistaa = [
    {
      id: "1",
      name: "Hair Care",
      image: require('../../../assets/images/product15.jpg')
    },
    {
      id: "2",
      name: "Skin Care",
      image: require('../../../assets/images/product.jpg')
    },
    {
      id: "3",
      name: "Baby Care",
      image: require('../../../assets/images/product10.jpg')
    },
  ]
  return (
    <View style={{ marginTop: 15, padding: 10 }}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}>Health products delivered in 24 hours</Text>

      </View>
      <FlatList
        style={{ marginTop: 10 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={Categorieslist}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={AllProducts}>
            <View style={styles.itemContainer}>
              <View style={styles.cardContainer}>
                <Image
                  source={item.image} resizeMode="cover"
                  style={styles.imageStyle}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{item.name}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <FlatList
        style={{ marginTop: 10 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={Categorieslista}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={AllProducts}>
            <View style={styles.itemContainer}>
              <View style={styles.cardContainer}>
                <Image
                  source={item.image} resizeMode="cover"
                  style={styles.imageStyle}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{item.name}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <FlatList
        style={{ marginTop: 10 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={Categorieslistaa}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={AllProducts}>

            <View style={styles.itemContainer}>
              <View style={styles.cardContainer}>
                <Image
                  source={item.image} resizeMode="cover"
                  style={styles.imageStyle}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{item.name}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

        )}
      />
    </View>
  )
}

export default proucts

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  cardContainer: {
    backgroundColor: '#E9ECED', // Set the background color or customize as needed
    padding: 2,
    borderRadius: 10,
  },
  imageStyle: {
    width: 90,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    padding: 3,
  },
  title: {
    fontFamily: 'appfont-medium',
    fontSize: 16,
  },
});
