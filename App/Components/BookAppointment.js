// Import necessary components and libraries
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../assets/Shared/Colors';
import NotFeel from './Home/NotFeel';
import { AntDesign } from '@expo/vector-icons';

const BookAppointment = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };
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
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={goBack}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Find Doctors</Text>
                <Text style={[styles.headerText, { fontSize: 14 }]}>Sec 157,Noi..</Text>
            </View>

            {/* Content */}
            <View style={{ marginVertical: 5, padding: 10 }}>
                <View style={{
                    display: 'flex', flexDirection: 'row', gap: 5,
                    alignItems: 'center', borderWidth: 0.6, borderColor: '#E9ECED', padding: 7, borderRadius: 22, backgroundColor: "#E9ECED"
                }}>
                    <AntDesign name="search1" size={24} color="black" />
                    <TextInput placeholder='Search' style={{ width: '100%', fontFamily: "appfont" }} onChangeText={(value) => setSearchInput(value)} onSubmitEditing={() => setSearchText(searchInput)} />
                </View>

            </View>
            <View style={{ backgroundColor: Colors.MAIN, marginTop: 15, paddingVertical: 20, padding: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-start', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}><AntDesign name="star" size={18} color="green" /></Text>
                    <Text style={{ fontSize: 18, fontFamily: 'appfont-medium', marginLeft: 10 }}>Doctors you have consulted</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-start', alignItems: 'center', marginTop: 10 }}>
                    <Image source={require('../../assets/images/user.jpg')} style={{ width: 45, height: 45, borderRadius: 99 }} />
                    <View>
                        <Text style={{ fontSize: 16, fontFamily: 'appfont-light', marginLeft: 10 }}>Dr. Vipin Nagar</Text>
                        <Text style={{ fontSize: 13, fontFamily: 'appfont-light', marginLeft: 10 }}>Dentist</Text>

                    </View>
                </View>
            </View>
            <View style={{ marginTop: 15, padding: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}>All specialities</Text>

                        <Text style={{ fontSize: 13, fontFamily: 'appfont-light', color: Colors.PRIMARY }}>Treat common symptoms with top Specilists</Text>

                    </View>
                </View>
                <FlatList style={{ marginTop: 10 }} horizontal={false} showsHorizontalScrollIndicator={false}
                    data={Categorieslist}
                    renderItem={({ item, index }) => (
                        <View>

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
                        </View>
                    )} />

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: Colors.PRIMARY,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerText: {
        fontSize: 18,
        marginLeft: 10,
        color: Colors.white,
        fontFamily: 'appfont-medium'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default BookAppointment;
