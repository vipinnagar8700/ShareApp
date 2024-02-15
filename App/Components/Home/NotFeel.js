import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const NotFeel = () => {



    const navigation = useNavigation()
    const Categorieslist = [
        {
            id: "1",
            name: "Dentist",
            image: require('../../../assets/images/specialities-05.png')
        },
        {
            id: "2",
            name: "Surgen",
            image: require('../../../assets/images/specialities-04.png')
        },
        {
            id: "3",
            name: "Pulmonologist",
            image: require('../../../assets/images/specialities-03.png')
        },
        {
            id: "4",
            name: "Sexology",
            image: require('../../../assets/images/specialities-02.png')
        },
        {
            id: "5",
            name: "Physicology",
            image: require('../../../assets/images/specialities-01.png')
        }

    ]


    const AllSpecialities = () => {
        // Add your registration logic here
        navigation.navigate('BookAppointment'); // R
    };
    return (
        <View style={{ marginTop: 15, padding: 10 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}>Not felling too well?</Text>

                    <Text style={{ fontSize: 13, fontFamily: 'appfont-light', color: Colors.PRIMARY }}>Treat common symptoms with top Specilists</Text>

                </View>
            </View>
            <FlatList style={{ marginTop: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}
                data={Categorieslist}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Hospital-doctor-list-screen', {
                        Categorieslist: item.name
                    })}
                        style={{ alignItems: 'center', marginHorizontal: 5 }}>
                        <View style={{ backgroundColor: Colors.MAIN, padding: 2, borderRadius: 99, width: 70, height: 70, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={item.image}
                                style={{ width: 50, height: 50, borderRadius: 99 }}  // Adjust the width and height as needed
                            />
                        </View>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
            <FlatList style={{ marginTop: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}
                data={Categorieslist}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Hospital-doctor-list-screen', {
                        Categorieslist: item.name
                    })}
                        style={{ alignItems: 'center', marginHorizontal: 5 }}>
                        <View style={{ backgroundColor: Colors.MAIN, padding: 2, borderRadius: 99, width: 70, height: 70, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={item.image}
                                style={{ width: 50, height: 50, borderRadius: 99 }}  // Adjust the width and height as needed
                            />
                        </View>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
            <View style={styles.container}>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={AllSpecialities}>
                        <Text style={styles.buttonText}>View All Symptoms</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )
}

export default NotFeel

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
})