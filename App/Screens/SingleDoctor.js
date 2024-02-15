import { Dimensions, FlatList, Button, Image, StyleSheet, Text, View, SafeAreaView, } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import HospitalDoctor from '../../App/Components/HospitalScreen/HospitalDoctor';
import Colors from '../../assets/Shared/Colors';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SingleDoctor = () => {

    
    const Categorieslist = [
        {
            id: "1",
            name: "Dentist",
            image: require('../../assets/images/specialities-05.png')
        },
        {
            id: "2",
            name: "Surgen",
            image: require('../../assets/images/specialities-04.png')
        },
        {
            id: "3",
            name: "Pulmonologist",
            image: require('../../assets/images/specialities-03.png')
        },
        {
            id: "4",
            name: "Sexology",
            image: require('../../assets/images/specialities-02.png')
        },
        {
            id: "5",
            name: "Physicology",
            image: require('../../assets/images/specialities-01.png')
        }

    ]
    return (
        <View style={{paddingHorizontal:20}}>
                <FlatList horizontal={false} showsHorizontalScrollIndicator={false}
                    data={Categorieslist}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity >
                            <View style={{ paddingVertical: 10 }}>
                                <View style={{ width: '100%', height: 125, backgroundColor: Colors.MAIN, padding: 10 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'start' }}>
                                        <Image source={{uri:"https://img.freepik.com/free-photo/close-up-delicious-tacos_23-2150830997.jpg?t=st=1707979336~exp=1707982936~hmac=182e0244fa08be9e09b93369be26a1c43cdb2c5174a4d2ba2fdf7e0f98ca0c1b&w=996"}} style={{ width: Dimensions.get('screen').width * 0.25, height: 100, borderRadius: 10 }} />

                                        <View style={{justifyContent:'start'}}>
                                            <Text style={{ fontSize: 18, fontFamily: 'appfont-bold', marginLeft: 10 }}>McDonald New ..</Text>
                                            <Text style={{ fontSize: 15, fontFamily: 'appfont-medium', marginLeft: 10 }}>
                                            4 May 2023</Text>
                                        </View>
                                        <View style={{justifyContent:'end',paddingTop:20}}> 
                                        <Image source={{uri:"https://img.freepik.com/free-vector/poor-good-progress-meter_78370-1269.jpg?w=996&t=st=1707979789~exp=1707980389~hmac=aa0159b932f6b0ab695e286f10fd936c214458b7cc387b2234a1e349a8da738c"}} style={{width:60, height: 40,  }} />
                                        </View>

                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                    )}
                />
        </View>



    )
}

export default SingleDoctor

const styles = StyleSheet.create({})