import {
    StyleSheet, Text, View, FlatList,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    Image,
    Dimensions,
    Button,
} from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import PageHeader from '../../assets/Shared/PageHeader';
import Colors from '../../assets/Shared/Colors';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const HospitalDoctorList = () => {
    const navigation = useNavigation();
    const param = useRoute().params;
    console.log(param, "uuu");
    const data = [
        { id: '1', name: 'Doctor 1' },
        { id: '2', name: 'Doctor 2' },
        { id: '3', name: 'Doctor 2' },
        { id: '4', name: 'Doctor 2' },
        { id: '5', name: 'Doctor 2' },
        { id: '6', name: 'Doctor 2' },
        { id: '7', name: 'Doctor 2' },
        { id: '8', name: 'Doctor 2' },
        { id: '9', name: 'Doctor 2' },
        { id: '10', name: 'Doctor 2' },
        { id: '11', name: 'Doctor 2' },
        { id: '12', name: 'Doctor 2' },
        // Add more items as needed
    ];

    const renderItem = ({ item }) => (
        <View style={{ marginVertical: 10 }}>
            <View style={{ width: '100%', height: 200, backgroundColor: Colors.MAIN, padding: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'start' }}>
                    <Image source={require('../../assets/images/user2.jpg')} style={{ width: Dimensions.get('screen').width * 0.53, height: 170, borderRadius: 1 }} />

                    <View>
                        <Text style={{ fontSize: 18, fontFamily: 'appfont-medium', marginLeft: 10 }}>Flex Hospital</Text>
                        <Text style={{ fontSize: 13, fontFamily: 'appfont-light', marginLeft: 10 }}><Entypo name="location-pin" size={24} color="green" />
                            Noida UP</Text>
                        <Text style={{ fontSize: 13, fontFamily: 'appfont-light', marginLeft: 10 }}><AntDesign name="star" size={18} color="green" />4.5 Review</Text>
                        <Text style={{ fontSize: 13, fontFamily: 'appfont-light', marginLeft: 10 }}><FontAwesome5 name="clock" size={18} color="green" />
                            24 X 7</Text>
                        <Text style={{ fontSize: 13, fontFamily: 'appfont-light', marginLeft: 10 }}><FontAwesome name="phone" size={18} color="green" /> +918700504218</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SingleDoctorPage', { hospitalId: item.id })}>
                            <Button title="View" color="#2C3273" onPress={() => navigation.navigate('SingleDoctorPage', { hospitalId: item.id })} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
    return (
        <View style={{ padding: 10 }}>
            <PageHeader title={param?.Categorieslist} />
            <SafeAreaView style={{ marginTop: 10, marginBottom: 140 }} >
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </SafeAreaView>
        </View>
    );

}

export default HospitalDoctorList

const styles = StyleSheet.create({})