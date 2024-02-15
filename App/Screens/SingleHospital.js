import { Dimensions, FlatList, Button, Image, StyleSheet, Text, View, SafeAreaView, } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import HospitalDoctor from '../../App/Components/HospitalScreen/HospitalDoctor';
import Colors from '../../assets/Shared/Colors';
import { AntDesign } from '@expo/vector-icons';

const getCurrentDate = () => {
    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    return `Today, ${month} ${day}, ${year}`;
}
const SingleHospital = ({ hospitalId }) => {

    const navigation = useNavigation()
    const sliderList = [
        {
            id: 1,
            name: 'slider1',
            imageUrl: require('../../assets/images/1.jpg')

        },
        {
            id: 2,
            name: 'slider2',
            imageUrl: require('../../assets/images/2.jpg')
        }
        ,
        {
            id: 3,
            name: 'slider3',
            imageUrl: require('../../assets/images/3.jpg')
        }
        ,
        {
            id: 4,
            name: 'slider4',
            imageUrl: require('../../assets/images/1.jpg')
        }
    ]
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


    const formattedDate = getCurrentDate();

    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>

                    <Ionicons name="arrow-back-circle-outline" size={37} color="black" />
                </TouchableOpacity>

                <Text style={{ fontSize: 20 }}>{hospitalId}</Text>
            </View>
            <View style={{ padding: 10 }}>
                <FlatList data={sliderList} horizontal={true} showsHorizontalScrollIndicator={false} renderItem={({ item }) => (
                    <Image source={item.imageUrl} style={{ width: Dimensions.get('screen').width * 0.93, height: 170, borderRadius: 10, margin: 2, }} />
                )} />
            </View>
            <View style={{ padding: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}>Dr Vipin Nagar</Text>
                    <Text style={{ fontSize: 13, fontFamily: 'appfont-light', color: Colors.white, backgroundColor: 'green', borderRadius: 6, padding: 3 }}>4.5 </Text>
                </View>

                <View>
                    <Text style={{ fontSize: 13, fontFamily: 'appfont-light', color: Colors.PRIMARY, }}>Noida UP </Text>
                    <Text style={{ fontSize: 13, fontFamily: 'appfont-light', color: Colors.PRIMARY, }}>Dentist </Text>
                </View>
            </View>
            <View style={{ backgroundColor: Colors.MAIN }}>
                <FlatList style={{ marginVertical: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}
                    data={Categorieslist}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            style={{ alignItems: 'center', marginHorizontal: 5, borderColor: Colors.PRIMARY, borderWidth: 1, borderRadius: 4 }}>
                            <View style={{ backgroundColor: Colors.MAIN, padding: 2, borderRadius: 5, width: 150, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 16, fontFamily: 'appfont-medium', color: "black" }}>Today,18 Dec</Text>
                                <Text style={{ fontSize: 13, fontFamily: 'appfont-light', color: "green" }}>4 slot available</Text>
                            </View>

                        </TouchableOpacity>
                    )}
                />
            </View>
            <View style={{ marginTop: 10, marginBottom: 10, justifyContent: 'center', alignSelf: 'center' }}>
                <Text style={{ fontSize: 18, fontFamily: 'appfont-bold', color: Colors.PRIMARY }}>{formattedDate}</Text>
            </View>
            <FlatList style={{ marginTop: 10 }} horizontal={false} showsHorizontalScrollIndicator={false}
                data={Categorieslist}
                renderItem={({ item, index }) => (
                    <View style={{ padding: 10, }}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-start', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'appfont-medium' }}>Evening</Text>
                            <Text style={{ fontSize: 13, fontFamily: 'appfont-light', marginLeft: 5 }}>8 slots </Text>
                        </View>
                        <View style={{ backgroundColor: Colors.MAIN }}>
                            <FlatList style={{ marginTop: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}
                                data={Categorieslist}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity
                                        style={{ alignItems: 'center', marginHorizontal: 5, borderColor: Colors.PRIMARY, borderWidth: 1, borderRadius: 4 }}>
                                        <View style={{ backgroundColor: Colors.MAIN, padding: 2, borderRadius: 5, width: 100, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 16, fontFamily: 'appfont-medium', color: "black" }}>12:00 PM</Text>
                                        </View>

                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                        <View style={{ backgroundColor: Colors.MAIN }}>
                            <FlatList style={{ marginTop: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}
                                data={Categorieslist}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity
                                        style={{ alignItems: 'center', marginHorizontal: 5, borderColor: Colors.PRIMARY, borderWidth: 1, borderRadius: 4 }}>
                                        <View style={{ backgroundColor: Colors.MAIN, padding: 2, borderRadius: 5, width: 100, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 16, fontFamily: 'appfont-medium', color: "black" }}>12:00 PM</Text>
                                        </View>

                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-start', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'appfont-medium' }}>Afternoon</Text>
                            <Text style={{ fontSize: 13, fontFamily: 'appfont-light', marginLeft: 5 }}>8 slots </Text>
                        </View>
                        <View style={{ backgroundColor: Colors.MAIN }}>
                            <FlatList style={{ marginTop: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}
                                data={Categorieslist}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity
                                        style={{ alignItems: 'center', marginHorizontal: 5, borderColor: Colors.PRIMARY, borderWidth: 1, borderRadius: 4 }}>
                                        <View style={{ backgroundColor: Colors.MAIN, padding: 2, borderRadius: 5, width: 100, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 16, fontFamily: 'appfont-medium', color: "black" }}>12:00 PM</Text>
                                        </View>

                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                        <View style={{ backgroundColor: Colors.MAIN }}>
                            <FlatList style={{ marginTop: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}
                                data={Categorieslist}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity
                                        style={{ alignItems: 'center', marginHorizontal: 5, borderColor: Colors.PRIMARY, borderWidth: 1, borderRadius: 4 }}>
                                        <View style={{ backgroundColor: Colors.MAIN, padding: 2, borderRadius: 5, width: 100, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 16, fontFamily: 'appfont-medium', color: "black" }}>12:00 PM</Text>
                                        </View>

                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-start', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'appfont-medium' }}>Night</Text>
                            <Text style={{ fontSize: 13, fontFamily: 'appfont-light', marginLeft: 5 }}>2 slots </Text>
                        </View>
                        <View style={{ backgroundColor: Colors.MAIN }}>
                            <FlatList style={{ marginTop: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}
                                data={Categorieslist}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity
                                        style={{ alignItems: 'center', marginHorizontal: 5, borderColor: Colors.PRIMARY, borderWidth: 1, borderRadius: 4 }}>
                                        <View style={{ backgroundColor: Colors.MAIN, padding: 2, borderRadius: 5, width: 100, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 16, fontFamily: 'appfont-medium', color: "black" }}>12:00 PM</Text>
                                        </View>

                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                        <View style={{ backgroundColor: Colors.MAIN }}>
                            <FlatList style={{ marginTop: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}
                                data={Categorieslist}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity
                                        style={{ alignItems: 'center', marginHorizontal: 5, borderColor: Colors.PRIMARY, borderWidth: 1, borderRadius: 4 }}>
                                        <View style={{ backgroundColor: Colors.MAIN, padding: 2, borderRadius: 5, width: 100, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 16, fontFamily: 'appfont-medium', color: "black" }}>12:00 PM</Text>
                                        </View>

                                    </TouchableOpacity>
                                )}
                            />
                        </View>

                    </View>

                )} />
        </View>



    )
}

export default SingleHospital
