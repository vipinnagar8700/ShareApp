// CustomDrawer.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../assets/Shared/Colors';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const CustomDrawer = ({ onClose }) => {
    const handleItemClick = (item) => {
        // Handle item click
        console.log(`Clicked on ${item}`);
        onClose(); // Close the drawer
    };
    const navigation = useNavigation();
    const Logout = () => {
        // Add your registration logic here
        navigation.navigate('Login'); // R
    };

    return (
        <View style={styles.drawer}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
            <ScrollView>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 5 }}>
                    <Image source={require('../../assets/images/user1.jpg')} style={{ width: 55, height: 55, borderRadius: 99 }} />
                    <View>
                        <Text style={{ fontSize: 18, fontFamily: 'appfont-medium', marginTop: 0, lineHeight: 29 }}>Vipin Nagar</Text>
                        <Text style={{ fontSize: 16, fontFamily: 'appfont-medium', color: Colors.PRIMARY, marginTop: 0, lineHeight: 18 }}>View and edit profile</Text>
                        <Text style={{ fontSize: 13, fontFamily: 'appfont-light', marginTop: 0, lineHeight: 18 }}>27 % completed</Text>

                    </View>
                    <Text style={{ fontSize: 13, fontFamily: 'appfont-light', color: Colors.PRIMARY, }}>  <AntDesign name="right" size={24} color="black" /> </Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 5, marginVertical: 10 }}>
                    <Text style={{ fontSize: 13, fontFamily: 'appfont-light', color: Colors.PRIMARY, }}>  <EvilIcons name="calendar" size={34} color="#2C3273" /> </Text>

                    <Text style={{ fontSize: 18, fontFamily: 'appfont-medium', marginTop: 0, lineHeight: 29 }}>Appointment</Text>

                    <Text style={{ fontSize: 13, fontFamily: 'appfont-light', color: Colors.PRIMARY, }}> <AntDesign name="right" size={20} color="black" /></Text>

                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 5, marginVertical: 10 }}>
                    <Text style={{ fontSize: 13, fontFamily: 'appfont-light', color: Colors.PRIMARY, }}>  <Entypo name="lab-flask" size={24} color="black" />
                    </Text>

                    <Text style={{ fontSize: 18, fontFamily: 'appfont-medium', marginTop: 0, lineHeight: 29 }}>Test Bookings</Text>

                    <Text style={{ fontSize: 13, fontFamily: 'appfont-light', color: Colors.PRIMARY, }}> <AntDesign name="right" size={20} color="black" /></Text>

                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 5, marginVertical: 10 }}>
                    <Text style={{ fontSize: 13, fontFamily: 'appfont-light', color: Colors.PRIMARY, }}>  <EvilIcons name="calendar" size={34} color="#2C3273" /> </Text>

                    <Text style={{ fontSize: 18, fontFamily: 'appfont-medium', marginTop: 0, lineHeight: 29 }}>Orders</Text>

                    <Text style={{ fontSize: 13, fontFamily: 'appfont-light', color: Colors.PRIMARY, }}> <AntDesign name="right" size={20} color="black" /></Text>


                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 5, marginVertical: 10 }}>
                    <Text style={{ fontSize: 13, fontFamily: 'appfont-light', color: Colors.PRIMARY, }}> <AntDesign name="logout" size={24} color="black" /> </Text>
                    <TouchableOpacity onPress={Logout}>
                        <Text style={{ fontSize: 18, fontFamily: 'appfont-medium', marginTop: 0, lineHeight: 29 }}>Logout</Text>
                    </TouchableOpacity>


                    <Text style={{ fontSize: 13, fontFamily: 'appfont-light', color: Colors.PRIMARY, }}> <AntDesign name="right" size={20} color="black" /></Text>


                </View>


                {/* Add more items as needed */}
                {/* ... */}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    drawer: {
        backgroundColor: '#fff',
        padding: 16,
        width: 250,
        height: '2000%',
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 1,
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    drawerItem: {
        marginBottom: 10,
    },
});

export default CustomDrawer;
