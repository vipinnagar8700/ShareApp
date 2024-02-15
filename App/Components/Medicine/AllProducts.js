// Import necessary components and libraries
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../assets/Shared/Colors';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const AllProducts = () => {

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };
    const SingleProduct = () => {
        // Add your registration logic here
        navigation.navigate('SingleProduct'); // R
    };

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        setCartItems((prevCartItems) => {
            const updatedCartItems = { ...prevCartItems };
            updatedCartItems[itemId] = (updatedCartItems[itemId] || 0) + 1;
            return updatedCartItems;
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevCartItems) => {
            const updatedCartItems = { ...prevCartItems };
            if (updatedCartItems[itemId] > 0) {
                updatedCartItems[itemId] -= 1;
            }
            return updatedCartItems;
        });
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
        {
            id: "4",
            name: "Baby Care",
            image: require('../../../assets/images/product10.jpg')
        },
        {
            id: "5",
            name: "Baby Care",
            image: require('../../../assets/images/product10.jpg')
        },
        {
            id: "6",
            name: "Baby Care",
            image: require('../../../assets/images/product10.jpg')
        },
        {
            id: "7",
            name: "Baby Care",
            image: require('../../../assets/images/product10.jpg')
        },
        {
            id: "8",
            name: "Baby Care",
            image: require('../../../assets/images/product10.jpg')
        },
        {
            id: "9",
            name: "Baby Care",
            image: require('../../../assets/images/product10.jpg')
        },
        {
            id: "10",
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
                <Text style={styles.headerText}>Hair Care</Text>

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
                    <TextInput placeholder='Search medicine..' style={{ width: '100%', fontFamily: "appfont" }} onChangeText={(value) => setSearchInput(value)} onSubmitEditing={() => setSearchText(searchInput)} />
                </View>
            </View>
            <View style={{ marginVertical: 5, padding: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Entypo name="location-pin" size={24} color="black" />
                    <Text style={{ fontSize: 14, fontFamily: 'appfont-light', marginLeft: 10 }}>Deliver to - Delhi</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'appfont-light', marginLeft: 10 }}>Change</Text>
                </View>
            </View>
            <View style={{ marginBottom: 200, padding: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}>All Products</Text>
                        <Text style={{ fontSize: 13, fontFamily: 'appfont-light' }}>52 products available</Text>
                    </View>
                </View>
                <FlatList horizontal={false} showsHorizontalScrollIndicator={false}
                    data={Categorieslist}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={SingleProduct}>

                            <View style={styles.itemContainer}>
                                <View style={styles.cardContainer}>
                                    <Image
                                        source={item.image} resizeMode="cover"
                                        style={styles.imageStyle}
                                    />
                                    <View >
                                        <View style={styles.textContainer}>
                                            <Text style={styles.title}>{item.name}</Text>
                                            <Text style={styles.titlea}>By Vipin pharma Pvt. ltd</Text>
                                        </View>
                                        <View style={styles.cartActionsContainer}>
                                            <Text style={{ fontSize: 15, fontFamily: 'appfont-medium' }}>MRP ₹ 100</Text>

                                            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                                                <Text style={styles.cartActionText}><FontAwesome5 name="minus" size={17} color="black" />

                                                </Text>
                                            </TouchableOpacity>
                                            <Text style={styles.cartItemCount}>{cartItems[item.id] || 0}</Text>
                                            <TouchableOpacity onPress={() => addToCart(item.id)}>
                                                <Text style={styles.cartActionText}><Entypo name="plus" size={24} color="black" />
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>


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
        width: '100%',
        marginVertical: 10,
    },
    cardContainer: {
        backgroundColor: '#E9ECED',
        padding: 10,
        borderRadius: 10,
        justifyContent: "space-between",
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageStyle: {
        width: 150,
        height: 90,
        borderRadius: 5,
    },
    textContainer: {
        marginLeft: 10,
        flex: 1,
    },
    title: {
        fontFamily: 'appfont-medium',
        fontSize: 16,
    },
    titlea: {
        fontFamily: 'appfont-light',
        fontSize: 13,
    },
    cartActionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    cartActionText: {
        color: 'blue',
    },
    cartItemCount: {
        fontSize: 18,
    },

});

export default AllProducts;
