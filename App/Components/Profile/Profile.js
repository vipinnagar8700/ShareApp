import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../../Screens/Home';
import SplashScreen from '../../Screens/SplashScreen';
import Personal from './Personal';
import Medical from './Medical';
import LifeStyle from './LifeStyle';
const Tab = createMaterialTopTabNavigator();
import { Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { Ionicons, Feather, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../assets/Shared/Colors';



const Profile = () => {

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity onPress={goBack}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Profile</Text>
                <Text style={[styles.headerText, { fontSize: 14 }]}>
                </Text>
            </View>
            <Tab.Navigator>
                <Tab.Screen name="Personal" component={Personal} />
                <Tab.Screen name="Medical" component={Medical} />
                <Tab.Screen name="LifeStyle" component={LifeStyle} />
            </Tab.Navigator>
        </>

    )
}

export default Profile


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

});


