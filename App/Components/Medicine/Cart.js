import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Ionicons, Feather, Entypo, FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../../assets/Shared/Colors';
import { useNavigation } from '@react-navigation/native';



const Cart = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
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
    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity onPress={goBack}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerText}>My Cart</Text>
                <Text style={[styles.headerText, { fontSize: 14 }]}>
                </Text>
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


                    )} />

            </View>
            <View style={styles.containera}>
                {/* Your app content goes here */}

                <TouchableOpacity style={styles.cartButton} s>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                        <Text style={styles.buttonText}> 12 items ₹ 1600.80</Text>
                    </View>
                    <Text style={styles.buttonText}>
                        <Feather name="shopping-cart" size={24} color="white" />

                        Checkout</Text>

                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
        fontFamily: 'appfont-medium',
    }, content: {
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
    containera: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        // Add your additional styles here
    },
    cartButton: {
        position: 'absolute',
        width: '90%', // Set to 80% of the screen width
        padding: 15,
        bottom: 30,
        justifyContent: 'space-between',
        backgroundColor: 'green',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        marginRight: 8,
        fontFamily: 'appfont-medium',
    },
    cartCountBadge: {
        backgroundColor: '#e74c3c',
        borderRadius: 12,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartCountText: {
        color: '#fff',
        fontSize: 12,
    },
});

export default Cart;
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

]

