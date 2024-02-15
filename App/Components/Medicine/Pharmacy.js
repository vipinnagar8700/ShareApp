// Import necessary components and libraries
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../assets/Shared/Colors';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const Pharmacy = () => {

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };
    const Categorieslist = [
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
    const AllProducts = () => {
        // Add your registration logic here
        navigation.navigate('AllProducts'); // R
    };

    const Categorieslista = [
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
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={goBack}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Life Care Pharmacy</Text>
                <Text style={[styles.headerText, { fontSize: 14 }]}>

                    <Feather name="shopping-cart" size={24} color="black" />

                </Text>
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
                    <Image source={require('../../../assets/images/user.jpg')} style={{ width: 45, height: 45, borderRadius: 99 }} />
                    <View>
                        <Text style={{ fontSize: 16, fontFamily: 'appfont-light', marginLeft: 10 }}>Dr. Vipin Nagar</Text>
                        <Text style={{ fontSize: 13, fontFamily: 'appfont-light', marginLeft: 10 }}>Dentist</Text>

                    </View>
                </View>
            </View>
            <View style={{ marginTop: 15, marginBottom: 270, padding: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}>Shop Health Products By Categories</Text>
                    </View>
                </View>
                <FlatList horizontal={false} showsHorizontalScrollIndicator={false}
                    data={Categorieslist}
                    renderItem={({ item, index }) => (
                        <View>
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

export default Pharmacy;
