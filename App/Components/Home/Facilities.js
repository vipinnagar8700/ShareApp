import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Facilities = () => {
    const navigation = useNavigation();

    const Categorieslist = [
        {
            id: "1",
            name: "Medicines",
            image: "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_medicines.png",
            link: "Medicines",
        },
        {
            id: "2",
            name: "Lab Tests",
            image: "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png"
        },
        {
            id: "3",
            name: "Surgeries",
            image: "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png"
        },


    ]

    const handleFacilityPress = (link) => {
        // You can add logic here based on the link value
        if (link === 'Medicines') {
            navigation.navigate('Pharmacy');
        }
        // Add other conditions for different links
    };
    return (
        <View style={{ marginTop: 15, padding: 10 }}>

            <FlatList style={{ marginTop: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}
                data={Categorieslist}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => handleFacilityPress(item.link)}>

                        <View style={{ alignItems: 'center', marginHorizontal: 5 }}>
                            <View style={{ backgroundColor: Colors.MAIN, padding: 2, borderRadius: 12 }}>
                                <Image
                                    source={{ uri: item.image }}
                                    style={{ width: 102, height: 90, borderRadius: 12 }}  // Adjust the width and height as needed
                                />
                                <View style={{ padding: 3 }}>

                                    <Text style={{ fontFamily: "appfont-medium", fontSize: 18 }}>{item.name}</Text>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                )}
            />

        </View>
    )
}

export default Facilities

const styles = StyleSheet.create({})