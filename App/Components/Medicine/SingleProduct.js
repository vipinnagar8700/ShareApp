import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Ionicons, Feather, Entypo, FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../../assets/Shared/Colors';
import { useNavigation } from '@react-navigation/native';

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

const SingleProduct = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    const Cart = () => {
        // Add your registration logic here
        handleCartPress()
        navigation.navigate('Cart'); // R
    };

    const [cartCount, setCartCount] = useState(0);

    // Function to update the cart count
    const updateCartCount = (count) => {
        setCartCount(count);
    };

    // Example: Increment cart count on button press
    const handleCartPress = () => {
        const newCartCount = cartCount + 1;
        updateCartCount(newCartCount);
        // Add your logic to navigate to the cart view or perform other actions
    };
    const sliderList = [
        {
            id: 1,
            name: 'slider1',
            imageUrl: require('../../../assets/images/1.jpg')
        },
        {
            id: 2,
            name: 'slider2',
            imageUrl: require('../../../assets/images/2.jpg')
        },
        {
            id: 3,
            name: 'slider3',
            imageUrl: require('../../../assets/images/3.jpg')
        },
        {
            id: 4,
            name: 'slider4',
            imageUrl: require('../../../assets/images/1.jpg')
        }
    ];

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

    const formattedDate = getCurrentDate();

    // Replace this with your actual item data
    const sampleItem = {
        id: 1,
        name: 'Hair Care Oil',
        brand: 'Vipin Pharma Pvt. Ltd.',
        price: 105,
        mrp: 100,
    };

    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity onPress={goBack}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerText}>{sampleItem.name}</Text>
                <TouchableOpacity onPress={Cart}>
                    <Text style={[styles.headerText, { fontSize: 14 }]}>
                        <Feather name="shopping-cart" size={24} color="white" />
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={{ padding: 10 }}>
                <FlatList
                    data={sliderList}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Image
                            source={item.imageUrl}
                            style={{ width: Dimensions.get('screen').width * 0.93, height: 170, borderRadius: 10, margin: 2 }}
                        />
                    )}
                />
            </View>
            <View style={{ padding: 10 }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}>{sampleItem.name}</Text>
                    <Text style={{ fontSize: 13, fontFamily: 'appfont-medium' }}>{`By ${sampleItem.brand}`}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    <View>
                        <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}>{`₹ ${sampleItem.price}`}</Text>
                        <Text style={{ fontSize: 13, fontFamily: 'appfont-light' }}>Inclusive of all taxes</Text>
                    </View>
                    <View style={styles.cartActionsContainer}>
                        <TouchableOpacity onPress={() => removeFromCart(sampleItem.id)}>
                            <Text style={styles.cartActionText}><FontAwesome5 name="minus" size={17} color="#2C3273" /></Text>
                        </TouchableOpacity>
                        <Text style={styles.cartItemCount}> Qty : {cartItems[sampleItem.id] || 0}</Text>
                        <TouchableOpacity onPress={() => addToCart(sampleItem.id)}>
                            <Text style={styles.cartActionText}><Entypo name="plus" size={24} color="#2C3273" /></Text>
                        </TouchableOpacity>
                    </View>



                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: Colors.white, padding: 10, backgroundColor: 'gray', borderRadius: 10 }}>15 TABLET( 15/STRIP)</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}>Product Information</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 16, fontFamily: 'appfont-light' }}>Manufacturer :</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'appfont-medium', flexWrap: 'wrap' }}>Vipin Pharma Laboratoiries Pvt Ltd</Text>



                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}>Know more</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 16, fontFamily: 'appfont-light' }}>View Details related to hari care oil</Text>




                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}>Return Policy</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 16, fontFamily: 'appfont-light' }}>This item is not returnable.</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}>Disclaimer</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 16, fontFamily: 'appfont-light' }}>We,ve made all posible efforts to ensure that the information provided here is accurate,up to date and complete.</Text>
                </View>
            </View>
            <View style={styles.container}>
                {/* Your app content goes here */}

                <TouchableOpacity style={styles.cartButton} onPress={Cart}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                        <Text style={styles.buttonText}>1 items |  105</Text>
                    </View>
                    <Text style={styles.buttonText}>
                        <Feather name="shopping-cart" size={24} color="white" />

                        View Cart</Text>
                    {cartCount > 0 && <View style={styles.cartCountBadge}>
                        <Text style={styles.cartCountText}>{cartCount}</Text>
                    </View>}
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
    },
    cartActionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        gap: 10,
        borderBlockColor: Colors.PRIMARY,
        borderWidth: 1,
        padding: 8,
        borderRadius: 5
    },
    cartActionText: {
        color: 'blue',
    },
    cartItemCount: {
        fontSize: 18,
        color: 'gray'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // Add your additional styles here
    },
    cartButton: {
        position: 'absolute',
        width: '90%', // Set to 80% of the screen width
        padding: 15,
        bottom: -50,
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

export default SingleProduct;



const data = [
    {
        id: 1,
        name: '1111',
        img: require('../../../assets/images/user.jpg')
    },
    {
        id: 2,
        name: '1111',
        img: require('../../../assets/images/user.jpg')
    },
    {
        id: 3,
        name: '1111',
        img: require('../../../assets/images/user.jpg')
    }
]