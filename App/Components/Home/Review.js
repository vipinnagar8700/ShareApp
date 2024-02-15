import { StyleSheet, Text, View, Dimensions, FlatList, Image } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const Review = () => {
  const sliderList = [
    {
      id: 1,
      name: 'slider1',
      imageUrl: "https://img.freepik.com/free-photo/doctor-is-going-examine-his-patient-using-his-stethoscope-sitting-people_1150-6561.jpg?w=1060&t=st=1700298786~exp=1700299386~hmac=fbe5514eee063a68fcaa9b554d36a0c0988d24f80e47dd5925466afa809d993e"

    },
    {
      id: 2,
      name: 'slider2',
      imageUrl: "https://img.freepik.com/free-photo/doctor-patient_1421-64.jpg?w=1060&t=st=1700298808~exp=1700299408~hmac=35ccc4a1e742d71a709dcdea9e897f76487231203619b85283c81f6da41d7b42"

    }
    ,
    {
      id: 3,
      name: 'slider3',
      imageUrl: "https://img.freepik.com/free-photo/medical-banner-with-doctor-holding-stethoscope_23-2149611240.jpg?w=1380&t=st=1700298909~exp=1700299509~hmac=3ad878ac8b8ca85c97fa6f88c3e30017627348713fd86be9dd540e82b74018ee"

    }
    ,
    {
      id: 4,
      name: 'slider4',
      imageUrl: "https://img.freepik.com/free-photo/flat-lay-health-still-life-arrangement-with-copy-space_23-2148854063.jpg?w=1380&t=st=1700298864~exp=1700299464~hmac=8d07d8bd097f7562956a78780ab3b7aa84403370e1552664cb7bbdb4e43d8e53"

    }
  ]



  return (
    <View style={{
      marginTop: 25, padding: 10,
      paddingBottom: 25, paddingTop: 20, backgroundColor: Colors.MAIN
    }}>

      <View style={{ padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-start', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}><FontAwesome name="commenting-o" size={24} color="green" />
        </Text>
        <Text style={{ fontSize: 18, fontFamily: 'appfont-medium', marginLeft: 5 }}>Free expert answers to your health questions</Text>
      </View>
      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-start', alignItems: 'center', marginTop: 10 }}>
              <Image source={require('../../../assets/images/user.jpg')} style={{ width: 45, height: 45, borderRadius: 99 }} />
              <View>
                <Text style={{ fontSize: 16, fontFamily: 'appfont-medium', marginLeft: 10 }}>Asked for female</Text>
                <Text style={{ fontSize: 13, fontFamily: 'appfont-light', marginLeft: 10 }}>33 Years,Jamshedpur</Text>

              </View>
              <Text style={{ fontSize: 13, fontFamily: 'appfont-light', marginLeft: 10 }}>15 m ago</Text>
            </View>
            <View>
              <Text style={{ fontSize: 16, fontFamily: 'appfont-medium' }}>Lactation mother</Text>
              <Text style={{ fontSize: 13, fontFamily: 'appfont-light' }}>I am a Lactating mother of 22 month child </Text>
              <Text style={{ fontSize: 13, fontFamily: 'appfont-light' }}>28 sept light less flow </Text>
              <Text style={{ fontSize: 13, fontFamily: 'appfont-light' }}>24 oct first day less flow </Text>
              <Text style={{ fontSize: 13, fontFamily: 'appfont-light' }}>22 nov flow was normal </Text>
              <Text style={{ fontSize: 13, fontFamily: 'appfont-light' }}>I am have to take treatment </Text>
            </View>

          </View>
        )}
      />

      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Ask a Free Question</Text>
        </View>
      </View>

    </View>
  )
}

export default Review

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  buttonContainer: {
    borderWidth: 1, // Use borderWidth instead of border
    borderColor: 'black',
    padding: 10,
    width: '100%',
    borderRadius: 5
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'appfont-medium',

  },
  card: {
    width: Dimensions.get('screen').width * 0.73,
    height: 200,
    borderRadius: 10,
    margin: 2,
    backgroundColor: 'lightgray',
    padding: 10,
    alignItems: "center"
    // Set the background color or customize as needed
    // Add other card styles as needed
  },
  divider: {
    height: 1,
    backgroundColor: 'black', // Color of the divider
    marginVertical: 5, // Adjust the vertical margin as needed
  },
})