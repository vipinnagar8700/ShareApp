import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Colors from '../../assets/Shared/Colors';
import { useNavigation } from '@react-navigation/native';


const MainHome = () => {
    const navigation = useNavigation();
    const handleRegisterPress = () => {
        // Add your registration logic here
        navigation.navigate('Register');
    };
    const handleLoginPress = () => {
        // Add your registration logic here
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Life Care Solution</Text>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.button} onPress={handleRegisterPress}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    mainText: {
        fontSize: 24,
        marginBottom: 20,
        color: Colors.white,
        fontFamily: 'appfont-bold',
    },
    button: {
        width: '100%',
        backgroundColor: 'transparent',
        borderColor: '#3498db',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'appfont-medium',
    },
});

export default MainHome;
