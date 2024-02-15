import { StyleSheet, Text, View, Dimensions, FlatList, Image } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'
import { AntDesign } from '@expo/vector-icons';

const Community = () => {

    const sliderList = [
        {
            id: 1,
            name: 'slider1',
            imageUrl: "https://img.freepik.com/free-photo/doctor-is-going-examine-his-patient-using-his-stethoscope-sitting-people_1150-6561.jpg?w=1060&t=st=1700298786~exp=1700299386~hmac=fbe5514eee063a68fcaa9b554d36a0c0988d24f80e47dd5925466afa809d993e"

        },
        {
            id: 2,
            name: 'slider2',
            imageUrl: "https://img.freepik.com/free-photo/doctor-patient_1421-64.jpg?w=1060&t=st=1700298808~exp=1700299408~hmac=35ccc4a1e742d71a709dcdea9e897f76487231203619b85283c81f6da41d7b42"

        }
        ,
        {
            id: 3,
            name: 'slider3',
            imageUrl: "https://img.freepik.com/free-photo/medical-banner-with-doctor-holding-stethoscope_23-2149611240.jpg?w=1380&t=st=1700298909~exp=1700299509~hmac=3ad878ac8b8ca85c97fa6f88c3e30017627348713fd86be9dd540e82b74018ee"

        }
        ,
        {
            id: 4,
            name: 'slider4',
            imageUrl: "https://img.freepik.com/free-photo/flat-lay-health-still-life-arrangement-with-copy-space_23-2148854063.jpg?w=1380&t=st=1700298864~exp=1700299464~hmac=8d07d8bd097f7562956a78780ab3b7aa84403370e1552664cb7bbdb4e43d8e53"

        }
    ]



    return (
        <View style={{
            marginTop: 25, padding: 10,
            paddingBottom: 25,
        }}>

            <View style={{ padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-start', alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}>Our community of doctors and patients drive us to create technologies for better and affordable healthcare</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.column}>
                    <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}>
                        <AntDesign name="user" size={30} color="black" />
                    </Text>
                    <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}>
                        Our Users
                    </Text>
                    <Text style={{ fontSize: 22, fontFamily: 'appfont-bold' }}>
                        30 Crores
                    </Text>
                </View>
                <View style={styles.column}>
                    <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}>
                        <AntDesign name="user" size={30} color="black" />
                    </Text>
                    <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}>
                        Our Doctors
                    </Text>
                    <Text style={{ fontSize: 22, fontFamily: 'appfont-bold' }}>
                        1 Lakh Crores
                    </Text></View>

            </View>
            <View style={styles.container}>
                <View style={styles.column}>
                    <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}>
                        <AntDesign name="user" size={30} color="black" />
                    </Text>
                    <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}>
                        Our Hospitals
                    </Text>
                    <Text style={{ fontSize: 22, fontFamily: 'appfont-bold' }}>
                        1 Lakh
                    </Text>
                </View>
                <View style={styles.column}>
                    <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}>
                        <AntDesign name="user" size={30} color="black" />
                    </Text>
                    <Text style={{ fontSize: 18, fontFamily: 'appfont-medium' }}>
                        Our Patient Stories
                    </Text>
                    <Text style={{ fontSize: 22, fontFamily: 'appfont-bold' }}>
                        1 Lakh Crores
                    </Text></View>

            </View>
        </View>
    )
}



export default Community


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Arrange children in a row
        justifyContent: 'space-between', // Space the children evenly along the main axis (horizontally)
        paddingHorizontal: 10, // Add padding for better spacing
    },
    column: {
        width: '48%', // Set the width to 48% to allow for some spacing
        height: 100, // Set the height or adjust as needed
    },
});


